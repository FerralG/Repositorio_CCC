require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

async function probarConexion() {
  try {
    const resultado = await pool.query("SELECT NOW()");
    console.log("Conexión exitosa a Neon");
    console.log("Fecha/hora del servidor:", resultado.rows[0]);
  } catch (error) {
    console.error("Error al conectar con Neon:", error.message);
  } finally {
    await pool.end();
  }
}

probarConexion();