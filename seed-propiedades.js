require("dotenv").config();
const pool = require("./db");
const fs = require("fs");
const path = require("path");

// Base paths
const IMAGES_SRC = path.join(__dirname, "PagVL", "images");
const UPLOADS_DST = path.join(__dirname, "public", "uploads");

// All active properties from PagVL/js/main.js
// tipo_inmueble: 'residencial-casa' mapped to 'casa' as requested
const PROPERTIES = [
  {
    propiedad: "Torre Arista",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 24000,
    recamaras: 2,
    banos: 2.5,
    estacionamiento: 2,
    superficie_construccion_m2: 116,
    direccion: "Xicoténcatl 165, Faros, 91709 Veracruz, Ver.",
    folder: "2b-torre-arista",
  },
  {
    propiedad: "Torre Arista",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 25000,
    recamaras: 2,
    banos: 2,
    estacionamiento: 2,
    superficie_construccion_m2: 95,
    direccion: "Xicoténcatl 165, Faros, 91709 Veracruz, Ver.",
    folder: "3c-arista",
  },
  {
    propiedad: "Torre Altamar",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 0,
    recamaras: 0,
    banos: 0,
    estacionamiento: 0,
    superficie_construccion_m2: 0,
    direccion:
      "Boulevard Mandinga #1 esquina Boulevard de los gobernadores, P.º Playas del Conchal fraccionamiento, 95264 Ver.",
    folder: "4B-Torre-Altamar",
  },
  {
    propiedad: "Torre Altamar",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 26000,
    recamaras: 3,
    banos: 3,
    estacionamiento: 2,
    superficie_construccion_m2: 147,
    direccion:
      "Boulevard Mandinga #1 esquina Boulevard de los gobernadores, P.º Playas del Conchal fraccionamiento, 95264 Ver.",
    folder: "6A-Altamar",
  },
  {
    propiedad: "Torre Arista",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 22000,
    recamaras: 2,
    banos: 2.5,
    estacionamiento: 1,
    superficie_construccion_m2: 110,
    direccion: "Xicoténcatl 165, Faros, 91709 Veracruz, Ver.",
    folder: "9E-Arista",
  },
  {
    propiedad: "Colinas Del Mar",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 22500,
    recamaras: 2,
    banos: 2,
    estacionamiento: 1,
    superficie_construccion_m2: 85,
    direccion: "Blvd Miguel Alemán 2533, El Morro, 94290 Boca del Río, Ver.",
    folder: "11-1-ColinasDelMar",
  },
  {
    propiedad: "Torre Arista",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 27000,
    recamaras: 2,
    banos: 2,
    estacionamiento: 1,
    superficie_construccion_m2: 90,
    direccion: "Xicoténcatl 165, Faros, 91709 Veracruz, Ver.",
    folder: "15-Arista",
  },
  {
    propiedad: "201 Torre JV",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 45000,
    recamaras: 4,
    banos: 4.5,
    estacionamiento: 2,
    superficie_construccion_m2: 350,
    direccion:
      "Torres JV Residencial, Blvd. Manuel Ávila Camacho 3534, Costa de Oro, 94299 Boca del Río, Ver.",
    folder: "201-Torre-JV",
  },
  {
    propiedad: "Torre Catania",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 18500,
    recamaras: 3,
    banos: 3,
    estacionamiento: 2,
    superficie_construccion_m2: 150,
    direccion: "Blvd Miguel Alemán 1397, Los Delfines, 94293 Veracruz, Ver.",
    folder: "302-Torre-Catania",
  },
  {
    propiedad: "601 B Torre Arrecifes",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 55000,
    recamaras: 3,
    banos: 2.5,
    estacionamiento: 2,
    superficie_construccion_m2: 240,
    direccion: "Torre Arrecifes, Fraccionamiento Zona Hotelera, Boca del Río",
    folder: "601B-Torre-Arrecifes",
  },
  {
    propiedad: "Torre Arista",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 24000,
    recamaras: 2,
    banos: 2.5,
    estacionamiento: 1,
    superficie_construccion_m2: 110,
    direccion: "Xicoténcatl 165, Faros, 91709 Veracruz, Ver.",
    folder: "2e-torre-arista",
  },
  {
    propiedad: "Torre Santa María",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 23000,
    recamaras: 3,
    banos: 2,
    estacionamiento: 2,
    superficie_construccion_m2: 130,
    direccion: "C. Mocambo 515, Mocambo, 94293 Veracruz, Ver.",
    folder: "602-Torre-SantaMaria",
  },
  {
    propiedad: "Torre Leau",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 30000,
    recamaras: 2,
    banos: 2,
    estacionamiento: 2,
    superficie_construccion_m2: 180,
    direccion: "Manuel Suárez 72, Luis Echeverría, 94298 Boca del Río, Ver.",
    folder: "705-Torre-Leau",
  },
  {
    propiedad: "Torre Villas Mocambo",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 50000,
    recamaras: 3,
    banos: 3.5,
    estacionamiento: 2,
    superficie_construccion_m2: 245,
    direccion:
      "Bv. Adolfo Ruíz Cortines 3422, Playa de Oro, 94293 Boca del Río, Ver.",
    folder: "1203-TorreVillas-Mocambo",
  },
  {
    propiedad: "Veramar",
    tipo_operacion: "venta",
    tipo_inmueble: "departamento",
    precio: 6000000,
    recamaras: 4,
    banos: 4,
    estacionamiento: 2,
    superficie_construccion_m2: 230,
    direccion: "Blvd. Adolfo Ruiz Cortines #8000, Boca del Río, Ver.",
    folder: "1601-Veramar",
  },
  {
    propiedad: "PH Ximara",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 45000,
    recamaras: 3,
    banos: 3,
    estacionamiento: 2,
    superficie_construccion_m2: 170,
    direccion: "Cerrada Isla del Amor, C. Isla del Amor 45, 95264 Ver.",
    folder: "1902-XimenaMarquinez",
  },
  {
    propiedad: "Cabo Marino",
    tipo_operacion: "venta",
    tipo_inmueble: "casa",
    precio: 7500000,
    recamaras: 4,
    banos: 4,
    estacionamiento: 3,
    superficie_construccion_m2: 380,
    direccion: "Circuito Cabo Marino #123, Alvarado, Ver.",
    folder: "CaboMarino-AlexSanchez",
  },
  {
    propiedad: "Casa 16mdp cerca vera",
    tipo_operacion: "venta",
    tipo_inmueble: "casa",
    precio: 16000000,
    recamaras: 5,
    banos: 5,
    estacionamiento: 4,
    superficie_construccion_m2: 600,
    direccion: "Fraccionamiento Lomas Altas, Veracruz, Ver.",
    folder: "Casa16mdp-cercadeVERA",
  },
  {
    propiedad: "Casa Andaluz",
    tipo_operacion: "renta",
    tipo_inmueble: "casa",
    precio: 12000,
    recamaras: 3,
    banos: 4,
    estacionamiento: 2,
    superficie_construccion_m2: 185,
    direccion:
      "Carretera Federal Rio, Córdoba - Boca del Rio S/N, San Jose, 94290 Boca del Río, Ver.",
    folder: "CasaAndaluz-Marquinez",
  },
  {
    propiedad: "Casa Costa de Oro Ferrari",
    tipo_operacion: "venta",
    tipo_inmueble: "casa",
    precio: 8500000,
    recamaras: 4,
    banos: 4,
    estacionamiento: 3,
    superficie_construccion_m2: 400,
    direccion: "Fraccionamiento Costa de Oro, Boca del Río, Ver.",
    folder: "Casa-CostaOro-Ferrari",
  },
  {
    propiedad: "Casa Oficinas en Reforma",
    tipo_operacion: "renta",
    tipo_inmueble: "oficina",
    precio: 30000,
    recamaras: 5,
    banos: 3,
    estacionamiento: 2,
    superficie_construccion_m2: 300,
    direccion: "Fraccionamiento Reforma, Veracruz, Ver.",
    folder: "Casa-Oficinas-en-Reforma",
  },
  {
    propiedad: "Casa Playas del Conchal",
    tipo_operacion: "venta",
    tipo_inmueble: "casa",
    precio: 9500000,
    recamaras: 4,
    banos: 4,
    estacionamiento: 3,
    superficie_construccion_m2: 450,
    direccion: "Fracc. Playas del Conchal, Alvarado, Ver.",
    folder: "Casa-PlayasDelConchal",
  },
  {
    propiedad: "Casa Verde Rosario",
    tipo_operacion: "venta",
    tipo_inmueble: "casa",
    precio: 6200000,
    recamaras: 3,
    banos: 3,
    estacionamiento: 2,
    superficie_construccion_m2: 360,
    direccion: "Fracc. Casa Verde, Boca del Río, Ver.",
    folder: "CasaVerde-Rosario",
  },
  {
    propiedad: "Torre Levant",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 20000,
    recamaras: 2,
    banos: 2,
    estacionamiento: 1,
    superficie_construccion_m2: 75,
    direccion: "Federal 19, Playa de Oro, 94293 Boca del Río, Ver.",
    folder: "D33t1-TorreLevant-Gloria",
  },
  {
    propiedad: "Torre Levant",
    tipo_operacion: "venta",
    tipo_inmueble: "departamento",
    precio: 4000000,
    recamaras: 2,
    banos: 2,
    estacionamiento: 1,
    superficie_construccion_m2: 104,
    direccion: "Federal 19, Playa de Oro, 94293 Boca del Río, Ver.",
    folder: "D71t2-Levant-Eloy",
  },
  {
    propiedad: "Torre Levant",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 24000,
    recamaras: 2,
    banos: 2,
    estacionamiento: 1,
    superficie_construccion_m2: 100,
    direccion: "Federal 19, Playa de Oro, 94293 Boca del Río, Ver.",
    folder: "D81t2-Levant-Gabriela",
  },
  {
    propiedad: "Torre Levant",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 25000,
    recamaras: 2,
    banos: 2,
    estacionamiento: 1,
    superficie_construccion_m2: 139,
    direccion: "Federal 19, Playa de Oro, 94293 Boca del Río, Ver.",
    folder: "D112t2-Levant-LauraSainos",
  },
  {
    propiedad: "Torre Levant",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 25000,
    recamaras: 2,
    banos: 4,
    estacionamiento: 1,
    superficie_construccion_m2: 160,
    direccion: "Federal 19, Playa de Oro, 94293 Boca del Río, Ver.",
    folder: "D193t2-Levant-Martin",
  },
  {
    propiedad: "D802 Torre A Arrecifes",
    tipo_operacion: "venta",
    tipo_inmueble: "departamento",
    precio: 5300000,
    recamaras: 3,
    banos: 3,
    estacionamiento: 2,
    superficie_construccion_m2: 190,
    direccion: "Blvd. Manuel Ávila Camacho, Boca del Río, Ver.",
    folder: "D802-Torre-A-Arrecifes-Wendell",
  },
  {
    propiedad: "Departamento 10A Torre Pelicano",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 36000,
    recamaras: 3,
    banos: 4.5,
    estacionamiento: 2,
    superficie_construccion_m2: 0,
    direccion:
      "Boulevard Ávila Camacho, Fraccionamiento 741, Costa de Oro, 94299 Veracruz",
    folder: "Departamento-10A-TorrePelícano-Montano",
  },
  {
    propiedad: "14A Torre Arista",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 32000,
    recamaras: 3,
    banos: 3,
    estacionamiento: 2,
    superficie_construccion_m2: 144,
    direccion: "Av. Arista #508, Veracruz, Ver.",
    folder: "Departamento-14A-TorreArista",
  },
  {
    propiedad: "Depto 15 Torre San Sebastián",
    tipo_operacion: "venta",
    tipo_inmueble: "departamento",
    precio: 3000000,
    recamaras: 3,
    banos: 3,
    estacionamiento: 2,
    superficie_construccion_m2: 140,
    direccion:
      "Blvd Miguel Alemán 1489, Playa Hermosa, 94293 Veracruz, Ver.",
    folder: "Departamento-15-Torre-SanSebastián",
  },
  {
    propiedad: "Depto Torres JV",
    tipo_operacion: "venta",
    tipo_inmueble: "departamento",
    precio: 11000000,
    recamaras: 3,
    banos: 4.5,
    estacionamiento: 2,
    superficie_construccion_m2: 345,
    direccion:
      "Torres JV Residencial, Blvd. Manuel Ávila Camacho 3534, Costa de Oro, 94299 Boca del Río, Ver.",
    folder: "Depto 602 torres JV Sra Charito",
  },
  {
    propiedad: "Depto Ribiera de la Tampiquera",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 13500,
    recamaras: 2,
    banos: 2,
    estacionamiento: 1,
    superficie_construccion_m2: 75,
    direccion: "C. Tlacotalpan, Fracc. La Tampiquera Boca del Rio Veracruz",
    folder: "Depto-15-RibierasTampiquera-Hayde",
  },
  {
    propiedad: "Exertia Exofis",
    tipo_operacion: "renta",
    tipo_inmueble: "oficina",
    precio: 0,
    recamaras: 0,
    banos: 2,
    estacionamiento: 1,
    superficie_construccion_m2: 80,
    direccion: "Barco Viejo, Playa de Oro, Veracruz, Ver.",
    folder: "Exertia-exofis-energía",
  },
  {
    propiedad: "Depto Kosta 90",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 27000,
    recamaras: 3,
    banos: 3,
    estacionamiento: 2,
    superficie_construccion_m2: 80,
    direccion: "C. Mojarra 197, Costa de Oro, 94299 Boca del Río, Ver.",
    folder: "Kosta90-Depto-Maxilofacial-DrColorado",
  },
  {
    propiedad: "Ladoga 19 Punta Tiburón",
    tipo_operacion: "venta",
    tipo_inmueble: "casa",
    precio: 5800000,
    recamaras: 3,
    banos: 3,
    estacionamiento: 2,
    superficie_construccion_m2: 300,
    direccion: "Punta Tiburón, Alvarado, Ver.",
    folder: "Ladoga19-Lag7-PuntaTib-Palacios",
  },
  {
    propiedad: "Torre Levant",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 25000,
    recamaras: 2,
    banos: 2,
    estacionamiento: 1,
    superficie_construccion_m2: 156,
    direccion: "Federal 19, Playa de Oro, 94293 Boca del Río, Ver.",
    folder: "Levant-192t2-Munir",
  },
  {
    propiedad: "Torre Arista",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 19000,
    recamaras: 1,
    banos: 1,
    estacionamiento: 1,
    superficie_construccion_m2: 90,
    direccion: "Xicoténcatl 165, Faros, 91709 Veracruz, Ver.",
    folder: "Loft14C-TorreArista",
  },
  {
    propiedad: "Departamento Maroma",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 16000,
    recamaras: 2,
    banos: 2,
    estacionamiento: 1,
    superficie_construccion_m2: 103,
    direccion:
      "Calle, Priv. Río Moreno No. 467, Col. Flores Magon, 94290 Boca del Río, Ver.",
    folder: "Maroma",
  },
  {
    propiedad: "Oficina Torre Américas",
    tipo_operacion: "renta",
    tipo_inmueble: "oficina",
    precio: 25000,
    recamaras: 0,
    banos: 0,
    estacionamiento: 0,
    superficie_construccion_m2: 85,
    direccion:
      "Av. Las Américas 140, De Las Americas, Heriberto Kehoe Vicent, 94299 Boca del Río, Ver.",
    folder: "Ofi-201-TorreAmercias-Paty",
  },
  {
    propiedad: "Penn Garden Boca Towers",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 26000,
    recamaras: 3,
    banos: 2.5,
    estacionamiento: 2,
    superficie_construccion_m2: 150,
    direccion:
      "Marigalante 586, De Las Americas, Heriberto Kehoe Vicent, 94299 Boca del Río, Ver.",
    folder: "PennGarden-BocaTowers-Mauro",
  },
  {
    propiedad: "Penthouse Marsopas",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 25000,
    recamaras: 4,
    banos: 3,
    estacionamiento: 0,
    superficie_construccion_m2: 317,
    direccion: "Marsopas, El Morro, 94293 Veracruz, Ver.",
    folder: "Penthouse-Marsopas-Petra",
  },
  {
    propiedad: "Penthouse Torre Oasis",
    tipo_operacion: "venta",
    tipo_inmueble: "departamento",
    precio: 7500000,
    recamaras: 3,
    banos: 3.5,
    estacionamiento: 0,
    superficie_construccion_m2: 200,
    direccion: "Blvd Miguel Alemán 1943, Playa Hermosa, 94293 Veracruz, Ver.",
    folder: "Ph-Torre-Oasis",
  },
  {
    propiedad: "Torre Rambla",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 28000,
    recamaras: 3,
    banos: 3.5,
    estacionamiento: 2,
    superficie_construccion_m2: 210,
    direccion: "95264 Alvarado, Ver.",
    folder: "Piso2-TorreRambla-Mónica",
  },
  {
    propiedad: "Torre Rambla",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 30000,
    recamaras: 3,
    banos: 3.5,
    estacionamiento: 2,
    superficie_construccion_m2: 230,
    direccion: "95264 Alvarado, Ver.",
    folder: "Piso-7-TorreRamblas",
  },
  {
    propiedad: "Torre San Marino",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 26000,
    recamaras: 3,
    banos: 3.5,
    estacionamiento: 2,
    superficie_construccion_m2: 245,
    direccion:
      "Marigalante 243, De Las Americas, Heriberto Kehoe Vicent, 94292 Boca del Río, Ver.",
    folder: "Piso-dosTorres-SanMarino",
  },
  {
    propiedad: "Terrazas Punta Tiburón",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 3600000,
    recamaras: 3,
    banos: 3.5,
    estacionamiento: 2,
    superficie_construccion_m2: 120,
    direccion:
      "Punta Tiburón, Punta Tiburón Residencial Marina y Golf, Alvarado",
    folder: "Terrazas-PuntaTiburón-Falcón",
  },
  {
    propiedad: "Torre Coral",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 18000,
    recamaras: 2,
    banos: 2,
    estacionamiento: 1,
    superficie_construccion_m2: 82,
    direccion: "C. Alaminos 560, Virginia, 94294 Veracruz, Ver.",
    folder: "Torre-Coral-Sainos",
  },
  {
    propiedad: "Torre del Mar",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 25000,
    recamaras: 3,
    banos: 3,
    estacionamiento: 2,
    superficie_construccion_m2: 170,
    direccion: "Torre del Mar, Boca del Río, Ver.",
    folder: "Torre-del-Mar",
  },
  {
    propiedad: "Depto Torre Diamante",
    tipo_operacion: "venta",
    tipo_inmueble: "departamento",
    precio: 4500000,
    recamaras: 3,
    banos: 3,
    estacionamiento: 2,
    superficie_construccion_m2: 180,
    direccion:
      "Blvd Miguel Alemán 2100, Zona Centro, Costa Sol, 94290 Boca del Río, Ver.",
    folder: "Torre-Diamante-departamento-Beatriz",
  },
  {
    propiedad: "Depto Torre Leau",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 30000,
    recamaras: 3,
    banos: 3,
    estacionamiento: 2,
    superficie_construccion_m2: 190,
    direccion: "Torre Leau, Boca del Río, Ver.",
    folder: "TorreLeau-Depa-Soberón",
  },
  {
    propiedad: "Depto Torre Notaría",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 15500,
    recamaras: 2,
    banos: 2,
    estacionamiento: 1,
    superficie_construccion_m2: 135,
    direccion:
      "Blvd. Riviera Veracruzana 345-PRIMER PISO, FRACC. EL CONCHAL, 95264 El Conchal, Ver.",
    folder: "TorreNotaría-Departamento-3recámaras",
  },
  {
    propiedad: "Torre CDMX",
    tipo_operacion: "renta",
    tipo_inmueble: "oficina",
    precio: 15000,
    recamaras: 0,
    banos: 1,
    estacionamiento: 1,
    superficie_construccion_m2: 80,
    direccion: "Torre WTC, Boca del Río, Ver.",
    folder: "TorreRodrigo-CDMX",
  },
  {
    propiedad: "Depto. San Sebastián",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 22000,
    recamaras: 3,
    banos: 3,
    estacionamiento: 2,
    superficie_construccion_m2: 150,
    direccion:
      "Calle Libertad, El Morro, Boca del Río, Veracruz de Ignacio de la Llave, 94293, MEX",
    folder: "Torre-SanSebastián",
  },
  {
    propiedad: "Urban Vita",
    tipo_operacion: "renta",
    tipo_inmueble: "departamento",
    precio: 13000,
    recamaras: 2,
    banos: 2,
    estacionamiento: 1,
    superficie_construccion_m2: 100,
    direccion: "Urban Vita, Boca del Río, Ver.",
    folder: "UrbanVita",
  },
];

// Copy a file, creating destination directory if needed
function copyFile(src, dst) {
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.copyFileSync(src, dst);
}

// Get image files from a source folder, sorted alphabetically
function getImageFiles(folderPath) {
  if (!fs.existsSync(folderPath)) return [];
  return fs
    .readdirSync(folderPath)
    .filter((f) => /\.(jpe?g|png|gif|webp)$/i.test(f))
    .sort();
}

async function seed() {
  // Ensure uploads directory exists
  fs.mkdirSync(UPLOADS_DST, { recursive: true });

  let inserted = 0;
  let skipped = 0;
  let errors = 0;

  for (const prop of PROPERTIES) {
    try {
      // Check for existing record to avoid duplicates
      // Uses propiedad + direccion + precio + recamaras + superficie as unique key
      const existing = await pool.query(
        `SELECT id FROM propiedades
         WHERE propiedad = $1
           AND direccion = $2
           AND precio = $3
           AND recamaras = $4
           AND superficie_construccion_m2 = $5`,
        [
          prop.propiedad,
          prop.direccion,
          prop.precio,
          prop.recamaras,
          prop.superficie_construccion_m2,
        ]
      );

      if (existing.rows.length > 0) {
        console.log(`⏭  Ya existe: ${prop.propiedad} (${prop.folder})`);
        skipped++;
        continue;
      }

      // Insert property
      const result = await pool.query(
        `INSERT INTO propiedades (
          propiedad, tipo_operacion, tipo_inmueble, precio,
          recamaras, banos, estacionamiento, superficie_construccion_m2,
          direccion, estado_publicacion
        ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
        RETURNING id`,
        [
          prop.propiedad,
          prop.tipo_operacion,
          prop.tipo_inmueble,
          prop.precio,
          prop.recamaras,
          Math.round(prop.banos),
          prop.estacionamiento,
          prop.superficie_construccion_m2 || null,
          prop.direccion,
          "publicada",
        ]
      );

      const propId = result.rows[0].id;

      // Copy images and register in propiedad_multimedia
      const srcFolder = path.join(IMAGES_SRC, prop.folder);
      const imageFiles = getImageFiles(srcFolder);

      if (imageFiles.length === 0) {
        console.warn(
          `  ⚠  Sin imágenes en: PagVL/images/${prop.folder}/`
        );
      }

      for (let i = 0; i < imageFiles.length; i++) {
        const filename = imageFiles[i];
        const src = path.join(srcFolder, filename);
        // Prefix with folder name to avoid collisions between properties
        const destName = `${prop.folder}__${filename}`;
        const dst = path.join(UPLOADS_DST, destName);

        if (!fs.existsSync(dst)) copyFile(src, dst);

        const urlRelativa = `/uploads/${destName}`;
        const esPrincipal = i === 0;
        const orden = i + 1;

        await pool.query(
          `INSERT INTO propiedad_multimedia (propiedad_id, url_archivo, tipo_archivo, principal, orden)
           VALUES ($1, $2, $3, $4, $5)`,
          [propId, urlRelativa, "imagen", esPrincipal, orden]
        );
      }

      console.log(
        `✓  Insertada: ${prop.propiedad} (${prop.folder}) — ${imageFiles.length} imágenes`
      );
      inserted++;
    } catch (err) {
      console.error(`✗  Error con ${prop.propiedad} (${prop.folder}):`, err.message);
      errors++;
    }
  }

  await pool.end();

  console.log("\n=== Resumen ===");
  console.log(`Insertadas: ${inserted}`);
  console.log(`Omitidas (ya existían): ${skipped}`);
  console.log(`Errores: ${errors}`);
}

seed().catch((err) => {
  console.error("Error fatal:", err);
  process.exit(1);
});
