/* =============================================
   VIVES LARA — config.js
   Preferencias, modo oscuro e internacionalización
   ============================================= */

window.API_URL = window.location.origin;;

// Escapa texto antes de meterlo en innerHTML: un dato guardado (p. ej. un nombre de propiedad) nunca debe ejecutarse como código
window.esc = function (valor) {
  return String(valor ?? "").replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}; // <-- Reemplaza por la IP/Puerto o subdominio real de tu API

const TRADUCCIONES = {
  es: {
    // --- Navegación ---
    "nav.propiedades":   "Propiedades",
    "nav.usuarios":      "Usuarios",
    "nav.bitacora":      "Bitácora",
    "nav.mapa":          "Mapa",
    "nav.configuracion": "Configuración",
    "nav.cerrarSesion":  "Cerrar sesión",

    // --- Topbar ---
    "topbar.inventario":      "INVENTARIO",
    "topbar.propiedades":     "PROPIEDADES",
    "topbar.administracion":  "ADMINISTRACIÓN",
    "topbar.usuarios":        "USUARIOS",
    "topbar.bitacora":        "BITÁCORA",
    "topbar.detalles":        "DETALLES",
    "topbar.nuevaPropiedad":  "NUEVA PROPIEDAD",
    "topbar.editando":        "EDITANDO",

    // --- Botones (legacy) ---
    "btn.nuevaPropiedad": "Nueva propiedad",
    "btn.recargar":       "Recargar",
    "btn.editar":         "Editar",
    "btn.eliminar":       "Eliminar",
    "btn.ver":            "Ver",
    "btn.guardarCambios": "GUARDAR CAMBIOS",
    "btn.crearPropiedad": "CREAR PROPIEDAD",
    "btn.cancelar":       "Cancelar",
    "btn.cerrarSesion":   "Cerrar sesión",
    "btn.crearUsuario":   "Crear usuario",

    // --- Mensajes (legacy) ---
    "msg.sinPropiedades": "No hay propiedades registradas",
    "msg.agregaNueva":    "Agrega una nueva propiedad para comenzar.",

    // --- Propiedades ---
    "inventario-propiedades": "Inventario de propiedades",
    "nueva-propiedad":        "Nueva propiedad",
    "recargar":               "Recargar",
    "total-propiedades":      "Total propiedades",
    "publicadas":             "Publicadas",
    "borrador":               "Borrador",
    "filtrar-tipo":           "Tipo de inmueble",
    "filtrar-operacion":      "Operación",
    "filtrar-estado":         "Estado",
    "precio-min":             "Precio mínimo",
    "precio-max":             "Precio máximo",
    "limpiar-filtros":        "Limpiar filtros",
    "todos":                  "Todos",
    "venta":                  "Venta",
    "renta":                  "Renta",
    "sin-propiedades":        "No hay propiedades registradas",
    "agregar-propiedad":      "Agrega una nueva propiedad para comenzar.",
    "ver":                    "Ver",
    "editar":                 "Editar",
    "eliminar":               "Eliminar",

    // --- Usuarios ---
    "alta-usuarios":        "Alta de usuarios",
    "usuarios-registrados": "Usuarios registrados",
    "crear-usuario":        "Crear usuario",
    "nombre-completo":      "Nombre completo",
    "correo":               "Correo electrónico",
    "contrasena":           "Contraseña",
    "selecciona-rol":       "Selecciona un rol",
    "col-nombre":           "Nombre",
    "col-usuario":          "Usuario",
    "col-correo":           "Correo",
    "col-rol":              "Rol",
    "col-activo":           "Activo",
    "col-fecha":            "Fecha",
    "col-acciones":         "Acciones",

    // --- Formulario ---
    "nueva-propiedad-titulo":  "NUEVA PROPIEDAD",
    "editar-propiedad-titulo": "EDITAR PROPIEDAD",
    "guardar-cambios":         "GUARDAR CAMBIOS",
    "crear-propiedad-btn":     "CREAR PROPIEDAD",
    "cancelar":                "Cancelar",
    "vista-previa":            "Vista previa",
    "imagenes-actuales":       "Imágenes actuales",
    "agregar-imagenes":        "Agregar más imágenes",
    "selecciona-imagenes":     "Selecciona imágenes",
    "precio":                  "Precio:",
    "datos-rapidos":           "Datos rápidos",

    // --- Bitácora ---
    "registro-actividad": "Registro de actividad",
    "buscar-bitacora":    "Buscar en bitácora...",
    "col-fecha-hora":     "Fecha / Hora",
    "col-modulo":         "Módulo",
    "col-accion":         "Acción",
    "col-descripcion":    "Descripción",
    "sin-registros":      "Sin registros",

    // --- Configuración ---
    "configuracion-titulo": "Configuración",
    "apariencia":           "Apariencia",
    "modo-oscuro":          "Modo oscuro",
    "idioma-titulo":        "Idioma",
    "guardar-config":       "Guardar cambios",
    "cambios-guardados":    "Cambios guardados correctamente",

    // --- Detalles ---
    "volver":          "← Volver",
    "sin-imagen":      "Sin imagen",
    "recamaras":       "Recámaras",
    "banos":           "Baños",
    "estacionamiento": "Estacionamiento",
    "construccion":    "Construcción",
    "terreno":         "Terreno",
    "amueblado":       "Amueblado",
    "descripcion":     "Descripción",

    // --- Lista de propiedades ---
    "ordenar-por": "Ordenar por",
    "orden-recientes": "Más recientes",
    "orden-antiguos": "Más antiguos",
    "orden-precio-asc": "Precio: menor a mayor",
    "orden-precio-desc": "Precio: mayor a menor",
    "orden-nombre": "Nombre (A-Z)",
    "duplicar": "Duplicar",
    "mostrando": "Mostrando",
    "de": "de",
    "pagina-anterior": "Anterior",
    "pagina-siguiente": "Siguiente",
    "estado-actualizado": "Estado actualizado",
    "propiedad-duplicada": "Propiedad duplicada como borrador",
    "confirmar-duplicar": "¿Duplicar esta propiedad? Se creará una copia en borrador con las mismas fotos.",
    "estado.borrador": "Borrador",
    "estado.publicada": "Publicada",
    "estado.pausada": "Pausada",
    "estado.vendida": "Vendida",
    "estado.rentada": "Rentada",
  },

  en: {
    // --- Navegación ---
    "nav.propiedades":   "Properties",
    "nav.usuarios":      "Users",
    "nav.bitacora":      "Activity Log",
    "nav.mapa":          "Map",
    "nav.configuracion": "Settings",
    "nav.cerrarSesion":  "Log out",

    // --- Topbar ---
    "topbar.inventario":      "INVENTORY",
    "topbar.propiedades":     "PROPERTIES",
    "topbar.administracion":  "ADMINISTRATION",
    "topbar.usuarios":        "USERS",
    "topbar.bitacora":        "ACTIVITY LOG",
    "topbar.detalles":        "DETAILS",
    "topbar.nuevaPropiedad":  "NEW PROPERTY",
    "topbar.editando":        "EDITING",

    // --- Botones (legacy) ---
    "btn.nuevaPropiedad": "New property",
    "btn.recargar":       "Reload",
    "btn.editar":         "Edit",
    "btn.eliminar":       "Delete",
    "btn.ver":            "View",
    "btn.guardarCambios": "SAVE CHANGES",
    "btn.crearPropiedad": "CREATE PROPERTY",
    "btn.cancelar":       "Cancel",
    "btn.cerrarSesion":   "Log out",
    "btn.crearUsuario":   "Create user",

    // --- Mensajes (legacy) ---
    "msg.sinPropiedades": "No properties registered",
    "msg.agregaNueva":    "Add a new property to get started.",

    // --- Propiedades ---
    "inventario-propiedades": "Property Inventory",
    "nueva-propiedad":        "New property",
    "recargar":               "Reload",
    "total-propiedades":      "Total properties",
    "publicadas":             "Published",
    "borrador":               "Draft",
    "filtrar-tipo":           "Property type",
    "filtrar-operacion":      "Operation",
    "filtrar-estado":         "Status",
    "precio-min":             "Min price",
    "precio-max":             "Max price",
    "limpiar-filtros":        "Clear filters",
    "todos":                  "All",
    "venta":                  "Sale",
    "renta":                  "Rent",
    "sin-propiedades":        "No properties registered",
    "agregar-propiedad":      "Add a new property to get started.",
    "ver":                    "View",
    "editar":                 "Edit",
    "eliminar":               "Delete",

    // --- Usuarios ---
    "alta-usuarios":        "Add users",
    "usuarios-registrados": "Registered users",
    "crear-usuario":        "Create user",
    "nombre-completo":      "Full name",
    "correo":               "Email",
    "contrasena":           "Password",
    "selecciona-rol":       "Select a role",
    "col-nombre":           "Name",
    "col-usuario":          "User",
    "col-correo":           "Email",
    "col-rol":              "Role",
    "col-activo":           "Active",
    "col-fecha":            "Date",
    "col-acciones":         "Actions",

    // --- Formulario ---
    "nueva-propiedad-titulo":  "NEW PROPERTY",
    "editar-propiedad-titulo": "EDIT PROPERTY",
    "guardar-cambios":         "SAVE CHANGES",
    "crear-propiedad-btn":     "CREATE PROPERTY",
    "cancelar":                "Cancel",
    "vista-previa":            "Preview",
    "imagenes-actuales":       "Current images",
    "agregar-imagenes":        "Add more images",
    "selecciona-imagenes":     "Select images",
    "precio":                  "Price:",
    "datos-rapidos":           "Quick data",

    // --- Bitácora ---
    "registro-actividad": "Activity log",
    "buscar-bitacora":    "Search in log...",
    "col-fecha-hora":     "Date / Time",
    "col-modulo":         "Module",
    "col-accion":         "Action",
    "col-descripcion":    "Description",
    "sin-registros":      "No records",

    // --- Configuración ---
    "configuracion-titulo": "Settings",
    "apariencia":           "Appearance",
    "modo-oscuro":          "Dark mode",
    "idioma-titulo":        "Language",
    "guardar-config":       "Save changes",
    "cambios-guardados":    "Changes saved successfully",

    // --- Detalles ---
    "volver":          "← Back",
    "sin-imagen":      "No image",
    "recamaras":       "Bedrooms",
    "banos":           "Bathrooms",
    "estacionamiento": "Parking",
    "construccion":    "Construction",
    "terreno":         "Land",
    "amueblado":       "Furnished",
    "descripcion":     "Description",

    // --- Property list ---
    "ordenar-por": "Sort by",
    "orden-recientes": "Newest",
    "orden-antiguos": "Oldest",
    "orden-precio-asc": "Price: low to high",
    "orden-precio-desc": "Price: high to low",
    "orden-nombre": "Name (A-Z)",
    "duplicar": "Duplicate",
    "mostrando": "Showing",
    "de": "of",
    "pagina-anterior": "Previous",
    "pagina-siguiente": "Next",
    "estado-actualizado": "Status updated",
    "propiedad-duplicada": "Property duplicated as draft",
    "confirmar-duplicar": "Duplicate this property? A draft copy with the same photos will be created.",
    "estado.borrador": "Draft",
    "estado.publicada": "Published",
    "estado.pausada": "Paused",
    "estado.vendida": "Sold",
    "estado.rentada": "Rented",
  }
};

window.TRADUCCIONES = TRADUCCIONES;

// Helper de traducción accesible globalmente
window.t = function(key) {
  const idioma = localStorage.getItem("idioma") || "es";
  return (TRADUCCIONES[idioma] && TRADUCCIONES[idioma][key]) || key;
};

// --- Aplicar modo oscuro desde localStorage de forma SÍNCRONA
(function aplicarTemaInicial() {
  if (localStorage.getItem("modo_oscuro") === "true") {
    document.documentElement.classList.add("dark");
  }
})();

function _aplicarPrefs(prefs) {
  if (prefs.modo_oscuro) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  const idioma = prefs.idioma || "es";
  localStorage.setItem("modo_oscuro", prefs.modo_oscuro ? "true" : "false");
  localStorage.setItem("idioma", idioma);
  _aplicarIdioma(idioma);
  window._prefsActuales = prefs;
}

function _aplicarIdioma(idioma) {
  const t = TRADUCCIONES[idioma] || TRADUCCIONES.es;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });
}

// --- Cargar preferencias del API (asíncrono)
(async function cargarPreferencias() {
  const token = localStorage.getItem("token");
  if (!token) {
    const prefs = {
      modo_oscuro: localStorage.getItem("modo_oscuro") === "true",
      idioma: localStorage.getItem("idioma") || "es"
    };
    _aplicarPrefs(prefs);
    return;
  }

  try {
    const res = await fetch("/api/preferencias", {
      headers: { "Authorization": `Bearer ${token}` }
    });
    if (res.ok) {
      const prefs = await res.json();
      if (prefs.sin_guardar) {
        // Aún no hay preferencias en el servidor: se conservan las de este navegador y se suben
        const locales = {
          modo_oscuro: localStorage.getItem("modo_oscuro") === "true",
          idioma: localStorage.getItem("idioma") || "es"
        };
        _aplicarPrefs(locales);
        fetch("/api/preferencias", {
          method: "PUT",
          headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
          body: JSON.stringify(locales)
        }).catch(() => {});
      } else {
        _aplicarPrefs(prefs);
      }
    }
  } catch (_) {
    // Si falla el API, mantener lo que ya se aplicó desde localStorage
  }
})();

// --- Si cambias el modo oscuro en una pestaña, las demás pestañas abiertas lo siguen
window.addEventListener("storage", (e) => {
  if (e.key === "modo_oscuro") {
    document.documentElement.classList.toggle("dark", e.newValue === "true");
  }
});

// --- Verificación periódica de sesión
window.iniciarVerificacionSesion = function() {
  const token = localStorage.getItem("token");
  if (!token) return;

  console.log("Verificación de sesión iniciada");

  setInterval(async () => {
    console.log("Verificando sesión...");
    try {
      const res = await fetch("/api/auth/verify", {
        headers: { "Authorization": `Bearer ${token}` }
      });
      console.log("Respuesta verify:", res.status, await res.clone().text());
      if (res.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        window.location.href = "/admin-login.html?sesion=expirada";
      } else if (res.status === 404) {
        console.warn("Verify: endpoint no encontrado (404), se reintentará");
      }
      // 200: sesión válida, no hacer nada
    } catch (err) {
      console.warn("Verify: error de red, se reintentará:", err.message);
      // Error de red: nunca cerrar sesión
    }
  }, 10000);
};

// --- API pública: guardar preferencias
window.guardarPreferencias = async function({ modo_oscuro, idioma }) {
  _aplicarPrefs({ modo_oscuro, idioma });

  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    await fetch("/api/preferencias", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ modo_oscuro, idioma })
    });
  } catch (_) { /* silencioso */ }
};

// --- Ocultar / mostrar la barra lateral en pantallas grandes (se recuerda entre páginas)
(function menuLateralPlegable() {
  const CLAVE = "sidebar_oculta";
  const aplicar = (oculta) => document.documentElement.classList.toggle("sidebar-oculta", oculta);
  try { aplicar(localStorage.getItem(CLAVE) === "true"); } catch (_) {}

  document.addEventListener("click", (e) => {
    const boton = e.target.closest(".btn-hamburguesa");
    if (!boton || window.innerWidth < 768) return; // en celular sigue el menú deslizable de siempre
    e.stopImmediatePropagation();
    const oculta = !document.documentElement.classList.contains("sidebar-oculta");
    aplicar(oculta);
    try { localStorage.setItem(CLAVE, oculta ? "true" : "false"); } catch (_) {}
    window.dispatchEvent(new Event("resize")); // para que el mapa y otros elementos se reajusten
  }, true);

  window.addEventListener("storage", (e) => {
    if (e.key === CLAVE) aplicar(e.newValue === "true");
  });
})();
