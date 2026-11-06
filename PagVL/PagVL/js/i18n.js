/* =============================================
   i18n.js - Selector de idioma del sitio público
   ---------------------------------------------
   Cómo funciona:
   1. El HTML trae el texto en español (sirve sin JavaScript y para buscadores).
   2. Los elementos traducibles llevan un atributo con la CLAVE del diccionario:
        data-i18n="nav.inicio"                -> reemplaza el texto del elemento
        data-i18n-html="priv.p1"              -> igual, pero permite <strong> (solo texto propio)
        data-i18n-placeholder="form.nombre"   -> placeholder de inputs
        data-i18n-alt="..."  /  data-i18n-aria="..."
   3. El idioma elegido se guarda en localStorage ("vl_idioma") y la página se recarga.
   4. main.js usa i18n.t("clave") para los textos que arma con JavaScript.

   Para agregar un texto nuevo: añade la clave en ES y en EN y usa data-i18n="clave".
   ============================================= */
(function () {
    'use strict';

    var CLAVE_STORAGE = 'vl_idioma'; // distinto de "idioma" para no mezclarse con el panel admin
    var SOPORTADOS = ['es', 'en'];

    var DICT = {
        es: {
            // --- Títulos de pestaña ---
            'meta.inicio': 'Inmobiliaria Vives Lara - Inicio',
            'meta.propiedades': 'Inmobiliaria Vives Lara - Propiedades',
            'meta.privacidad': 'Inmobiliaria Vives Lara - Aviso de Privacidad',
            'meta.404': 'Inmobiliaria Vives Lara - Página no encontrada',

            // --- Navegación y pie ---
            'idioma.etiqueta': 'Idioma',
            'nav.inicio': 'Inicio',
            'nav.propiedades': 'Propiedades',
            'nav.contacto': 'Contacto',
            'pie.privacidad': 'Aviso de privacidad',
            'pie.contactanos': 'Contáctanos',
            'pie.derechos': '© Inmobiliaria Vives Lara - derechos reservados',

            // --- Portada ---
            'hero.titulo': 'Encuentre la casa de sus sueños en un solo click',
            'hero.subtitulo': 'Boca del Río · Riviera Veracruzana · Veracruz · Mérida',

            // --- Buscador y filtros ---
            'buscador.operacion': 'Operación (Ambas)',
            'buscador.ambas': 'Ambas (Venta y Renta)',
            'buscador.venta': 'Venta',
            'buscador.renta': 'Renta',
            'buscador.tipo': 'Tipo de propiedad',
            'buscador.tipoPrefijo': 'Tipo: ',
            'buscador.ubicacion': 'Ubicación',
            'buscador.recamaras': 'Recámaras',
            'buscador.cuartos': 'Cuartos',
            'buscador.cualquiera': 'Cualquiera',
            'buscador.maxPrecio': 'Máx. Precio',
            'buscador.precio': 'Precio:',
            'buscador.buscar': 'Buscar',
            'tipo.casa': 'Casa',
            'tipo.departamento': 'Departamento',
            'tipo.terreno': 'Terreno',
            'tipo.local': 'Local Comercial',
            'tipo.oficina': 'Oficina',
            'tipo.otro': 'Otro',

            // --- Propiedades destacadas ---
            'destacadas.titulo': 'Nuestras propiedades nuevas y destacadas',
            'destacadas.todo': 'TODO',
            'destacadas.venta': 'VENTA',
            'destacadas.renta': 'RENTA',

            // --- Zonas ---
            'zonas.eyebrow': 'EXPLORAR ZONAS',
            'zonas.titulo': 'Descubra más de nuestro mercado inmobiliario',
            'zonas.subtitulo': 'Encuentre el vecindario de sus sueños y explórelo con su asesor inmobiliario. Estamos aquí para ayudarle a encontrar el hogar perfecto para usted.',
            'zonas.uno': '{n} propiedad',
            'zonas.otros': '{n} propiedades',
            'zonas.verMas': 'VER MÁS',

            // --- Por qué elegirnos ---
            'nosotros.titulo': 'Ayudamos a las personas a comprar, alquilar y vender propiedades',
            'nosotros.subtitulo': 'La compra de una propiedad puede ser un proceso estresante, pero eliminamos las conjeturas al encontrar un agente de bienes raíces. Le ayudaremos a encontrar la combinación perfecta para comprar su casa ideal.',
            'nosotros.agentes.titulo': 'Agentes calificados',
            'nosotros.agentes.texto': 'Nuestros agentes inmobiliarios son expertos locales que brindan asesoramiento personalizado de alta calidad gracias a su conocimiento detallado del mercado.',
            'nosotros.servicio.titulo': 'Excelente servicio',
            'nosotros.servicio.texto': 'Nuestra agencia brinda un servicio excepcional a precios competitivos, con profesionales experimentados que ofrecen asesoramiento experto y atención meticulosa al detalle.',
            'nosotros.atencion.titulo': 'Atención al cliente',
            'nosotros.atencion.texto': 'Ofrecemos atención al cliente excepcional, soporte completo y consejos valiosos antes, durante y después de la compraventa para construir relaciones duraderas.',

            // --- Llamado a la acción ---
            'cta.titulo': '¿Quieres comprar o vender una casa?',
            'cta.texto': 'Contáctanos hoy y nuestro equipo de agentes experimentados te guiará en cada paso del proceso de compra-venta, desde inspecciones hasta negociaciones, con un agente dedicado a entender tus necesidades.',
            'cta.boton': 'CONTÁCTANOS',
            'cta.alt': 'Interior de casa moderna',

            // --- Contacto y formularios ---
            'contacto.titulo': 'Contáctanos',
            'contacto.correo': 'Correo',
            'contacto.chat': 'Chat virtual',
            'contacto.subtitulo': 'Déjanos un mensaje y nosotros te contactaremos a la brevedad',
            'form.nombre': 'Nombre',
            'form.telefono': 'Teléfono',
            'form.celular': 'Celular',
            'form.correo': 'Correo electrónico',
            'form.mensaje': 'Mensaje',
            'form.enviar': 'Enviar',
            'form.enviarMensaje': 'Enviar Mensaje',
            'form.enviando': 'Enviando...',
            'form.gracias': '¡Gracias!',
            'form.exito': 'Tu mensaje se ha enviado correctamente.',
            'form.ok': 'OK',
            'form.errorEnvio': 'Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.',
            'form.errorConexion': 'Hubo un error de conexión. Por favor, revisa tu internet.',

            // --- Listado ---
            'listado.tipos': 'Tipos de Propiedad',
            'listado.cargando': 'Cargando...',
            'listado.sinResultados': 'No se encontraron propiedades.',
            'listado.error': 'Error al cargar propiedades.',

            // --- Tarjetas y operaciones ---
            'tarjeta.mes': 'Mes',
            'op.venta': 'Venta',
            'op.renta': 'Renta',
            'op.ambas': 'Venta y Renta',

            // --- Detalle de propiedad ---
            'detalle.cargando': 'Cargando...',
            'detalle.cargandoDescripcion': 'Cargando descripción...',
            'detalle.fotoPrincipal': 'Foto principal',
            'detalle.miniatura': 'Miniatura {n}',
            'meta.prefijoDetalle': 'Inmobiliaria',
            'detalle.direccion': 'Dirección:',
            'detalle.ciudad': 'Ciudad:',
            'detalle.estadoGeo': 'Estado:',
            'detalle.pais': 'País:',
            'detalle.mexico': 'México',
            'detalle.ubicacion': 'Ubicación',
            'detalle.detalles': 'Detalles',
            'detalle.precio': 'Precio:',
            'detalle.area': 'Área:',
            'detalle.dormitorios': 'Dormitorios:',
            'detalle.banos': 'Baños:',
            'detalle.tipo': 'Tipo:',
            'detalle.estadoOperacion': 'Estado:',
            'detalle.contactar': 'Contactar al Agente',
            'detalle.dormitoriosN': '{n} Dormitorios',
            'detalle.banosN': '{n} Baños',
            'detalle.noEspecificado': 'No especificado',
            'detalle.noEncontrada': 'Propiedad no encontrada',
            'detalle.noExiste': 'La propiedad que busca no existe.',
            'detalle.volver': 'Volver al inicio',
            'detalle.interesado': 'Estoy interesado en la propiedad: {titulo} (ID: {id})',
            'tipoMap.casa-habitacion': 'Casa Habitación',
            'tipoMap.comercial': 'Comercial',
            'tipoMap.departamento': 'Departamento',
            'tipoMap.oficina': 'Oficina',
            'tipoMap.residencial': 'Residencial',
            'tipoMap.residencial-casa': 'Residencial (Casa)',
            'tipoMap.residencial-departamento': 'Residencial (Depto)',
            'tipoMap.residencial-terreno': 'Residencial (Terreno)',

            // --- Página 404 ---
            'e404.titulo': 'Esta página no existe',
            'e404.texto': 'Es posible que el enlace haya cambiado o que la propiedad ya no esté disponible.',
            'e404.inicio': 'Ir al inicio',
            'e404.propiedades': 'Ver propiedades',

            // --- Aviso de privacidad ---
            'priv.titulo': 'Política de Privacidad',
            'priv.subtitulo': 'Aviso de Privacidad',
            'priv.intro': 'En <strong>Inmobiliaria Vives Lara</strong> tratamos sus datos personales (como nombre, número de teléfono y correo electrónico) para:',
            'priv.l1': 'Contactarlo a través de <strong>WhatsApp</strong> sobre nuestros servicios inmobiliarios, propiedades en venta o renta y promociones.',
            'priv.l2': 'Mejorar nuestros servicios y realizar <strong>estadísticas internas</strong>.',
            'priv.l3': 'Enviarle información sobre <strong>ofertas y promociones</strong>, si así lo autoriza.',
            'priv.l4': 'Proveer los servicios y productos inmobiliarios solicitados, incluyendo <strong>asesoría, intermediación, promoción, compraventa, arrendamiento y administración</strong> de bienes inmuebles.',
            'priv.l5': 'Dar cumplimiento a las obligaciones derivadas de la <strong>relación jurídica</strong> que se genere con motivo de los servicios contratados.',
            'priv.l6': 'Integrar expedientes, <strong>validar información</strong> y realizar las gestiones necesarias para la formalización de operaciones inmobiliarias.',
            'priv.l7': 'Notificarle sobre <strong>nuevos servicios, desarrollos, propiedades y oportunidades de inversión</strong> relacionadas con el giro inmobiliario.',
            'priv.l8': 'Dar atención a sus <strong>solicitudes, dudas, aclaraciones o requerimientos</strong> relacionados con nuestros servicios.',
            'priv.l9': 'Comunicarle cambios en nuestros <strong>servicios, condiciones comerciales o políticas internas</strong>.',
            'priv.l10': 'Realizar actividades de <strong>prospección comercial, mercadotecnia, publicidad y promoción</strong> de bienes, servicios y proyectos propios o de terceros.',
            'priv.l11': 'Elaborar <strong>perfiles de clientes</strong> para ofrecer productos y servicios acordes a sus intereses y necesidades.',
            'priv.l12': 'Realizar evaluaciones periódicas sobre la <strong>calidad de nuestros servicios y atención al cliente</strong>.',
            'priv.l13': 'Cumplir con <strong>obligaciones legales, regulatorias o requerimientos</strong> de autoridades competentes.',
            'priv.p2': 'Sus datos <strong>no serán compartidos con terceros</strong> sin su consentimiento, y se aplican medidas de seguridad para protegerlos. Los datos se conservarán <strong>mientras sea necesario</strong> para los fines mencionados.',
            'priv.p3': 'Usted puede ejercer sus derechos de <strong>acceso, rectificación, cancelación u oposición (ARCO)</strong> enviando un correo a <strong>admin@viveslarabienesraices.com</strong>.',
            'priv.p4': '<strong>Al enviar mi información, acepto que Inmobiliaria Vives Lara use mis datos para contactarme vía WhatsApp y para los fines mencionados en este Aviso de Privacidad.</strong>'
        },

        en: {
            'meta.inicio': 'Vives Lara Real Estate - Home',
            'meta.propiedades': 'Vives Lara Real Estate - Properties',
            'meta.privacidad': 'Vives Lara Real Estate - Privacy Notice',
            'meta.404': 'Vives Lara Real Estate - Page not found',

            'idioma.etiqueta': 'Language',
            'nav.inicio': 'Home',
            'nav.propiedades': 'Properties',
            'nav.contacto': 'Contact',
            'pie.privacidad': 'Privacy notice',
            'pie.contactanos': 'Contact us',
            'pie.derechos': '© Inmobiliaria Vives Lara - all rights reserved',

            'hero.titulo': 'Find the home of your dreams in a single click',
            'hero.subtitulo': 'Boca del Río · Veracruz Riviera · Veracruz · Mérida',

            'buscador.operacion': 'Operation (Both)',
            'buscador.ambas': 'Both (Sale & Rent)',
            'buscador.venta': 'Sale',
            'buscador.renta': 'Rent',
            'buscador.tipo': 'Property type',
            'buscador.tipoPrefijo': 'Type: ',
            'buscador.ubicacion': 'Location',
            'buscador.recamaras': 'Bedrooms',
            'buscador.cuartos': 'Bedrooms',
            'buscador.cualquiera': 'Any',
            'buscador.maxPrecio': 'Max. Price',
            'buscador.precio': 'Price:',
            'buscador.buscar': 'Search',
            'tipo.casa': 'House',
            'tipo.departamento': 'Apartment',
            'tipo.terreno': 'Land',
            'tipo.local': 'Commercial space',
            'tipo.oficina': 'Office',
            'tipo.otro': 'Other',

            'destacadas.titulo': 'Our new and featured properties',
            'destacadas.todo': 'ALL',
            'destacadas.venta': 'SALE',
            'destacadas.renta': 'RENT',

            'zonas.eyebrow': 'EXPLORE AREAS',
            'zonas.titulo': 'Discover more of our real estate market',
            'zonas.subtitulo': 'Find the neighborhood of your dreams and explore it with your real estate advisor. We are here to help you find the perfect home.',
            'zonas.uno': '{n} property',
            'zonas.otros': '{n} properties',
            'zonas.verMas': 'VIEW MORE',

            'nosotros.titulo': 'We help people buy, rent and sell properties',
            'nosotros.subtitulo': 'Buying a property can be a stressful process, but we take the guesswork out by connecting you with a real estate agent. We will help you find the perfect match to buy your ideal home.',
            'nosotros.agentes.titulo': 'Qualified agents',
            'nosotros.agentes.texto': 'Our real estate agents are local experts who provide high-quality, personalized advice thanks to their detailed knowledge of the market.',
            'nosotros.servicio.titulo': 'Excellent service',
            'nosotros.servicio.texto': 'Our agency delivers exceptional service at competitive prices, with experienced professionals who offer expert advice and meticulous attention to detail.',
            'nosotros.atencion.titulo': 'Customer care',
            'nosotros.atencion.texto': 'We offer exceptional customer care, complete support and valuable advice before, during and after the transaction to build lasting relationships.',

            'cta.titulo': 'Do you want to buy or sell a home?',
            'cta.texto': 'Contact us today and our team of experienced agents will guide you through every step of the buying and selling process, from inspections to negotiations, with a dedicated agent who understands your needs.',
            'cta.boton': 'CONTACT US',
            'cta.alt': 'Modern home interior',

            'contacto.titulo': 'Contact us',
            'contacto.correo': 'Email',
            'contacto.chat': 'Virtual chat',
            'contacto.subtitulo': 'Leave us a message and we will get back to you shortly',
            'form.nombre': 'Name',
            'form.telefono': 'Phone',
            'form.celular': 'Mobile',
            'form.correo': 'Email address',
            'form.mensaje': 'Message',
            'form.enviar': 'Send',
            'form.enviarMensaje': 'Send Message',
            'form.enviando': 'Sending...',
            'form.gracias': 'Thank you!',
            'form.exito': 'Your message has been sent successfully.',
            'form.ok': 'OK',
            'form.errorEnvio': 'There was an error sending your message. Please try again.',
            'form.errorConexion': 'There was a connection error. Please check your internet.',

            'listado.tipos': 'Property Types',
            'listado.cargando': 'Loading...',
            'listado.sinResultados': 'No properties found.',
            'listado.error': 'Error loading properties.',

            'tarjeta.mes': 'Month',
            'op.venta': 'Sale',
            'op.renta': 'Rent',
            'op.ambas': 'Sale & Rent',

            'detalle.cargando': 'Loading...',
            'detalle.cargandoDescripcion': 'Loading description...',
            'detalle.fotoPrincipal': 'Main photo',
            'detalle.miniatura': 'Thumbnail {n}',
            'meta.prefijoDetalle': 'Real Estate',
            'detalle.direccion': 'Address:',
            'detalle.ciudad': 'City:',
            'detalle.estadoGeo': 'State:',
            'detalle.pais': 'Country:',
            'detalle.mexico': 'Mexico',
            'detalle.ubicacion': 'Location',
            'detalle.detalles': 'Details',
            'detalle.precio': 'Price:',
            'detalle.area': 'Area:',
            'detalle.dormitorios': 'Bedrooms:',
            'detalle.banos': 'Bathrooms:',
            'detalle.tipo': 'Type:',
            'detalle.estadoOperacion': 'Status:',
            'detalle.contactar': 'Contact the Agent',
            'detalle.dormitoriosN': '{n} Bedrooms',
            'detalle.banosN': '{n} Bathrooms',
            'detalle.noEspecificado': 'Not specified',
            'detalle.noEncontrada': 'Property not found',
            'detalle.noExiste': 'The property you are looking for does not exist.',
            'detalle.volver': 'Back to home',
            'detalle.interesado': 'I am interested in the property: {titulo} (ID: {id})',
            'tipoMap.casa-habitacion': 'Residential House',
            'tipoMap.comercial': 'Commercial',
            'tipoMap.departamento': 'Apartment',
            'tipoMap.oficina': 'Office',
            'tipoMap.residencial': 'Residential',
            'tipoMap.residencial-casa': 'Residential (House)',
            'tipoMap.residencial-departamento': 'Residential (Apt.)',
            'tipoMap.residencial-terreno': 'Residential (Land)',

            'e404.titulo': 'This page does not exist',
            'e404.texto': 'The link may have changed, or the property may no longer be available.',
            'e404.inicio': 'Go to home',
            'e404.propiedades': 'View properties',

            // Traducción de cortesía: el texto legal vigente es el aviso en español.
            'priv.titulo': 'Privacy Policy',
            'priv.subtitulo': 'Privacy Notice',
            'priv.intro': 'At <strong>Inmobiliaria Vives Lara</strong> we process your personal data (such as name, phone number and email address) in order to:',
            'priv.l1': 'Contact you through <strong>WhatsApp</strong> about our real estate services, properties for sale or rent, and promotions.',
            'priv.l2': 'Improve our services and compile <strong>internal statistics</strong>.',
            'priv.l3': 'Send you information about <strong>offers and promotions</strong>, if you authorize it.',
            'priv.l4': 'Provide the real estate services and products requested, including <strong>advisory, brokerage, promotion, sale, leasing and management</strong> of real estate.',
            'priv.l5': 'Comply with the obligations arising from the <strong>legal relationship</strong> created by the services contracted.',
            'priv.l6': 'Compile files, <strong>validate information</strong> and carry out the steps necessary to formalize real estate transactions.',
            'priv.l7': 'Notify you about <strong>new services, developments, properties and investment opportunities</strong> related to the real estate business.',
            'priv.l8': 'Handle your <strong>requests, questions, clarifications or requirements</strong> related to our services.',
            'priv.l9': 'Inform you of changes to our <strong>services, commercial terms or internal policies</strong>.',
            'priv.l10': 'Carry out <strong>commercial prospecting, marketing, advertising and promotion</strong> of goods, services and projects, our own or those of third parties.',
            'priv.l11': 'Build <strong>customer profiles</strong> to offer products and services in line with your interests and needs.',
            'priv.l12': 'Conduct periodic evaluations of the <strong>quality of our services and customer care</strong>.',
            'priv.l13': 'Comply with <strong>legal and regulatory obligations or requirements</strong> of competent authorities.',
            'priv.p2': 'Your data <strong>will not be shared with third parties</strong> without your consent, and security measures are applied to protect it. Data will be kept for <strong>as long as necessary</strong> for the purposes mentioned.',
            'priv.p3': 'You may exercise your rights of <strong>access, rectification, cancellation or opposition (ARCO)</strong> by sending an email to <strong>admin@viveslarabienesraices.com</strong>.',
            'priv.p4': '<strong>By submitting my information, I agree that Inmobiliaria Vives Lara may use my data to contact me via WhatsApp and for the purposes stated in this Privacy Notice.</strong>'
        }
    };

    function idiomaGuardado() {
        try {
            var guardado = localStorage.getItem(CLAVE_STORAGE);
            if (SOPORTADOS.indexOf(guardado) !== -1) return guardado;
        } catch (e) { /* localStorage bloqueado: se usa el predeterminado */ }
        return 'es';
    }

    var idioma = idiomaGuardado();

    // t("zonas.otros", { n: 3 }) -> "3 propiedades" / "3 properties". Si falta la clave en el idioma, usa español.
    function t(clave, vars) {
        var texto = (DICT[idioma] && DICT[idioma][clave]);
        if (texto === undefined) texto = DICT.es[clave];
        if (texto === undefined) return clave;
        if (vars) {
            Object.keys(vars).forEach(function (k) {
                texto = texto.split('{' + k + '}').join(vars[k]);
            });
        }
        return texto;
    }

    // Como t(), pero con un texto de respaldo cuando la clave no existe (p. ej. datos que vienen de la base de datos)
    function tOr(clave, respaldo) {
        var existe = (DICT[idioma] && DICT[idioma][clave] !== undefined) || DICT.es[clave] !== undefined;
        return existe ? t(clave) : respaldo;
    }

    // Cambia solo el primer texto del elemento y conserva sus hijos (p. ej. el ícono <i> de los desplegables)
    function ponerTexto(el, texto) {
        if (el.children.length === 0) { el.textContent = texto; return; }
        for (var i = 0; i < el.childNodes.length; i++) {
            var nodo = el.childNodes[i];
            if (nodo.nodeType === 3 && nodo.nodeValue.trim() !== '') {
                nodo.nodeValue = texto + ' ';
                return;
            }
        }
        el.insertBefore(document.createTextNode(texto + ' '), el.firstChild);
    }

    function aplicar(raiz) {
        raiz = raiz || document;
        raiz.querySelectorAll('[data-i18n]').forEach(function (el) { ponerTexto(el, t(el.getAttribute('data-i18n'))); });
        raiz.querySelectorAll('[data-i18n-html]').forEach(function (el) { el.innerHTML = t(el.getAttribute('data-i18n-html')); });
        raiz.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) { el.placeholder = t(el.getAttribute('data-i18n-placeholder')); });
        raiz.querySelectorAll('[data-i18n-alt]').forEach(function (el) { el.alt = t(el.getAttribute('data-i18n-alt')); });
        raiz.querySelectorAll('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'))); });
        document.documentElement.lang = idioma;
        document.querySelectorAll('.lang-switch [data-lang]').forEach(function (btn) {
            var activo = btn.getAttribute('data-lang') === idioma;
            btn.classList.toggle('activo', activo);
            btn.setAttribute('aria-pressed', activo ? 'true' : 'false');
        });
    }

    function setIdioma(nuevo) {
        if (SOPORTADOS.indexOf(nuevo) === -1 || nuevo === idioma) return;
        try { localStorage.setItem(CLAVE_STORAGE, nuevo); } catch (e) { /* sin persistencia */ }
        window.location.reload(); // recarga para que también se regeneren los textos que arma main.js
    }

    window.i18n = {
        get idioma() { return idioma; },
        t: t,
        tOr: tOr,
        aplicar: aplicar,
        setIdioma: setIdioma
    };

    document.querySelectorAll('.lang-switch [data-lang]').forEach(function (btn) {
        btn.addEventListener('click', function () { setIdioma(btn.getAttribute('data-lang')); });
    });

    aplicar(document); // el script va al final del <body>: el HTML ya existe
})();
