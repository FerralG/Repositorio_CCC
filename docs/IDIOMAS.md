# Guía de idiomas (español / inglés)

El sitio público tiene un selector `ES | EN` en el encabezado. El idioma elegido se guarda en el
navegador (`localStorage`, clave `vl_idioma`) y se conserva entre visitas. Por defecto es español.

## Cómo funciona

1. **El HTML trae el texto en español.** Así funciona sin JavaScript y los buscadores lo leen.
2. Cada elemento traducible lleva la **clave** del diccionario:
   - `data-i18n="nav.inicio"` → reemplaza el texto del elemento
   - `data-i18n-html="priv.p2"` → igual, pero permite `<strong>` (solo para texto propio)
   - `data-i18n-placeholder`, `data-i18n-alt`, `data-i18n-aria` → atributos
3. `js/i18n.js` contiene el diccionario (`es` y `en`) y traduce al cargar la página.
4. Los textos que arma `js/main.js` (tarjetas, mensajes, detalle) usan `t("clave")`.
5. Al cambiar de idioma la página se recarga para regenerar todo.

## Cómo agregar o cambiar un texto

1. Añade la clave en **los dos** idiomas dentro de `js/i18n.js` (si falta en inglés, se muestra el español).
2. En el HTML: `<h2 data-i18n="mi.clave">Texto en español</h2>`
3. En JavaScript: `t("mi.clave")` o con variables: `t("zonas.otros", { n: 3 })` (usa `{n}` en el texto).
4. Sube la versión del script (`i18n.js?v=…`) en los HTML para evitar la caché del navegador.

## Qué NO se traduce (todavía)

Lo que se escribe en el panel de administración (nombre, descripción, dirección y zona de cada
propiedad) vive en la base de datos en un solo idioma. Para traducirlo habría que agregar columnas
en inglés (por ejemplo `propiedad_en`, `descripcion_en`) y campos en el formulario del panel.

## Idea a futuro (SEO)

Hoy el idioma no cambia la URL. Para que Google indexe la versión en inglés, lo ideal es una URL por
idioma (`/en/properties`) con etiquetas `hreflang`. Es un cambio de rutas más grande, parecido al que
documenta `docs/RUTAS.md`.

## Nota legal

La versión en inglés del aviso de privacidad es una traducción de cortesía. El texto vigente es el
aviso en español.
