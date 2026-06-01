/* =============================================
   VIVES LARA — config.js
   Preferencias, modo oscuro e internacionalización
   ============================================= */

const TRADUCCIONES = {
  es: {
    // --- Navegación ---
    "nav.propiedades":   "Propiedades",
    "nav.usuarios":      "Usuarios",
    "nav.bitacora":      "Bitácora",
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
  },

  en: {
    // --- Navegación ---
    "nav.propiedades":   "Properties",
    "nav.usuarios":      "Users",
    "nav.bitacora":      "Activity Log",
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
      _aplicarPrefs(prefs);
    }
  } catch (_) {
    // Si falla el API, mantener lo que ya se aplicó desde localStorage
  }
})();

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
