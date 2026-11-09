# Respaldos del VPS

Un script (`scripts/respaldar.sh`) corre **cada noche a las 03:30** (hora del servidor) y guarda todo en
`/root/backups`. Queda instalado en el VPS como `/root/backups/respaldar.sh` y lo ejecuta `cron`.

## Qué se respalda y cuánto se conserva

| Carpeta | Contenido | Historial |
|---|---|---|
| `db/neon-FECHA.sql.gz` | Volcado completo de la base de datos de Neon (PostgreSQL 17) | 14 días |
| `uploads/FECHA/` | Fotos subidas desde el panel. Instantáneas diarias que comparten los archivos iguales (ocupan poco espacio extra) | 7 días |
| `config/config-FECHA.tar.gz` | Archivos `.env` (sitio y `backend`), proxy (Nginx Proxy Manager: dominios y certificados SSL), datos de n8n, lista de procesos de pm2 y reglas del firewall | 14 días |

Las carpetas `dms-*.tar.gz` y `n8n/` que también viven en `/root/backups` **no** las crea este script
(son respaldos previos a despliegues de otros proyectos).

**No se respalda:** la base de datos interna de n8n (`/root/n8n/db`), ni las bases de Chatwoot,
presupuesto y postgres-memory. Cada una necesita su propio respaldo.

## Cómo comprobar que funciona

```bash
ssh vives-lara-vps "cat /root/backups/logs/ultimo-resultado.txt; ls -lh /root/backups/db | tail -3"
```

Debe decir `OK` con la fecha de anoche. Si dice `CON ERRORES`, el detalle está en
`/root/backups/logs/respaldo.log`. Para correrlo a mano: `ssh vives-lara-vps "/root/backups/respaldar.sh"`.

## Cómo restaurar

**Base de datos.** El volcado no borra nada: se restaura en una base **vacía** (por ejemplo, una rama o
proyecto nuevo de Neon), nunca encima de la de producción sin pensarlo.

```bash
zcat /root/backups/db/neon-FECHA.sql.gz | docker run --rm -i postgres:17-alpine psql "URL_DE_LA_BASE_NUEVA"
```

Después se cambia `DATABASE_URL` en el `.env` del sitio y se reinicia `vives-lara-panel`.

**Fotos.**

```bash
rsync -a /root/backups/uploads/FECHA/ /var/www/vives-lara-admin/public/uploads/
```

**Configuración (`.env`, proxy, certificados).** Se extrae en una carpeta temporal y se copia solo lo necesario:

```bash
mkdir /tmp/restaurar && tar xzf /root/backups/config/config-FECHA.tar.gz -C /tmp/restaurar
ls /tmp/restaurar/var/www /tmp/restaurar/root/n8n
```

## Limitación importante

Estos respaldos viven **en el mismo servidor**. Protegen contra errores (un borrado, una actualización
que sale mal), pero no si el VPS se pierde por completo. Para eso hace falta una copia fuera del servidor:
los respaldos automáticos del proveedor del VPS, o descargar `/root/backups/db` y `/root/backups/config`
a otro lugar con regularidad.

## Prueba de restauración

El 9 de noviembre de 2026 se restauró el volcado en una base temporal: 0 errores y los mismos conteos
que producción (73 propiedades, 678 registros de fotos, 7 usuarios, 446 registros de bitácora).
Conviene repetir esta prueba cada cierto tiempo.
