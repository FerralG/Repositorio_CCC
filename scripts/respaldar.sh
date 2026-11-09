#!/usr/bin/env bash
# =====================================================================
# Respaldo nocturno - Inmobiliaria Vives Lara
# Se instala en el VPS como /root/backups/respaldar.sh y corre por cron.
#
# Qué respalda (todo en /root/backups):
#   db/       volcado completo de la base de datos de Neon      (14 días)
#   uploads/  fotos subidas desde el panel, instantáneas diarias (7 días)
#   config/   archivos .env, proxy (NPM + certificados), n8n, pm2, firewall (14 días)
#
# No contiene contraseñas: la URL de la base se lee del .env en cada ejecución.
# =====================================================================
set -uo pipefail

RAIZ=/root/backups
APP=/var/www/vives-lara-admin
BACKEND=/var/www/backend/paginawebvl-backend
HOY=$(date +%Y-%m-%d)
AHORA=$(date +%Y-%m-%d_%H%M)
errores=0

mkdir -p "$RAIZ"/db "$RAIZ"/uploads "$RAIZ"/config "$RAIZ"/logs
chmod 700 "$RAIZ"
umask 077

log() { echo "[$(date '+%F %T')] $*"; }
falla() { log "ERROR: $*"; errores=$((errores + 1)); }

log "=== Inicio del respaldo ==="

# ---------- 1) Base de datos (Neon, PostgreSQL 17) ----------
url=$(grep '^DATABASE_URL=' "$APP/.env" | cut -d= -f2-)
destino_db="$RAIZ/db/neon-$AHORA.sql.gz"
if [ -z "$url" ]; then
  falla "no se encontró DATABASE_URL en $APP/.env"
elif docker run --rm postgres:17-alpine pg_dump --no-owner --no-privileges "$url" | gzip > "$destino_db.tmp"; then
  # el volcado termina con esta línea si salió completo
  if gzip -t "$destino_db.tmp" 2>/dev/null && zcat "$destino_db.tmp" | tail -n 5 | grep -q "PostgreSQL database dump complete"; then
    mv "$destino_db.tmp" "$destino_db"
    log "Base de datos respaldada: $(basename "$destino_db") ($(du -h "$destino_db" | cut -f1))"
  else
    rm -f "$destino_db.tmp"
    falla "el volcado de la base de datos salió incompleto"
  fi
else
  rm -f "$destino_db.tmp"
  falla "pg_dump falló"
fi
find "$RAIZ/db" -name 'neon-*.sql.gz' -mtime +14 -delete

# ---------- 2) Fotos: instantáneas incrementales (los archivos iguales no ocupan espacio extra) ----------
if [ -d "$APP/public/uploads" ]; then
  previo=$(ls -1d "$RAIZ"/uploads/*/ 2>/dev/null | grep -v "/$HOY/" | tail -n 1 || true)
  if rsync -a ${previo:+--link-dest="$previo"} "$APP/public/uploads/" "$RAIZ/uploads/$HOY/"; then
    log "Fotos respaldadas: $(ls "$RAIZ/uploads/$HOY" | wc -l) archivos"
  else
    falla "rsync de las fotos falló"
  fi
  # conserva las 7 instantáneas más recientes
  ls -1d "$RAIZ"/uploads/*/ 2>/dev/null | head -n -7 | xargs -r rm -rf
else
  falla "no existe $APP/public/uploads"
fi

# ---------- 3) Configuración ----------
archivos=(
  "$APP/.env"
  "$BACKEND/.env"
  /root/n8n/npm_data
  /root/n8n/letsencrypt
  /root/n8n/n8n_data
  /root/n8n/docker-compose.yml
  /root/.pm2/dump.pm2
  /etc/ufw/user.rules
  /etc/ufw/user6.rules
)
existentes=()
for f in "${archivos[@]}"; do [ -e "$f" ] && existentes+=("${f#/}"); done
destino_cfg="$RAIZ/config/config-$AHORA.tar.gz"
if tar czf "$destino_cfg" --ignore-failed-read -C / "${existentes[@]}" 2>/dev/null; then
  log "Configuración respaldada: $(basename "$destino_cfg") ($(du -h "$destino_cfg" | cut -f1))"
else
  # tar devuelve 1 si un archivo cambió mientras se leía; el archivo sigue siendo válido
  if gzip -t "$destino_cfg" 2>/dev/null; then log "Configuración respaldada (un archivo cambió durante la copia)"; else falla "tar de la configuración falló"; fi
fi
find "$RAIZ/config" -name 'config-*.tar.gz' -mtime +14 -delete

# ---------- Resultado ----------
if [ "$errores" -eq 0 ]; then
  echo "OK $(date '+%F %T')" > "$RAIZ/logs/ultimo-resultado.txt"
  log "=== Respaldo terminado sin errores ==="
else
  echo "CON ERRORES ($errores) $(date '+%F %T')" > "$RAIZ/logs/ultimo-resultado.txt"
  log "=== Respaldo terminado con $errores error(es) ==="
fi

# el registro no crece sin límite
tail -n 600 "$RAIZ/logs/respaldo.log" > "$RAIZ/logs/respaldo.log.tmp" 2>/dev/null && mv "$RAIZ/logs/respaldo.log.tmp" "$RAIZ/logs/respaldo.log"
exit "$errores"
