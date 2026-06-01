// =============================================
// BASE DE DATOS (¡¡CON EXTENSIONES .JPEG CORREGIDAS!!)
// =============================================
const propertiesData = [
    // =============================================
    // PROPIEDAD 1: 2B Torre Arista
    // =============================================
    { 
        id: 1, 
        title: 'Torre Arista', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'veracruz', // (ej. 'boca-del-rio', 'alvarado', 'merida')
        locationName: 'Veracruz, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.20086440594083, -96.13362442020146",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 24000, // (¡Solo números!)
        bedrooms: 2,
        bathrooms: 2.5,
        parking: 2,
        area: 116,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con 2barista01.png, 2barista02.png, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/2b-torre-arista/2barista01.png',
        
        // Galería (¡las 17 fotos!)
        galleryImages: [
            'images/2b-torre-arista/2barista01.png',
            'images/2b-torre-arista/2barista02.png',
            'images/2b-torre-arista/2barista03.png',
            'images/2b-torre-arista/2barista04.png',
            'images/2b-torre-arista/2barista05.png',
            'images/2b-torre-arista/2barista06.png',
            'images/2b-torre-arista/2barista07.png',
            'images/2b-torre-arista/2barista08.png',
            'images/2b-torre-arista/2barista09.png',
            'images/2b-torre-arista/2barista10.png',
            'images/2b-torre-arista/2barista11.png',
            'images/2b-torre-arista/2barista12.png',
            'images/2b-torre-arista/2barista13.png',
            'images/2b-torre-arista/2barista14.png',
            'images/2b-torre-arista/2barista15.png',
            'images/2b-torre-arista/2barista16.png',
            'images/2b-torre-arista/2barista17.png'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN VENTA EN TORRE ARISTA',
        descriptionBody: [
            'Encantador departamento con 2 recamaras, 2.5 baños, cocina integral, área de lavado, sala de estar, vestidor, comedor y 2 balcones con impresionante vista de la ciudad desde el centro de Veracruz/Malecón.',
        ],
        address: 'Xicoténcatl 165, Faros, 91709 Veracruz, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 2: 3C Arista
    // =============================================
    { 
        id: 2, 
        title: 'Torre Arista', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'veracruz', // (ej. 'boca-del-rio', 'alvarado', 'merida')
        locationName: 'Veracruz, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.20086440594083, -96.13362442020146",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 25000, // (¡Solo números!)
        bedrooms: 2, 
        bathrooms: 2, 
        parking: 2, 
        area: 95,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con 3carista01.jpg, 3carista02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/3c-arista/3carista01.jpg',
        
        // Galería (¡las 12 fotos!)
        galleryImages: [
            'images/3c-arista/3carista01.jpg',
            'images/3c-arista/3carista02.jpg',
            'images/3c-arista/3carista03.jpg',
            'images/3c-arista/3carista04.jpg',
            'images/3c-arista/3carista05.jpg',
            'images/3c-arista/3carista06.jpg',
            'images/3c-arista/3carista07.jpg',
            'images/3c-arista/3carista08.jpg',
            'images/3c-arista/3carista09.jpg',
            'images/3c-arista/3carista10.jpg',
            'images/3c-arista/3carista11.jpg',
            'images/3c-arista/3carista12.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN VENTA EN TORRE ARISTA C',
        descriptionBody: [
            'Vanguardista y moderno departamento equipado con cocina y aire acondicionado',
            'Cajón de estacionamiento, seguridad, etc.'
        ],
        address: 'Xicoténcatl 165, Faros, 91709 Veracruz, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 3: 4B Torre Altamar
    // =============================================
    { 
        id: 3, 
        title: 'Torre Altamar', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.080323559914696, -96.08891035571715",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 0, // (¡Solo números!)
        bedrooms: 0, 
        bathrooms: 0, 
        parking: 0, 
        area: 0,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con 4baltamar01.jpg, 4baltamar02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/4B-Torre-Altamar/4baltamar01.jpg',
        
        // Galería (¡las 18 fotos!)
        galleryImages: [
            'images/4B-Torre-Altamar/4baltamar01.jpg',
            'images/4B-Torre-Altamar/4baltamar02.jpg',
            'images/4B-Torre-Altamar/4baltamar03.jpg',
            'images/4B-Torre-Altamar/4baltamar04.jpg',
            'images/4B-Torre-Altamar/4baltamar05.jpg',
            'images/4B-Torre-Altamar/4baltamar06.jpg',
            'images/4B-Torre-Altamar/4baltamar07.jpg',
            'images/4B-Torre-Altamar/4baltamar08.jpg',
            'images/4B-Torre-Altamar/4baltamar09.jpg',
            'images/4B-Torre-Altamar/4baltamar10.jpg',
            'images/4B-Torre-Altamar/4baltamar11.jpg',
            'images/4B-Torre-Altamar/4baltamar12.jpg',
            'images/4B-Torre-Altamar/4baltamar13.jpg',
            'images/4B-Torre-Altamar/4baltamar14.jpg',
            'images/4B-Torre-Altamar/4baltamar15.jpg',
            'images/4B-Torre-Altamar/4baltamar16.jpg',
            'images/4B-Torre-Altamar/4baltamar17.jpg',
            'images/4B-Torre-Altamar/4baltamar18.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN VENTA EN TORRE ALTAMAR',
        descriptionBody: [
            'NO HAY DESCRIPCION',
        ],
        address: 'Boulevard Mandinga #1 esquina Boulevard de los gobernadores, P.º Playas del Conchal fraccionamiento, 95264 Ver.' // (Dirección de ejemplo)
    }, // <-- CORREGIDO
    // =============================================
    // PROPIEDAD 4: 6A Torre Altamar
    // =============================================
    { 
        id: 4, 
        title: 'Torre Altamar', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.080323559914696, -96.08891035571715",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 26000, // (¡Solo números!)
        bedrooms: 3, 
        bathrooms: 3, 
        parking: 2, 
        area: 147,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con 6Aaltamar01.jpg, 6Aaltamar02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/6A-Altamar/6Aaltamar01.jpg',
        
        // Galería (¡las 19 fotos!)
        galleryImages: [
            'images/6A-Altamar/6Aaltamar01.jpg',
            'images/6A-Altamar/6Aaltamar02.jpg',
            'images/6A-Altamar/6Aaltamar03.jpg',
            'images/6A-Altamar/6Aaltamar04.jpg',
            'images/6A-Altamar/6Aaltamar05.jpg',
            'images/6A-Altamar/6Aaltamar06.jpg',
            'images/6A-Altamar/6Aaltamar07.jpg',
            'images/6A-Altamar/6Aaltamar08.jpg',
            'images/6A-Altamar/6Aaltamar09.jpg',
            'images/6A-Altamar/6Aaltamar10.jpg',
            'images/6A-Altamar/6Aaltamar11.jpg',
            'images/6A-Altamar/6Aaltamar12.jpg',
            'images/6A-Altamar/6Aaltamar13.jpg',
            'images/6A-Altamar/6Aaltamar14.jpg',
            'images/6A-Altamar/6Aaltamar15.jpg',
            'images/6A-Altamar/6Aaltamar16.jpg',
            'images/6A-Altamar/6Aaltamar17.jpg',
            'images/6A-Altamar/6Aaltamar18.jpg',
            'images/6A-Altamar/6Aaltamar19.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO AMUEBLADO EN VENTA EN TORRE ALTAMAR',
        descriptionBody: [
            'Departamento amueblado en excelentes condiciones que cuenta CON:', 
            '3 recámaras, 3 baños completos, cocina integral, área de lavado, sala de estar, comedor y balcón con vista al mar.',
            
        ],
        address: 'Boulevard Mandinga #1 esquina Boulevard de los gobernadores, P.º Playas del Conchal fraccionamiento, 95264 Ver.' // (Dirección de ejemplo)
    }, 
    // =============================================
    // PROPIEDAD 5: 9E Torre Arista
    // =============================================
    { 
        id: 5, 
        title: 'Torre Arista', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'veracruz', // (ej. 'boca-del-rio', 'alvarado', 'merida')
        locationName: 'Veracruz, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.20084476342679, -96.13361409711237",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 22000, // (¡Solo números!)
        bedrooms: 2, 
        bathrooms: 2.5, 
        parking: 1, 
        area: 110,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con 9Earista01.jpg, 9Earista02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/9E-Arista/9Earista01.jpeg',
        
        // Galería (¡las 10 fotos!)
        galleryImages: [
            'images/9E-Arista/9Earista01.jpeg',
            'images/9E-Arista/9Earista02.jpeg',
            'images/9E-Arista/9Earista03.jpeg',
            'images/9E-Arista/9Earista04.jpeg',
            'images/9E-Arista/9Earista05.jpeg',
            'images/9E-Arista/9Earista06.jpeg',
            'images/9E-Arista/9Earista07.jpeg',
            'images/9E-Arista/9Earista08.jpeg',
            'images/9E-Arista/9Earista09.jpeg',
            'images/9E-Arista/9Earista10.jpeg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN VENTA EN TORRE ARISTA',
        descriptionBody: [
            'Vanguardista y moderno departamento equipado con cocina y aire acondicionado',
        ],
        address: 'Xicoténcatl 165, Faros, 91709 Veracruz, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 6: 11-1 Colinas Del Mar
    // =============================================
    { 
        id: 6, 
        title: 'Colinas Del Mar', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.11241881860507, -96.10332503331054",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 22500, // (¡Solo números!)
        bedrooms: 2, 
        bathrooms: 2, 
        parking: 1, 
        area: 85,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con 11-1-Colinas01.jpg, 11-1-Colinas02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/11-1-ColinasDelMar/11-1-Colinas01.jpg',
        
        // Galería (¡las 9 fotos!)
        galleryImages: [
            'images/11-1-ColinasDelMar/11-1-Colinas01.jpg',
            'images/11-1-ColinasDelMar/11-1-Colinas02.jpg',
            'images/11-1-ColinasDelMar/11-1-Colinas03.jpg',
            'images/11-1-ColinasDelMar/11-1-Colinas04.jpg',
            'images/11-1-ColinasDelMar/11-1-Colinas05.jpg',
            'images/11-1-ColinasDelMar/11-1-Colinas06.jpg',
            'images/11-1-ColinasDelMar/11-1-Colinas07.jpg',
            'images/11-1-ColinasDelMar/11-1-Colinas08.jpg',
            'images/11-1-ColinasDelMar/11-1-Colinas09.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN VENTA EN COLINAS DEL MAR',
        descriptionBody: [
            'Hermoso departamento en Colinas del Mar, Boca del Río, Veracruz.',
            'Completamente amueblado y equipado, listo para habitarse.',
        ],
        address: 'Blvd Miguel Alemán 2533, El Morro, 94290 Boca del Río, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 7: 15C Torre Arista
    // =============================================
    { 
        id: 7, 
        title: 'Torre Arista', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'veracruz', // (ej. 'boca-del-rio', 'alvarado', 'merida')
        locationName: 'Veracruz, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.20084300394674, -96.13361508653334",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 27000, // (¡Solo números!)
        bedrooms: 2, 
        bathrooms: 2, 
        parking: 1, 
        area: 90,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con 15Arista01.jpg, 15Arista02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/15-Arista/15Arista01.jpg',
        
        // Galería (¡las 18 fotos!)
        galleryImages: [
            'images/15-Arista/15Arista01.jpg',
            'images/15-Arista/15Arista02.jpg',
            'images/15-Arista/15Arista03.jpg',
            'images/15-Arista/15Arista04.jpg',
            'images/15-Arista/15Arista05.jpg',
            'images/15-Arista/15Arista06.jpg',
            'images/15-Arista/15Arista07.jpg',
            'images/15-Arista/15Arista08.jpg',
            'images/15-Arista/15Arista09.jpg',
            'images/15-Arista/15Arista10.jpg',
            'images/15-Arista/15Arista11.jpg',
            'images/15-Arista/15Arista12.jpg',
            'images/15-Arista/15Arista13.jpg',
            'images/15-Arista/15Arista14.jpg',
            'images/15-Arista/15Arista15.jpg',
            'images/15-Arista/15Arista16.jpg',
            'images/15-Arista/15Arista17.jpg',
            'images/15-Arista/15Arista18.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN VENTA EN TORRE ARISTA 15',
        descriptionBody: [
            'Vanguardista y moderno departamento equipado con cocina y aire acondicionado',
        ],
        address: 'Xicoténcatl 165, Faros, 91709 Veracruz, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 8: 201 Torre JV
    // =============================================
    { 
        id: 8, // ¡ID CORREGIDO!
        title: '201 Torre JV', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.150721052167683, -96.09526915948575",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 45000, // (¡Solo números!)
        bedrooms: 4, 
        bathrooms: 4.5, 
        parking: 2, 
        area: 350,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        imageUrl: 'images/201-Torre-JV/201torreJV01.jpeg',
        
        galleryImages: [
            'images/201-Torre-JV/201torreJV01.jpeg',
            'images/201-Torre-JV/201torreJV02.jpeg',
            'images/201-Torre-JV/201torreJV03.jpeg',
            'images/201-Torre-JV/201torreJV04.jpeg',
            'images/201-Torre-JV/201torreJV05.jpeg',
            'images/201-Torre-JV/201torreJV06.jpeg',
            'images/201-Torre-JV/201torreJV07.jpeg',
            'images/201-Torre-JV/201torreJV08.jpeg',
            'images/201-Torre-JV/201torreJV09.jpeg',
            'images/201-Torre-JV/201torreJV10.jpeg',
            'images/201-Torre-JV/201torreJV11.jpeg',
            'images/201-Torre-JV/201torreJV12.jpeg',
            'images/201-Torre-JV/201torreJV13.jpeg',
            'images/201-Torre-JV/201torreJV14.jpeg',
            'images/201-Torre-JV/201torreJV15.jpeg',
            'images/201-Torre-JV/201torreJV16.jpeg',
            'images/201-Torre-JV/201torreJV17.jpeg',
            'images/201-Torre-JV/201torreJV18.jpeg',
            'images/201-Torre-JV/201torreJV19.jpeg',
            'images/201-Torre-JV/201torreJV20.jpeg',
            'images/201-Torre-JV/201torreJV21.jpeg',
            'images/201-Torre-JV/201torreJV22.jpeg',
            'images/201-Torre-JV/201torreJV23.jpeg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN VENTA EN TORRE JV',
       descriptionBody: [
         'Residencia en renta con amplios espacios y un diseño contemporáneo ideal para familias que buscan comodidad y elegancia. Con una superficie de 350 m², esta propiedad cuenta con cuatro recámaras y cuatro baños y medio, distribuidos de forma funcional para ofrecer privacidad y confort.',
         'Dispone de cuarto de servicio con baño, una terraza ideal para reuniones al aire libre, además de cocina, sala y comedor integrados en un ambiente moderno y bien iluminado. Cuenta con dos lugares de estacionamiento para mayor comodidad.',
         'El desarrollo ofrece amenidades de primer nivel que garantizan una experiencia residencial única, incluyendo lobby, salón de usos múltiples, alberca con vista al mar, spa y fitness center, palapa snack bar, cancha de tenis, extensas áreas verdes, garage para dos autos, lobby de recepción para visitas, y elevadores directos y de servicio de alta velocidad. Renta mensual de $45,000.'
       ],

        address: 'Torres JV Residencial, Blvd. Manuel Ávila Camacho 3534, Costa de Oro, 94299 Boca del Río, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 9: 302 Torre Catania
    // =============================================
    { 
        id: 9, // ¡ID 9, para seguir el orden!
        title: 'Torre Catania', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.120990338798208, -96.10526514872605",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 18500, // (¡Solo números!)
        bedrooms: 3, 
        bathrooms: 3, 
        parking: 2, 
        area: 150,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (¡Ojo con las extensiones .jpg y .jpeg!)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/302-Torre-Catania/302catania01.jpg', // <-- La única .jpg
        
        // Galería (¡las 14 fotos!)
        galleryImages: [
            'images/302-Torre-Catania/302catania01.jpg',   // <-- .jpg
            'images/302-Torre-Catania/302catania02.jpeg',  // <-- .jpeg
            'images/302-Torre-Catania/302catania03.jpeg',
            'images/302-Torre-Catania/302catania04.jpeg',
            'images/302-Torre-Catania/302catania05.jpeg',
            'images/302-Torre-Catania/302catania06.jpeg',
            'images/302-Torre-Catania/302catania07.jpeg',
            'images/302-Torre-Catania/302catania08.jpeg',
            'images/302-Torre-Catania/302catania09.jpeg',
            'images/302-Torre-Catania/302catania10.jpeg',
            'images/302-Torre-Catania/302catania11.jpeg',
            'images/302-Torre-Catania/302catania12.jpeg',
            'images/302-Torre-Catania/302catania13.jpeg',
            'images/302-Torre-Catania/302catania14.jpeg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN RENTA EN TORRE CATANIA',
        descriptionBody: [
            'Departamento sin amueblar en Torre Catania, Veracruz, Veracruz.',
            'Cuenta con 3 recámaras, 3 baños completos, cocina integral, área de lavado, sala de estar, comedor y balcón con vista a la ciudad.',
        ],
        address: 'Blvd Miguel Alemán 1397, Los Delfines, 94293 Veracruz, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 10: 601 B Torre Arrecifes
    // =============================================
    { 
        id: 10, 
        title: '601 B Torre Arrecifes', 
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', 
        locationName: 'Boca del Río, Veracruz', 
        operation: 'renta', 
        //coordinates:"",// (¡FALTAN COORDENADAS!)
        type: 'departamento', 
        price: 55000, // (¡Solo números!)
        bedrooms: 3, 
        bathrooms: 2.5, 
        parking: 2, 
        area: 240,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con 601arrecifes01.jpg, 601arrecifes02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/601B-Torre-Arrecifes/601arrecifes01.jpg',
        
        // Galería (¡las 17 fotos!)
        galleryImages: [
            'images/601B-Torre-Arrecifes/601arrecifes01.jpg',
            'images/601B-Torre-Arrecifes/601arrecifes02.jpg',
            'images/601B-Torre-Arrecifes/601arrecifes03.jpg',
            'images/601B-Torre-Arrecifes/601arrecifes04.jpg',
            'images/601B-Torre-Arrecifes/601arrecifes05.jpg',
            'images/601B-Torre-Arrecifes/601arrecifes06.jpg',
            'images/601B-Torre-Arrecifes/601arrecifes07.jpg',
            'images/601B-Torre-Arrecifes/601arrecifes08.jpg',
            'images/601B-Torre-Arrecifes/601arrecifes09.jpg',
            'images/601B-Torre-Arrecifes/601arrecifes10.jpg',
            'images/601B-Torre-Arrecifes/601arrecifes11.jpg',
            'images/601B-Torre-Arrecifes/601arrecifes12.jpg',
            'images/601B-Torre-Arrecifes/601arrecifes13.jpg',
            'images/601B-Torre-Arrecifes/601arrecifes14.jpg',
            'images/601B-Torre-Arrecifes/601arrecifes15.jpg',
            'images/601B-Torre-Arrecifes/601arrecifes16.jpg',
            'images/601B-Torre-Arrecifes/601arrecifes17.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN RENTA EN TORRE ARRECIFES',
        descriptionBody: [
        'Departamento amueblado de 240 m² con un diseño moderno y espacios amplios que brindan comodidad y elegancia. Cuenta con tres recámaras y dos baños y medio, además de un cuarto de servicio con baño completo y área de lavado independiente.',
        'El área social integra cocina, sala y comedor en un ambiente funcional y bien iluminado, ideal para disfrutar de momentos en familia o con amigos. Incluye dos lugares de estacionamiento para mayor practicidad.',
        'El complejo ofrece excelentes amenidades, entre ellas acceso directo a la playa, salón de eventos, elevadores, alberca, asoleadero, recepción y vigilancia 24/7, garantizando seguridad, confort y una experiencia de vida exclusiva junto al mar.'
    ],

        address: 'Torre Arrecifes, Fraccionamiento Zona Hotelera, Boca del Río' // (Dirección de ejemplo)
    },
   // =============================================
    // PROPIEDAD 11: 2E Torre Arista
    // =============================================
    { 
        id: 11, 
        title: 'Torre Arista', 
        location: 'veracruz', 
        locationName: 'Veracruz, Veracruz', 
        operation: 'renta', 
        coordinates:"19.2008450955111, -96.13361542822147",
        type: 'departamento', 
        price: 24000, 
        bedrooms: 2, 
        bathrooms: 2.5, 
        parking: 1, 
        area: 110, 
        imageUrl: 'images/2e-torre-arista/IMG_4833.jpeg', // (Esta ya estaba bien)
        galleryImages: [
            'images/2e-torre-arista/IMG_4833.jpeg', 
            'images/2e-torre-arista/IMG_4838.jpeg', 
            'images/2e-torre-arista/IMG_4840.jpeg', 
            'images/2e-torre-arista/IMG_4841.jpeg', 
            'images/2e-torre-arista/IMG_4843.jpeg', 
            'images/2e-torre-arista/IMG_4845.jpeg', 
            'images/2e-torre-arista/IMG_4846.jpeg', 
            'images/2e-torre-arista/IMG_4847.jpeg'
        ],
        descriptionHeadline: 'DEPARTAMENTO EN VENTA EN TORRE ARISTA',
        descriptionBody: [
            'Excelente departamento ubicado en Torre Arista.',
            'Alberca, Barbería, Lobby, Ascensor, Bar, Seguridad 24hrs, valet parking'
        ],
        address: 'Xicoténcatl 165, Faros, 91709 Veracruz, Ver.' 
    },
    // =============================================
    // PROPIEDAD 12: 602 Torre Santa María
    // =============================================
    { 
        id: 12, 
        title: 'Torre Santa María', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.12993385970954, -96.10583087341759",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 23000, // (¡Solo números!)
        bedrooms: 3, 
        bathrooms: 2, 
        parking: 2, 
        area: 130,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con 602stmaria01.jpg, 602stmaria02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/602-Torre-SantaMaria/602stmaria01.jpg',
        
        // Galería (¡las 21 fotos!)
        galleryImages: [
            'images/602-Torre-SantaMaria/602stmaria01.jpg',
            'images/602-Torre-SantaMaria/602stmaria02.jpg',
            'images/602-Torre-SantaMaria/602stmaria03.jpg',
            'images/602-Torre-SantaMaria/602stmaria04.jpg',
            'images/602-Torre-SantaMaria/602stmaria05.jpg',
            'images/602-Torre-SantaMaria/602stmaria06.jpg',
            'images/602-Torre-SantaMaria/602stmaria07.jpg',
            'images/602-Torre-SantaMaria/602stmaria08.jpg',
            'images/602-Torre-SantaMaria/602stmaria09.jpg',
            'images/602-Torre-SantaMaria/602stmaria10.jpg',
            'images/602-Torre-SantaMaria/602stmaria11.jpg',
            'images/602-Torre-SantaMaria/602stmaria12.jpg',
            'images/602-Torre-SantaMaria/602stmaria13.jpg',
            'images/602-Torre-SantaMaria/602stmaria14.jpg',
            'images/602-Torre-SantaMaria/602stmaria15.jpg',
            'images/602-Torre-SantaMaria/602stmaria16.jpg',
            'images/602-Torre-SantaMaria/602stmaria17.jpg',
            'images/602-Torre-SantaMaria/602stmaria18.jpg',
            'images/602-Torre-SantaMaria/602stmaria19.jpg',
            'images/602-Torre-SantaMaria/602stmaria20.jpg',
            'images/602-Torre-SantaMaria/602stmaria21.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN RENTA EN TORRE SANTA MARÍA',
       descriptionBody: [
  'Departamento de aproximadamente 130 m² con espacios funcionales y un diseño moderno que ofrece comodidad y estilo. Cuenta con tres recámaras y dos baños completos, distribuidos para brindar confort y practicidad en cada área del hogar.',
  'El área principal integra cocina, sala y comedor en un ambiente amplio y bien iluminado, ideal para la convivencia diaria. Incluye dos lugares de estacionamiento y se entrega sin amueblar, ofreciendo libertad para personalizar cada espacio según tus preferencias.',
  'El desarrollo cuenta con amenidades de calidad, entre ellas elevadores, alberca, asoleadero y vigilancia 24/7, garantizando seguridad, confort y una experiencia de vida tranquila y moderna.'
],

        address: 'C. Mocambo 515, Mocambo, 94293 Veracruz, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 13: 705 Torre L'eau
    // =============================================
    { 
        id: 13, // ¡Nueva propiedad, ID 13!
        title: 'Torre Leau', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.13277397664335, -96.10624359560386",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 30000, // (¡Solo números!)
        bedrooms: 2, 
        bathrooms: 2, 
        parking: 2, 
        area: 180,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con 705leau01.jpg, 705leau02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/705-Torre-Leau/705leau01.jpg',
        
        // Galería (¡las 9 fotos!)
        galleryImages: [
            'images/705-Torre-Leau/705leau01.jpg',
            'images/705-Torre-Leau/705leau02.jpg',
            'images/705-Torre-Leau/705leau03.jpg',
            'images/705-Torre-Leau/705leau04.jpg',
            'images/705-Torre-Leau/705leau05.jpg',
            'images/705-Torre-Leau/705leau06.jpg',
            'images/705-Torre-Leau/705leau07.jpg',
            'images/705-Torre-Leau/705leau08.jpg',
            'images/705-Torre-Leau/705leau09.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN VENTA EN TORRE LEAU',
        descriptionBody: [
            'NO TIENE DESCRIPCION',
        ],
        address: 'Manuel Suárez 72, Luis Echeverría, 94298 Boca del Río, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 14: 1203 Torre Villas Mocambo
    // =============================================
    { 
        id: 14, // ¡Nueva propiedad, ID 14!
        title: 'Torre Villas Mocambo', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.14427147258666, -96.10383778401109",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 50000, // (¡Solo números!)
        bedrooms: 3, 
        bathrooms: 3.5, 
        parking: 2, 
        area: 245,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con 1203TVMocambo01.jpeg, 1203TVMocambo02.jpeg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/1203-TorreVillas-Mocambo/1203TVMocambo01.jpeg',
        
        // Galería (¡las 23 fotos!)
        galleryImages: [
            'images/1203-TorreVillas-Mocambo/1203TVMocambo01.jpeg',
            'images/1203-TorreVillas-Mocambo/1203TVMocambo02.jpeg',
            'images/1203-TorreVillas-Mocambo/1203TVMocambo03.jpeg',
            'images/1203-TorreVillas-Mocambo/1203TVMocambo04.jpeg',
            'images/1203-TorreVillas-Mocambo/1203TVMocambo05.jpeg',
            'images/1203-TorreVillas-Mocambo/1203TVMocambo06.jpeg',
            'images/1203-TorreVillas-Mocambo/1203TVMocambo07.jpeg',
            'images/1203-TorreVillas-Mocambo/1203TVMocambo08.jpeg',
            'images/1203-TorreVillas-Mocambo/1203TVMocambo09.jpeg',
            'images/1203-TorreVillas-Mocambo/1203TVMocambo10.jpeg',
            'images/1203-TorreVillas-Mocambo/1203TVMocambo11.jpeg',
            'images/1203-TorreVillas-Mocambo/1203TVMocambo12.jpeg',
            'images/1203-TorreVillas-Mocambo/1203TVMocambo13.jpeg',
            'images/1203-TorreVillas-Mocambo/1203TVMocambo14.jpeg',
            'images/1203-TorreVillas-Mocambo/1203TVMocambo15.jpeg',
            'images/1203-TorreVillas-Mocambo/1203TVMocambo16.jpeg',
            'images/1203-TorreVillas-Mocambo/1203TVMocambo17.jpeg',
            'images/1203-TorreVillas-Mocambo/1203TVMocambo18.jpeg',
            'images/1203-TorreVillas-Mocambo/1203TVMocambo19.jpeg',
            'images/1203-TorreVillas-Mocambo/1203TVMocambo20.jpeg',
            'images/1203-TorreVillas-Mocambo/1203TVMocambo21.jpeg',
            'images/1203-TorreVillas-Mocambo/1203TVMocambo22.jpeg',
            'images/1203-TorreVillas-Mocambo/1203TVMocambo23.jpeg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN VENTA EN TORRE VILLAS MOCAMBO',
        descriptionBody: [
            'departamento en renta amueblado en Torre Villas Mocambo, Boca del Río, Veracruz.',
            'con excelentes amenidades y acabados de lujo.',
            'Alberca y seguridad 24 horas'
        ],
        address: 'Bv. Adolfo Ruíz Cortines 3422, Playa de Oro, 94293 Boca del Río, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 15: 1601 Veramar
    // =============================================
    { 
        id: 15, 
        title: 'Veramar', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'venta', // ('venta' o 'renta')
        coordinates:"19.124546923280082, -96.10618625808887",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 6000000, // (¡Solo números!)
        bedrooms: 4, 
        bathrooms: 4, 
        parking: 2, 
        area: 230,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con 1601Veramar01.jpg, 1601Veramar02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/1601-Veramar/1601Veramar01.jpg',
        
        // Galería (¡las 25 fotos!)
        galleryImages: [
            'images/1601-Veramar/1601Veramar01.jpg',
            'images/1601-Veramar/1601Veramar02.jpg',
            'images/1601-Veramar/1601Veramar03.jpg',
            'images/1601-Veramar/1601Veramar04.jpg',
            'images/1601-Veramar/1601Veramar05.jpg',
            'images/1601-Veramar/1601Veramar06.jpg',
            'images/1601-Veramar/1601Veramar07.jpg',
            'images/1601-Veramar/1601Veramar08.jpg',
            'images/1601-Veramar/1601Veramar09.jpg',
            'images/1601-Veramar/1601Veramar10.jpg',
            'images/1601-Veramar/1601Veramar11.jpg',
            'images/1601-Veramar/1601Veramar12.jpg',
            'images/1601-Veramar/1601Veramar13.jpg',
            'images/1601-Veramar/1601Veramar14.jpg',
            'images/1601-Veramar/1601Veramar15.jpg',
            'images/1601-Veramar/1601Veramar16.jpg',
            'images/1601-Veramar/1601Veramar17.jpg',
            'images/1601-Veramar/1601Veramar18.jpg',
            'images/1601-Veramar/1601Veramar19.jpg',
            'images/1601-Veramar/1601Veramar20.jpg',
            'images/1601-Veramar/1601Veramar21.jpg',
            'images/1601-Veramar/1601Veramar22.jpg',
            'images/1601-Veramar/1601Veramar23.jpg',
            'images/1601-Veramar/1601Veramar24.jpg',
            'images/1601-Veramar/1601Veramar25.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO DE LUJO EN VENTA EN VERAMAR',
        descriptionBody: [
            'Escribe aquí el primer párrafo de la descripción.',
            'Escribe aquí el segundo párrafo, hablando de los acabados o amenidades.',
            'Cajón de estacionamiento, seguridad, etc.'
        ],
        address: 'Blvd. Adolfo Ruiz Cortines #8000, Boca del Río, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 16: 1902 Ximara
    // =============================================
    { 
        id: 16, 
        title: 'PH Ximara', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'veracruz', // (ej. 'boca-del-rio', 'alvarado', 'merida')
        locationName: 'Veracruz, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.09059505168406, -96.0978333756402",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 45000, // (¡Solo números!)
        bedrooms: 3, 
        bathrooms: 3, 
        parking: 2, 
        area: 170,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con 1902Marquinez01.jpg, 1902Marquinez02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/1902-XimenaMarquinez/1902Marquinez01.jpg',
        
        // Galería (¡las 30 fotos!)
        galleryImages: [
            'images/1902-XimenaMarquinez/1902Marquinez01.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez02.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez03.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez04.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez05.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez06.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez07.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez08.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez09.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez10.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez11.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez12.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez13.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez14.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez15.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez16.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez17.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez18.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez19.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez20.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez21.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez22.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez23.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez24.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez25.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez26.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez27.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez28.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez29.jpg',
            'images/1902-XimenaMarquinez/1902Marquinez30.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN VENTA EN XIMARA',
        descriptionBody: [
            'Departamento frente al mar en Ximara, Veracruz, Veracruz.',
            'cuenta con las siguientes características y amenidades:',
            'Jardines Área de juegos infantiles, Salón de eventos, Gimnasio, Sala de cine, Sala de juntas, Palapa para servicio de la terraza, Camastros, Alberca cubierta'
        ],
        address: 'Cerrada Isla del Amor, C. Isla del Amor 45, 95264 Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 17: Cabo Marino
    // =============================================
    { 
        id: 17, // ¡Nueva propiedad, ID 17!
        title: 'Cabo Marino', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'alvarado', // (ej. 'boca-del-rio', 'veracruz', 'merida')
        locationName: 'Alvarado, Veracruz', // (El texto que se muestra)
        operation: 'venta', // ('venta' o 'renta')
        coordinates:"19.082514537994793, -96.08986969161455",
        type: 'residencial-casa', // (ej. 'departamento', 'oficina')
        price: 7500000, // (¡Solo números!)
        bedrooms: 4, 
        bathrooms: 4, 
        parking: 3, 
        area: 380,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con CaboM01.jpg, CaboM02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/CaboMarino-AlexSanchez/CaboM01.jpg',
        
        // Galería (¡las 32 fotos!)
        galleryImages: [
            'images/CaboMarino-AlexSanchez/CaboM01.jpg',
            'images/CaboMarino-AlexSanchez/CaboM02.jpg',
            'images/CaboMarino-AlexSanchez/CaboM03.jpg',
            'images/CaboMarino-AlexSanchez/CaboM04.jpg',
            'images/CaboMarino-AlexSanchez/CaboM05.jpg',
            'images/CaboMarino-AlexSanchez/CaboM06.jpg',
            'images/CaboMarino-AlexSanchez/CaboM07.jpg',
            'images/CaboMarino-AlexSanchez/CaboM08.jpg',
            'images/CaboMarino-AlexSanchez/CaboM09.jpg',
            'images/CaboMarino-AlexSanchez/CaboM10.jpg',
            'images/CaboMarino-AlexSanchez/CaboM11.jpg',
            'images/CaboMarino-AlexSanchez/CaboM12.jpg',
            'images/CaboMarino-AlexSanchez/CaboM13.jpg',
            'images/CaboMarino-AlexSanchez/CaboM14.jpg',
            'images/CaboMarino-AlexSanchez/CaboM15.jpg',
            'images/CaboMarino-AlexSanchez/CaboM16.jpg',
            'images/CaboMarino-AlexSanchez/CaboM17.jpg',
            'images/CaboMarino-AlexSanchez/CaboM18.jpg',
            'images/CaboMarino-AlexSanchez/CaboM19.jpg',
            'images/CaboMarino-AlexSanchez/CaboM20.jpg',
            'images/CaboMarino-AlexSanchez/CaboM21.jpg',
            'images/CaboMarino-AlexSanchez/CaboM22.jpg',
            'images/CaboMarino-AlexSanchez/CaboM23.jpg',
            'images/CaboMarino-AlexSanchez/CaboM24.jpg',
            'images/CaboMarino-AlexSanchez/CaboM25.jpg',
            'images/CaboMarino-AlexSanchez/CaboM26.jpg',
            'images/CaboMarino-AlexSanchez/CaboM27.jpg',
            'images/CaboMarino-AlexSanchez/CaboM28.jpg',
            'images/CaboMarino-AlexSanchez/CaboM29.jpg',
            'images/CaboMarino-AlexSanchez/CaboM30.jpg',
            'images/CaboMarino-AlexSanchez/CaboM31.jpg',
            'images/CaboMarino-AlexSanchez/CaboM32.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'CASA EN VENTA EN FRACCIONAMIENTO CABO MARINO',
        descriptionBody: [
            'Escribe aquí el primer párrafo de la descripción.',
            'Escribe aquí el segundo párrafo, hablando de los acabados o amenidades.',
            'Cajón de estacionamiento, seguridad, etc.'
        ],
        address: 'Circuito Cabo Marino #123, Alvarado, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 18: Casa 16mdp cerca vera
    // =============================================
    { 
        id: 18, // ¡Nueva propiedad, ID 18!
        title: 'Casa 16mdp cerca vera', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        // (Puse algunos datos basados en el nombre)
        location: 'veracruz', // (ej. 'boca-del-rio', 'alvarado', 'merida')
        locationName: 'Veracruz, Veracruz', // (El texto que se muestra)
        operation: 'venta', // ('venta' o 'renta')
        coordinates:"",// (¡FALTAN COORDENADAS!)
        type: 'residencial-casa', // (ej. 'departamento', 'oficina')
        price: 16000000, // (¡Solo números!)
        bedrooms: 5, 
        bathrooms: 5, 
        parking: 4, 
        area: 600,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con 16mdp01.jpeg, 16mdp02.jpeg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/Casa16mdp-cercadeVERA/16mdp01.jpeg',
        
        // Galería (¡las 15 fotos!)
        galleryImages: [
            'images/Casa16mdp-cercadeVERA/16mdp01.jpeg',
            'images/Casa16mdp-cercadeVERA/16mdp02.jpeg',
            'images/Casa16mdp-cercadeVERA/16mdp03.jpeg',
            'images/Casa16mdp-cercadeVERA/16mdp04.jpeg',
            'images/Casa16mdp-cercadeVERA/16mdp05.jpeg',
            'images/Casa16mdp-cercadeVERA/16mdp06.jpeg',
            'images/Casa16mdp-cercadeVERA/16mdp07.jpeg',
            'images/Casa16mdp-cercadeVERA/16mdp08.jpeg',
            'images/Casa16mdp-cercadeVERA/16mdp09.jpeg',
            'images/Casa16mdp-cercadeVERA/16mdp10.jpeg',
            'images/Casa16mdp-cercadeVERA/16mdp11.jpeg',
            'images/Casa16mdp-cercadeVERA/16mdp12.jpeg',
            'images/Casa16mdp-cercadeVERA/16mdp13.jpeg',
            'images/Casa16mdp-cercadeVERA/16mdp14.jpeg',
            'images/Casa16mdp-cercadeVERA/16mdp15.jpeg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'ESPECTACULAR CASA EN VENTA CERCA DE VERACRUZ',
        descriptionBody: [
            'Escribe aquí el primer párrafo de la descripción.',
            'Escribe aquí el segundo párrafo, hablando de los acabados o amenidades.',
            'Cajón de estacionamiento, seguridad, etc.'
        ],
        address: 'Fraccionamiento Lomas Altas, Veracruz, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 19: Casa Andaluz marquinez
    // =============================================
    { 
        id: 19, // ¡Nueva propiedad, ID 19!
        title: 'Casa Andaluz', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'veracruz', // (ej. 'boca-del-rio', 'alvarado', 'merida')
        locationName: 'Veracruz, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"",// (¡FALTAN COORDENADAS!)
        type: 'residencial-casa', // (ej. 'departamento', 'oficina')
        price: 12000, // (¡Solo números!)
        bedrooms: 3, 
        bathrooms: 4, 
        parking: 2, 
        area: 185,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (¡Ojo con las extensiones .jpg y .jpeg!)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/CasaAndaluz-Marquinez/Andaluz01.jpg',
        
        // Galería (¡las 11 fotos!)
        galleryImages: [
            'images/CasaAndaluz-Marquinez/Andaluz01.jpg',
            'images/CasaAndaluz-Marquinez/Andaluz02.jpg',
            'images/CasaAndaluz-Marquinez/Andaluz03.jpg',
            'images/CasaAndaluz-Marquinez/Andaluz04.jpg',
            'images/CasaAndaluz-Marquinez/Andaluz05.jpg',
            'images/CasaAndaluz-Marquinez/Andaluz06.jpg',
            'images/CasaAndaluz-Marquinez/Andaluz07.jpg',
            'images/CasaAndaluz-Marquinez/Andaluz08.jpg',
            'images/CasaAndaluz-Marquinez/Andaluz09.jpeg', // <-- OJO .JPEG
            'images/CasaAndaluz-Marquinez/Andaluz10.jpeg', // <-- OJO .JPEG
            'images/CasaAndaluz-Marquinez/Andaluz11.jpeg'  // <-- OJO .JPEG
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'CASA EN VENTA EN FRACCIONAMIENTO ANDALUZ',
        descriptionBody: [
            'Casa de 3 niveles con excelente distribución. En la primera planta: sala, comedor, cocina integral, patio en "L", garaje para 1 auto, cuarto de servicio, área de lavado y medio baño. Segunda planta: 3 habitaciones, 2 baños completos y área de TV. Tercer piso: roof top con medio baño.',
        ],
        address: 'Carretera Federal Rio, Córdoba - Boca del Rio S/N, San Jose, 94290 Boca del Río, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 20: Casa Costa de Oro Ferrari
    // =============================================
    { 
        id: 20, // ¡Nueva propiedad, ID 20!
        title: 'Casa Costa de Oro Ferrari', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'venta', // ('venta' o 'renta')
        coordinates:"",// (¡FALTAN COORDENADAS!)
        type: 'residencial-casa', // (ej. 'departamento', 'oficina')
        price: 8500000, // (¡Solo números!)
        bedrooms: 4, 
        bathrooms: 4, 
        parking: 3, 
        area: 400,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con FerrariOro01.jpg, FerrariOro02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/Casa-CostaOro-Ferrari/FerrariOro01.jpg',
        
        // Galería (¡las 9 fotos!)
        galleryImages: [
            'images/Casa-CostaOro-Ferrari/FerrariOro01.jpg',
            'images/Casa-CostaOro-Ferrari/FerrariOro02.jpg',
            'images/Casa-CostaOro-Ferrari/FerrariOro03.jpg',
            'images/Casa-CostaOro-Ferrari/FerrariOro04.jpg',
            'images/Casa-CostaOro-Ferrari/FerrariOro05.jpg',
            'images/Casa-CostaOro-Ferrari/FerrariOro06.jpg',
            'images/Casa-CostaOro-Ferrari/FerrariOro07.jpg',
            'images/Casa-CostaOro-Ferrari/FerrariOro08.jpg',
            'images/Casa-CostaOro-Ferrari/FerrariOro09.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'CASA EN VENTA EN FRACCIONAMIENTO COSTA DE ORO',
        descriptionBody: [
            'Escribe aquí el primer párrafo de la descripción.',
            'Escribe aquí el segundo párrafo, hablando de los acabados o amenidades.',
            'Cajón de estacionamiento, seguridad, etc.'
        ],
        address: 'Fraccionamiento Costa de Oro, Boca del Río, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 21: Casa Oficinas en Reforma
    // =============================================
    { 
        id: 21, // ¡Nueva propiedad, ID 21!
        title: 'Casa Oficinas en Reforma', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        // (Puse 'oficina' como tipo basado en el nombre)
        location: 'veracruz', // (ej. 'boca-del-rio', 'alvarado', 'merida')
        locationName: 'Veracruz, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"",// (¡FALTAN COORDENADAS!)
        type: 'oficina', // (ej. 'departamento', 'residencial-casa')
        price: 30000, // (¡Solo números!)
        bedrooms: 5, // (O pon 0 si no aplica y son 'privados')
        bathrooms: 3, 
        parking: 2, 
        area: 300,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con CasaReforma01.jpg, CasaReforma02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/Casa-Oficinas-en-Reforma/CasaReforma01.jpg',
        
        // Galería (¡las 15 fotos!)
        galleryImages: [
            'images/Casa-Oficinas-en-Reforma/CasaReforma01.jpg',
            'images/Casa-Oficinas-en-Reforma/CasaReforma02.jpg',
            'images/Casa-Oficinas-en-Reforma/CasaReforma03.jpg',
            'images/Casa-Oficinas-en-Reforma/CasaReforma04.jpg',
            'images/Casa-Oficinas-en-Reforma/CasaReforma05.jpg',
            'images/Casa-Oficinas-en-Reforma/CasaReforma06.jpg',
            'images/Casa-Oficinas-en-Reforma/CasaReforma07.jpg',
            'images/Casa-Oficinas-en-Reforma/CasaReforma08.jpg',
            'images/Casa-Oficinas-en-Reforma/CasaReforma09.jpg',
            'images/Casa-Oficinas-en-Reforma/CasaReforma10.jpg',
            'images/Casa-Oficinas-en-Reforma/CasaReforma11.jpg',
            'images/Casa-Oficinas-en-Reforma/CasaReforma12.jpg',
            'images/Casa-Oficinas-en-Reforma/CasaReforma13.jpg',
            'images/Casa-Oficinas-en-Reforma/CasaReforma14.jpg',
            'images/Casa-Oficinas-en-Reforma/CasaReforma15.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'CASA PARA OFICINAS EN RENTA EN REFORMA',
        descriptionBody: [
            'Escribe aquí el primer párrafo de la descripción.',
            'Escribe aquí el segundo párrafo, hablando de los acabados o amenidades.',
            'Cajón de estacionamiento, seguridad, etc.'
        ],
        address: 'Fraccionamiento Reforma, Veracruz, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 22 (¡NUEVA!): Casa Playas del Conchal
    // =============================================
    { 
        id: 22, // ¡Nueva propiedad, ID 22!
        title: 'Casa Playas del Conchal', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        // (Puse 'alvarado' ya que Conchal está en la Riviera)
        location: 'alvarado', // (ej. 'boca-del-rio', 'veracruz', 'merida')
        locationName: 'Alvarado, Veracruz', // (El texto que se muestra)
        operation: 'venta', // ('venta' o 'renta')
        coordinates:"",// (¡FALTAN COORDENADAS!)
        type: 'residencial-casa', // (ej. 'departamento', 'oficina')
        price: 9500000, // (¡Solo números!)
        bedrooms: 4, 
        bathrooms: 4, 
        parking: 3, 
        area: 450,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con Conchal01.jpg, Conchal02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/Casa-PlayasDelConchal/Conchal01.jpg',
        
        // Galería (¡las 26 fotos!)
        galleryImages: [
            'images/Casa-PlayasDelConchal/Conchal01.jpg',
            'images/Casa-PlayasDelConchal/Conchal02.jpg',
            'images/Casa-PlayasDelConchal/Conchal03.jpg',
            'images/Casa-PlayasDelConchal/Conchal04.jpg',
            'images/Casa-PlayasDelConchal/Conchal05.jpg',
            'images/Casa-PlayasDelConchal/Conchal06.jpg',
            'images/Casa-PlayasDelConchal/Conchal07.jpg',
            'images/Casa-PlayasDelConchal/Conchal08.jpg',
            'images/Casa-PlayasDelConchal/Conchal09.jpg',
            'images/Casa-PlayasDelConchal/Conchal10.jpg',
            'images/Casa-PlayasDelConchal/Conchal11.jpg',
            'images/Casa-PlayasDelConchal/Conchal12.jpg',
            'images/Casa-PlayasDelConchal/Conchal13.jpg',
            'images/Casa-PlayasDelConchal/Conchal14.jpg',
            'images/Casa-PlayasDelConchal/Conchal15.jpg',
            'images/Casa-PlayasDelConchal/Conchal16.jpg',
            'images/Casa-PlayasDelConchal/Conchal17.jpg',
            'images/Casa-PlayasDelConchal/Conchal18.jpg',
            'images/Casa-PlayasDelConchal/Conchal19.jpg',
            'images/Casa-PlayasDelConchal/Conchal20.jpg',
            'images/Casa-PlayasDelConchal/Conchal21.jpg',
            'images/Casa-PlayasDelConchal/Conchal22.jpg',
            'images/Casa-PlayasDelConchal/Conchal23.jpg',
            'images/Casa-PlayasDelConchal/Conchal24.jpg',
            'images/Casa-PlayasDelConchal/Conchal25.jpg',
            'images/Casa-PlayasDelConchal/Conchal26.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'CASA EN VENTA EN FRACCIONAMIENTO PLAYAS DEL CONCHAL',
        descriptionBody: [
            'Escribe aquí el primer párrafo de la descripción.',
            'Escribe aquí el segundo párrafo, hablando de los acabados o amenidades.',
            'Cajón de estacionamiento, seguridad, etc.'
        ],
        address: 'Fracc. Playas del Conchal, Alvarado, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 23 (¡NUEVA!): Casa Verde Rosario
    // =============================================
    { 
        id: 23, // ¡Nueva propiedad, ID 23!
        title: 'Casa Verde Rosario', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'venta', // ('venta' o 'renta')
        coordinates:"",// (¡FALTAN COORDENADAS!)
        type: 'residencial-casa', // (ej. 'departamento', 'oficina')
        price: 6200000, // (¡Solo números!)
        bedrooms: 3, 
        bathrooms: 3, 
        parking: 2, 
        area: 360,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con CasaVerde01.jpg, CasaVerde02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/CasaVerde-Rosario/CasaVerde01.jpg',
        
        // Galería (¡las 15 fotos!)
        galleryImages: [
            'images/CasaVerde-Rosario/CasaVerde01.jpg',
            'images/CasaVerde-Rosario/CasaVerde02.jpg',
            'images/CasaVerde-Rosario/CasaVerde03.jpg',
            'images/CasaVerde-Rosario/CasaVerde04.jpg',
            'images/CasaVerde-Rosario/CasaVerde05.jpg',
            'images/CasaVerde-Rosario/CasaVerde06.jpg',
            'images/CasaVerde-Rosario/CasaVerde07.jpg',
            'images/CasaVerde-Rosario/CasaVerde08.jpg',
            'images/CasaVerde-Rosario/CasaVerde09.jpg',
            'images/CasaVerde-Rosario/CasaVerde10.jpg',
            'images/CasaVerde-Rosario/CasaVerde11.jpg',
            'images/CasaVerde-Rosario/CasaVerde12.jpg',
            'images/CasaVerde-Rosario/CasaVerde13.jpg',
            'images/CasaVerde-Rosario/CasaVerde14.jpg',
            'images/CasaVerde-Rosario/CasaVerde15.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'CASA EN VENTA EN FRACCIONAMIENTO CASA VERDE',
        descriptionBody: [
            'Escribe aquí el primer párrafo de la descripción.',
            'Escribe aquí el segundo párrafo, hablando de los acabados o amenidades.',
            'Cajón de estacionamiento, seguridad, etc.'
        ],
        address: 'Fracc. Casa Verde, Boca del Río, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 24: D33t1 Torre Levant
    // =============================================
    { 
        id: 24, // ¡Nueva propiedad, ID 24!
        title: 'Torre Levant', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.125781216448935, -96.10611007475782",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 20000, // (¡Solo números!)
        bedrooms: 2, 
        bathrooms: 2, 
        parking: 1, 
        area: 75,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con D33t1Levant01.jpg, D33t1Levant02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/D33t1-TorreLevant-Gloria/D33t1Levant01.jpg',
        
        // Galería (¡las 6 fotos!)
        galleryImages: [
            'images/D33t1-TorreLevant-Gloria/D33t1Levant01.jpg',
            'images/D33t1-TorreLevant-Gloria/D33t1Levant02.jpg',
            'images/D33t1-TorreLevant-Gloria/D33t1Levant03.jpg',
            'images/D33t1-TorreLevant-Gloria/D33t1Levant04.jpg',
            'images/D33t1-TorreLevant-Gloria/D33t1Levant05.jpg',
            'images/D33t1-TorreLevant-Gloria/D33t1Levant06.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN VENTA EN TORRE LEVANT',
        descriptionBody: [
            'Departamento lujoso y exclusivo con 2 recamaras, 2 baños completos, cocina, sala, barra de comedor. Con una amplia variedad de amenidades y una excelente división como: Alberca vista al mar, 3 áreas de asadores, Gym, sala privada, sala de eventos, sala de reuniones, cuarto de juegos (billar, poker, futbolito), Ludoteca, cancha de futbol rápido, área de juegos y alberca para niños, casilleros, bodegas para cada departamento y un exclusivo puente peatonal para ir a la playa.',
        ],
        address: 'Federal 19, Playa de Oro, 94293 Boca del Río, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 25 (¡NUEVA!): D71 t2 Torre Levant
    // =============================================
    { 
        id: 25, // ¡Nueva propiedad, ID 25!
        title: 'Torre Levant', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'venta', // ('venta' o 'renta')
        coordinates:"19.125781216448935, -96.10611007475782",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 4000000, // (¡Solo números!)
        bedrooms: 2, 
        bathrooms: 2, 
        parking: 1, 
        area: 104,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con D71t2Levant01.jpeg, D71t2Levant02.jpeg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/D71t2-Levant-Eloy/D71t2Levant01.jpeg',
        
        // Galería (¡las 18 fotos!)
        galleryImages: [
            'images/D71t2-Levant-Eloy/D71t2Levant01.jpeg',
            'images/D71t2-Levant-Eloy/D71t2Levant02.jpeg',
            'images/D71t2-Levant-Eloy/D71t2Levant03.jpeg',
            'images/D71t2-Levant-Eloy/D71t2Levant04.jpeg',
            'images/D71t2-Levant-Eloy/D71t2Levant05.jpeg',
            'images/D71t2-Levant-Eloy/D71t2Levant06.jpeg',
            'images/D71t2-Levant-Eloy/D71t2Levant07.jpeg',
            'images/D71t2-Levant-Eloy/D71t2Levant08.jpeg',
            'images/D71t2-Levant-Eloy/D71t2Levant09.jpeg',
            'images/D71t2-Levant-Eloy/D71t2Levant10.jpeg',
            'images/D71t2-Levant-Eloy/D71t2Levant11.jpeg',
            'images/D71t2-Levant-Eloy/D71t2Levant12.jpeg',
            'images/D71t2-Levant-Eloy/D71t2Levant13.jpeg',
            'images/D71t2-Levant-Eloy/D71t2Levant14.jpeg',
            'images/D71t2-Levant-Eloy/D71t2Levant15.jpeg',
            'images/D71t2-Levant-Eloy/D71t2Levant16.jpeg',
            'images/D71t2-Levant-Eloy/D71t2Levant17.jpeg',
            'images/D71t2-Levant-Eloy/D71t2Levant18.jpeg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN VENTA EN TORRE LEVANT',
        descriptionBody: [
            'Departamento lujoso y exclusivo con 2 recamaras, 2 baños completos, cocina, sala, barra de comedor.',
            'Con una amplia variedad de amenidades y una excelente división como: Alberca vista al mar, 3 áreas de asadores, Gym, sala privada, sala de eventos, sala de reuniones, cuarto de juegos (billar, poker, futbolito), Ludoteca, cancha de futbol rápido, área de juegos y alberca para niños, casilleros, bodegas para cada departamento y un exclusivo puente peatonal para ir a la playa.',
        ],
        address: 'Federal 19, Playa de Oro, 94293 Boca del Río, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 26: D81t2 Torre Levant
    // =============================================
    { 
        id: 26, // ¡Nueva propiedad, ID 26!
        title: 'Torre Levant', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.125781216448935, -96.10611007475782",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 24000, // (¡Solo números!)
        bedrooms: 2, 
        bathrooms: 2, 
        parking: 1, 
        area: 100,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con D81t2Levant01.jpg, D81t2Levant02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/D81t2-Levant-Gabriela/D81t2Levant01.jpg',
        
        // Galería (¡las 14 fotos!)
        galleryImages: [
            'images/D81t2-Levant-Gabriela/D81t2Levant01.jpg',
            'images/D81t2-Levant-Gabriela/D81t2Levant02.jpg',
            'images/D81t2-Levant-Gabriela/D81t2Levant03.jpg',
            'images/D81t2-Levant-Gabriela/D81t2Levant04.jpg',
            'images/D81t2-Levant-Gabriela/D81t2Levant05.jpg',
            'images/D81t2-Levant-Gabriela/D81t2Levant06.jpg',
            'images/D81t2-Levant-Gabriela/D81t2Levant07.jpg',
            'images/D81t2-Levant-Gabriela/D81t2Levant08.jpg',
            'images/D81t2-Levant-Gabriela/D81t2Levant09.jpg',
            'images/D81t2-Levant-Gabriela/D81t2Levant10.jpg',
            'images/D81t2-Levant-Gabriela/D81t2Levant11.jpg',
            'images/D81t2-Levant-Gabriela/D81t2Levant12.jpg',
            'images/D81t2-Levant-Gabriela/D81t2Levant13.jpg',
            'images/D81t2-Levant-Gabriela/D81t2Levant14.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN VENTA EN TORRE LEVANT D81T2',
        descriptionBody: [
            'Departamento lujoso y exclusivo con 2 recamaras, 2 baños completos, cocina, sala, barra de comedor. Con una amplia variedad de amenidades y una excelente división como: Alberca vista al mar, 3 áreas de asadores, Gym, sala privada, sala de eventos, sala de reuniones, cuarto de juegos (billar, poker, futbolito), Ludoteca, cancha de futbol rápido, área de juegos y alberca para niños, casilleros, bodegas para cada departamento y un exclusivo puente peatonal para ir a la playa.',
        ],
        address: 'Federal 19, Playa de Oro, 94293 Boca del Río, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 27: D112t2 Torre Levant
    // =============================================
    { 
        id: 27, // ¡Nueva propiedad, ID 27!
        title: 'Torre Levant', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.125781216448935, -96.10611007475782",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 25000, // (¡Solo números!)
        bedrooms: 2, 
        bathrooms: 2, 
        parking: 1, 
        area: 139,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con D112t2Levant01.jpg, D112t2Levant02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/D112t2-Levant-LauraSainos/D112t2Levant01.jpg',
        
        // Galería (¡las 12 fotos!)
        galleryImages: [
            'images/D112t2-Levant-LauraSainos/D112t2Levant01.jpg',
            'images/D112t2-Levant-LauraSainos/D112t2Levant02.jpg',
            'images/D112t2-Levant-LauraSainos/D112t2Levant03.jpg',
            'images/D112t2-Levant-LauraSainos/D112t2Levant04.jpg',
            'images/D112t2-Levant-LauraSainos/D112t2Levant05.jpg',
            'images/D112t2-Levant-LauraSainos/D112t2Levant06.jpg',
            'images/D112t2-Levant-LauraSainos/D112t2Levant07.jpg',
            'images/D112t2-Levant-LauraSainos/D112t2Levant08.jpg',
            'images/D112t2-Levant-LauraSainos/D112t2Levant09.jpg',
            'images/D112t2-Levant-LauraSainos/D112t2Levant10.jpg',
            'images/D112t2-Levant-LauraSainos/D112t2Levant11.jpg',
            'images/D112t2-Levant-LauraSainos/D112t2Levant12.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN RENTA EN TORRE LEVANT',
        descriptionBody: [
            'Departamento lujoso y exclusivo con 2 recamaras, 2 baños completos, cocina, sala, barra de comedor. Con una amplia variedad de amenidades y una excelente división como: Alberca vista al mar, 3 áreas de asadores, Gym, sala privada, sala de eventos, sala de reuniones, cuarto de juegos (billar, poker, futbolito), Ludoteca, cancha de futbol rápido, área de juegos y alberca para niños, casilleros, bodegas para cada departamento y un exclusivo puente peatonal para ir a la playa.',
        ],
        address: 'Federal 19, Playa de Oro, 94293 Boca del Río, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 28: D193t2 Torre Levant
    // =============================================
    { 
        id: 28, // ¡Nueva propiedad, ID 28!
        title: 'Torre Levant', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.125781216448935, -96.10611007475782",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 25000, // (¡Solo números!)
        bedrooms: 2, 
        bathrooms: 4, 
        parking: 1, 
        area: 160,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con D193t2Levant01.jpg, D193t2Levant02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/D193t2-Levant-Martin/D193t2Levant01.jpg',
        
        // Galería (¡las 32 fotos!)
        galleryImages: [
            'images/D193t2-Levant-Martin/D193t2Levant01.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant02.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant03.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant04.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant05.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant06.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant07.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant08.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant09.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant10.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant11.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant12.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant13.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant14.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant15.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant16.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant17.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant18.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant19.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant20.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant21.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant22.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant23.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant24.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant25.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant26.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant27.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant28.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant29.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant30.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant31.jpg',
            'images/D193t2-Levant-Martin/D193t2Levant32.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN VENTA EN TORRE LEVANT',
        descriptionBody: [
            'Departamento lujoso y exclusivo con 2 recamaras, 2 baños completos, cocina, sala, barra de comedor. Con una amplia variedad de amenidades y una excelente división como: Alberca vista al mar, 3 áreas de asadores, Gym, sala privada, sala de eventos, sala de reuniones, cuarto de juegos (billar, poker, futbolito), Ludoteca, cancha de futbol rápido, área de juegos y alberca para niños, casilleros, bodegas para cada departamento y un exclusivo puente peatonal para ir a la playa.',
        ],
        address: 'Federal 19, Playa de Oro, 94293 Boca del Río, Ver.'
    },
    // =============================================
    // PROPIEDAD 29 (¡NUEVA!): D802 Torre A Arrecifes
    // =============================================
    { 
        id: 29, // ¡Nueva propiedad, ID 29!
        title: 'D802 Torre A Arrecifes', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'venta', // ('venta' o 'renta')
        coordinates:"",// (¡FALTAN COORDENADAS!)
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 5300000, // (¡Solo números!)
        bedrooms: 3, 
        bathrooms: 3, 
        parking: 2, 
        area: 190,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con D802Arrecifes01.jpg, D802Arrecifes02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/D802-Torre-A-Arrecifes-Wendell/D802Arrecifes01.jpg',
        
        // Galería (¡las 8 fotos!)
        galleryImages: [
            'images/D802-Torre-A-Arrecifes-Wendell/D802Arrecifes01.jpg',
            'images/D802-Torre-A-Arrecifes-Wendell/D802Arrecifes02.jpg',
            'images/D802-Torre-A-Arrecifes-Wendell/D802Arrecifes03.jpg',
            'images/D802-Torre-A-Arrecifes-Wendell/D802Arrecifes04.jpg',
            'images/D802-Torre-A-Arrecifes-Wendell/D802Arrecifes05.jpg',
            'images/D802-Torre-A-Arrecifes-Wendell/D802Arrecifes06.jpg',
            'images/D802-Torre-A-Arrecifes-Wendell/D802Arrecifes07.jpg',
            'images/D802-Torre-A-Arrecifes-Wendell/D802Arrecifes08.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN VENTA EN TORRE ARRECIFES D802',
        descriptionBody: [
            'Escribe aquí el primer párrafo de la descripción.',
            'Escribe aquí el segundo párrafo, hablando de los acabados o amenidades.',
            'Cajón de estacionamiento, seguridad, etc.'
        ],
        address: 'Blvd. Manuel Ávila Camacho, Boca del Río, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 30: Departamento 10A Torre Pelicano
    // =============================================
    { 
        id: 30, // ¡Nueva propiedad, ID 30!
        title: 'Departamento 10A Torre Pelicano', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.156100499680818, -96.09801752103654",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 36000, // (¡Solo números!)
        bedrooms: 3, 
        bathrooms: 4.5, 
        parking: 2, 
        area: 0,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con Pelicano10A01.jpg, Pelicano10A02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/Departamento-10A-TorrePelícano-Montano/Pelícano10A01.jpg',
        
        // Galería (¡las 22 fotos!)
        galleryImages: [
            'images/Departamento-10A-TorrePelícano-Montano/Pelícano10A01.jpg',
            'images/Departamento-10A-TorrePelícano-Montano/Pelícano10A02.jpg',
            'images/Departamento-10A-TorrePelícano-Montano/Pelícano10A03.jpg',
            'images/Departamento-10A-TorrePelícano-Montano/Pelícano10A04.jpg',
            'images/Departamento-10A-TorrePelícano-Montano/Pelícano10A05.jpg',
            'images/Departamento-10A-TorrePelícano-Montano/Pelícano10A06.jpg',
            'images/Departamento-10A-TorrePelícano-Montano/Pelícano10A07.jpg',
            'images/Departamento-10A-TorrePelícano-Montano/Pelícano10A08.jpg',
            'images/Departamento-10A-TorrePelícano-Montano/Pelícano10A09.jpg',
            'images/Departamento-10A-TorrePelícano-Montano/Pelícano10A10.jpg',
            'images/Departamento-10A-TorrePelícano-Montano/Pelícano10A11.jpg',
            'images/Departamento-10A-TorrePelícano-Montano/Pelícano10A12.jpg',
            'images/Departamento-10A-TorrePelícano-Montano/Pelícano10A13.jpg',
            'images/Departamento-10A-TorrePelícano-Montano/Pelícano10A14.jpg',
            'images/Departamento-10A-TorrePelícano-Montano/Pelícano10A15.jpg',
            'images/Departamento-10A-TorrePelícano-Montano/Pelícano10A16.jpg',
            'images/Departamento-10A-TorrePelícano-Montano/Pelícano10A17.jpg',
            'images/Departamento-10A-TorrePelícano-Montano/Pelícano10A18.jpg',
            'images/Departamento-10A-TorrePelícano-Montano/Pelícano10A19.jpg',
            'images/Departamento-10A-TorrePelícano-Montano/Pelícano10A20.jpg',
            'images/Departamento-10A-TorrePelícano-Montano/Pelícano10A21.jpg',
            'images/Departamento-10A-TorrePelícano-Montano/Pelícano10A22.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN RENTA EN TORRE PELÍCANO',
        descriptionBody: [
            'Amplio departamento en renta por $36,000 mensuales, diseñado para ofrecer comodidad y espacios bien distribuidos. Cuenta con tres recámaras, cada una con su propio baño, además de un total de 4.5 baños completos que brindan funcionalidad y privacidad.',
            'Dispone de sala de televisión, cocina con comedor integrado y un cuarto de servicio, ideal para quienes buscan amplitud y comodidad en cada área del hogar.',
            'Incluye dos lugares de estacionamiento y una excelente distribución en metros cuadrados, ofreciendo un entorno moderno, confortable y con acabados de alta calidad.'
        ],
        address: 'Boulevard Ávila Camacho, Fraccionamiento 741, Costa de Oro, 94299 Veracruz' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 31: 14A Torre Arista
    // =============================================
    { 
        id: 31, // ¡Nueva propiedad, ID 31!
        title: '14A Torre Arista', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'veracruz', // (ej. 'boca-del-rio', 'alvarado', 'merida')
        locationName: 'Veracruz, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.20084523932998, -96.1336172350994",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 32000, // (¡Solo números!)
        bedrooms: 3, 
        bathrooms: 3, 
        parking: 2, 
        area: 144,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con 14Aarista01.jpg, 14Aarista02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/Departamento-14A-TorreArista/14Aarista01.jpg',
        
        // Galería (¡las 21 fotos!)
        galleryImages: [
            'images/Departamento-14A-TorreArista/14Aarista01.jpg',
            'images/Departamento-14A-TorreArista/14Aarista02.jpg',
            'images/Departamento-14A-TorreArista/14Aarista04.jpg',
            'images/Departamento-14A-TorreArista/14Aarista05.jpg',
            'images/Departamento-14A-TorreArista/14Aarista06.jpg',
            'images/Departamento-14A-TorreArista/14Aarista07.jpg',
            'images/Departamento-14A-TorreArista/14Aarista08.jpg',
            'images/Departamento-14A-TorreArista/14Aarista09.jpg',
            'images/Departamento-14A-TorreArista/14Aarista10.jpg',
            'images/Departamento-14A-TorreArista/14Aarista11.jpg',
            'images/Departamento-14A-TorreArista/14Aarista12.jpg',
            'images/Departamento-14A-TorreArista/14Aarista13.jpg',
            'images/Departamento-14A-TorreArista/14Aarista14.jpg',
            'images/Departamento-14A-TorreArista/14Aarista15.jpg',
            'images/Departamento-14A-TorreArista/14Aarista16.jpg',
            'images/Departamento-14A-TorreArista/14Aarista17.jpg',
            'images/Departamento-14A-TorreArista/14Aarista18.jpg',
            'images/Departamento-14A-TorreArista/14Aarista19.jpg',
            'images/Departamento-14A-TorreArista/14Aarista20.jpg',
            'images/Departamento-14A-TorreArista/14Aarista21.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN VENTA EN TORRE ARISTA 14A',
      descriptionBody: [
  'Amplio departamento de 144 m² diseñado para ofrecer comodidad, elegancia y una experiencia exclusiva. Cuenta con tres recámaras, tres baños completos, sala, cocina equipada y una terraza privada ideal para disfrutar de la vista.',
  'Incluye dos lugares de estacionamiento y acceso a todas las amenidades premium del complejo, entre ellas alberca con vista panorámica, barbería y área de cuidado personal, bar y área social, ascensor moderno, lobby elegante con recepción, valet parking y seguridad 24 horas.',
  'Una opción perfecta para quienes buscan vivir con confort, privacidad y estilo en una de las zonas más exclusivas de la ciudad.'
],
        address: 'Av. Arista #508, Veracruz, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 32 (¡NUEVA!): Depto 15 Torre San Sebastián
    // =============================================
    { 
        id: 32, // ¡Nueva propiedad, ID 32!
        title: 'Depto 15 Torre San Sebastián', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'venta', // ('venta' o 'renta')
        coordinates:"19.12694748737074, -96.10624320838653",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 3000000, // (¡Solo números!)
        bedrooms: 3, 
        bathrooms: 3, 
        parking: 2, 
        area: 140,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con dep15stSebastian01.jpg, dep15stSebastian02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/Departamento-15-Torre-SanSebastián/dep15stSebastian01.jpg',
        
        // Galería (¡las 9 fotos!)
        galleryImages: [
            'images/Departamento-15-Torre-SanSebastián/dep15stSebastian01.jpg',
            'images/Departamento-15-Torre-SanSebastián/dep15stSebastian02.jpg',
            'images/Departamento-15-Torre-SanSebastián/dep15stSebastian03.jpg',
            'images/Departamento-15-Torre-SanSebastián/dep15stSebastian04.jpg',
            'images/Departamento-15-Torre-SanSebastián/dep15stSebastian05.jpg',
            'images/Departamento-15-Torre-SanSebastián/dep15stSebastian06.jpg',
            'images/Departamento-15-Torre-SanSebastián/dep15stSebastian07.jpg',
            'images/Departamento-15-Torre-SanSebastián/dep15stSebastian08.jpg',
            'images/Departamento-15-Torre-SanSebastián/dep15stSebastian09.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN VENTA EN TORRE SAN SEBASTIÁN',
      descriptionBody: [
     'Departamento en venta con una excelente ubicación y un diseño que combina funcionalidad y confort. Con una superficie de 140 m², cuenta con tres recámaras y tres baños, distribuidos de manera práctica para aprovechar al máximo cada espacio.',
     'El área social integra sala, comedor y cocina, creando un ambiente moderno y acogedor, ideal para la convivencia familiar o social. Incluye dos lugares de estacionamiento para mayor comodidad.',
     'El desarrollo ofrece amenidades exclusivas como alberca, seguridad 24/7 y salón de eventos, garantizando bienestar y tranquilidad. Una excelente oportunidad de inversión por un valor de 3 millones de pesos.'
        ],

        address: 'Blvd Miguel Alemán 1489, Playa Hermosa, 94293 Veracruz, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 33: Depto 602 Torres JV
    // =============================================
    { 
        id: 33, // ¡Nueva propiedad, ID 33!
        title: 'Depto Torres JV', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'venta', // ('venta' o 'renta')
        coordinates:"19.150734092287667, -96.09527907010045",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 11000000, // (¡Solo números!)
        bedrooms: 3, 
        bathrooms: 4.5, 
        parking: 2, 
        area: 345,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con 602torresJV01.jpg, 602torresJV02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/Depto 602 torres JV Sra Charito/602torresJV01.jpg',
        
        // Galería (¡las 26 fotos!)
        galleryImages: [
            'images/Depto 602 torres JV Sra Charito/602torresJV01.jpg',
            'images/Depto 602 torres JV Sra Charito/602torresJV02.jpg',
            'images/Depto 602 torres JV Sra Charito/602torresJV03.jpg',
            'images/Depto 602 torres JV Sra Charito/602torresJV04.jpg',
            'images/Depto 602 torres JV Sra Charito/602torresJV05.jpg',
            'images/Depto 602 torres JV Sra Charito/602torresJV06.jpg',
            'images/Depto 602 torres JV Sra Charito/602torresJV07.jpg',
            'images/Depto 602 torres JV Sra Charito/602torresJV08.jpg',
            'images/Depto 602 torres JV Sra Charito/602torresJV09.jpg',
            'images/Depto 602 torres JV Sra Charito/602torresJV10.jpg',
            'images/Depto 602 torres JV Sra Charito/602torresJV11.jpg',
            'images/Depto 602 torres JV Sra Charito/602torresJV12.jpg',
            'images/Depto 602 torres JV Sra Charito/602torresJV13.jpg',
            'images/Depto 602 torres JV Sra Charito/602torresJV14.jpg',
            'images/Depto 602 torres JV Sra Charito/602torresJV15.jpg',
            'images/Depto 602 torres JV Sra Charito/602torresJV16.jpg',
            'images/Depto 602 torres JV Sra Charito/602torresJV17.jpg',
            'images/Depto 602 torres JV Sra Charito/602torresJV18.jpg',
            'images/Depto 602 torres JV Sra Charito/602torresJV19.jpg',
            'images/Depto 602 torres JV Sra Charito/602torresJV20.jpg',
            'images/Depto 602 torres JV Sra Charito/602torresJV21.jpg',
            'images/Depto 602 torres JV Sra Charito/602torresJV22.jpg',
            'images/Depto 602 torres JV Sra Charito/602torresJV23.jpg',
            'images/Depto 602 torres JV Sra Charito/602torresJV24.jpg',
            'images/Depto 602 torres JV Sra Charito/602torresJV25.jpg',
            'images/Depto 602 torres JV Sra Charito/602torresJV26.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN RENTA EN TORRES JV',
        descriptionBody: [
            'Dentro de la Torre cuenta con una amplia variedad de amenidades como: Jardín, asadores, albercas, alberca techada, Gym, Ludoteca, Salón recreativocon videojuegos, Elevador y Salón de usos múltiples',
        ],
        address: 'Torres JV Residencial, Blvd. Manuel Ávila Camacho 3534, Costa de Oro, 94299 Boca del Río, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 34: Depto 15 Ribiera de la Tampiquera
    // =============================================
    { 
        id: 34, 
        title: 'Depto Ribiera de la Tampiquera', // ¡Nombre actualizado!

        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"",// (¡FALTAN COORDENADAS!)
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 13500, // (¡Solo números!)
        bedrooms: 2, 
        bathrooms: 2, 
        parking: 1, 
        area: 75,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con dep15RibierasT01.jpg, dep15RibierasT02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/Depto-15-RibierasTampiquera-Hayde/dep15RibierasT01.jpg',
        
        // Galería (¡las 16 fotos!)
        galleryImages: [
            'images/Depto-15-RibierasTampiquera-Hayde/dep15RibierasT01.jpg',
            'images/Depto-15-RibierasTampiquera-Hayde/dep15RibierasT02.jpg',
            'images/Depto-15-RibierasTampiquera-Hayde/dep15RibierasT03.jpg',
            'images/Depto-15-RibierasTampiquera-Hayde/dep15RibierasT04.jpg',
            'images/Depto-15-RibierasTampiquera-Hayde/dep15RibierasT05.jpg',
            'images/Depto-15-RibierasTampiquera-Hayde/dep15RibierasT06.jpg',
            'images/Depto-15-RibierasTampiquera-Hayde/dep15RibierasT07.jpg',
            'images/Depto-15-RibierasTampiquera-Hayde/dep15RibierasT08.jpg',
            'images/Depto-15-RibierasTampiquera-Hayde/dep15RibierasT09.jpg',
            'images/Depto-15-RibierasTampiquera-Hayde/dep15RibierasT10.jpg',
            'images/Depto-15-RibierasTampiquera-Hayde/dep15RibierasT11.jpg',
            'images/Depto-15-RibierasTampiquera-Hayde/dep15RibierasT12.jpg',
            'images/Depto-15-RibierasTampiquera-Hayde/dep15RibierasT13.jpg',
            'images/Depto-15-RibierasTampiquera-Hayde/dep15RibierasT14.jpg',
            'images/Depto-15-RibierasTampiquera-Hayde/dep15RibierasT15.jpg',
            'images/Depto-15-RibierasTampiquera-Hayde/dep15RibierasT16.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN VENTA EN RIBIERAS DE LA TAMPIQUERA',
        descriptionBody: [
            'Bonito departamento amueblado en renta en Ribieras de la Tampiquera', 
            'cuenta con 2 recámaras, 2 baños completos, sala, comedor, cocina integral, área de lavado, balcón con vista a la laguna y un cajón de estacionamiento.', 
            'La torre cuenta con amenidades como alberca y seguridad las 24 horas.',
        ],
        address: 'C. Tlacotalpan, Fracc. La Tampiquera Boca del Rio Veracruz' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 35 (¡NUEVA!): Exertia Exofis
    // =============================================
    { 
        id: 35, // ¡Nueva propiedad, ID 35!
        title: 'Exertia Exofis', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.13498126194909, -96.10369797198595",
        type: 'oficina', // (ej. 'departamento', 'residencial-casa')
        price: 0, // (¡Solo números!)
        bedrooms: 0, // (Pongo 0 por ser oficina)
        bathrooms: 2, 
        parking: 1, 
        area: 80,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con Exertia01.jpg, Exertia02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/Exertia-exofis-energía/Exertia01.jpg',
        
        // Galería (¡las 18 fotos!)
        galleryImages: [
            'images/Exertia-exofis-energía/Exertia01.jpg',
            'images/Exertia-exofis-energía/Exertia02.jpg',
            'images/Exertia-exofis-energía/Exertia03.jpg',
            'images/Exertia-exofis-energía/Exertia04.jpg',
            'images/Exertia-exofis-energía/Exertia05.jpg',
            'images/Exertia-exofis-energía/Exertia06.jpg',
            'images/Exertia-exofis-energía/Exertia07.jpg',
            'images/Exertia-exofis-energía/Exertia08.jpg',
            'images/Exertia-exofis-energía/Exertia09.jpg',
            'images/Exertia-exofis-energía/Exertia10.jpg',
            'images/Exertia-exofis-energía/Exertia11.jpg',
            'images/Exertia-exofis-energía/Exertia12.jpg',
            'images/Exertia-exofis-energía/Exertia13.jpg',
            'images/Exertia-exofis-energía/Exertia14.jpg',
            'images/Exertia-exofis-energía/Exertia15.jpg',
            'images/Exertia-exofis-energía/Exertia16.jpg',
            'images/Exertia-exofis-energía/Exertia17.jpg',
            'images/Exertia-exofis-energía/Exertia18.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'OFICINA EN RENTA EN TORRE EXERTIA',
      descriptionBody: [
    'Oficina amueblada de 80 m² con un diseño moderno y funcional, ideal para empresas o profesionales que buscan un espacio cómodo y bien ubicado para operar. Cada área está pensada para ofrecer eficiencia y una excelente imagen corporativa.',
    'Cuenta con dos baños, recepción y elevadores que facilitan el acceso tanto para clientes como para colaboradores. Incluye dos lugares de estacionamiento exclusivos, brindando comodidad y seguridad.',
    'Una excelente opción para establecer un ambiente de trabajo profesional, con todas las facilidades necesarias para un desarrollo laboral óptimo.'
        ],
        address: 'Barco Viejo, Playa de Oro, Veracruz, Ver.' // (Dirección de ejemplo)
    },// =============================================
    // PROPIEDAD 36 (¡NUEVA!): Depto Kosta 90
    // =============================================
    { 
        id: 36, // ¡Nueva propiedad, ID 36!
        title: 'Depto Kosta 90', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.159139545682738, -96.10183502236018",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 27000, // (¡Solo números!)
        bedrooms: 3, 
        bathrooms: 3, 
        parking: 2, 
        area: 80,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con Kosta01.jpg, Kosta02.jpg, etc. Asumo .jpg)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/Kosta90-Depto-Maxilofacial-DrColorado/Kosta01.jpeg',
        
        // Galería (¡las 16 fotos!)
        galleryImages: [
            'images/Kosta90-Depto-Maxilofacial-DrColorado/Kosta01.jpeg',
            'images/Kosta90-Depto-Maxilofacial-DrColorado/Kosta02.jpeg',
            'images/Kosta90-Depto-Maxilofacial-DrColorado/Kosta03.jpeg',
            'images/Kosta90-Depto-Maxilofacial-DrColorado/Kosta04.jpeg',
            'images/Kosta90-Depto-Maxilofacial-DrColorado/Kosta05.jpeg',
            'images/Kosta90-Depto-Maxilofacial-DrColorado/Kosta06.jpeg',
            'images/Kosta90-Depto-Maxilofacial-DrColorado/Kosta07.jpeg',
            'images/Kosta90-Depto-Maxilofacial-DrColorado/Kosta08.jpeg',
            'images/Kosta90-Depto-Maxilofacial-DrColorado/Kosta09.jpeg',
            'images/Kosta90-Depto-Maxilofacial-DrColorado/Kosta10.jpeg',
            'images/Kosta90-Depto-Maxilofacial-DrColorado/Kosta11.jpeg',
            'images/Kosta90-Depto-Maxilofacial-DrColorado/Kosta12.jpeg',
            'images/Kosta90-Depto-Maxilofacial-DrColorado/Kosta13.jpeg',
            'images/Kosta90-Depto-Maxilofacial-DrColorado/Kosta14.jpeg',
            'images/Kosta90-Depto-Maxilofacial-DrColorado/Kosta15.jpeg',
            'images/Kosta90-Depto-Maxilofacial-DrColorado/Kosta16.jpeg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN RENTA EN KOSTA 90',
        descriptionBody: [
        'Departamento amueblado de 80 m² con un diseño práctico y bien distribuido, ideal para quienes buscan comodidad y funcionalidad en un espacio moderno. Cuenta con tres recámaras y tres baños completos, además de un área de lavado independiente.',
        'El área principal integra cocina, sala y comedor en un ambiente acogedor y bien iluminado, pensado para aprovechar al máximo cada metro cuadrado del espacio.',
        'Incluye dos lugares de estacionamiento sin techar. Una excelente opción para vivir con comodidad en una zona tranquila y de fácil acceso.'
        ],
        address: 'C. Mojarra 197, Costa de Oro, 94299 Boca del Río, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 37 (¡NUEVA!): Ladoga 19 Punta Tiburón
    // =============================================
    { 
        id: 37, // ¡Nueva propiedad, ID 37!
        title: 'Ladoga 19 Punta Tiburón', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'alvarado', // (ej. 'boca-del-rio', 'veracruz', 'merida')
        locationName: 'Alvarado, Veracruz', // (El texto que se muestra)
        operation: 'venta', // ('venta' o 'renta')
        coordinates:"19.064706730339033, -96.0831504019368",
        type: 'residencial-casa', // (ej. 'departamento', 'oficina')
        price: 5800000, // (¡Solo números!)
        bedrooms: 3, 
        bathrooms: 3, 
        parking: 2, 
        area: 300,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con Ladoga01.jpg, Ladoga02.jpg, etc. Asumo .jpg)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/Ladoga19-Lag7-PuntaTib-Palacios/Ladoga01.jpg',
        
        // Galería (¡las 13 fotos!)
        galleryImages: [
            'images/Ladoga19-Lag7-PuntaTib-Palacios/Ladoga01.jpg',
            'images/Ladoga19-Lag7-PuntaTib-Palacios/Ladoga02.jpg',
            'images/Ladoga19-Lag7-PuntaTib-Palacios/Ladoga03.jpg',
            'images/Ladoga19-Lag7-PuntaTib-Palacios/Ladoga04.jpg',
            'images/Ladoga19-Lag7-PuntaTib-Palacios/Ladoga05.jpg',
            'images/Ladoga19-Lag7-PuntaTib-Palacios/Ladoga06.jpg',
            'images/Ladoga19-Lag7-PuntaTib-Palacios/Ladoga07.jpg',
            'images/Ladoga19-Lag7-PuntaTib-Palacios/Ladoga08.jpg',
            'images/Ladoga19-Lag7-PuntaTib-Palacios/Ladoga09.jpg',
            'images/Ladoga19-Lag7-PuntaTib-Palacios/Ladoga10.jpg',
            'images/Ladoga19-Lag7-PuntaTib-Palacios/Ladoga11.jpg',
            'images/Ladoga19-Lag7-PuntaTib-Palacios/Ladoga12.jpg',
            'images/Ladoga19-Lag7-PuntaTib-Palacios/Ladoga13.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'CASA EN VENTA EN PUNTA TIBURÓN, LADOGA 19',
        descriptionBody: [
            'Escribe aquí el primer párrafo de la descripción.',
            'Escribe aquí el segundo párrafo, hablando de los acabados o amenidades.',
            'Cajón de estacionamiento, seguridad, etc.'
        ],
        address: 'Punta Tiburón, Alvarado, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 38: Levant 192t2
    // =============================================
    { 
        id: 38, // ¡Nueva propiedad, ID 38!
        title: 'Torre Levant', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.12571103406614, -96.10611030003075",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 25000, // (¡Solo números!)
        bedrooms: 2, 
        bathrooms: 2, 
        parking: 1, 
        area: 156,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con 192t2Levant01.jpg, 192t2Levant02.jpg, etc. Asumo .jpg)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/Levant-192t2-Munir/192t2Levant01.jpg',
        
        // Galería (¡las 9 fotos!)
        galleryImages: [
            'images/Levant-192t2-Munir/192t2Levant01.jpg',
            'images/Levant-192t2-Munir/192t2Levant02.jpg',
            'images/Levant-192t2-Munir/192t2Levant03.jpg',
            'images/Levant-192t2-Munir/192t2Levant04.jpg',
            'images/Levant-192t2-Munir/192t2Levant05.jpg',
            'images/Levant-192t2-Munir/192t2Levant06.jpg',
            'images/Levant-192t2-Munir/192t2Levant07.jpg',
            'images/Levant-192t2-Munir/192t2Levant08.jpg',
            'images/Levant-192t2-Munir/192t2Levant09.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN VENTA EN TORRE LEVANT',
        descriptionBody: [
            'Departamento lujoso y exclusivo con 2 recamaras, 2 baños completos, cocina, sala, barra de comedor. Con una amplia variedad de amenidades y una excelente división como: Alberca vista al mar, 3 áreas de asadores, Gym, sala privada, sala de eventos, sala de reuniones, cuarto de juegos (billar, poker, futbolito), Ludoteca, cancha de futbol rápido, área de juegos y alberca para niños, casilleros, bodegas para cada departamento y un exclusivo puente peatonal para ir a la playa.',
        ],
        address: 'Federal 19, Playa de Oro, 94293 Boca del Río, Ver.' 
    },
    // =============================================
    // PROPIEDAD 39: Loft 14 C Torre Arista
    // =============================================
    { 
        id: 39, // ¡Nueva propiedad, ID 39!
        title: 'Torre Arista', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'veracruz', // (ej. 'boca-del-rio', 'alvarado', 'merida')
        locationName: 'Veracruz, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.20085000299727, -96.13361521536362",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 19000, // (¡Solo números!)
        bedrooms: 1, // (Es un loft, ajusta si es necesario)
        bathrooms: 1, 
        parking: 1, 
        area: 90,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con LoftArista01.jpg, LoftArista02.jpg, etc. Asumo .jpg)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/Loft14C-TorreArista/LoftArista01.jpg',
        
        // Galería (¡las 10 fotos!)
        galleryImages: [
            'images/Loft14C-TorreArista/LoftArista01.jpg',
            'images/Loft14C-TorreArista/LoftArista02.jpg',
            'images/Loft14C-TorreArista/LoftArista03.jpg',
            'images/Loft14C-TorreArista/LoftArista04.jpg',
            'images/Loft14C-TorreArista/LoftArista05.jpg',
            'images/Loft14C-TorreArista/LoftArista06.jpg',
            'images/Loft14C-TorreArista/LoftArista07.jpg',
            'images/Loft14C-TorreArista/LoftArista08.jpg',
            'images/Loft14C-TorreArista/LoftArista09.jpg',
            'images/Loft14C-TorreArista/LoftArista10.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'LOFT EN VENTA EN TORRE ARISTA 14C',
        descriptionBody: [
            'Vanguardista y moderno departamento equipado con cocina y aire acondicionado',
            'Alberca, Barbería, Lobby, Ascensor, Bar, Seguridad 24hrs, valet parking',
        ],
        address: 'Xicoténcatl 165, Faros, 91709 Veracruz, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 40: 502B Maroma
    // =============================================
    { 
        id: 40, // ¡Nueva propiedad, ID 40!
        title: 'Departamento Maroma', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'boca-del-rio', 'veracruz', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.103983757431497, -96.11262996386009",
        type: 'departamento', // (ej. 'departamento', 'oficina')
        price: 16000, // (¡Solo números!)
        bedrooms: 2, 
        bathrooms: 2, 
        parking: 1, 
        area: 103,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con Maroma01.jpg, Maroma02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/Maroma/Maroma01.jpg',
        
        // Galería (¡las 36 fotos!)
        galleryImages: [
            'images/Maroma/Maroma01.jpg', 'images/Maroma/Maroma02.jpg',
            'images/Maroma/Maroma03.jpg', 'images/Maroma/Maroma04.jpg',
            'images/Maroma/Maroma05.jpg', 'images/Maroma/Maroma06.jpg',
            'images/Maroma/Maroma07.jpg', 'images/Maroma/Maroma08.jpg',
            'images/Maroma/Maroma09.jpg', 'images/Maroma/Maroma10.jpg',
            'images/Maroma/Maroma11.jpg', 'images/Maroma/Maroma12.jpg',
            'images/Maroma/Maroma13.jpg', 'images/Maroma/Maroma14.jpg',
            'images/Maroma/Maroma15.jpg', 'images/Maroma/Maroma16.jpg',
            'images/Maroma/Maroma17.jpg', 'images/Maroma/Maroma18.jpg',
            'images/Maroma/Maroma19.jpg', 'images/Maroma/Maroma20.jpg',
            'images/Maroma/Maroma21.jpg', 'images/Maroma/Maroma22.jpg',
            'images/Maroma/Maroma23.jpg', 'images/Maroma/Maroma24.jpg',
            'images/Maroma/Maroma25.jpg', 'images/Maroma/Maroma26.jpg',
            'images/Maroma/Maroma27.jpg', 'images/Maroma/Maroma28.jpg',
            'images/Maroma/Maroma29.jpg', 'images/Maroma/Maroma30.jpg',
            'images/Maroma/Maroma31.jpg', 'images/Maroma/Maroma32.jpg',
            'images/Maroma/Maroma33.jpg', 'images/Maroma/Maroma34.jpg',
            'images/Maroma/Maroma35.jpg', 'images/Maroma/Maroma36.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'CASA EN RENTA EN MAROMA',
        descriptionBody: [
            'Vanguardista y moderno departamento equipado con cocina y aire acondicionado',
        ],
        address: 'Calle, Priv. Río Moreno No. 467, Col. Flores Magon, 94290 Boca del Río, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 41: Oficina 201 Torre Americas
    // =============================================
    { 
        id: 41, // ¡Nueva propiedad, ID 41!
        title: 'Oficina Torre Américas', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"",// (¡FALTAN COORDENADAS!)
        type: 'oficina', // (ej. 'departamento', 'residencial-casa')
        price: 25000, // (¡Solo números!)
        bedrooms: 0, 
        bathrooms: 0, 
        parking: 0, 
        area: 85,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (¡OJO! Extensiones mixtas .jpg y .png)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/Ofi-201-TorreAmercias-Paty/201TAmericas01.jpg',
        
        // Galería (¡las 19 fotos!)
        galleryImages: [
            'images/Ofi-201-TorreAmercias-Paty/201TAmericas01.jpg',
            'images/Ofi-201-TorreAmercias-Paty/201TAmericas02.jpg',
            'images/Ofi-201-TorreAmercias-Paty/201TAmericas03.jpg',
            'images/Ofi-201-TorreAmercias-Paty/201TAmericas04.jpg',
            'images/Ofi-201-TorreAmercias-Paty/201TAmericas05.jpg',
            'images/Ofi-201-TorreAmercias-Paty/201TAmericas06.jpg',
            'images/Ofi-201-TorreAmercias-Paty/201TAmericas07.png', // <-- PNG
            'images/Ofi-201-TorreAmercias-Paty/201TAmericas08.png', // <-- PNG
            'images/Ofi-201-TorreAmercias-Paty/201TAmericas09.png', // <-- PNG
            'images/Ofi-201-TorreAmercias-Paty/201TAmericas10.png', // <-- PNG
            'images/Ofi-201-TorreAmercias-Paty/201TAmericas11.png', // <-- PNG
            'images/Ofi-201-TorreAmercias-Paty/201TAmericas12.png', // <-- PNG
            'images/Ofi-201-TorreAmercias-Paty/201TAmericas13.png', // <-- PNG
            'images/Ofi-201-TorreAmercias-Paty/201TAmericas14.png', // <-- PNG
            'images/Ofi-201-TorreAmercias-Paty/201TAmericas15.png', // <-- PNG
            'images/Ofi-201-TorreAmercias-Paty/201TAmericas16.png', // <-- PNG
            'images/Ofi-201-TorreAmercias-Paty/201TAmericas17.png', // <-- PNG
            'images/Ofi-201-TorreAmercias-Paty/201TAmericas18.png', // <-- PNG
            'images/Ofi-201-TorreAmercias-Paty/201TAmericas19.png'  // <-- PNG
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'OFICINA EN RENTA EN TORRE AMÉRICAS 201',
        descriptionBody: [
            'Vanguardista y moderno departamento equipado con cocina y aire acondicionado',
            
        ],
        address: 'Av. Las Américas 140, De Las Americas, Heriberto Kehoe Vicent, 94299 Boca del Río, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 42: Penn Garden Boca Towers
    // =============================================
    { 
        id: 42, // ¡Nueva propiedad, ID 42!
        title: 'Penn Garden Boca Towers', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.141769470669374, -96.10614644459208",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 26000, // (¡Solo números!)
        bedrooms: 3, 
        bathrooms: 2.5, 
        parking: 2, 
        area: 150,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con BocaTPGarden01.jpeg, BocaTPGarden02.jpeg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/PennGarden-BocaTowers-Mauro/BocaTPGarden01.jpeg',
        
        // Galería (¡las 14 fotos!)
        galleryImages: [
            'images/PennGarden-BocaTowers-Mauro/BocaTPGarden01.jpeg',
            'images/PennGarden-BocaTowers-Mauro/BocaTPGarden02.jpeg',
            'images/PennGarden-BocaTowers-Mauro/BocaTPGarden03.jpeg',
            'images/PennGarden-BocaTowers-Mauro/BocaTPGarden04.jpeg',
            'images/PennGarden-BocaTowers-Mauro/BocaTPGarden05.jpeg',
            'images/PennGarden-BocaTowers-Mauro/BocaTPGarden06.jpeg',
            'images/PennGarden-BocaTowers-Mauro/BocaTPGarden07.jpeg',
            'images/PennGarden-BocaTowers-Mauro/BocaTPGarden08.jpeg',
            'images/PennGarden-BocaTowers-Mauro/BocaTPGarden09.jpeg',
            'images/PennGarden-BocaTowers-Mauro/BocaTPGarden10.jpeg',
            'images/PennGarden-BocaTowers-Mauro/BocaTPGarden11.jpeg',
            'images/PennGarden-BocaTowers-Mauro/BocaTPGarden12.jpeg',
            'images/PennGarden-BocaTowers-Mauro/BocaTPGarden13.jpeg',
            'images/PennGarden-BocaTowers-Mauro/BocaTPGarden14.jpeg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO PENN GARDEN EN BOCA TOWERS',
        descriptionBody: [
            'Seguridad 24/7, estacionamiento techado, lobby, alberca, jacuzzi, salod de usos multiples, gimnasio, area de juegos infantiles.',
        ],
        address: 'Marigalante 586, De Las Americas, Heriberto Kehoe Vicent, 94299 Boca del Río, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 43: Penthouse Marsopas
    // =============================================
    { 
        id: 43, // ¡Nueva propiedad, ID 43!
        title: 'Penthouse Marsopas', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"",// (¡FALTAN COORDENADAS!)
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 25000, // (¡Solo números!)
        bedrooms: 4, 
        bathrooms: 3, 
        parking: 0, 
        area: 317,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con PHMarsopas01.jpg, PHMarsopas02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/Penthouse-Marsopas-Petra/PHMarsopas01.jpg',
        
        // Galería (¡las 7 fotos!)
        galleryImages: [
            'images/Penthouse-Marsopas-Petra/PHMarsopas01.jpg',
            'images/Penthouse-Marsopas-Petra/PHMarsopas02.jpg',
            'images/Penthouse-Marsopas-Petra/PHMarsopas03.jpg',
            'images/Penthouse-Marsopas-Petra/PHMarsopas04.jpg',
            'images/Penthouse-Marsopas-Petra/PHMarsopas05.jpg',
            'images/Penthouse-Marsopas-Petra/PHMarsopas06.jpg',
            'images/Penthouse-Marsopas-Petra/PHMarsopas07.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'PENTHOUSE EN VENTA EN CALLE MARSOPAS',
        descriptionBody: [
        'Residencia frente al mar de 317 m² distribuida en dos niveles, con un diseño elegante y funcional que ofrece amplios espacios y vistas privilegiadas. Cuenta con cuatro recámaras y tres baños completos, además de un área de lavado y una terraza perfecta para disfrutar del entorno costero.',
        'El área social combina cocina, sala y comedor en un ambiente moderno y bien iluminado, pensado para ofrecer confort y una experiencia de vida excepcional. La propiedad se entrega completamente amueblada y lista para habitar.',
        'Incluye tres lugares de estacionamiento y acceso a amenidades exclusivas como salón de eventos, alberca, asoleadero y recepción. Una opción ideal para quienes buscan vivir frente al mar con todas las comodidades y el lujo de un desarrollo residencial de alto nivel.'
        ],

        address: 'Marsopas, El Morro, 94293 Veracruz, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 44: Penthouse Torre Oasis
    // =============================================
    { 
        id: 44, // ¡Nueva propiedad, ID 44!
        title: 'Penthouse Torre Oasis', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'venta', // ('venta' o 'renta')
        coordinates:"19.12116077427595, -96.10523944274783",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 7500000, // (¡Solo números!)
        bedrooms: 3, 
        bathrooms: 3.5, 
        parking: 0, 
        area: 200,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con PHOasis01.jpg, PHOasis02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/PH-Torre-Oasis/PHOasis01.jpg',
        
        // Galería (¡las 16 fotos!)
        galleryImages: [
            'images/PH-Torre-Oasis/PHOasis01.jpg',
            'images/PH-Torre-Oasis/PHOasis02.jpg',
            'images/PH-Torre-Oasis/PHOasis03.jpg',
            'images/PH-Torre-Oasis/PHOasis04.jpg',
            'images/PH-Torre-Oasis/PHOasis05.jpg',
            'images/PH-Torre-Oasis/PHOasis06.jpg',
            'images/PH-Torre-Oasis/PHOasis07.jpg',
            'images/PH-Torre-Oasis/PHOasis08.jpg',
            'images/PH-Torre-Oasis/PHOasis09.jpg',
            'images/PH-Torre-Oasis/PHOasis10.jpg',
            'images/PH-Torre-Oasis/PHOasis11.jpg',
            'images/PH-Torre-Oasis/PHOasis12.jpg',
            'images/PH-Torre-Oasis/PHOasis13.jpg',
            'images/PH-Torre-Oasis/PHOasis14.jpg',
            'images/PH-Torre-Oasis/PHOasis15.jpg',
            'images/PH-Torre-Oasis/PHOasis16.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'PENTHOUSE EN RENTA EN TORRE OASIS',
        descriptionBody: [
        'Exclusiva residencia con diseño moderno y acabados de alta calidad, ideal para quienes buscan lujo, confort y una ubicación privilegiada con vista al mar. Cuenta con tres recámaras, cada una con vestidor y baño completo, además de dos medios baños que complementan las áreas sociales.',
        'El área principal integra sala, comedor y bar, junto con una sala de televisión perfecta para el entretenimiento familiar. Dispone también de cuarto de servicio con baño completo, área de lavandería y una amplia terraza con una vista inigualable al mar.',
        'Incluye paneles solares, estacionamiento para dos autos y acceso a amenidades como alberca y amplias áreas verdes. Una propiedad que combina elegancia, sustentabilidad y exclusividad en cada detalle.'
],

        address: 'Blvd Miguel Alemán 1943, Playa Hermosa, 94293 Veracruz, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 45: Piso 2B Torre Rambla
    // =============================================
    { 
        id: 45, // ¡Nueva propiedad, ID 45!
        title: 'Torre Rambla', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.090260131253533, -96.10458446029863",// El MAPA MARCA ALVARADO PERO LA DIRECCIÓN ES BOCA??
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 28000, // (¡Solo números!)
        bedrooms: 3, 
        bathrooms: 3.5, 
        parking: 2, 
        area: 210,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (¡OJO! Extensiones mixtas .jpg y .jpeg)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/Piso2-TorreRambla-Mónica/P2Rambla01.jpg',
        
        // Galería (¡las 24 fotos!)
        galleryImages: [
            'images/Piso2-TorreRambla-Mónica/P2Rambla01.jpg',
            'images/Piso2-TorreRambla-Mónica/P2Rambla02.jpg',
            'images/Piso2-TorreRambla-Mónica/P2Rambla03.jpg',
            'images/Piso2-TorreRambla-Mónica/P2Rambla04.jpg',
            'images/Piso2-TorreRambla-Mónica/P2Rambla05.jpg',
            'images/Piso2-TorreRambla-Mónica/P2Rambla06.jpg',
            'images/Piso2-TorreRambla-Mónica/P2Rambla07.jpg',
            'images/Piso2-TorreRambla-Mónica/P2Rambla08.jpg',
            'images/Piso2-TorreRambla-Mónica/P2Rambla09.jpg',
            'images/Piso2-TorreRambla-Mónica/P2Rambla10.jpg',
            'images/Piso2-TorreRambla-Mónica/P2Rambla11.jpg',
            'images/Piso2-TorreRambla-Mónica/P2Rambla12.jpg',
            'images/Piso2-TorreRambla-Mónica/P2Rambla13.jpg',
            'images/Piso2-TorreRambla-Mónica/P2Rambla14.jpeg', // <-- JPEG
            'images/Piso2-TorreRambla-Mónica/P2Rambla15.jpeg', // <-- JPEG
            'images/Piso2-TorreRambla-Mónica/P2Rambla16.jpeg', // <-- JPEG
            'images/Piso2-TorreRambla-Mónica/P2Rambla17.jpeg', // <-- JPEG
            'images/Piso2-TorreRambla-Mónica/P2Rambla18.jpeg', // <-- JPEG
            'images/Piso2-TorreRambla-Mónica/P2Rambla19.jpeg', // <-- JPEG
            'images/Piso2-TorreRambla-Mónica/P2Rambla20.jpeg', // <-- JPEG
            'images/Piso2-TorreRambla-Mónica/P2Rambla21.jpeg', // <-- JPEG
            'images/Piso2-TorreRambla-Mónica/P2Rambla22.jpeg', // <-- JPEG
            'images/Piso2-TorreRambla-Mónica/P2Rambla23.jpeg', // <-- JPEG
            'images/Piso2-TorreRambla-Mónica/P2Rambla24.jpeg'  // <-- JPEG
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN TORRE RAMBLA',
        descriptionBody: [
            'Departamento en renta en Torre Rambla', 
            'Cuenta CON', 
            '3 recámaras, 3.5 baños, cocina integral, área de lavado, sala-comedor, balcón con vista al mar, 2 cajones de estacionamiento.',
             'Amenidades:',
             'Alberca y seguridad 24/7.',

        ],
        address: '95264 Alvarado, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 46: Piso 7 Torre Rambla
    // =============================================
    { 
        id: 46, // ¡Nueva propiedad, ID 46!
        title: 'Torre Rambla', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.090260131253533, -96.10458446029863",// El MAPA MARCA ALVARADO PERO LA DIRECCIÓN ES BOCA??
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 30000, // (¡Solo números!)
        bedrooms: 3, 
        bathrooms: 3.5, 
        parking: 2, 
        area: 230,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con P7Ramblas01.jpeg, P7Ramblas02.jpeg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/Piso-7-TorreRamblas/P7Ramblas01.jpeg',
        
        // Galería (¡las 10 fotos!)
        galleryImages: [
            'images/Piso-7-TorreRamblas/P7Ramblas01.jpeg',
            'images/Piso-7-TorreRamblas/P7Ramblas02.jpeg',
            'images/Piso-7-TorreRamblas/P7Ramblas03.jpeg',
            'images/Piso-7-TorreRamblas/P7Ramblas04.jpeg',
            'images/Piso-7-TorreRamblas/P7Ramblas05.jpeg',
            'images/Piso-7-TorreRamblas/P7Ramblas06.jpeg',
            'images/Piso-7-TorreRamblas/P7Ramblas07.jpeg',
            'images/Piso-7-TorreRamblas/P7Ramblas08.jpeg',
            'images/Piso-7-TorreRamblas/P7Ramblas09.jpeg',
            'images/Piso-7-TorreRamblas/P7Ramblas10.jpeg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN TORRE RAMBLA',
        descriptionBody: [
            'Departamento en renta en Torre Rambla', 
            'Cuenta CON:', 
            '3 recámaras, 3.5 baños, cocina integral, área de lavado, sala-comedor, balcón con vista al mar, 2 cajones de estacionamiento.',
             'Amenidades:',
             'Alberca y seguridad 24/7.',
        ],
        address: '95264 Alvarado, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 47: Piso 2 Torres San Marino
    // =============================================
    { 
        id: 47, // ¡Nueva propiedad, ID 47!
        title: 'Torre San Marino', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"",// (¡FALTAN COORDENADAS!)
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 26000, // (¡Solo números!)
        bedrooms: 3, 
        bathrooms: 3.5, 
        parking: 2, 
        area: 245,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con P2TorresStMar01.jpg, P2TorresStMar02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/Piso-dosTorres-SanMarino/P2TorresStMar01.jpg',
        
        // Galería (¡las 8 fotos!)
        galleryImages: [
            'images/Piso-dosTorres-SanMarino/P2TorresStMar01.jpg',
            'images/Piso-dosTorres-SanMarino/P2TorresStMar02.jpg',
            'images/Piso-dosTorres-SanMarino/P2TorresStMar03.jpg',
            'images/Piso-dosTorres-SanMarino/P2TorresStMar04.jpg',
            'images/Piso-dosTorres-SanMarino/P2TorresStMar05.jpg',
            'images/Piso-dosTorres-SanMarino/P2TorresStMar06.jpg',
            'images/Piso-dosTorres-SanMarino/P2TorresStMar07.jpg',
            'images/Piso-dosTorres-SanMarino/P2TorresStMar08.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN RENTA EN TORRES SAN MARINO',
        descriptionBody: [
            'Departamento sin amueblar en renta en Torres San Marino',
            'Cuenta con 3 recámaras, 3.5 baños, cocina integral, área de lavado, sala-comedor, balcón con vista al mar, 2 cajones de estacionamiento.',
            'Amenidades:',
            'Alberca, y seguridad 24/7.',
        ],
        address: 'Marigalante 243, De Las Americas, Heriberto Kehoe Vicent, 94292 Boca del Río, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 48 (¡NUEVA!): Terrazas Punta Tiburón 
    // =============================================
    { 
        id: 48, // ¡Nueva propiedad, ID 48!
        title: 'Terrazas Punta Tiburón', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'boca-del-rio', 'veracruz', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.064000508812185, -96.09265393177539",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 3600000, // (¡Solo números!)
        bedrooms: 3, 
        bathrooms: 3.5, 
        parking: 2, 
        area: 120,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con TerrazasPB01.jpeg, TerrazasPB02.jpeg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/Terrazas-PuntaTiburón-Falcón/TerrazasPB01.jpeg',
        
        // Galería (¡las 15 fotos!)
        galleryImages: [
            'images/Terrazas-PuntaTiburón-Falcón/TerrazasPB01.jpeg',
            'images/Terrazas-PuntaTiburón-Falcón/TerrazasPB02.jpeg',
            'images/Terrazas-PuntaTiburón-Falcón/TerrazasPB03.jpeg',
            'images/Terrazas-PuntaTiburón-Falcón/TerrazasPB04.jpeg',
            'images/Terrazas-PuntaTiburón-Falcón/TerrazasPB05.jpeg',
            'images/Terrazas-PuntaTiburón-Falcón/TerrazasPB06.jpeg',
            'images/Terrazas-PuntaTiburón-Falcón/TerrazasPB07.jpeg',
            'images/Terrazas-PuntaTiburón-Falcón/TerrazasPB08.jpeg',
            'images/Terrazas-PuntaTiburón-Falcón/TerrazasPB09.jpeg',
            'images/Terrazas-PuntaTiburón-Falcón/TerrazasPB10.jpeg',
            'images/Terrazas-PuntaTiburón-Falcón/TerrazasPB11.jpeg',
            'images/Terrazas-PuntaTiburón-Falcón/TerrazasPB12.jpeg',
            'images/Terrazas-PuntaTiburón-Falcón/TerrazasPB13.jpeg',
            'images/Terrazas-PuntaTiburón-Falcón/TerrazasPB14.jpeg',
            'images/Terrazas-PuntaTiburón-Falcón/TerrazasPB15.jpeg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN VENTA EN TERRAZAS PUNTA TIBURÓN',
       descriptionBody: [
         'Departamento de 80 m² con un diseño moderno y funcional, ideal para quienes buscan confort y exclusividad. Cuenta con tres recámaras, tres baños y medio, área de lavado y una amplia terraza corrida que ofrece un espacio ideal para disfrutar del exterior.',
        'El área social integra cocina, sala y comedor en un ambiente luminoso y bien ventilado. Incluye dos lugares de estacionamiento y se entrega sin amueblar, ofreciendo la libertad de personalizar cada espacio a tu gusto.',
        'El complejo ofrece una amplia variedad de amenidades de primer nivel: alberca y jacuzzi, salas lounge, salón de usos múltiples con bodega y cocineta, gimnasio equipado, guardería, business center, área administrativa y más de 2,500 m² de áreas verdes. También cuenta con salón de eventos, asoleadero, recepción, vigilancia 24/7 y un entorno seguro y confortable que eleva la calidad de vida de sus residentes.'
        ],

        address: 'Punta Tiburón, Punta Tiburón Residencial Marina y Golf, Alvarado' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 49 (¡NUEVA!): Torre Amura Cuerpo Bajo
    // =============================================
    // { 
    //     id: 49, // ¡Nueva propiedad, ID 49!
    //     title: 'Torre Amura Cuerpo Bajo', // ¡Nombre actualizado!
        
    //     // --- ¡RELLENA ESTOS DATOS! ---
    //     location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
    //     locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
    //     operation: 'renta', // ('venta' o 'renta')
    //     coordinates:"19.153103102772054, -96.09542105015109",
    //     type: 'departamento', // (ej. 'residencial-casa', 'oficina')
    //     price: 25000, // (¡Solo números!)
    //     bedrooms: 3, 
    //     bathrooms: 3, 
    //     parking: 2, 
    //     area: 180,
        
    //     // --- ¡FOTOS ACTUALIZADAS! ---
    //     // (Rutas con AmuraCBajo01.jpeg, AmuraCBajo02.jpeg, etc.)
        
    //     // Foto principal (la de la tarjeta)
    //     imageUrl: 'images/Torre-Amura-DepCuerpoBajo/AmuraCbajo01.jpg',
        
    //     // Galería (¡las 19 fotos!)
    //     galleryImages: [
    //         'images/Torre-Amura-DepCuerpoBajo/AmuraCBajo01.jpg',
    //         'images/Torre-Amura-DepCuerpoBajo/AmuraCBajo02.jpg',
    //         'images/Torre-Amura-DepCuerpoBajo/AmuraCBajo03.jpg',
    //         'images/Torre-Amura-DepCuerpoBajo/AmuraCBajo04.jpg',
    //         'images/Torre-Amura-DepCuerpoBajo/AmuraCBajo05.jpg',
    //         'images/Torre-Amura-DepCuerpoBajo/AmuraCBajo06.jpg',
    //         'images/Torre-Amura-DepCuerpoBajo/AmuraCBajo07.jpg',
    //         'images/Torre-Amura-DepCuerpoBajo/AmuraCBajo08.jpg',
    //         'images/Torre-Amura-DepCuerpoBajo/AmuraCBajo09.jpg',
    //         'images/Torre-Amura-DepCuerpoBajo/AmuraCBajo10.jpg',
    //         'images/Torre-Amura-DepCuerpoBajo/AmuraCBajo11.jpg',
    //         'images/Torre-Amura-DepCuerpoBajo/AmuraCBajo12.jpg',
    //         'images/Torre-Amura-DepCuerpoBajo/AmuraCBajo13.jpg',
    //         'images/Torre-Amura-DepCuerpoBajo/AmuraCBajo14.jpg',
    //         'images/Torre-Amura-DepCuerpoBajo/AmuraCBajo15.jpg',
    //         'images/Torre-Amura-DepCuerpoBajo/AmuraCBajo16.jpg',
    //         'images/Torre-Amura-DepCuerpoBajo/AmuraCBajo17.jpg',
    //         'images/Torre-Amura-DepCuerpoBajo/AmuraCBajo18.jpg',
    //         'images/Torre-Amura-DepCuerpoBajo/AmuraCBajo19.jpg'
    //     ],
        
    //     // --- ¡RELLENA LA DESCRIPCIÓN! ---
    //     descriptionHeadline: 'DEPARTAMENTO EN RENTA EN TORRE AMURA',
    //     descriptionBody: [
    //         'Escribe aquí el primer párrafo de la descripción.',
    //         'Escribe aquí el segundo párrafo, hablando de los acabados o amenidades.',
    //         'Cajón de estacionamiento, seguridad, etc.'
    //     ],
    //     address: 'Torre Amura, Boca del Río, Ver.' // (Dirección de ejemplo)
    // },
    // =============================================
    // PROPIEDAD 50: 401 Torre Coral
    // =============================================
    { 
        id: 50, 
        title: 'Torre Coral', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"",// (¡FALTAN COORDENADAS!)
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 18000, // (¡Solo números!)
        bedrooms: 2, 
        bathrooms: 2, 
        parking: 1, 
        area: 82,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con Coral01.jpg, Coral02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/Torre-Coral-Sainos/TCoral01.jpg',
        
        // Galería (¡las 13 fotos!)
        galleryImages: [
            'images/Torre-Coral-Sainos/TCoral01.jpg',
            'images/Torre-Coral-Sainos/TCoral02.jpg',
            'images/Torre-Coral-Sainos/TCoral03.jpg',
            'images/Torre-Coral-Sainos/TCoral04.jpg',
            'images/Torre-Coral-Sainos/TCoral05.jpg',
            'images/Torre-Coral-Sainos/TCoral06.jpg',
            'images/Torre-Coral-Sainos/TCoral07.jpg',
            'images/Torre-Coral-Sainos/TCoral08.jpg',
            'images/Torre-Coral-Sainos/TCoral09.jpg',
            'images/Torre-Coral-Sainos/TCoral10.jpg',
            'images/Torre-Coral-Sainos/TCoral11.jpg'],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN RENTA EN TORRE CORAL',
        descriptionBody: [
            'Con una excente ubicación en Veracruz, Torre Coral ofrece departamentos modernos y cómodos para quienes buscan calidad de vida.',
            'Cerca de escuelas, centro comercial y de estadios.'
        ],
        address: 'C. Alaminos 560, Virginia, 94294 Veracruz, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 51 (¡NUEVA!): Torre del Mar
    // =============================================
    { 
        id: 51, // ¡Nueva propiedad, ID 51!
        title: 'Torre del Mar', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.119648125728602, -96.10485863200157",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 25000, // (¡Solo números!)
        bedrooms: 3, 
        bathrooms: 3, 
        parking: 2, 
        area: 170,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con TMar01.jpg, TMar02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/Torre-del-Mar/TorreMar01.jpg',
        
        // Galería (¡las 19 fotos!)
        galleryImages: [
            'images/Torre-del-Mar/TorreMar01.jpg',
            'images/Torre-del-Mar/TorreMar02.jpg',
            'images/Torre-del-Mar/TorreMar03.jpg',
            'images/Torre-del-Mar/TorreMar04.jpg',
            'images/Torre-del-Mar/TorreMar05.jpg',
            'images/Torre-del-Mar/TorreMar06.jpg',
            'images/Torre-del-Mar/TorreMar07.jpg',
            'images/Torre-del-Mar/TorreMar08.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN RENTA EN TORRE DEL MAR',
        descriptionBody: [
            'Escribe aquí el primer párrafo de la descripción.',
            'Escribe aquí el segundo párrafo, hablando de los acabados o amenidades.',
            'Cajón de estacionamiento, seguridad, etc.'
        ],
        address: 'Torre del Mar, Boca del Río, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 52: Depto 9SUR Torre Diamante
    // =============================================
    { 
        id: 52, // ¡Nueva propiedad, ID 52!
        title: 'Depto Torre Diamante', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'venta', // ('venta' o 'renta')
        coordinates:"",// (¡FALTAN COORDENADAS!)
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 4500000, // (¡Solo números!)
        bedrooms: 3, 
        bathrooms: 3, 
        parking: 2, 
        area: 180,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con TDiamante01.jpeg, TDiamante02.jpeg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/Torre-Diamante-departamento-Beatriz/DepTDiamante01.jpg',
        
        // Galería (¡las 20 fotos!)
        galleryImages: [
            'images/Torre-Diamante-departamento-Beatriz/DepTDiamante01.jpg',
            'images/Torre-Diamante-departamento-Beatriz/DepTDiamante02.jpg',
            'images/Torre-Diamante-departamento-Beatriz/DepTDiamante03.jpg',
            'images/Torre-Diamante-departamento-Beatriz/DepTDiamante04.jpg',
            'images/Torre-Diamante-departamento-Beatriz/DepTDiamante05.jpg',
            'images/Torre-Diamante-departamento-Beatriz/DepTDiamante06.jpg',
            'images/Torre-Diamante-departamento-Beatriz/DepTDiamante07.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN VENTA EN TORRE DIAMANTE',
        descriptionBody: [
            'Alberca, salon de usos multiples, elevador, seguridad 24/7, acceso directo a la playa, lobby, estacionamiento techado',
         
        ],
        address: 'Blvd Miguel Alemán 2100, Zona Centro, Costa Sol, 94290 Boca del Río, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 53 (¡NUEVA!): Depto Torre Leau
    // =============================================
    { 
        id: 53, // ¡Nueva propiedad, ID 53!
        title: 'Depto Torre Leau', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.132889842677077, -96.10628104459364",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 30000, // (¡Solo números!)
        bedrooms: 3, 
        bathrooms: 3, 
        parking: 2, 
        area: 190,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (¡OJO! Extensiones mixtas .jpg y .jpeg)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/TorreLeau-Depa-Soberón/DepaTLeau01.jpg',
        
        // Galería (¡las 20 fotos!)
        galleryImages: [
            'images/TorreLeau-Depa-Soberón/DepaTLeau01.jpg',
            'images/TorreLeau-Depa-Soberón/DepaTLeau02.jpg',
            'images/TorreLeau-Depa-Soberón/DepaTLeau03.jpg',
            'images/TorreLeau-Depa-Soberón/DepaTLeau04.jpg', // <-- JPG
            'images/TorreLeau-Depa-Soberón/DepaTLeau05.jpg', // <-- JPG
            'images/TorreLeau-Depa-Soberón/DepaTLeau06.jpg',
            'images/TorreLeau-Depa-Soberón/DepaTLeau07.jpg',
            'images/TorreLeau-Depa-Soberón/DepaTLeau08.jpg',
            'images/TorreLeau-Depa-Soberón/DepaTLeau09.jpg',
            'images/TorreLeau-Depa-Soberón/DepaTLeau10.jpg',
            'images/TorreLeau-Depa-Soberón/DepaTLeau11.jpg',
            'images/TorreLeau-Depa-Soberón/DepaTLeau12.jpg',
            'images/TorreLeau-Depa-Soberón/DepaTLeau13.jpg',
            'images/TorreLeau-Depa-Soberón/DepaTLeau14.jpg',
            'images/TorreLeau-Depa-Soberón/DepaTLeau15.jpg',
            'images/TorreLeau-Depa-Soberón/DepaTLeau16.jpg',
            'images/TorreLeau-Depa-Soberón/DepaTLeau17.jpg',
            'images/TorreLeau-Depa-Soberón/DepaTLeau18.jpg',
            'images/TorreLeau-Depa-Soberón/DepaTLeau19.jpg',
            'images/TorreLeau-Depa-Soberón/DepaTLeau20.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN RENTA EN TORRE LEAU 1702',
        descriptionBody: [
            'Escribe aquí el primer párrafo de la descripción.',
            'Escribe aquí el segundo párrafo, hablando de los acabados o amenidades.',
            'Cajón de estacionamiento, seguridad, etc.'
        ],
        address: 'Torre Leau, Boca del Río, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 54: Depto Torre Notaría
    // =============================================
    { 
        id: 54, // ¡Nueva propiedad, ID 54!
        title: 'Depto Torre Notaría', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"",// (¡FALTAN COORDENADAS!)
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 15500, // (¡Solo números!)
        bedrooms: 2, 
        bathrooms: 2, 
        parking: 1, 
        area: 135,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con TNotaria01.jpg, TNotaria02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/TorreNotaría-Departamento-3recámaras/DeptoTNotaria01.jpg',
        
        // Galería (¡las 12 fotos!)
        galleryImages: [
            'images/TorreNotaría-Departamento-3recámaras/DeptoTNotaria01.jpg',
            'images/TorreNotaría-Departamento-3recámaras/DeptoTNotaria02.jpg',
            'images/TorreNotaría-Departamento-3recámaras/DeptoTNotaria03.jpg',
            'images/TorreNotaría-Departamento-3recámaras/DeptoTNotaria04.jpg',
            'images/TorreNotaría-Departamento-3recámaras/DeptoTNotaria05.jpg',
            'images/TorreNotaría-Departamento-3recámaras/DeptoTNotaria06.jpg',
            'images/TorreNotaría-Departamento-3recámaras/DeptoTNotaria07.jpg',
            'images/TorreNotaría-Departamento-3recámaras/DeptoTNotaria08.jpg',
            'images/TorreNotaría-Departamento-3recámaras/DeptoTNotaria09.jpg',
            'images/TorreNotaría-Departamento-3recámaras/DeptoTNotaria10.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN RENTA EN TORRE NOTARÍA',
        descriptionBody: [
            'Piscina, Pérgolas y palapas',
        ],
        address: 'Blvd. Riviera Veracruzana 345-PRIMER PISO, FRACC. EL CONCHAL, 95264 El Conchal, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 55 (¡NUEVA!): Torre CDMX
    // =============================================
    { 
        id: 55, // ¡Nueva propiedad, ID 55!
        title: 'Torre CDMX', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"",// (¡FALTAN COORDENADAS!)
        type: 'oficina', // (ej. 'departamento', 'residencial-casa')
        price: 15000, // (¡Solo números!)
        bedrooms: 0, 
        bathrooms: 1, 
        parking: 1, 
        area: 80,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (¡OJO! Extensiones mixtas .jpg y .jpeg)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/TorreRodrigo-CDMX/CDMX01.jpg',
        
        // Galería (¡las 12 fotos!)
        galleryImages: [
            'images/TorreRodrigo-CDMX/CDMX01.jpg',
            'images/TorreRodrigo-CDMX/CDMX02.jpg',
            'images/TorreRodrigo-CDMX/CDMX03.jpg',
            'images/TorreRodrigo-CDMX/CDMX04.jpg',
            'images/TorreRodrigo-CDMX/CDMX05.jpg',
            'images/TorreRodrigo-CDMX/CDMX06.jpg',
            'images/TorreRodrigo-CDMX/CDMX07.jpg', // <-- JPEG
            'images/TorreRodrigo-CDMX/CDMX08.jpg', // <-- JPEG
            'images/TorreRodrigo-CDMX/CDMX09.jpg', // <-- JPEG
            'images/TorreRodrigo-CDMX/CDMX10.jpg', // <-- JPEG
            'images/TorreRodrigo-CDMX/CDMX11.jpg', // <-- JPEG
            'images/TorreRodrigo-CDMX/CDMX12.jpg'  // <-- JPEG
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'OFICINA EN RENTA EN TORRE CDMX (WTC)',
        descriptionBody: [
            'Escribe aquí el primer párrafo de la descripción.',
            'Escribe aquí el segundo párrafo, hablando de los acabados o amenidades.',
            'Cajón de estacionamiento, seguridad, etc.'
        ],
        address: 'Torre WTC, Boca del Río, Ver.' // (Dirección de ejemplo)
    },
    // =============================================
    // PROPIEDAD 56: Depto. San Sebastian (esto es por si surge algun cambio)
    // =============================================
    { 
        id: 56, // ¡Nueva propiedad, ID 56!
        title: 'Depto. San Sebastián', // ¡Nombre actualizado!

        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.12697055184169, -96.10624600157655",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 22000, // (¡Solo números!)
        bedrooms: 3, 
        bathrooms: 3, 
        parking: 2, 
        area: 150,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con TSebastian01.jpg, TSebastian02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/Torre-SanSebastián/TStSebastian01.jpg',
        
        // Galería (¡las 14 fotos!)
        galleryImages: [
            'images/Torre-SanSebastián/TStSebastian01.jpg',
            'images/Torre-SanSebastián/TStSebastian02.jpg',
            'images/Torre-SanSebastián/TStSebastian03.jpg',
            'images/Torre-SanSebastián/TStSebastian04.jpg',
            'images/Torre-SanSebastián/TStSebastian05.jpg',
            'images/Torre-SanSebastián/TStSebastian06.jpg',
            'images/Torre-SanSebastián/TStSebastian07.jpg',
            'images/Torre-SanSebastián/TStSebastian08.jpg',
            'images/Torre-SanSebastián/TStSebastian09.jpg',
            'images/Torre-SanSebastián/TStSebastian10.jpg',
            'images/Torre-SanSebastián/TStSebastian11.jpg',
            'images/Torre-SanSebastián/TStSebastian12.jpg',
            'images/Torre-SanSebastián/TStSebastian13.jpg',
            'images/Torre-SanSebastián/TStSebastian14.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN RENTA EN TORRE SAN SEBASTIÁN',
        descriptionBody: [
            'Departamento frente al mar, con ubicación cercana a restaurantes y centros comerciales, donde cuenta con recámaras, cocina, baños y sala. La Torre tiene amenidades como: Alberca, Salón de eventos, Área verde, Área de juegos infantiles, Elevador y Estacionamiento',
        ],
        address: 'Calle Libertad, El Morro, Boca del Río, Veracruz de Ignacio de la Llave, 94293, MEX' // (Dirección de ejemplo)
    },
    // // =============================================
    // // PROPIEDAD 57 (¡NUEVA!): Torres JV
    // // =============================================
    // { 
    //     id: 57, // ¡Nueva propiedad, ID 57!
    //     title: 'Torres JV', // ¡Nombre actualizado!
        
    //     // --- ¡RELLENA ESTOS DATOS! ---
    //     location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
    //     locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
    //     operation: 'renta', // ('venta' o 'renta')
    //     coordinates:"19.15071928784871, -96.09527102562689",
    //     type: 'departamento', // (ej. 'residencial-casa', 'oficina')
    //     price: 25000, // (¡Solo números!)
    //     bedrooms: 3, 
    //     bathrooms: 3, 
    //     parking: 2, 
    //     area: 180,
        
    //     // --- ¡FOTOS ACTUALIZADAS! ---
    //     // (Rutas con TJV01.jpg, TJV02.jpg, etc.)
        
    //     // Foto principal (la de la tarjeta)
    //     imageUrl: 'images/TorresJV/TorresJV01.jpg',
        
    //     // Galería (¡las 20 fotos!)
    //     galleryImages: [
    //         'images/TorresJV/TorresJV01.jpg',
    //         'images/TorresJV/TorresJV02.jpg',
    //         'images/TorresJV/TorresJV03.jpg',
    //         'images/TorresJV/TorresJV04.jpg',
    //         'images/TorresJV/TorresJV05.jpg',
    //         'images/TorresJV/TorresJV06.jpg',
    //         'images/TorresJV/TorresJV07.jpg',
    //         'images/TorresJV/TorresJV08.jpg',
    //         'images/TorresJV/TorresJV09.jpg',
    //         'images/TorresJV/TorresJV10.jpg',
    //         'images/TorresJV/TorresJV11.jpg',
    //         'images/TorresJV/TorresJV12.jpg',
    //         'images/TorresJV/TorresJV13.jpg',
    //         'images/TorresJV/TorresJV14.jpg',
    //         'images/TorrresJV/TorresJV15.jpg',
    //         'images/TorresJV/TorresJV16.jpg',
    //         'images/TorresJV/TorresJV17.jpg',
    //         'images/TorresJV/TorresJV18.jpg',
    //         'images/TorresJV/TorresJV19.jpg',
    //         'images/TorrresJV/TorresJV20.jpg'
    //     ],
        
    //     // --- ¡RELLENA LA DESCRIPCIÓN! ---
    //     descriptionHeadline: 'DEPARTAMENTO EN RENTA EN TORRES JV',
    //     descriptionBody: [
    //         'Escribe aquí el primer párrafo de la descripción.',
    //         'Escribe aquí el segundo párrafo, hablando de los acabados o amenidades.',
    //         'Cajón de estacionamiento, seguridad, etc.'
    //     ],
    //     address: 'Torres JV, Boca del Río, Ver.' // (Dirección de ejemplo)
    //},
    // =============================================
    // PROPIEDAD 58: Torre Vela
    // =============================================
    // { 
    //     id: 58, // ¡Nueva propiedad, ID 58!
    //     title: 'Torre Vela', // ¡Nombre actualizado!
        
    //     // --- ¡RELLENA ESTOS DATOS! ---
    //     location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
    //     locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
    //     operation: 'venta', // ('venta' o 'renta')
    //     coordinates:"19.15704514200856, -96.09867983549509",
    //     type: 'departamento', // (ej. 'residencial-casa', 'oficina')
    //     price: 31000, // (¡Solo números!)
    //     bedrooms: 3, 
    //     bathrooms: 3, 
    //     parking: 0, 
    //     area: 200,
        
    //     // --- ¡FOTOS ACTUALIZADAS! ---
    //     // (Rutas con TVela01.jpg, TVela02.jpg, etc.)
        
    //     // Foto principal (la de la tarjeta)
    //     imageUrl: 'images/TorreVela/TVela01.jpg',
        
    //     // Galería (¡las 18 fotos!)
    //     galleryImages: [
    //         'images/TorreVela/TVela01.jpg',
    //         'images/TorreVela/TVela02.jpg',
    //         'images/TorreVela/TVela03.jpg',
    //         'images/TorreVela/TVela04.jpg',
    //         'images/TorreVela/TVela05.jpg',
    //         'images/TorreVela/TVela06.jpg',
    //         'images/TorreVela/TVela07.jpg',
    //         'images/TorreVela/TVela08.jpg',
    //         'images/TorreVela/TVela09.jpg',
    //         'images/TorreVela/TVela10.jpg',
    //         'images/TorreVela/TVela11.jpg',
    //         'images/TorreVela/TVela12.jpg',
    //         'images/TorreVela/TVela13.jpg',
    //         'images/TorreVela/TVela14.jpg',
    //         'images/TorreVela/TVela15.jpg',
    //         'images/TorreVela/TVela16.jpg',
    //         'images/TorreVela/TVela17.jpg',
    //         'images/TorreVela/TVela18.jpg'
    //     ],
        
    //     // --- ¡RELLENA LA DESCRIPCIÓN! ---
    //     descriptionHeadline: 'DEPARTAMENTO EN VENTA EN TORRE VELA',
    //     descriptionBody: [
    //         'NO TIENE DESCRIPCION',
    //     ],
    //     address: 'Blvd. Manuel Ávila Camacho 650, Costa de Oro, 94299 Veracruz, Ver.' // (Dirección de ejemplo)
    // },
    // // =============================================
    // // PROPIEDAD 59 (¡NUEVA!): Torre Veramar
    // // =============================================
    // { 
    //     id: 59, // ¡Nueva propiedad, ID 59!
    //     title: 'Torre Veramar', // ¡Nombre actualizado!
        
    //     // --- ¡RELLENA ESTOS DATOS! ---
    //     location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
    //     locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
    //     operation: 'renta', // ('venta' o 'renta')
    //     coordinates:"19.19640026110105, -96.12986144345308",
    //     type: 'departamento', // (ej. 'residencial-casa', 'oficina')
    //     price: 20000, // (¡Solo números!)
    //     bedrooms: 3, 
    //     bathrooms: 2, 
    //     parking: 2, 
    //     area: 160,
        
    //     // --- ¡FOTOS ACTUALIZADAS! ---
    //     // (Rutas con TVeramar01.jpg, TVeramar02.jpg, etc.)
        
    //     // Foto principal (la de la tarjeta)
    //     imageUrl: 'images/TorreVeramar/TVeramar01.jpg',
        
    //     // Galería (¡las 5 fotos!)
    //     galleryImages: [
    //         'images/TorreVeramar/TVeramar01.jpg',
    //         'images/TorreVeramar/TVeramar02.jpg',
    //         'images/TorreVeramar/TVeramar03.jpg',
    //         'images/TorreVeramar/TVeramar04.jpg',
    //         'images/TorreVeramar/TVeramar05.jpg'
    //     ],
        
    //     // --- ¡RELLENA LA DESCRIPCIÓN! ---
    //     descriptionHeadline: 'DEPARTAMENTO EN RENTA EN TORRE VERAMAR',
    //     descriptionBody: [
    //         'Escribe aquí el primer párrafo de la descripción.',
    //         'Escribe aquí el segundo párrafo, hablando de los acabados o amenidades.',
    //         'Cajón de estacionamiento, seguridad, etc.'
    //     ],
    //     address: 'Torre Veramar, Boca del Río, Ver.' // (Dirección de ejemplo)
    // },// =============================================
    // PROPIEDAD 60 (¡NUEVA!): Urban Vita
    // =============================================
    { 
        id: 60, // ¡Nueva propiedad, ID 60!
        title: 'Urban Vita', // ¡Nombre actualizado!
        
        // --- ¡RELLENA ESTOS DATOS! ---
        location: 'boca-del-rio', // (ej. 'veracruz', 'alvarado', 'merida')
        locationName: 'Boca del Río, Veracruz', // (El texto que se muestra)
        operation: 'renta', // ('venta' o 'renta')
        coordinates:"19.142908610485463, -96.11281134960969",
        type: 'departamento', // (ej. 'residencial-casa', 'oficina')
        price: 13000, // (¡Solo números!)
        bedrooms: 2, 
        bathrooms: 2, 
        parking: 1, 
        area: 100,
        
        // --- ¡FOTOS ACTUALIZADAS! ---
        // (Rutas con UrbanVita01.jpg, UrbanVita02.jpg, etc.)
        
        // Foto principal (la de la tarjeta)
        imageUrl: 'images/UrbanVita/UrbanVita01.jpg',
        
        // Galería (¡las 11 fotos!)
        galleryImages: [
            'images/UrbanVita/UrbanVita01.jpg',
            'images/UrbanVita/UrbanVita02.jpg',
            'images/UrbanVita/UrbanVita03.jpg',
            'images/UrbanVita/UrbanVita04.jpg',
            'images/UrbanVita/UrbanVita05.jpg',
            'images/UrbanVita/UrbanVita06.jpg',
            'images/UrbanVita/UrbanVita07.jpg',
            'images/UrbanVita/UrbanVita08.jpg',
            'images/UrbanVita/UrbanVita09.jpg',
            'images/UrbanVita/UrbanVita10.jpg',
            'images/UrbanVita/UrbanVita11.jpg'
        ],
        
        // --- ¡RELLENA LA DESCRIPCIÓN! ---
        descriptionHeadline: 'DEPARTAMENTO EN RENTA EN URBAN VITA',
        descriptionBody: [
            'Escribe aquí el primer párrafo de la descripción.',
            'Escribe aquí el segundo párrafo, hablando de los acabados o amenidades.',
            'Cajón de estacionamiento, seguridad, etc.'
        ],
        address: 'Urban Vita, Boca del Río, Ver.' // (Dirección de ejemplo)
    },

];

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
        let priceLabel = property.operation === 'renta' ? ' / Mes' : ' / Venta';
        const operationText = property.operation.charAt(0).toUpperCase() + property.operation.slice(1);

        // ¡OJO! El elemento principal ahora es un <a> (enlace)
        return `
        <a href="propiedad-detalle.html?id=${property.id}" class="property-card">
            
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

            window.location.href = `admin-propiedades.html?${params.toString()}`;

        });



        // --- Lógica Filtros Destacados (Fase 3) ---

        const operationFilterGroup = document.getElementById('filter-operation');

        const locationFilterGroup = document.getElementById('filter-location');

        const propertiesContainerIndex = document.getElementById('properties-grid-container');

        if(operationFilterGroup && locationFilterGroup && propertiesContainerIndex) {

            let activeOperationFilter = 'todo';

            let activeLocationFilter = 'veracruz';

            function renderPropertiesIndex() {

            propertiesContainerIndex.innerHTML = '';

            const filtered = propertiesData.filter(prop => {

                const opMatch = (activeOperationFilter === 'todo') || (prop.operation === activeOperationFilter);

               

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

            renderPropertiesIndex();

        }



        // --- Lógica Conteo de Zonas (Fase 3.5) ---

        const countSpans = document.querySelectorAll('.location-card .property-count');

        if (countSpans.length > 0) {

            const locationCounts = {};

            for (const prop of propertiesData) {

                const location = prop.location;

                locationCounts[location] = (locationCounts[location] || 0) + 1;

            }

            countSpans.forEach(span => {

                const location = span.dataset.location;

                const count = locationCounts[location] || 0;

                span.textContent = `${count} ${count === 1 ? 'Property' : 'Properties'}`;

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

            const filtered = propertiesData.filter(prop => {
                // 1. Filtro de Operación ¡NUEVO!
                const operationMatch = (state.operation === 'ambas') || (prop.operation === state.operation);
                
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

        renderPropertiesPage();

    }





    // =============================================

    // LÓGICA ESPECÍFICA DE PROPIEDAD-DETALLE.HTML (¡¡FLECHAS ARREGLADAS!!)

    // =============================================

   

    const detailTitle = document.getElementById('detail-property-title');

   

    if (detailTitle) {

        (async function() {

        // --- 1. Obtener el ID de la URL ---

        const urlParams = new URLSearchParams(window.location.search);

        const rawId = urlParams.get('id');

        const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

        let property;

        if (UUID_REGEX.test(rawId)) {

            // --- Cargar desde la BD via API pública ---

            try {

                const token = localStorage.getItem("token");
                const headers = token ? { "Authorization": `Bearer ${token}` } : {};
                const res = await fetch(`/api/public/propiedades/${rawId}`, { headers });

                if (!res.ok) {

                    document.querySelector('.property-detail-page .container').innerHTML = '<h1>Propiedad no disponible</h1><p>Esta propiedad no está disponible en este momento. <a href="index.html">Volver al inicio</a>.</p>';

                    return;

                }

                const data = await res.json();

                property = {

                    title: data.propiedad,

                    price: data.precio,

                    bedrooms: data.recamaras,

                    bathrooms: data.banos,

                    parking: data.estacionamiento,

                    area: data.superficie_construccion_m2,

                    address: data.direccion,

                    locationName: data.zona || '',

                    descriptionHeadline: (data.propiedad || '').toUpperCase(),

                    descriptionBody: [data.descripcion || ''],

                    galleryImages: (data.imagenes || []).map(img => img.url_archivo),

                    operation: data.tipo_operacion,

                    type: data.tipo_inmueble,

                    coordinates: null

                };

            // --- Barra flotante de admin (solo si hay token) ---

            if (localStorage.getItem("token")) {

                const isDark = document.documentElement.classList.contains("dark");

                const adminBar = document.createElement("div");

                adminBar.style.cssText = `
                    position: fixed;
                    top: 80px;
                    right: 20px;
                    z-index: 9999;
                    display: flex;
                    gap: 10px;
                    background: ${isDark ? "#1e293b" : "#ffffff"};
                    padding: 12px;
                    border-radius: 12px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
                `;

                const btnEditar = document.createElement("button");
                btnEditar.textContent = "✏ Editar";
                btnEditar.style.cssText = "background:#0d6efd; color:#fff; border:none; border-radius:8px; padding:8px 16px; font-size:14px; font-weight:600; cursor:pointer;";
                btnEditar.addEventListener("click", () => { window.location.href = "/admin-formulario.html?id=" + rawId; });

                const fromParam = new URLSearchParams(window.location.search).get('from');

                const btnVolver = document.createElement("button");
                btnVolver.textContent = fromParam === 'formulario' ? "✕ Cerrar vista previa" : "← Volver";
                btnVolver.style.cssText = "background:#6b7280; color:#fff; border:none; border-radius:8px; padding:8px 16px; font-size:14px; font-weight:600; cursor:pointer;";
                btnVolver.addEventListener("click", () => {
                    if (fromParam === 'formulario') {
                        window.close();
                    } else {
                        window.location.href = '/admin-propiedades.html';
                    }
                });

                adminBar.appendChild(btnEditar);
                adminBar.appendChild(btnVolver);
                document.body.appendChild(adminBar);

            }

            } catch (e) {

                document.querySelector('.property-detail-page .container').innerHTML = '<h1>Propiedad no disponible</h1><p>Error al cargar la propiedad. <a href="index.html">Volver al inicio</a>.</p>';

                return;

            }

        } else {

            // --- 2. Encontrar la propiedad en datos estáticos ---

            const propertyId = parseInt(rawId);

            property = propertiesData.find(p => p.id === propertyId);

            // --- 3. Si no se encuentra, mostrar error ---

            if (!property) {

                detailTitle.textContent = 'Propiedad no encontrada';

                document.querySelector('.property-detail-page .container').innerHTML = '<h1>Error 404</h1><p>La propiedad que busca no existe. <a href="index.html">Volver al inicio</a>.</p>';

                return;

            }

        }



        // --- 4. Rellenar la página ---

        const typeMap = { 'casa-habitacion': 'Casa Habitación', 'comercial': 'Comercial', 'departamento': 'Departamento', 'oficina': 'Oficina', 'residencial': 'Residencial', 'residencial-casa': 'Residencial (Casa)', 'residencial-departamento': 'Residencial (Depto)', 'residencial-terreno': 'Residencial (Terreno)' };

        const operationMap = { 'venta': 'Venta', 'renta': 'Renta' };

       

        const typeText = typeMap[property.type] || 'No especificado';

        const operationText = operationMap[property.operation] || 'No especificado';

        const priceText = formatCurrency(property.price) + (property.operation === 'renta' ? ' / Mes' : ' / Venta');

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
            // 1. Verificamos si la propiedad tiene coordenadas en tus datos
            if (property.coordinates) {
                // 2. Insertamos las coordenadas en la URL de Google Maps
                // q=coordenadas, z=zoom(15), hl=idioma(es), output=embed(para iframe)
                mapIframe.src = `https://maps.google.com/maps?q=${property.coordinates}&hl=es&z=15&output=embed`;
            } else {
                // 3. Si se te olvidó poner coordenadas, mostramos Veracruz centro por defecto
                mapIframe.src = `https://maps.google.com/maps?q=19.1738,-96.1342&hl=es&z=12&output=embed`;
            }
        }

        })();

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