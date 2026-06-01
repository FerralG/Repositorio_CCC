const API_BASE = window.location.hostname === 'localhost'
  ? 'http://localhost:3000'
  : 'https://mx.viveslarabienesraices.com',
    'https://viveslarabienesraices.com';

// =============================================

// LÓGICA GLOBAL (Se ejecuta en todas las páginas)

// =============================================

document.addEventListener('DOMContentLoaded', function() {



    // --- Lógica de Dropdowns (Global) ---

    // ( ... código idéntico de la fase anterior ... )

    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {

        toggle.addEventListener('click', function(event) {

            event.preventDefault();

            event.stopPropagation();

            const container = this.closest('.search-dropdown-container');

            closeAllDropdowns(container);

            container.classList.toggle('open');

        });

    });

    document.addEventListener('click', () => closeAllDropdowns(null));

    function closeAllDropdowns(exceptThisOne) {

        document.querySelectorAll('.search-dropdown-container.open').forEach(container => {

            if (container !== exceptThisOne) container.classList.remove('open');

        });

    }

    function formatCurrency(value) {

        return new Intl.NumberFormat('es-MX', {

            style: 'currency',

            currency: 'MXN',

            maximumFractionDigits: 0

        }).format(value);

    }

    // =============================================
    // ¡¡PEGA AQUÍ LA FUNCIÓN QUE FALTA!!
    // =============================================
   // =============================================
    // FUNCIÓN PARA CREAR TARJETAS (¡TODA LA TARJETA ES EL LINK!)
    // (Esta versión es más simple y quita el botón)
    // =============================================
    // =============================================
    // FUNCIÓN PARA CREAR TARJETAS (¡CON ICONOS CORREGIDOS!)
    // =============================================
    function createPropertyCardHTML(property) {
        const priceFormatted = formatCurrency(property.price); 
        let priceLabel = property.operation === 'renta' ? ' / Mes' : '';
        const operationText = property.operation.charAt(0).toUpperCase() + property.operation.slice(1);

        // ¡OJO! El elemento principal ahora es un <a> (enlace)
        return `
        <a href="/PagVL/propiedad-detalle.html?id=${property.id}" class="property-card">
            
            <div class="property-image-container"> 
                <img src="${property.imageUrl}" alt="${property.title}">
                <span class="operation-badge ${property.operation}">${operationText}</span>
            </div>

            <div class="property-content">
                <h3 class="property-title">${property.title}</h3>
                <p class="property-location">${property.locationName}</p>
                
                <div class="property-features">
                    
                    <span class="feature">
                        <i class="fas fa-bed"></i> ${property.bedrooms}
                    </span>
                    <span class="feature">
                        <i class="fas fa-bath"></i> ${property.bathrooms} 
                    </span>
                    <span class="feature">
                        <i class="fas fa-car"></i> ${property.parking}
                    </span>
                    <span class="feature">
                        <i class="fas fa-ruler-combined"></i> ${property.area} m²
                    </span>
                </div>
                
                <p class="property-price">${priceFormatted} ${priceLabel}</p>

            </div>
        </a>
        `;
    }
    // =G============================================
    // FIN DE LA FUNCIÓN
    // =============================================



    // =============================================

    // LÓGICA ESPECÍFICA DE INDEX.HTML

    // =============================================

    const heroSearchForm = document.getElementById('hero-search-form');

    if (heroSearchForm) {

        // ( ... código idéntico de la fase anterior ... )

        let heroSearchState = { operacion: 'ambas', tipo: null, ubicacion: 'todas', recamaras: 'cualquiera', precio: 15000000 };

        setupDropdownListener('dropdown-operacion', 'operacion');

        setupDropdownListener('dropdown-tipo', 'tipo');

        setupDropdownListener('dropdown-ubicacion', 'ubicacion');

        setupDropdownListener('dropdown-recamaras', 'recamaras');

        function setupDropdownListener(menuId, stateKey) {

            const menu = document.getElementById(menuId);

            if (menu) {

                menu.addEventListener('click', function(e) {

                    if (e.target.tagName === 'A') {

                        e.preventDefault();

                        const value = e.target.dataset.value;

                        const toggleBtn = menu.closest('.search-dropdown-container').querySelector('.dropdown-toggle');

                        heroSearchState[stateKey] = value;

                        if (stateKey === 'tipo') { toggleBtn.firstChild.textContent = 'Tipo: ' + e.target.textContent; }

                        else { toggleBtn.firstChild.textContent = e.target.textContent; }

                        closeAllDropdowns(null);

                    }

                });

            }

        }

        const priceSliderHero = document.getElementById('price-slider');

        // --- LÓGICA DEL SLIDER DEL HERO (CORREGIDO) ---

    if (priceSliderHero) {

        priceSliderHero.addEventListener('input', () => { // <--- ¡LLAVE!

            let price = parseInt(priceSliderHero.value);

            let maxPrice = parseInt(priceSliderHero.max); // Lee el max="15000000" del HTML

            let text = formatCurrency(price);

            if (price >= maxPrice) {

                text += "+"; // Añade el "+" si está al máximo

            }

            document.getElementById('price-value').textContent = text;

        }); // <--- ¡LLAVE!



        priceSliderHero.addEventListener('change', () => { heroSearchState.precio = parseInt(priceSliderHero.value); });

        document.getElementById('dropdown-precio').addEventListener('click', e => e.stopPropagation());

    }

        heroSearchForm.addEventListener('submit', function(e) {

            e.preventDefault();

            const params = new URLSearchParams();

            if (heroSearchState.operacion !== 'ambas') params.append('operacion', heroSearchState.operacion);

            if (heroSearchState.tipo) params.append('tipo', heroSearchState.tipo);

            if (heroSearchState.ubicacion !== 'todas') params.append('ubicacion', heroSearchState.ubicacion);

            if (heroSearchState.recamaras !== 'cualquiera') params.append('recamaras', heroSearchState.recamaras);

           

let maxPriceHero = parseInt(document.getElementById('price-slider').max);

if (heroSearchState.precio < maxPriceHero) params.append('precio', heroSearchState.precio);

            window.location.href = `/PagVL/propiedades.html?${params.toString()}`;

        });



        // --- Lógica Filtros Destacados (Fase 3) ---

        const operationFilterGroup = document.getElementById('filter-operation');

        const locationFilterGroup = document.getElementById('filter-location');

        const propertiesContainerIndex = document.getElementById('properties-grid-container');

        if(operationFilterGroup && locationFilterGroup && propertiesContainerIndex) {

            let activeOperationFilter = 'todo';

            let activeLocationFilter = 'veracruz';

            let allPropertiesIndex = [];

            function renderPropertiesIndex() {

            propertiesContainerIndex.innerHTML = '';

            const filtered = allPropertiesIndex.filter(prop => {

                const opMatch = (activeOperationFilter === 'todo') || (prop.operation === activeOperationFilter) || (prop.operation === 'ambas');
               

                // ¡LÍNEA CORREGIDA! compara con la variable correcta.

                const locMatch = (activeLocationFilter === 'todo') || (prop.location === activeLocationFilter);

               

                return opMatch && locMatch;

            });

            if (filtered.length === 0) {

                propertiesContainerIndex.innerHTML = '<p class="no-results">No se encontraron propiedades.</p>';

            } else {

                // Tomamos solo las primeras 6 para la landing page

                filtered.slice(0, 6).forEach(prop => {

                    propertiesContainerIndex.innerHTML += createPropertyCardHTML(prop);

                });

            }

        }

            operationFilterGroup.addEventListener('click', (e) => {

                if (e.target.classList.contains('filter-btn')) {

                    operationFilterGroup.querySelector('.active').classList.remove('active');

                    e.target.classList.add('active');

                    activeOperationFilter = e.target.dataset.filter;

                    renderPropertiesIndex();

                }

            });

            locationFilterGroup.addEventListener('click', (e) => {

                e.preventDefault();

                if (e.target.classList.contains('filter-location-link')) {

                    locationFilterGroup.querySelector('.active').classList.remove('active');

                    e.target.classList.add('active');

                    activeLocationFilter = e.target.dataset.filter;

                    renderPropertiesIndex();

                }

            });

            propertiesContainerIndex.innerHTML = '<p class="no-results">Cargando...</p>';

            fetch(API_BASE + '/api/public/propiedades')

                .then(r => r.json())

                .then(data => {

                    allPropertiesIndex = data.map(p => ({

                        id: p.id,

                        title: p.propiedad,

                        operation: p.tipo_operacion,

                        type: p.tipo_inmueble,

                        price: parseFloat(p.precio),

                        bedrooms: p.recamaras,

                        bathrooms: p.banos,

                        parking: p.estacionamiento,

                        area: p.superficie_construccion_m2,

                        address: p.direccion,

                        imageUrl: p.imagen_principal,

                        location: p.zona ? p.zona.toLowerCase().replace(/\s+/g, '-') : '',

                        locationName: p.zona || ''

                    }));

                    renderPropertiesIndex();

                    const countSpans = document.querySelectorAll('.location-card .property-count');

                    if (countSpans.length > 0) {

                        const locationCounts = {};

                        for (const prop of allPropertiesIndex) {

                            locationCounts[prop.location] = (locationCounts[prop.location] || 0) + 1;

                        }

                        countSpans.forEach(span => {

                            const location = span.dataset.location;

                            const count = locationCounts[location] || 0;

                            span.textContent = `${count} ${count === 1 ? 'Property' : 'Properties'}`;

                        });

                    }

                })

                .catch(() => {

                    propertiesContainerIndex.innerHTML = '<p class="no-results">Error al cargar propiedades.</p>';

                });

        }

    }



    // =============================================

    // LÓGICA ESPECÍFICA DE PROPIEDADES.HTML

    // =============================================

    const sidebarFilterList = document.getElementById('sidebar-filter-list');

    if (sidebarFilterList) {

        // ( ... código idéntico de la fase anterior ... )

        const urlParams = new URLSearchParams(window.location.search);

        let state = { operation: urlParams.get('operacion') || 'ambas', types: urlParams.get('tipo') ? [urlParams.get('tipo')] : [], location: urlParams.get('ubicacion') || 'todas', bedrooms: urlParams.get('recamaras') || 'cualquiera', price: parseInt(urlParams.get('precio')) || 15000000 };

        function setInitialFilters() {

            const opBtn = document.querySelector('[data-dropdown-id="dropdown-operacion-page"]');

            const opLink = document.querySelector(`#dropdown-operacion-page [data-value="${state.operation}"]`);

            if (opBtn && opLink) opBtn.firstChild.textContent = opLink.textContent;

            state.types.forEach(type => { const checkbox = sidebarFilterList.querySelector(`input[value="${type}"]`); if (checkbox) checkbox.checked = true; });

            const locBtn = document.querySelector('[data-dropdown-id="dropdown-ubicacion-page"]');

            const locLink = document.querySelector(`#dropdown-ubicacion-page [data-value="${state.location}"]`);

            if (locBtn && locLink) locBtn.firstChild.textContent = locLink.textContent;

            const bedBtn = document.querySelector('[data-dropdown-id="dropdown-recamaras-page"]');

            const bedLink = document.querySelector(`#dropdown-recamaras-page [data-value="${state.bedrooms}"]`);

            if (bedBtn && bedLink) bedBtn.firstChild.textContent = bedLink.textContent;

            const priceSliderPage = document.getElementById('price-slider-page');

            const priceValuePage = document.getElementById('price-value-page');

            if (priceSliderPage && priceValuePage) { priceSliderPage.value = state.price; priceValuePage.textContent = formatCurrency(state.price); }

        }

        const propertiesContainerPage = document.getElementById('properties-grid-page-container');

        let allPropertiesPage = [];

        // --- 4. Función de Renderizado (¡CORREGIDA!) ---

        // --- 4. Función de Renderizado (¡CORREGIDA Y MÁS SEGURA!) ---
        function renderPropertiesPage() {
            propertiesContainerPage.innerHTML = '';

            // --- ¡AQUÍ ESTÁ LA CORRECCIÓN! ---
            // 1. Buscamos el slider de precio UNA SOLA VEZ, AFUERA del filtro.
            const priceSlider = document.getElementById('price-slider-page');
            
            // 2. Obtenemos el valor máximo.
            //    Si el slider existe (priceSlider no es null), lee su .max.
            //    Si NO existe (es null), usamos 15000000 como valor por defecto.
            //    ¡Esto evita que el código "truene"!
            const maxSliderPrice = priceSlider ? parseInt(priceSlider.max) : 15000000;
            // --- FIN DE LA CORRECCIÓN ---

            const filtered = allPropertiesPage.filter(prop => {
                // 1. Filtro de Operación ¡NUEVO!
                const operationMatch = (state.operation === 'ambas') || (prop.operation === state.operation) || (prop.operation === 'ambas');
                
                // 2. Filtro de Tipo
                const typeMatch = (state.types.length === 0) || state.types.includes(prop.type);
                
                // 3. Filtro de Ubicación (¡LÍNEA CORREGIDA!)
                const locationMatch = (state.location === 'todas') || (prop.location === state.location);
                
                // 4. Filtro de Recámaras
                const bedroomsMatch = (state.bedrooms === 'cualquiera') ||
                                      (state.bedrooms === '5+' ? prop.bedrooms >= 5 : prop.bedrooms == state.bedrooms);
                
                // 5. Filtro de Precio (Usando la variable que ya definimos)
                const priceMatch = (state.price >= maxSliderPrice) || (prop.price <= state.price);
                
                // Debe cumplir TODOS
                return operationMatch && typeMatch && locationMatch && bedroomsMatch && priceMatch;
            });
            
            if (filtered.length === 0) {
                propertiesContainerPage.innerHTML = '<p class="no-results">No se encontraron propiedades.</p>';
            } else {
                filtered.forEach(prop => {
                    propertiesContainerPage.innerHTML += createPropertyCardHTML(prop);
                });
            }
        }

        sidebarFilterList.addEventListener('change', (e) => {

            if (e.target.type === 'checkbox') {

                state.types = Array.from(sidebarFilterList.querySelectorAll('input:checked')).map(cb => cb.value);

                renderPropertiesPage();

            }

        });

        ['dropdown-operacion-page', 'dropdown-ubicacion-page', 'dropdown-recamaras-page'].forEach(id => {

            const menu = document.getElementById(id);

            if (menu) {

                menu.addEventListener('click', (e) => {

                    if (e.target.tagName === 'A') {

                        e.preventDefault();

                        const value = e.target.dataset.value;

                        const toggleBtn = menu.closest('.search-dropdown-container').querySelector('.dropdown-toggle');

                        toggleBtn.firstChild.textContent = e.target.textContent;

                        if (id.includes('operacion')) state.operation = value;

                        if (id.includes('ubicacion')) state.location = value;

                        if (id.includes('recamaras')) state.bedrooms = value;

                        renderPropertiesPage();

                    }

                });

            }

        });

        const priceSliderPage = document.getElementById('price-slider-page');

        // --- LÓGICA DEL SLIDER DE PROPIEDADES (CORREGIDO) ---

if (priceSliderPage) {

    priceSliderPage.addEventListener('input', () => { // <--- ¡LLAVE!

        let price = parseInt(priceSliderPage.value);

        let maxPrice = parseInt(priceSliderPage.max); // Lee el max="15000000" del HTML

        let text = formatCurrency(price);

        if (price >= maxPrice) {

            text += "+"; // Añade el "+" si está al máximo

        }

        document.getElementById('price-value-page').textContent = text;

    }); // <--- ¡LLAVE!



    priceSliderPage.addEventListener('change', () => { state.price = parseInt(priceSliderPage.value); renderPropertiesPage(); });

}

        setInitialFilters();

        propertiesContainerPage.innerHTML = '<p class="no-results">Cargando...</p>';

        fetch(API_BASE + '/api/public/propiedades')

            .then(r => r.json())

            .then(data => {

                allPropertiesPage = data.map(p => ({

                    id: p.id,

                    title: p.propiedad,

                    operation: p.tipo_operacion,

                    type: p.tipo_inmueble,

                    price: parseFloat(p.precio),

                    bedrooms: p.recamaras,

                    bathrooms: p.banos,

                    parking: p.estacionamiento,

                    area: p.superficie_construccion_m2,

                    address: p.direccion,

                    imageUrl: p.imagen_principal,

                    location: p.zona ? p.zona.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, '-') : '',

                    locationName: p.zona || ''

                }));

                renderPropertiesPage();

            })

            .catch(() => {

                propertiesContainerPage.innerHTML = '<p class="no-results">Error al cargar propiedades.</p>';

            });

    }





    // =============================================

    // LÓGICA ESPECÍFICA DE PROPIEDAD-DETALLE.HTML (¡¡FLECHAS ARREGLADAS!!)

    // =============================================

   

    const detailTitle = document.getElementById('detail-property-title');

   

    if (detailTitle) {

        // --- 1. Obtener el ID de la URL ---

        const urlParams = new URLSearchParams(window.location.search);

        const propertyId = urlParams.get('id');



        // --- 2. Cargar la propiedad desde la API ---

        fetch(API_BASE + `/api/public/propiedades/${propertyId}`)

            .then(r => {

                if (!r.ok) throw new Error('no encontrada');

                return r.json();

            })

            .then(data => {

                const property = {

                    id: data.id,

                    title: data.propiedad,

                    operation: data.tipo_operacion,

                    type: data.tipo_inmueble,

                    price: parseFloat(data.precio),

                    bedrooms: data.recamaras,

                    bathrooms: data.banos,

                    parking: data.estacionamiento,

                    area: data.superficie_construccion_m2,

                    address: data.direccion,

                    locationName: data.zona || '',

                    coordinates: data.coordenadas || null,

                    galleryImages: (data.imagenes || []).map(img => img.url_archivo),

                    descriptionHeadline: '',

                    descriptionBody: []

                };



        // --- 4. Rellenar la página ---

        const typeMap = { 'casa-habitacion': 'Casa Habitación', 'comercial': 'Comercial', 'departamento': 'Departamento', 'oficina': 'Oficina', 'residencial': 'Residencial', 'residencial-casa': 'Residencial (Casa)', 'residencial-departamento': 'Residencial (Depto)', 'residencial-terreno': 'Residencial (Terreno)' };

        const operationMap = { 'venta': 'Venta', 'renta': 'Renta' };

       

        const typeText = typeMap[property.type] || 'No especificado';

        const operationText = operationMap[property.operation] || 'No especificado';

        const priceText = formatCurrency(property.price) + (property.operation === 'renta' ? ' / Mes' : '');

        const [ciudad, estado] = property.locationName.split(', ');



        document.title = `Inmobiliaria | ${property.title}`;

        detailTitle.textContent = property.title;

        document.getElementById('detail-property-price').textContent = priceText;



        // --- Rellenar Galería (¡CON LÓGICA DE FLECHAS!) ---

        const mainImage = document.getElementById('gallery-main-image-src');

        const thumbnailsContainer = document.getElementById('gallery-thumbnails-container');

        const arrowLeft = document.querySelector('.gallery-nav.left');

        const arrowRight = document.querySelector('.gallery-nav.right');

        let currentImageIndex = 0;

        let allThumbnails = []; // Para guardar los elementos <img>



        // Limpiar

        thumbnailsContainer.innerHTML = '';

       

        // Función central para cambiar de imagen

        function showImage(index) {

            // Actualizar índice

            currentImageIndex = index;

           

            // Poner imagen principal

            mainImage.src = property.galleryImages[index];

           

            // Actualizar clase 'active' en miniaturas

            allThumbnails.forEach((thumb, idx) => {

                if (idx === index) {

                    thumb.classList.add('active');

                } else {

                    thumb.classList.remove('active');

                }

            });

        }



        // Crear miniaturas

        property.galleryImages.forEach((imgUrl, index) => {

            const thumb = document.createElement('img');

            thumb.src = imgUrl;

            thumb.alt = `Miniatura ${index + 1}`;

            thumb.classList.add('thumbnail');

            if (index === 0) thumb.classList.add('active');

           

            thumb.addEventListener('click', () => {

                showImage(index); // Llama a la función central

            });

           

            thumbnailsContainer.appendChild(thumb);

            allThumbnails.push(thumb); // Guardar referencia

        });

       

        // Poner imagen principal inicial

        mainImage.src = property.galleryImages[0];



        // ¡AÑADIR LÓGICA A LAS FLECHAS!

        arrowRight.addEventListener('click', () => {

            let nextIndex = currentImageIndex + 1;

            // Si llega al final, vuelve al inicio (0)

            if (nextIndex >= property.galleryImages.length) {

                nextIndex = 0;

            }

            showImage(nextIndex);

        });

       

        arrowLeft.addEventListener('click', () => {

            let prevIndex = currentImageIndex - 1;

            // Si está en el inicio, va al final

            if (prevIndex < 0) {

                prevIndex = property.galleryImages.length - 1;

            }

            showImage(prevIndex);

        });



        // Rellenar Barra de Características

        document.querySelector('#detail-feature-type span').textContent = typeText;

        document.querySelector('#detail-feature-bedrooms span').textContent = `${property.bedrooms} Dormitorios`;

        document.querySelector('#detail-feature-bathrooms span').textContent = `${property.bathrooms} Baños`;

        document.querySelector('#detail-feature-area span').textContent = `${property.area} m²`;

       

        // Rellenar Descripción

        document.getElementById('detail-description-headline').textContent = property.descriptionHeadline;

        const descBody = document.getElementById('detail-description-body');

        descBody.innerHTML = ''; // Limpiar

        property.descriptionBody.forEach(paragraph => {

            descBody.innerHTML += `<p>${paragraph}</p>`;

        });



        // Rellenar Tabla Blanca (Ubicación)

        document.getElementById('detail-table-direccion').textContent = property.address;

        document.getElementById('detail-table-ciudad').textContent = ciudad || 'No especificado';

        document.getElementById('detail-table-estado-geo').textContent = estado || 'No especificado';



        // Rellenar Tabla Azul (Detalles)

        document.getElementById('detail-table-precio-azul').textContent = priceText;

        document.getElementById('detail-table-area-azul').textContent = `${property.area} m²`;

        document.getElementById('detail-table-dormitorios-azul').textContent = property.bedrooms;

        document.getElementById('detail-table-banos-azul').textContent = property.bathrooms;

        document.getElementById('detail-table-tipo-azul').textContent = typeText;

        document.getElementById('detail-table-estado-azul').textContent = operationText;



        // Rellenar Formulario de Contacto

        const contactMessage = document.getElementById('contact-message-detail');

        if (contactMessage) {

            contactMessage.value = `Estoy interesado en la propiedad: ${property.title} (ID: ${property.id})`;

        }

        // =============================================
        // LÓGICA DEL MAPA DE GOOGLE (NUEVO)
        // =============================================
        const mapIframe = document.getElementById('detail-map-iframe');
        
        
        
if (mapIframe) {
    if (property.coordinates) {
        const coords = property.coordinates.replace(/\s/g, '');
        mapIframe.src = `https://maps.google.com/maps?q=${coords}&hl=es&z=15&output=embed`;
    } else {
        mapIframe.src = `https://maps.google.com/maps?q=19.1738,-96.1342&hl=es&z=12&output=embed`;
    }
}

            })

            .catch(() => {

                detailTitle.textContent = 'Propiedad no encontrada';

                document.querySelector('.property-detail-page .container').innerHTML = '<h1>Error 404</h1><p>La propiedad que busca no existe. <a href="/PagVL/index.html">Volver al inicio</a>.</p>';

            });

    }
// --- Inicia Lógica de Formularios ---

// 1. Añadimos el HTML del pop-up al body (lo crea JS)
    // ¡¡OJO AQUÍ!! Le puse style="display: none;" para que nazca oculto sí o sí.
    const successMessageHTML = `
        <div class="form-overlay" style="display: none;"></div>
        <div class="form-success-message" style="display: none;">
            <i class="fas fa-check-circle icon-check"></i>
            <h4>¡Gracias!</h4>
            <p>Tu mensaje se ha enviado correctamente.</p>
            <button class="form-success-ok-btn">OK</button>
        </div>
    `;
document.body.insertAdjacentHTML('beforeend', successMessageHTML);

// 2. Obtenemos los elementos del pop-up
const formOverlay = document.querySelector('.form-overlay');
const formSuccessMessage = document.querySelector('.form-success-message');
const formSuccessOkBtn = document.querySelector('.form-success-ok-btn');

// 3. Función para mostrar/ocultar el pop-up
function showSuccessPopup() {
    formOverlay.style.display = 'block';
    formSuccessMessage.style.display = 'block';
}
function hideSuccessPopup() {
    formOverlay.style.display = 'none';
    formSuccessMessage.style.display = 'none';
}

// 4. Asignamos el clic al botón "OK"
formSuccessOkBtn.addEventListener('click', hideSuccessPopup);

// 5. La URL de tu Formspree
const formspreeEndpoint = 'https://formspree.io/f/mzzklqro';

// 6. Asignamos la lógica a TODOS tus formularios
//    Buscamos por la CLASE '.contact-form'
document.querySelectorAll('.contact-form').forEach(form => {
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // ¡Prevenimos la recarga de página!

        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;

        const formData = new FormData(form);

        try {
            const response = await fetch(formspreeEndpoint, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                form.reset(); // ¡Borra el formulario!
                showSuccessPopup(); // ¡Muestra el pop-up de "Gracias"!
            } else {
                alert('Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.');
            }

        } catch (error) {
            alert('Hubo un error de conexión. Por favor, revisa tu internet.');
        
        } finally {
            // Regresamos el botón a la normalidad
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }
    });
});
// --- Fin Lógica de Formularios ---


}); // <-- FIN DEL 'DOMContentLoaded'
