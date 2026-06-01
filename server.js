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

app.use(cors({
  origin: ['http://localhost:3000', 'https://viveslarabienesraices.com', 'https://mx.viveslarabienesraices.com']
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'PagVL', 'PagVL', 'index.html'));
});
app.use(express.json());
app.get('/PagVL/index.html', (req, res) => res.sendFile(path.join(__dirname, 'PagVL/PagVL/index.html')));
app.get('/PagVL/propiedades.html', (req, res) => res.sendFile(path.join(__dirname, 'PagVL/PagVL/propiedades.html')));
app.get('/PagVL/propiedad-detalle.html', (req, res) => res.sendFile(path.join(__dirname, 'PagVL/PagVL/propiedad-detalle.html')));
app.get('/PagVL/privacidad.html', (req, res) => res.sendFile(path.join(__dirname, 'PagVL/PagVL/privacidad.html')));
app.use(express.static("public"));
app.use("/imagenes", express.static(path.join(__dirname, "imagenes")));
app.get("/propiedad-detalle.html", (req, res) => res.sendFile(path.join(__dirname, "propiedad-detalle.html")));
app.use("/js", express.static(path.join(__dirname, "js")));
app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/images", express.static(path.join(__dirname, "PagVL", "PagVL", "images")));
//app.use("/images", express.static(path.join(__dirname, "imagenes")));
app.use('/PagVL', express.static(path.join(__dirname, 'PagVL/PagVL')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'PagVL/PagVL/index.html')));
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'public/admin-login.html')));


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
   RUTAS BÁSICAS
========================= */
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

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

/* =========================
   LOGIN
========================= */
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
   MIDDLEWARES
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

function verificarToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Formato de token inválido" });
  }

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
      return res.status(403).json({
        error: "Acceso denegado"
      });
    }
    next();
  };
}

/* =========================
   AUTH VERIFY
========================= */
app.get("/api/auth/verify", verificarToken, async (req, res) => {
  try {
    const resultado = await pool.query(
      "SELECT activo FROM usuarios WHERE id = $1",
      [req.usuario.id]
    );
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

/* =========================
   CAMBIAR CONTRASEÑA (propio usuario)
========================= */
app.put("/api/auth/cambiar-password", verificarToken, async (req, res) => {
  try {
    const { password_actual, nueva_password } = req.body;

    if (!password_actual || !nueva_password) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const resultado = await pool.query(
      "SELECT password_hash, nombre_completo FROM usuarios WHERE id = $1",
      [req.usuario.id]
    );
    if (resultado.rows.length === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const coincide = await bcrypt.compare(password_actual, resultado.rows[0].password_hash);
    if (!coincide) {
      return res.status(400).json({ error: "La contraseña actual es incorrecta" });
    }

    if (!PWD_REGEX.test(nueva_password)) {
      return res.status(400).json({ error: "La nueva contraseña no cumple los requisitos de seguridad" });
    }

    const nuevo_hash = await bcrypt.hash(nueva_password, 10);
    await pool.query(
      "UPDATE usuarios SET password_hash = $1 WHERE id = $2",
      [nuevo_hash, req.usuario.id]
    );

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

/* =========================
   USUARIOS
========================= */
app.get("/api/usuarios", verificarToken, permitirRoles("admin"), async (req, res) => {
  try {
    const resultado = await pool.query(
      `SELECT id, nombre_completo, usuario, correo, rol, activo, creado_en
       FROM usuarios
       ORDER BY creado_en DESC`
    );

    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
});

app.get("/api/usuarios/admins-count", verificarToken, async (req, res) => {
  try {
    const resultado = await pool.query(
      "SELECT COUNT(*)::int AS count FROM usuarios WHERE rol = 'admin'"
    );
    res.json({ count: resultado.rows[0].count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener conteo de administradores" });
  }
});

app.post("/api/usuarios", verificarToken, permitirRoles("admin"), async (req, res) => {
  try {
    const { nombre_completo, usuario, correo, password, rol } = req.body;

    if (!nombre_completo || !usuario || !correo || !password || !rol) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const rolesValidos = ["admin", "editor"];
    if (!rolesValidos.includes(rol)) {
      return res.status(400).json({ error: "Rol no válido" });
    }

    if (!CORREO_REGEX.test(correo)) {
      return res.status(400).json({ error: "Correo electrónico no válido" });
    }

    const existe = await pool.query(
      "SELECT id FROM usuarios WHERE usuario = $1 OR correo = $2",
      [usuario, correo]
    );

    if (existe.rows.length > 0) {
      return res.status(409).json({ error: "El usuario o correo ya existe" });
    }

    const password_hash = await bcrypt.hash(password, 10);

    const nuevoUsuario = await pool.query(
      `INSERT INTO usuarios (nombre_completo, usuario, correo, password_hash, rol)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, nombre_completo, usuario, correo, rol, activo, creado_en`,
      [nombre_completo, usuario, correo, password_hash, rol]
    );

    registrarBitacora({
      usuario_id: req.usuario.id,
      usuario_nombre: req.usuario.usuario,
      accion: "CREAR",
      modulo: "USUARIOS",
      descripcion: nuevoUsuario.rows[0].nombre_completo,
      ip: req.ip
    });

    res.status(201).json({
      mensaje: "Usuario creado correctamente",
      usuario: nuevoUsuario.rows[0]
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear usuario" });
  }
});

app.put("/api/usuarios/:id", verificarToken, permitirRoles("admin"), async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre_completo, usuario, correo, password, rol } = req.body;

    if (!nombre_completo || !usuario || !correo || !rol) {
      return res.status(400).json({ error: "nombre_completo, usuario, correo y rol son obligatorios" });
    }

    const rolesValidos = ["admin", "editor"];
    if (!rolesValidos.includes(rol)) {
      return res.status(400).json({ error: "Rol no válido" });
    }

    if (!CORREO_REGEX.test(correo)) {
      return res.status(400).json({ error: "Correo electrónico no válido" });
    }

    const existe = await pool.query(
      "SELECT id FROM usuarios WHERE id = $1",
      [id]
    );
    if (existe.rows.length === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const conflicto = await pool.query(
      "SELECT id FROM usuarios WHERE (usuario = $1 OR correo = $2) AND id != $3",
      [usuario, correo, id]
    );
    if (conflicto.rows.length > 0) {
      return res.status(409).json({ error: "El usuario o correo ya está en uso por otro usuario" });
    }

    let resultado;
    if (password && password.trim() !== "") {
      const password_hash = await bcrypt.hash(password, 10);
      resultado = await pool.query(
        `UPDATE usuarios
         SET nombre_completo = $1, usuario = $2, correo = $3, rol = $4, password_hash = $5
         WHERE id = $6
         RETURNING id, nombre_completo, usuario, correo, rol, activo, creado_en`,
        [nombre_completo, usuario, correo, rol, password_hash, id]
      );
    } else {
      resultado = await pool.query(
        `UPDATE usuarios
         SET nombre_completo = $1, usuario = $2, correo = $3, rol = $4
         WHERE id = $5
         RETURNING id, nombre_completo, usuario, correo, rol, activo, creado_en`,
        [nombre_completo, usuario, correo, rol, id]
      );
    }

    registrarBitacora({
      usuario_id: req.usuario.id,
      usuario_nombre: req.usuario.usuario,
      accion: "EDITAR",
      modulo: "USUARIOS",
      descripcion: resultado.rows[0].nombre_completo,
      ip: req.ip
    });

    res.json({
      mensaje: "Usuario actualizado correctamente",
      usuario: resultado.rows[0]
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar usuario" });
  }
});

app.put("/api/usuarios/:id/reset-password", verificarToken, permitirRoles("admin"), async (req, res) => {
  try {
    const { id } = req.params;
    const { nueva_password } = req.body;

    if (!nueva_password) {
      return res.status(400).json({ error: "La nueva contraseña es obligatoria" });
    }
    if (!PWD_REGEX.test(nueva_password)) {
      return res.status(400).json({ error: "La contraseña debe tener mínimo 8 caracteres, una mayúscula, un número y un carácter especial" });
    }

    const existe = await pool.query("SELECT id, nombre_completo FROM usuarios WHERE id = $1", [id]);
    if (existe.rows.length === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const password_hash = await bcrypt.hash(nueva_password, 10);
    await pool.query("UPDATE usuarios SET password_hash = $1 WHERE id = $2", [password_hash, id]);

    registrarBitacora({
      usuario_id: req.usuario.id,
      usuario_nombre: req.usuario.usuario,
      accion: "RESET_PASSWORD",
      modulo: "USUARIOS",
      descripcion: existe.rows[0].nombre_completo,
      ip: req.ip
    });

    res.json({ mensaje: "Contraseña restablecida correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al restablecer contraseña" });
  }
});

app.delete("/api/usuarios/:id", verificarToken, permitirRoles("admin"), async (req, res) => {
  try {
    const { id } = req.params;

    const existe = await pool.query(
      "SELECT id, nombre_completo, rol FROM usuarios WHERE id = $1",
      [id]
    );

    if (existe.rows.length === 0) {
      return res.status(404).json({
        error: "Usuario no encontrado"
      });
    }

    const usuarioAEliminar = existe.rows[0];

    if (usuarioAEliminar.rol === "admin") {
      const countResult = await pool.query(
        "SELECT COUNT(*)::int AS count FROM usuarios WHERE rol = 'admin'"
      );
      if (countResult.rows[0].count === 1) {
        return res.status(400).json({
          error: "No se puede eliminar el único administrador del sistema"
        });
      }
    }

    const nombreEliminado = usuarioAEliminar.nombre_completo;

    await pool.query("DELETE FROM usuarios WHERE id = $1", [id]);

    registrarBitacora({
      usuario_id: req.usuario.id,
      usuario_nombre: req.usuario.usuario,
      accion: "ELIMINAR",
      modulo: "USUARIOS",
      descripcion: nombreEliminado,
      ip: req.ip
    });

    res.json({
      mensaje: "Usuario eliminado correctamente"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error al eliminar usuario"
    });
  }
});

/* =========================
   PROPIEDADES
========================= */
app.get("/api/propiedades", verificarToken, permitirRoles("admin", "editor"), async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT
        p.id,
        p.propiedad,
        p.nivel_piso,
        p.tipo_operacion,
        p.tipo_inmueble,
        p.precio,
        p.recamaras,
        p.banos,
        p.amueblado,
        p.direccion,
        p.zona,
        p.estacionamiento,
        p.condominio,
        p.edificio,
        p.estado_conservacion,
        p.orientacion_inmueble,
        p.superficie_construccion_m2,
        p.superficie_terreno_m2,
        p.acabados,
        p.descripcion,
        p.amenidades,
        p.estado_publicacion,
        p.creado_en,
        p.actualizado_en,
        (
          SELECT pm.url_archivo
          FROM propiedad_multimedia pm
          WHERE pm.propiedad_id = p.id
          ORDER BY pm.principal DESC, pm.orden ASC, pm.creado_en ASC
          LIMIT 1
        ) AS imagen_principal
      FROM propiedades p
      ORDER BY p.creado_en DESC
    `);

    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error al obtener propiedades"
    });
  }
});

app.get("/api/propiedades/:id", verificarToken, permitirRoles("admin", "editor"), async (req, res) => {
  try {
    const { id } = req.params;

    const propiedad = await pool.query(
      `SELECT *
       FROM propiedades
       WHERE id = $1`,
      [id]
    );

    if (propiedad.rows.length === 0) {
      return res.status(404).json({
        error: "Propiedad no encontrada"
      });
    }

    const imagenes = await pool.query(
      `SELECT id, url_archivo, tipo_archivo, principal, orden, creado_en
       FROM propiedad_multimedia
       WHERE propiedad_id = $1
       ORDER BY principal DESC, orden ASC, creado_en ASC`,
      [id]
    );

    console.log("Imágenes de propiedad", id, ":", imagenes.rows.map(i => ({ id: i.id, orden: i.orden, principal: i.principal })));

    res.json({
      ...propiedad.rows[0],
      imagenes: imagenes.rows
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error al obtener la propiedad"
    });
  }
});

app.post("/api/propiedades", verificarToken, permitirRoles("admin", "editor"), async (req, res) => {
  try {
    const {
      propiedad,
      nivel_piso,
      tipo_operacion,
      tipo_inmueble,
      precio,
      recamaras,
      banos,
      amueblado,
      direccion,
      zona,
      estacionamiento,
      condominio,
      edificio,
      estado_conservacion,
      orientacion_inmueble,
      superficie_construccion_m2,
      superficie_terreno_m2,
      acabados,
      descripcion,
      amenidades,
      estado_publicacion,
      coordenadas
    } = req.body;

    if (!propiedad || !tipo_operacion || !tipo_inmueble || precio == null || !direccion) {
      return res.status(400).json({
        error: "Faltan campos obligatorios"
      });
    }

    const resultado = await pool.query(
      `INSERT INTO propiedades (
        propiedad,
        nivel_piso,
        tipo_operacion,
        tipo_inmueble,
        precio,
        recamaras,
        banos,
        amueblado,
        direccion,
        zona,
        estacionamiento,
        condominio,
        edificio,
        estado_conservacion,
        orientacion_inmueble,
        superficie_construccion_m2,
        superficie_terreno_m2,
        acabados,
        descripcion,
        amenidades,
        estado_publicacion,
        coordenadas
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
        $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22
      )
      RETURNING *`,
      [
        propiedad,
        nivel_piso || null,
        tipo_operacion,
        tipo_inmueble,
        precio,
        recamaras ?? 0,
        banos ?? 0,
        amueblado ?? false,
        direccion,
        zona || null,
        estacionamiento ?? 0,
        condominio ?? false,
        edificio ?? null,
        estado_conservacion || null,
        orientacion_inmueble || null,
        superficie_construccion_m2 ?? null,
        superficie_terreno_m2 ?? null,
        acabados || null,
        descripcion || null,
        amenidades || null,
        estado_publicacion || "borrador",
        coordenadas || null
      ]
    );

    registrarBitacora({
      usuario_id: req.usuario.id,
      usuario_nombre: req.usuario.usuario,
      accion: "CREAR",
      modulo: "PROPIEDADES",
      descripcion: resultado.rows[0].propiedad,
      ip: req.ip
    });

    res.status(201).json({
      mensaje: "Propiedad creada correctamente",
      propiedad: resultado.rows[0]
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error al crear la propiedad"
    });
  }
});

app.post(
  "/api/propiedades/:id/imagenes",
  verificarToken,
  permitirRoles("admin", "editor"),
  (req, res, next) => {
    upload.array("imagenes", 30)(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: `Error al subir imágenes: ${err.message}` });
      } else if (err) {
        return res.status(400).json({ error: err.message });
      }
      next();
    });
  },
  async (req, res) => {
    try {
      const { id } = req.params;

      const existe = await pool.query(
        "SELECT id FROM propiedades WHERE id = $1",
        [id]
      );

      if (existe.rows.length === 0) {
        return res.status(404).json({ error: "Propiedad no encontrada" });
      }

      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: "No se enviaron imágenes" });
      }

      const archivosGuardados = [];

      for (let i = 0; i < req.files.length; i++) {
        const archivo = req.files[i];
        const url = `/uploads/${archivo.filename}`;

        const resultado = await pool.query(
          `INSERT INTO propiedad_multimedia (
            propiedad_id,
            url_archivo,
            tipo_archivo,
            principal,
            orden
          ) VALUES ($1, $2, $3, $4, $5)
          RETURNING *`,
          [id, url, "imagen", i === 0, i + 1]
        );

        archivosGuardados.push(resultado.rows[0]);
      }

      registrarBitacora({
        usuario_id: req.usuario.id,
        usuario_nombre: req.usuario.usuario,
        accion: "SUBIR_IMAGENES",
        modulo: "PROPIEDADES",
        descripcion: `${req.files.length} imagen(es) en propiedad ${id}`,
        ip: req.ip
      });

      res.status(201).json({
        mensaje: "Imágenes subidas correctamente",
        archivos: archivosGuardados
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Error al subir imágenes"
      });
    }
  }
);

app.put("/api/propiedades/:id", verificarToken, permitirRoles("admin", "editor"), async (req, res) => {
  try {
    const { id } = req.params;

    const existente = await pool.query(
      "SELECT * FROM propiedades WHERE id = $1",
      [id]
    );

    if (existente.rows.length === 0) {
      return res.status(404).json({
        error: "Propiedad no encontrada"
      });
    }

    const actual = existente.rows[0];

    function numOActual(val, fallback) {
      if (val === null || val === undefined || val === "" || (typeof val === "number" && isNaN(val))) return fallback;
      const n = Number(val);
      return isNaN(n) ? fallback : n;
    }

    const datos = {
      propiedad: req.body.propiedad ?? actual.propiedad,
      nivel_piso: req.body.nivel_piso ?? actual.nivel_piso,
      tipo_operacion: req.body.tipo_operacion ?? actual.tipo_operacion,
      tipo_inmueble: req.body.tipo_inmueble ?? actual.tipo_inmueble,
      precio: numOActual(req.body.precio, actual.precio),
      recamaras: numOActual(req.body.recamaras, actual.recamaras),
      banos: numOActual(req.body.banos, actual.banos),
      amueblado: req.body.amueblado ?? actual.amueblado,
      direccion: req.body.direccion ?? actual.direccion,
      zona: req.body.zona ?? actual.zona,
      estacionamiento: numOActual(req.body.estacionamiento, actual.estacionamiento),
      condominio: req.body.condominio ?? actual.condominio,
      edificio: numOActual(req.body.edificio, actual.edificio),
      estado_conservacion: req.body.estado_conservacion ?? actual.estado_conservacion,
      orientacion_inmueble: req.body.orientacion_inmueble ?? actual.orientacion_inmueble,
      superficie_construccion_m2: numOActual(req.body.superficie_construccion_m2, actual.superficie_construccion_m2),
      superficie_terreno_m2: numOActual(req.body.superficie_terreno_m2, actual.superficie_terreno_m2),
      acabados: req.body.acabados ?? actual.acabados,
      descripcion: req.body.descripcion ?? actual.descripcion,
      amenidades: req.body.amenidades ?? actual.amenidades,
      estado_publicacion: req.body.estado_publicacion ?? actual.estado_publicacion,
      coordenadas: req.body.coordenadas !== undefined ? (req.body.coordenadas || null) : actual.coordenadas
    };

    const resultado = await pool.query(
      `UPDATE propiedades
       SET
         propiedad = $1,
         nivel_piso = $2,
         tipo_operacion = $3,
         tipo_inmueble = $4,
         precio = $5,
         recamaras = $6,
         banos = $7,
         amueblado = $8,
         direccion = $9,
         zona = $10,
         estacionamiento = $11,
         condominio = $12,
         edificio = $13,
         estado_conservacion = $14,
         orientacion_inmueble = $15,
         superficie_construccion_m2 = $16,
         superficie_terreno_m2 = $17,
         acabados = $18,
         descripcion = $19,
         amenidades = $20,
         estado_publicacion = $21,
         coordenadas = $22,
         actualizado_en = NOW()
       WHERE id = $23
       RETURNING *`,
      [
        datos.propiedad,
        datos.nivel_piso,
        datos.tipo_operacion,
        datos.tipo_inmueble,
        datos.precio,
        datos.recamaras,
        datos.banos,
        datos.amueblado,
        datos.direccion,
        datos.zona,
        datos.estacionamiento,
        datos.condominio,
        datos.edificio,
        datos.estado_conservacion,
        datos.orientacion_inmueble,
        datos.superficie_construccion_m2,
        datos.superficie_terreno_m2,
        datos.acabados,
        datos.descripcion,
        datos.amenidades,
        datos.estado_publicacion,
        datos.coordenadas,
        id
      ]
    );

    registrarBitacora({
      usuario_id: req.usuario.id,
      usuario_nombre: req.usuario.usuario,
      accion: "EDITAR",
      modulo: "PROPIEDADES",
      descripcion: resultado.rows[0].propiedad,
      ip: req.ip
    });

    res.json({
      mensaje: "Propiedad actualizada correctamente",
      propiedad: resultado.rows[0]
    });
  } catch (error) {
    console.error('Error PUT propiedad:', error.message, error.stack);
    res.status(500).json({ error: error.message });
  }
});

app.delete(
  "/api/propiedades/:id/imagenes/:imagenId",
  verificarToken,
  permitirRoles("admin", "editor"),
  async (req, res) => {
    try {
      const { id, imagenId } = req.params;
      const resultado = await pool.query(
        "SELECT * FROM propiedad_multimedia WHERE id = $1 AND propiedad_id = $2",
        [imagenId, id]
      );
      if (resultado.rows.length === 0) {
        return res.status(404).json({ error: "Imagen no encontrada" });
      }
      const imagen = resultado.rows[0];
      const rutaFisica = path.join(__dirname, "public", imagen.url_archivo.replace(/^\//, ""));
      if (fs.existsSync(rutaFisica)) fs.unlinkSync(rutaFisica);
      await pool.query("DELETE FROM propiedad_multimedia WHERE id = $1", [imagenId]);

      registrarBitacora({
        usuario_id: req.usuario.id,
        usuario_nombre: req.usuario.usuario,
        accion: "ELIMINAR_IMAGEN",
        modulo: "PROPIEDADES",
        descripcion: imagen.url_archivo,
        ip: req.ip
      });

      res.json({ mensaje: "Imagen eliminada correctamente" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al eliminar la imagen" });
    }
  }
);

app.patch(
  "/api/propiedades/:id/imagenes/orden",
  verificarToken,
  permitirRoles("admin", "editor"),
  async (req, res) => {
    try {
      const { id } = req.params;
      const { imagenes } = req.body;

      if (!Array.isArray(imagenes) || imagenes.length === 0) {
        return res.status(400).json({ error: "Se requiere un array de imágenes" });
      }

      console.log("Actualizando orden:", imagenes);

      for (const img of imagenes) {
        const r = await pool.query(
          "UPDATE propiedad_multimedia SET orden = $1, principal = $2 WHERE id = $3 AND propiedad_id = $4 RETURNING id, orden, principal",
          [img.orden, img.principal, img.id, id]
        );
        console.log("Actualizado:", r.rows[0]);
      }

      res.json({ mensaje: "Orden actualizado" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al actualizar el orden" });
    }
  }
);

app.delete("/api/propiedades/:id", verificarToken, permitirRoles("admin", "editor"), async (req, res) => {
  try {
    const { id } = req.params;

    const existe = await pool.query(
      "SELECT id, propiedad FROM propiedades WHERE id = $1",
      [id]
    );

    if (existe.rows.length === 0) {
      return res.status(404).json({
        error: "Propiedad no encontrada"
      });
    }

    const nombrePropiedad = existe.rows[0].propiedad;

    const imagenes = await pool.query(
      "SELECT url_archivo FROM propiedad_multimedia WHERE propiedad_id = $1",
      [id]
    );

    for (const img of imagenes.rows) {
      const rutaFisica = path.join(__dirname, "public", img.url_archivo.replace(/^\//, ""));
      if (fs.existsSync(rutaFisica)) {
        fs.unlinkSync(rutaFisica);
      }
    }

    await pool.query("DELETE FROM propiedades WHERE id = $1", [id]);

    registrarBitacora({
      usuario_id: req.usuario.id,
      usuario_nombre: req.usuario.usuario,
      accion: "ELIMINAR",
      modulo: "PROPIEDADES",
      descripcion: nombrePropiedad,
      ip: req.ip
    });

    res.json({
      mensaje: "Propiedad eliminada correctamente"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error al eliminar la propiedad"
    });
  }
});

/* =========================
   PROPIEDADES PÚBLICAS
========================= */
app.get("/api/public/propiedades", async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT
        p.id,
        p.propiedad,
        p.tipo_operacion,
        p.tipo_inmueble,
        p.precio,
        p.recamaras,
        p.banos,
        p.estacionamiento,
        p.superficie_construccion_m2,
        p.direccion,
        p.zona,
        p.coordenadas,
        (
          SELECT pm.url_archivo
          FROM propiedad_multimedia pm
          WHERE pm.propiedad_id = p.id
          ORDER BY pm.principal DESC, pm.orden ASC, pm.creado_en ASC
          LIMIT 1
        ) AS imagen_principal
      FROM propiedades p
      WHERE p.estado_publicacion = 'publicada'
      ORDER BY p.creado_en DESC
    `);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener propiedades" });
  }
});

app.get("/api/public/propiedades/:id", verificarTokenOpcional, async (req, res) => {
  try {
    const { id } = req.params;
    const soloPublicadas = !req.usuario;

    const propiedad = await pool.query(
      `SELECT id, propiedad, tipo_operacion, tipo_inmueble, precio, recamaras, banos,
              estacionamiento, superficie_construccion_m2, superficie_terreno_m2, amueblado,
              condominio, direccion, zona, coordenadas, descripcion, amenidades, acabados, nivel_piso,
              edificio, estado_conservacion, orientacion_inmueble
       FROM propiedades
       WHERE id = $1 ${soloPublicadas ? "AND estado_publicacion = 'publicada'" : ""}`,
      [id]
    );

    if (propiedad.rows.length === 0) {
      return res.status(404).json({ error: "Propiedad no encontrada o no disponible" });
    }

    const imagenes = await pool.query(
      `SELECT * FROM propiedad_multimedia WHERE propiedad_id = $1 ORDER BY principal DESC, orden ASC`,
      [id]
    );

    res.json({
      ...propiedad.rows[0],
      imagenes: imagenes.rows
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la propiedad" });
  }
});

/* =========================
   PREFERENCIAS
========================= */
app.get("/api/preferencias", verificarToken, async (req, res) => {
  try {
    const resultado = await pool.query(
      "SELECT modo_oscuro, idioma FROM preferencias_usuario WHERE usuario_id = $1",
      [req.usuario.id]
    );
    if (resultado.rows.length === 0) {
      return res.json({ modo_oscuro: false, idioma: "es" });
    }
    res.json(resultado.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener preferencias" });
  }
});

app.put("/api/preferencias", verificarToken, async (req, res) => {
  try {
    const { modo_oscuro, idioma } = req.body;
    const resultado = await pool.query(
      `INSERT INTO preferencias_usuario (usuario_id, modo_oscuro, idioma, actualizado_en)
       VALUES ($1, $2, $3, NOW())
       ON CONFLICT (usuario_id) DO UPDATE
         SET modo_oscuro = EXCLUDED.modo_oscuro,
             idioma = EXCLUDED.idioma,
             actualizado_en = NOW()
       RETURNING modo_oscuro, idioma`,
      [req.usuario.id, modo_oscuro ?? false, idioma ?? "es"]
    );
    res.json(resultado.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al guardar preferencias" });
  }
});

/* =========================
   BITÁCORA
========================= */
app.get("/api/bitacora", verificarToken, permitirRoles("admin"), async (req, res) => {
  try {
    const resultado = await pool.query(
      `SELECT id, usuario_id, usuario_nombre, accion, modulo, descripcion, ip, creado_en
       FROM bitacora
       ORDER BY creado_en DESC
       LIMIT 200`
    );
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la bitácora" });
  }
});

app.post("/api/bitacora/limpiar", verificarToken, permitirRoles("admin"), async (req, res) => {
  try {
    const conteo = await pool.query("SELECT COUNT(*) FROM bitacora");
    const total = parseInt(conteo.rows[0].count, 10);

    await pool.query("DELETE FROM bitacora");

    await pool.query(
      `INSERT INTO bitacora (usuario_id, usuario_nombre, accion, modulo, descripcion, ip)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [
        req.usuario.id,
        req.usuario.usuario,
        "LIMPIAR_BITACORA",
        "AUTH",
        `Bitácora limpiada — ${total} registros exportados`,
        req.ip
      ]
    );

    res.json({ mensaje: "Bitácora limpiada correctamente", total });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al limpiar la bitácora" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});