require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const pool = require("./db");

const app = express();

const CORREO_REGEX = /^[^\s@]+@[^\s@]+\.com$/;

/* =========================
   BITÁCORA
========================= */
async function registrarBitacora({ usuario_id, usuario_nombre, accion, modulo, descripcion, ip }) {
  try {
    await pool.query(
      `INSERT INTO bitacora (usuario_id, usuario_nombre, accion, modulo, descripcion, ip)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [usuario_id, usuario_nombre, accion, modulo, descripcion, ip]
    );
  } catch (_) { /* silencioso */ }
}

/* =========================
   MIDDLEWARES INICIALES
========================= */
app.use(cors({
  origin: ['http://localhost:3000', 'https://viveslarabienesraices.com', 'https://mx.viveslarabienesraices.com']
}));
app.use(express.json());

/* =========================
   SERVIR ARCHIVOS ESTÁTICOS Y HTML
========================= */
// 1. Carpetas de recursos globales
app.use("/js", express.static(path.join(__dirname, "js")));
app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/imagenes", express.static(path.join(__dirname, "imagenes")));
app.use("/public", express.static(path.join(__dirname, "public")));

// 2. Recursos específicos del subdirectorio PagVL
app.use("/images", express.static(path.join(__dirname, "PagVL", "PagVL", "images")));
app.use('/PagVL', express.static(path.join(__dirname, 'PagVL/PagVL')));

// 3. Rutas específicas para páginas HTML individuales
app.get('/PagVL/index.html', (req, res) => res.sendFile(path.join(__dirname, 'PagVL/PagVL/index.html')));
app.get('/PagVL/propiedades.html', (req, res) => res.sendFile(path.join(__dirname, 'PagVL/PagVL/propiedades.html')));
app.get('/PagVL/propiedad-detalle.html', (req, res) => res.sendFile(path.join(__dirname, 'PagVL/PagVL/propiedad-detalle.html')));
app.get('/PagVL/privacidad.html', (req, res) => res.sendFile(path.join(__dirname, 'PagVL/PagVL/privacidad.html')));
app.get("/propiedad-detalle.html", (req, res) => res.sendFile(path.join(__dirname, "propiedad-detalle.html")));

// 4. Ruta para el Panel de Administración de la Inmobiliaria
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'public/admin-login.html')));

// 5. RUTA RAÍZ PRINCIPAL: Muestra el index de la inmobiliaria por defecto
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'PagVL', 'PagVL', 'index.html'));
});

/* =========================
   CONFIGURACIÓN DE MULTER
========================= */
const uploadsDir = path.join(__dirname, "public", "uploads");

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, uniqueName);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Solo se permiten imágenes"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024,
    files: 30
  }
});

/* =========================
   RUTAS DE LA API (TEST Y LOGIN)
========================= */
app.get("/api/test-db", async (req, res) => {
  try {
    const resultado = await pool.query("SELECT NOW()");
    res.json({
      mensaje: "Conexión a Neon correcta",
      fecha: resultado.rows[0]
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error al consultar la base de datos"
    });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { usuario, password } = req.body;

    if (!usuario || !password) {
      return res.status(400).json({
        error: "Usuario y contraseña son obligatorios"
      });
    }

    const resultado = await pool.query(
      "SELECT * FROM usuarios WHERE usuario = $1 AND activo = TRUE",
      [usuario]
    );

    if (resultado.rows.length === 0) {
      return res.status(401).json({
        error: "Usuario no encontrado o inactivo"
      });
    }

    const user = resultado.rows[0];
    const passwordCorrecta = await bcrypt.compare(password, user.password_hash);

    if (!passwordCorrecta) {
      return res.status(401).json({
        error: "Contraseña incorrecta"
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        usuario: user.usuario,
        rol: user.rol
      },
      process.env.JWT_SECRET,
      { expiresIn: "8h" }
    );

    registrarBitacora({
      usuario_id: user.id,
      usuario_nombre: user.nombre_completo,
      accion: "LOGIN",
      modulo: "AUTH",
      descripcion: "Inicio de sesión: " + user.usuario,
      ip: req.ip
    });

    res.json({
      mensaje: "Login correcto",
      token,
      usuario: {
        id: user.id,
        nombre_completo: user.nombre_completo,
        usuario: user.usuario,
        correo: user.correo,
        rol: user.rol
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error al iniciar sesión"
    });
  }
});

/* =========================
   MIDDLEWARES DE PROTECCIÓN
========================= */
function verificarTokenOpcional(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) { next(); return; }
  const token = authHeader.split(" ")[1];
  if (!token) { next(); return; }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
  } catch (e) {}
  next();
}

/*****************************************************************************
 * Nota: El resto de tus rutas de API del sistema permanecen exactamente igual
 *****************************************************************************/
function verificarToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "Token no proporcionado" });
  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Formato de token inválido" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token inválido o expirado" });
  }
}

function permitirRoles(...rolesPermitidos) {
  return (req, res, next) => {
    if (!req.usuario || !rolesPermitidos.includes(req.usuario.rol)) {
      return res.status(403).json({ error: "Acceso denegado" });
    }
    next();
  };
}

app.get("/api/auth/verify", verificarToken, async (req, res) => {
  try {
    const resultado = await pool.query("SELECT activo FROM usuarios WHERE id = $1", [req.usuario.id]);
    if (resultado.rows.length === 0 || !resultado.rows[0].activo) {
      return res.status(401).json({ error: "Usuario no encontrado" });
    }
    res.json({ valido: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error del servidor" });
  }
});

const PWD_REGEX = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+\[\]{};':"\\|,.<>/?`~]).{8,}$/;

app.put("/api/auth/cambiar-password", verificarToken, async (req, res) => {
  try {
    const { password_actual, nueva_password } = req.body;
    if (!password_actual || !nueva_password) return res.status(400).json({ error: "Todos los campos son obligatorios" });
    const resultado = await pool.query("SELECT password_hash, nombre_completo FROM usuarios WHERE id = $1", [req.usuario.id]);
    if (resultado.rows.length === 0) return res.status(404).json({ error: "Usuario no encontrado" });
    const coincide = await bcrypt.compare(password_actual, resultado.rows[0].password_hash);
    if (!coincide) return res.status(400).json({ error: "La contraseña actual es incorrecta" });
    if (!PWD_REGEX.test(nueva_password)) return res.status(400).json({ error: "La nueva contraseña no cumple los requisitos de seguridad" });
    const nuevo_hash = await bcrypt.hash(nueva_password, 10);
    await pool.query("UPDATE usuarios SET password_hash = $1 WHERE id = $2", [nuevo_hash, req.usuario.id]);
    registrarBitacora({
      usuario_id: req.usuario.id,
      usuario_nombre: req.usuario.usuario,
      accion: "CAMBIO_PASSWORD",
      modulo: "AUTH",
      descripcion: "El usuario cambió su propia contraseña",
      ip: req.ip
    });
    res.json({ mensaje: "Contraseña actualizada correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al cambiar la contraseña" });
  }
});

app.get("/api/usuarios", verificarToken, permitirRoles("admin"), async (req, res) => {
  try {
    const resultado = await pool.query(`SELECT id, nombre_completo, usuario, correo, rol, activo, creado_en FROM usuarios ORDER BY creado_en DESC`);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
});

app.get("/api/usuarios/admins-count", verificarToken, async (req, res) => {
  try {
    const resultado = await pool.query("SELECT COUNT(*)::int AS count FROM usuarios WHERE rol = 'admin'");
    res.json({ count: resultado.rows[0].count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener conteo de administradores" });
  }
});

app.post("/api/usuarios", verificarToken, permitirRoles("admin"), async (req, res) => {
  try {
    const { nombre_completo, usuario, correo, password, rol } = req.body;
    if (!nombre_completo || !usuario || !correo || !password || !rol) return res.status(400).json({ error: "Todos los campos son obligatorios" });
    if (!["admin", "editor"].includes(rol)) return res.status(400).json({ error: "Rol no válido" });
    if (!CORREO_REGEX.test(correo)) return res.status(400).json({ error: "Correo electrónico no válido" });
    const existe = await pool.query("SELECT id FROM usuarios WHERE usuario = $1 OR correo = $2", [usuario, correo]);
    if (existe.rows.length > 0) return res.status(409).json({ error: "El usuario o correo ya existe" });
    const password_hash = await bcrypt.hash(password, 10);
    const nuevoUsuario = await pool.query(
      `INSERT INTO usuarios (nombre_completo, usuario, correo, password_hash, rol) VALUES ($1, $2, $3, $4, $5) RETURNING id, nombre_completo, usuario, correo, rol, activo, creado_en`,
      [nombre_completo, usuario, correo, password_hash, rol]
    );
    registrarBitacora({ usuario_id: req.usuario.id, usuario_nombre: req.usuario.usuario, accion: "CREAR", modulo: "USUARIOS", descripcion: nuevoUsuario.rows[0].nombre_completo, ip: req.ip });
    res.status(201).json({ mensaje: "Usuario creado correctamente", usuario: nuevoUsuario.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear usuario" });
  }
});

app.put("/api/usuarios/:id", verificarToken, permitirRoles("admin"), async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre_completo, usuario, correo, password, rol } = req.body;
    if (!nombre_completo || !usuario || !correo || !rol) return res.status(400).json({ error: "Campos obligatorios faltantes" });
    if (!["admin", "editor"].includes(rol)) return res.status(400).json({ error: "Rol no válido" });
    if (!CORREO_REGEX.test(correo)) return res.status(400).json({ error: "Correo no válido" });
    const conflicto = await pool.query("SELECT id FROM usuarios WHERE (usuario = $1 OR correo = $2) AND id != $3", [usuario, correo, id]);
    if (conflicto.rows.length > 0) return res.status(409).json({ error: "El usuario o correo ya está en uso" });

    let resultado;
    if (password && password.trim() !== "") {
      const password_hash = await bcrypt.hash(password, 10);
      resultado = await pool.query(`UPDATE usuarios SET nombre_completo = $1, usuario = $2, correo = $3, rol = $4, password_hash = $5 WHERE id = $6 RETURNING *`, [nombre_completo, usuario, correo, rol, password_hash, id]);
    } else {
      resultado = await pool.query(`UPDATE usuarios SET nombre_completo = $1, usuario = $2, correo = $3, rol = $4 WHERE id = $5 RETURNING *`, [nombre_completo, usuario, correo, rol, id]);
    }
    registrarBitacora({ usuario_id: req.usuario.id, usuario_nombre: req.usuario.usuario, accion: "EDITAR", modulo: "USUARIOS", descripcion: resultado.rows[0].nombre_completo, ip: req.ip });
    res.json({ mensaje: "Usuario actualizado", usuario: resultado.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar" });
  }
});

app.delete("/api/usuarios/:id", verificarToken, permitirRoles("admin"), async (req, res) => {
  try {
    const { id } = req.params;
    const existe = await pool.query("SELECT id, nombre_completo, rol FROM usuarios WHERE id = $1", [id]);
    if (existe.rows.length === 0) return res.status(404).json({ error: "Usuario no encontrado" });
    if (existe.rows[0].rol === "admin") {
      const countResult = await pool.query("SELECT COUNT(*)::int AS count FROM usuarios WHERE rol = 'admin'");
      if (countResult.rows[0].count === 1) return res.status(400).json({ error: "No se puede eliminar al único administrador" });
    }
    await pool.query("DELETE FROM usuarios WHERE id = $1", [id]);
    registrarBitacora({ usuario_id: req.usuario.id, usuario_nombre: req.usuario.usuario, accion: "ELIMINAR", modulo: "USUARIOS", descripcion: existe.rows[0].nombre_completo, ip: req.ip });
    res.json({ mensaje: "Usuario eliminado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar" });
  }
});

app.get("/api/propiedades", verificarToken, permitirRoles("admin", "editor"), async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT p.*, (SELECT pm.url_archivo FROM propiedad_multimedia pm WHERE pm.propiedad_id = p.id ORDER BY pm.principal DESC, pm.orden ASC LIMIT 1) AS imagen_principal
      FROM propiedades p ORDER BY p.creado_en DESC
    `);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener propiedades" });
  }
});

app.get("/api/propiedades/:id", verificarToken, permitirRoles("admin", "editor"), async (req, res) => {
  try {
    const { id } = req.params;
    const propiedad = await pool.query("SELECT * FROM propiedades WHERE id = $1", [id]);
    if (propiedad.rows.length === 0) return res.status(404).json({ error: "Propiedad no encontrada" });
    const imagenes = await pool.query("SELECT * FROM propiedad_multimedia WHERE propiedad_id = $1 ORDER BY principal DESC, orden ASC", [id]);
    res.json({ ...propiedad.rows[0], imagenes: imagenes.rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error del servidor" });
  }
});

app.post("/api/propiedades", verificarToken, permitirRoles("admin", "editor"), async (req, res) => {
  try {
    const { propiedad, tipo_operacion, tipo_inmueble, precio, direccion, coordenadas } = req.body;
    if (!propiedad || !tipo_operacion || !tipo_inmueble || precio == null || !direccion) return res.status(400).json({ error: "Faltan campos obligatorios" });
    const resultado = await pool.query(
      `INSERT INTO propiedades (propiedad, tipo_operacion, tipo_inmueble, precio, direccion, coordenadas, estado_publicacion) VALUES ($1, $2, $3, $4, $5, $6, 'borrador') RETURNING *`,
      [propiedad, tipo_operacion, tipo_inmueble, precio, direccion, coordenadas || null]
    );
    registrarBitacora({ usuario_id: req.usuario.id, usuario_nombre: req.usuario.usuario, accion: "CREAR", modulo: "PROPIEDADES", descripcion: resultado.rows[0].propiedad, ip: req.ip });
    res.status(201).json({ mensaje: "Creada", propiedad: resultado.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
});

app.post("/api/propiedades/:id/imagenes", verificarToken, permitirRoles("admin", "editor"), upload.array("imagenes", 30), async (req, res) => {
  try {
    const { id } = req.params;
    if (!req.files || req.files.length === 0) return res.status(400).json({ error: "No se enviaron imágenes" });
    const archivosGuardados = [];
    for (let i = 0; i < req.files.length; i++) {
      const url = `/uploads/${req.files[i].filename}`;
      const r = await pool.query(`INSERT INTO propiedad_multimedia (propiedad_id, url_archivo, tipo_archivo, principal, orden) VALUES ($1, $2, $3, $4, $5) RETURNING *`, [id, url, "imagen", i === 0, i + 1]);
      archivosGuardados.push(r.rows[0]);
    }
    res.status(201).json({ archivos: archivosGuardados });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
});

app.delete("/api/propiedades/:id", verificarToken, permitirRoles("admin", "editor"), async (req, res) => {
  try {
    const { id } = req.params;
    const existe = await pool.query("SELECT propiedad FROM propiedades WHERE id = $1", [id]);
    if (existe.rows.length === 0) return res.status(404).json({ error: "No encontrada" });
    await pool.query("DELETE FROM propiedades WHERE id = $1", [id]);
    res.json({ mensaje: "Eliminada correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
});

app.get("/api/public/propiedades", async (req, res) => {
  try {
    const resultado = await pool.query(`SELECT p.*, (SELECT pm.url_archivo FROM propiedad_multimedia pm WHERE pm.propiedad_id = p.id ORDER BY pm.principal DESC LIMIT 1) AS imagen_principal FROM propiedades p WHERE p.estado_publicacion = 'publicada' ORDER BY p.creado_en DESC`);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
});

app.get("/api/preferencias", verificarToken, async (req, res) => {
  try {
    const resultado = await pool.query("SELECT modo_oscuro, idioma FROM preferencias_usuario WHERE usuario_id = $1", [req.usuario.id]);
    res.json(resultado.rows[0] || { modo_oscuro: false, idioma: "es" });
  } catch (error) {
    res.status(500).json({ error: "Error" });
  }
});

app.get("/api/bitacora", verificarToken, permitirRoles("admin"), async (req, res) => {
  try {
    const resultado = await pool.query(`SELECT * FROM bitacora ORDER BY creado_en DESC LIMIT 200`);
    res.json(resultado.rows);
  } catch (error) {
    res.status(500).json({ error: "Error" });
  }
});

/* =========================
   CONTROL DE APERTURA DEL PUERTO
========================= */
// Forzamos a que corra estrictamente en el puerto 3002 de tu VPS 
// y escuche en 0.0.0.0 para que Nginx Proxy Manager pueda entrar sin trabas.
const FINAL_PORT = 3002;

app.listen(FINAL_PORT, "0.0.0.0", () => {
  console.log(`Servidor de Producción listo y escuchando en el puerto ${FINAL_PORT}`);
});