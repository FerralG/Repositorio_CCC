# Guía de rutas (URLs) del sitio

## Rutas públicas

| URL | Qué muestra | Archivo |
|---|---|---|
| `/` | Inicio | `PagVL/PagVL/index.html` |
| `/propiedades` | Listado. Los filtros van en la query: `?ubicacion=veracruz&tipo=casa` | `propiedades.html` |
| `/propiedades/76-departamento-en-jardines-de-virginia` | Detalle (`id-slug`) | `propiedad-detalle.html` |
| `/aviso-de-privacidad` | Aviso de privacidad | `privacidad.html` |
| `/robots.txt`, `/sitemap.xml` | Para buscadores (se generan solos) | `server.js` |
| `/admin` | Panel de administración | `public/admin-login.html` |

Las URLs antiguas (`/PagVL/propiedades.html`, `/PagVL/propiedad-detalle.html?id=76`, etc.)
redirigen con **301** a las nuevas. No se deben borrar esas redirecciones.

## Reglas que seguimos

1. **Sin extensión ni carpetas internas**: `/propiedades`, no `/PagVL/propiedades.html`.
2. **Sustantivos en minúsculas, con guiones, en español**: `/aviso-de-privacidad`.
3. **El recurso va en la ruta, el filtrado en la query**:
   `/propiedades/76-...` identifica una propiedad; `?ubicacion=veracruz` solo filtra.
4. **Slug + id**: el número (`76`) es lo que se busca en la base; el texto (`departamento-...`) es para
   personas y buscadores. Si el nombre de la propiedad cambia, la URL vieja redirige sola a la nueva.
5. **Una sola URL por contenido**: `/propiedades/76` y `/propiedades/76-otro-nombre` hacen 301 a la correcta.
6. **Errores honestos**: una ruta inexistente responde **404** (con página amigable), no 200.
7. **El slug se calcula en un solo lugar** (`slugify()` en `server.js`) y la API lo entrega ya hecho
   (`slug`). El JavaScript del sitio solo lo usa.

## Orden en `server.js` (importante)

Express usa **la primera ruta que coincide**. El orden es:

1. Redirecciones 301 de URLs viejas
2. Archivos estáticos (css, js, imágenes)
3. Rutas limpias de las páginas
4. Rutas de la API
5. `robots.txt` y `sitemap.xml`
6. El manejador de 404 (siempre al final)

## Cómo agregar una página pública nueva

1. Crear el HTML en `PagVL/PagVL/`.
2. Añadir en `server.js`: `app.get("/mi-pagina", (req, res) => res.sendFile(path.join(PAGINAS_PUBLICAS, "mi-pagina.html")));`
3. Enlazarla en el menú como `/mi-pagina` (sin `.html`).
4. Añadirla a la lista de `urls` del `sitemap.xml`.

## Dominio canónico

`SITE_URL` (en `server.js`, o variable de entorno del mismo nombre) define el dominio que aparece en
`sitemap.xml`. Hoy es `https://www.viveslarabienesraices.com`.
