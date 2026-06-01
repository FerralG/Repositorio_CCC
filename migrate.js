const { Pool } = require('pg');
const pool = new Pool({ 
  connectionString: 'postgresql://neondb_owner:npg_k0YNSIKh8opW@ep-falling-recipe-apkmk9ou-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require'
});

async function migrate() {
  try {
    console.log('Iniciando migración...');

    // 1. Agregar columnas faltantes a propiedades
    await pool.query(`
      ALTER TABLE propiedades
        ADD COLUMN IF NOT EXISTS tipo_operacion VARCHAR(10),
        ADD COLUMN IF NOT EXISTS tipo_inmueble VARCHAR(50),
        ADD COLUMN IF NOT EXISTS precio NUMERIC,
        ADD COLUMN IF NOT EXISTS estado_publicacion VARCHAR(20) DEFAULT 'borrador',
        ADD COLUMN IF NOT EXISTS creado_en TIMESTAMP DEFAULT NOW(),
        ADD COLUMN IF NOT EXISTS actualizado_en TIMESTAMP DEFAULT NOW()
    `);
    console.log('✓ Columnas agregadas a propiedades');

    // 2. Migrar datos existentes
    await pool.query(`
      UPDATE propiedades SET
        tipo_operacion = CASE
          WHEN renta = true AND venta = true THEN 'ambas'
          WHEN renta = true THEN 'renta'
          WHEN venta = true THEN 'venta'
          ELSE 'renta'
        END,
        precio = CASE
          WHEN renta = true AND venta = false THEN renta_precio
          WHEN venta = true AND renta = false THEN venta_precio
          WHEN renta = true AND venta = true THEN renta_precio
          ELSE 0
        END,
        tipo_inmueble = tipo
    `);
    console.log('✓ Datos migrados en propiedades');

    // 3. Crear tabla usuarios
    await pool.query(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        nombre_completo VARCHAR(100) NOT NULL,
        usuario VARCHAR(50) UNIQUE NOT NULL,
        correo VARCHAR(100) UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        rol VARCHAR(20) DEFAULT 'editor',
        activo BOOLEAN DEFAULT TRUE,
        creado_en TIMESTAMP DEFAULT NOW()
      )
    `);
    console.log('✓ Tabla usuarios creada');

    // 4. Crear tabla propiedad_multimedia
    await pool.query(`
      CREATE TABLE IF NOT EXISTS propiedad_multimedia (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        propiedad_id INTEGER REFERENCES propiedades(id) ON DELETE CASCADE,
        url_archivo TEXT NOT NULL,
        tipo_archivo VARCHAR(20) DEFAULT 'imagen',
        principal BOOLEAN DEFAULT FALSE,
        orden INTEGER DEFAULT 1,
        creado_en TIMESTAMP DEFAULT NOW()
      )
    `);
    console.log('✓ Tabla propiedad_multimedia creada');

    // 5. Crear tabla bitacora
    await pool.query(`
      CREATE TABLE IF NOT EXISTS bitacora (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        usuario_id UUID,
        usuario_nombre VARCHAR(100),
        accion VARCHAR(50),
        modulo VARCHAR(50),
        descripcion TEXT,
        ip VARCHAR(50),
        creado_en TIMESTAMP DEFAULT NOW()
      )
    `);
    console.log('✓ Tabla bitacora creada');

    // 6. Crear tabla preferencias_usuario
    await pool.query(`
      CREATE TABLE IF NOT EXISTS preferencias_usuario (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        usuario_id UUID UNIQUE REFERENCES usuarios(id) ON DELETE CASCADE,
        modo_oscuro BOOLEAN DEFAULT FALSE,
        idioma VARCHAR(5) DEFAULT 'es',
        actualizado_en TIMESTAMP DEFAULT NOW()
      )
    `);
    console.log('✓ Tabla preferencias_usuario creada');

    console.log('\n✅ Migración completada exitosamente');
    pool.end();

  } catch (error) {
    console.error('✗ Error en migración:', error.message);
    pool.end();
  }
}

migrate();