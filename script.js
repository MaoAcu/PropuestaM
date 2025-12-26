// script.js - Funcionalidad para Paraíso Conectado

// Datos ficticios para el prototipo
const featuredBusinesses = [
    {
        id: 1,
        name: "Restaurante La Casona",
        category: "Restaurante",
        description: "Comida típica costarricense en un ambiente familiar. Especialidad en casados y postres tradicionales.",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        location: "Centro de Paraíso"
    },
    {
        id: 2,
        name: "Cafetería El Aroma",
        category: "Cafetería",
        description: "Café de altura recién tostado y repostería artesanal. Productos locales de alta calidad.",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        location: "Barrio El Carmen"
    },
    {
        id: 3,
        name: "Tienda Artesanal Paraíso",
        category: "Artesanías",
        description: "Productos artesanales hechos por manos locales. Souvenirs, tejidos y cerámica tradicional.",
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        location: "Calle Los Artesanos"
    },
    {
        id: 4,
        name: "Supermercado El Ahorro",
        category: "Supermercado",
        description: "Productos frescos y abarrotes. Apoyamos a productores locales de la zona.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        location: "Centro Comercial Paraíso"
    }
];

const tourismPlaces = [
    {
        id: 1,
        name: "Jardín Botánico Lankester",
        category: "Naturaleza",
        description: "Uno de los jardines botánicos más importantes de América Latina, con más de 3,000 especies de orquídeas.",
        image: "https://www.descubramoscostarica.com/sites/default/files/styles/wide/public/2022-05/jardi%CC%81n-lankester-0.jpg.webp?itok=Ma2YaudH",
        location: "Paraíso, Cartago"
    },
    {
        id: 2,
        name: "Iglesia de Paraíso",
        category: "Cultura",
        description: "Templo histórico con arquitectura colonial. Uno de los símbolos más representativos del cantón.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtQC9DPIQuEOl0BG7wkBQOlsl0_G7NIfzKPQ&s",
        location: "Centro de Paraíso"
    },
    
    {
        id: 4,
        name: "Parque Central de Paraíso",
        category: "Espacio Público",
        description: "Área de esparcimiento familiar con áreas verdes, juegos infantiles y kioskos de comida tradicional.",
        image: "https://i.ytimg.com/vi/YvjRzBbq0sw/maxresdefault.jpg",
        location: "Centro de Paraíso"
    }
];

// Función para renderizar tarjetas de comercios
function renderBusinessCards(businesses, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    businesses.forEach(business => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-image">
                <img src="${business.image}" alt="${business.name}">
            </div>
            <div class="card-content">
                <span class="card-category">${business.category}</span>
                <h3 class="card-title">${business.name}</h3>
                <p class="card-description">${business.description}</p>
                <div class="card-footer">
                    <div class="card-location">
                        <i class="fas fa-map-marker-alt"></i> ${business.location}
                    </div>
                    <a href="detalle-comercio.html?id=${business.id}" class="btn btn-primary">Ver negocio</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Función para renderizar tarjetas de turismo
function renderTourismCards(places, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    places.forEach(place => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-image">
                <img src="${place.image}" alt="${place.name}">
            </div>
            <div class="card-content">
                <span class="card-category">${place.category}</span>
                <h3 class="card-title">${place.name}</h3>
                <p class="card-description">${place.description}</p>
                <div class="card-footer">
                    <div class="card-location">
                        <i class="fas fa-map-marker-alt"></i> ${place.location}
                    </div>
                    <a href="turismo-detalle.html?id=${place.id}" class="btn btn-secondary">Descubrir</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Función para cargar datos de comercio por ID
function getBusinessById(id) {
    // Datos ficticios más detallados
    const businessesDetails = {
        1: {
            id: 1,
            name: "Restaurante La Casona",
            category: "Restaurante",
            description: "Desde 1998, La Casona ha sido un referente de la gastronomía típica costarricense en Paraíso. Nuestro menú incluye platillos tradicionales preparados con ingredientes frescos y locales. Ambiente familiar ideal para disfrutar en pareja, con amigos o en reuniones de trabajo.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=800",
            location: "Centro de Paraíso, 200m norte del Parque Central",
            phone: "2543-1234",
            hours: "Lunes a Domingo: 11am - 9pm",
            gallery: [
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w-600&q=80",
                "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            ],
            products: [
                { name: "Casado Tradicional", price: "₡4,500", description: "Arroz, frijoles, carne, ensalada, plátano maduro y tortillas" },
                { name: "Olla de Carne", price: "₡5,200", description: "Caldo de res con verduras, yuca, elote, plátano y chayote" },
                { name: "Chifrijo", price: "₡3,800", description: "Chicharrón con frijoles, pico de gallo, tortilla y aguacate" },
                { name: "Postre Tres Leches", price: "₡2,500", description: "Bizcocho bañado en tres leches con merengue" }
            ]
        },
        2: {
            id: 2,
            name: "Cafetería El Aroma",
            category: "Cafetería",
            description: "Café 100% costarricense de altura, tostado artesanalmente. Ofrecemos una experiencia única de café con granos seleccionados de las mejores fincas de la zona. Además de café, contamos con repostería fresca hecha diariamente.",
            image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            location: "Barrio El Carmen, frente a la iglesia",
            phone: "2543-5678",
            hours: "Lunes a Sábado: 7am - 7pm, Domingo: 8am - 5pm",
            gallery: [
                "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            ],
            products: [
                { name: "Café Negro de Altura", price: "₡1,500", description: "Café recién molido, preparado en chorreador" },
                { name: "Cappuccino Artesanal", price: "₡2,800", description: "Espresso con leche vaporizada y espuma de leche" },
                { name: "Empanada de Piña", price: "₡1,200", description: "Empanada de masa quebrada rellena de piña caramelizada" },
                { name: "Queque de Café", price: "₡2,000", description: "Queque húmedo con sabor a café y nueces" }
            ]
        }
    };
    
    return businessesDetails[id] || businessesDetails[1];
}

// Función para cargar datos de lugar turístico por ID
function getTourismPlaceById(id) {
    const placesDetails = {
        1: {
            id: 1,
            name: "Jardín Botánico Lankester",
            category: "Naturaleza",
            description: "El Jardín Botánico Lankester es una institución de la Universidad de Costa Rica dedicada a la investigación, conservación y educación sobre las orquídeas y otras plantas epífitas. Fundado en 1973, alberga una de las colecciones más grandes de orquídeas en el mundo, con más de 3,000 especies. El jardín es un santuario para la biodiversidad y ofrece senderos educativos, jardines temáticos y un mariposario.",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            location: "Paraíso, Cartago, 5km este de la ciudad",
            hours: "Todos los días: 8:30am - 4:30pm",
            price: "₡3,500 nacionales, ₡7,000 extranjeros",
            features: [
                { icon: "fas fa-leaf", title: "Colección de Orquídeas", description: "Más de 3,000 especies de orquídeas" },
                { icon: "fas fa-hiking", title: "Senderos", description: "1.5km de senderos educativos" },
                { icon: "fas fa-butterfly", title: "Mariposario", description: "Diversidad de mariposas locales" },
                { icon: "fas fa-graduation-cap", title: "Visitas Guiadas", description: "Disponibles con reservación previa" }
            ]
        }
    };
    
    return placesDetails[id] || placesDetails[1];
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    // Menú responsive
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.querySelector('.nav-list');
    
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            menuToggle.innerHTML = navList.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
    
    // Determinar qué página estamos cargando
    const path = window.location.pathname;
    const page = path.split('/').pop();
    
    // Renderizar contenido según la página
    if (page === 'index.html' || page === '') {
        // Página de inicio
        renderBusinessCards(featuredBusinesses, 'featuredBusinesses');
        renderTourismCards(tourismPlaces, 'tourismPlaces');
    } 
    else if (page === 'comercios.html') {
        // Página de comercios
        // Simular datos adicionales para la página de comercios
        const allBusinesses = [
            ...featuredBusinesses,
            {
                id: 5,
                name: "Farmacia Paraíso",
                category: "Farmacia",
                description: "Medicamentos y productos de cuidado personal. Servicio de entrega a domicilio disponible.",
                image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                location: "Centro de Paraíso"
            },
            {
                id: 6,
                name: "Librería y Papelería El Saber",
                category: "Papelería",
                description: "Materiales educativos, libros y artículos de oficina. Apoyamos a las escuelas locales.",
                image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                location: "Frente al Colegio de Paraíso"
            },
            {
                id: 7,
                name: "Carnicería Don Carlos",
                category: "Carnicería",
                description: "Carnes frescas y productos cárnicos de calidad. Proveedores locales certificados.",
                image: "https://images.unsplash.com/photo-1603048297172-5c5d4a7569d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                location: "Mercado Municipal"
            },
            {
                id: 8,
                name: "Panadería La Esperanza",
                category: "Panadería",
                description: "Pan fresco diario y repostería tradicional. Hornos de leña para auténtico sabor casero.",
                image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                location: "Barrio La Esperanza"
            }
        ];
        
        renderBusinessCards(allBusinesses, 'businessesContainer');
        
        // Funcionalidad de filtros (simulada)
        const filterSelect = document.getElementById('categoryFilter');
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.getElementById('searchButton');
        
        if (filterSelect) {
            filterSelect.addEventListener('change', function() {
                const category = this.value;
                let filteredBusinesses = allBusinesses;
                
                if (category !== 'all') {
                    filteredBusinesses = allBusinesses.filter(business => 
                        business.category.toLowerCase() === category.toLowerCase()
                    );
                }
                
                renderBusinessCards(filteredBusinesses, 'businessesContainer');
            });
        }
        
        if (searchButton && searchInput) {
            searchButton.addEventListener('click', function() {
                const searchTerm = searchInput.value.toLowerCase();
                if (searchTerm.trim() === '') {
                    renderBusinessCards(allBusinesses, 'businessesContainer');
                    return;
                }
                
                const filteredBusinesses = allBusinesses.filter(business => 
                    business.name.toLowerCase().includes(searchTerm) ||
                    business.description.toLowerCase().includes(searchTerm) ||
                    business.category.toLowerCase().includes(searchTerm)
                );
                
                renderBusinessCards(filteredBusinesses, 'businessesContainer');
            });
            
            searchInput.addEventListener('keyup', function(event) {
                if (event.key === 'Enter') {
                    searchButton.click();
                }
            });
        }
    }
    else if (page === 'detalle-comercio.html') {
        // Página de detalle de comercio
        const urlParams = new URLSearchParams(window.location.search);
        const businessId = parseInt(urlParams.get('id')) || 1;
        const business = getBusinessById(businessId);
        
        // Actualizar contenido de la página
        document.title = `${business.name} - Paraíso Conectado`;
        
        const businessImage = document.getElementById('businessImage');
        const businessName = document.getElementById('businessName');
        const businessCategory = document.getElementById('businessCategory');
        const businessDescription = document.getElementById('businessDescription');
        const businessLocation = document.getElementById('businessLocation');
        const businessPhone = document.getElementById('businessPhone');
        const businessHours = document.getElementById('businessHours');
        const galleryContainer = document.getElementById('galleryContainer');
        const productsContainer = document.getElementById('productsContainer');
        
        if (businessImage) businessImage.src = business.image;
        if (businessImage) businessImage.alt = business.name;
        if (businessName) businessName.textContent = business.name;
        if (businessCategory) businessCategory.textContent = business.category;
        if (businessDescription) businessDescription.textContent = business.description;
        if (businessLocation) businessLocation.textContent = business.location;
        if (businessPhone) businessPhone.textContent = business.phone;
        if (businessHours) businessHours.textContent = business.hours;
        
        // Renderizar galería
        if (galleryContainer) {
            galleryContainer.innerHTML = '';
            business.gallery.forEach(imageUrl => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                galleryItem.innerHTML = `<img src="${imageUrl}" alt="${business.name}">`;
                galleryContainer.appendChild(galleryItem);
            });
        }
        
        // Renderizar productos
        if (productsContainer) {
            productsContainer.innerHTML = '';
            business.products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <h4 class="product-name">${product.name}</h4>
                    <div class="product-price">${product.price}</div>
                    <p class="product-description">${product.description}</p>
                `;
                productsContainer.appendChild(productCard);
            });
        }
    }
    else if (page === 'turismo.html') {
        // Página de turismo
        const allPlaces = [
            ...tourismPlaces,
            {
                id: 5,
                name: "Sendero Los Quetzales",
                category: "Naturaleza",
                description: "https://namubak.com/cdn/shop/articles/los-quetzales-national-park-a-bird-paradise-731711_d8d25571-892e-4643-8ba0-79dcaa9d7da0.png?v=1742851053.",
                image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                location: "Reserva Biológica Tapantí"
            },
            {
                id: 6,
                name: "Laguna de Doña Ana",
                category: "Naturaleza",
                description: "Hermosa cascada de 30 metros de altura rodeada de bosque tropical. Ideal para fotografía y observación de aves.",
                image: "https://i.ytimg.com/vi/Be5ro6WeZFA/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFcgZShIMA8=&rs=AOn4CLCByIoaDK5Za4itBeQTS1jaxAy25Q",
                location: "Camino a San Rafael"
            },
            {
                id: 7,
                name: "Museo del Café",
                category: "Cultura",
                description: "Exposición sobre la historia del cultivo del café en la región y su importancia en la economía local.",
                image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/79/c0/75/iatrevase-a-la-experiencia.jpg?w=1200&h=-1&s=1",
                location: "Hacienda El Molino"
            },
            {
                id: 8,
                name: "Mirador de Orosi",
                category: "Historia",
                description: "Vista panorámica del valle de Orosi y el río Reventazón. Ideal para fotografía y contemplación.",
                image: "https://images.visitarcostarica.com/paraiso-costa-rica.jpg",
                location: "Cerro Sanatorio"
            }
        ];
        
        renderTourismCards(allPlaces, 'tourismContainer');
    }
    else if (page === 'turismo-detalle.html') {
        // Página de detalle de turismo
        const urlParams = new URLSearchParams(window.location.search);
        const placeId = parseInt(urlParams.get('id')) || 1;
        const place = getTourismPlaceById(placeId);
        
        // Actualizar contenido de la página
        document.title = `${place.name} - Paraíso Conectado`;
        
        const placeImage = document.getElementById('placeImage');
        const placeName = document.getElementById('placeName');
        const placeCategory = document.getElementById('placeCategory');
        const placeDescription = document.getElementById('placeDescription');
        const placeLocation = document.getElementById('placeLocation');
        const placeHours = document.getElementById('placeHours');
        const placePrice = document.getElementById('placePrice');
        const featuresContainer = document.getElementById('featuresContainer');
        
        if (placeImage) placeImage.src = place.image;
        if (placeImage) placeImage.alt = place.name;
        if (placeName) placeName.textContent = place.name;
        if (placeCategory) placeCategory.textContent = place.category;
        if (placeDescription) placeDescription.textContent = place.description;
        if (placeLocation) placeLocation.textContent = place.location;
        if (placeHours) placeHours.textContent = place.hours;
        if (placePrice) placePrice.textContent = place.price;
        
        // Renderizar características
        if (featuresContainer) {
            featuresContainer.innerHTML = '';
            place.features.forEach(feature => {
                const featureItem = document.createElement('div');
                featureItem.className = 'feature-item';
                featureItem.innerHTML = `
                    <div class="feature-icon">
                        <i class="${feature.icon}"></i>
                    </div>
                    <div class="feature-text">
                        <h4>${feature.title}</h4>
                        <p>${feature.description}</p>
                    </div>
                `;
                featuresContainer.appendChild(featureItem);
            });
        }
    }
    
    // Mejorar accesibilidad para adultos mayores
    // Aumentar tamaño de fuente con botón de accesibilidad
    const createAccessibilityButton = () => {
        const accButton = document.createElement('button');
        accButton.className = 'accessibility-button';
        accButton.innerHTML = '<i class="fas fa-font"></i>';
        accButton.title = 'Aumentar tamaño de texto';
        accButton.style.position = 'fixed';
        accButton.style.bottom = '20px';
        accButton.style.right = '20px';
        accButton.style.zIndex = '1000';
        accButton.style.width = '50px';
        accButton.style.height = '50px';
        accButton.style.borderRadius = '50%';
        accButton.style.backgroundColor = 'var(--primary-color)';
        accButton.style.color = 'white';
        accButton.style.border = 'none';
        accButton.style.boxShadow = 'var(--shadow)';
        accButton.style.cursor = 'pointer';
        accButton.style.fontSize = '1.2rem';
        
        document.body.appendChild(accButton);
        
        let fontSizeIncreased = false;
        accButton.addEventListener('click', function() {
            const htmlElement = document.documentElement;
            const currentSize = parseFloat(getComputedStyle(htmlElement).fontSize);
            
            if (fontSizeIncreased) {
                htmlElement.style.fontSize = '16px';
                this.innerHTML = '<i class="fas fa-font"></i>';
                this.title = 'Aumentar tamaño de texto';
                fontSizeIncreased = false;
            } else {
                htmlElement.style.fontSize = '18px';
                this.innerHTML = '<i class="fas fa-font"></i><i class="fas fa-plus" style="font-size:0.7rem;position:absolute;top:5px;right:5px;"></i>';
                this.title = 'Restaurar tamaño de texto';
                fontSizeIncreased = true;
            }
        });
    };
    
// script.js - Funcionalidad para Paraíso Conectado
// (Continuación del archivo existente, añadir después del código actual)

// Datos ficticios para eventos
const upcomingEvents = [
    {
        id: 1,
        name: "Feria del Agricultor",
        date: "2023-11-15",
        time: "8:00 AM - 2:00 PM",
        description: "Venta directa de productos agrícolas frescos de productores locales de Paraíso. Frutas, verduras, plantas y artesanías.",
        location: "Parque Central de Paraíso",
        category: "Feria",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Festival de la Luz",
        date: "2023-12-01",
        time: "6:00 PM - 10:00 PM",
        description: "Celebración navideña con iluminación de árboles, música en vivo, puestos de comida y actividades para toda la familia.",
        location: "Parque Central y calles aledañas",
        category: "Festival",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Exposición de Arte Local",
        date: "2023-11-20",
        time: "10:00 AM - 6:00 PM",
        description: "Muestra de pinturas, esculturas y fotografías de artistas locales. Entrada gratuita.",
        location: "Casa de la Cultura de Paraíso",
        category: "Cultura",
        image: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Caminata Ecológica",
        date: "2023-11-25",
        time: "7:00 AM - 12:00 PM",
        description: "Recorrido guiado por el Sendero Los Quetzales para observación de aves y educación ambiental.",
        location: "Reserva Biológica Tapantí",
        category: "Naturaleza",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Taller de Cocina Tradicional",
        date: "2023-11-18",
        time: "2:00 PM - 5:00 PM",
        description: "Aprende a preparar platillos típicos costarricenses con chefs locales. Cupos limitados.",
        location: "Restaurante La Casona",
        category: "Gastronomía",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Concierto de la Municipalidad",
        date: "2023-12-10",
        time: "5:00 PM - 9:00 PM",
        description: "Presentación de la Orquesta Municipal de Paraíso y grupos musicales locales. Evento gratuito.",
        location: "Anfiteatro Municipal",
        category: "Música",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
];

// Función para renderizar tarjetas de eventos
function renderEventCards(events, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    events.forEach(event => {
        const eventDate = new Date(event.date);
        const formattedDate = eventDate.toLocaleDateString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-image">
                <img src="${event.image}" alt="${event.name}">
            </div>
            <div class="card-content">
                <span class="card-category">${event.category}</span>
                <h3 class="card-title">${event.name}</h3>
                <p class="card-description">${event.description}</p>
                <div class="card-footer">
                    <div class="event-details">
                        <div class="event-detail">
                            <i class="fas fa-calendar-alt"></i>
                            <span>${formattedDate}</span>
                        </div>
                        <div class="event-detail">
                            <i class="fas fa-clock"></i>
                            <span>${event.time}</span>
                        </div>
                        <div class="event-detail">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${event.location}</span>
                        </div>
                    </div>
                    <button class="btn btn-primary event-detail-btn" data-event-id="${event.id}">
                        Ver detalles
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
    
    // Agregar event listeners a los botones de detalle
    document.querySelectorAll('.event-detail-btn').forEach(button => {
        button.addEventListener('click', function() {
            const eventId = this.getAttribute('data-event-id');
            showEventDetail(eventId);
        });
    });
}

// Función para mostrar detalle de evento
function showEventDetail(eventId) {
    const event = upcomingEvents.find(e => e.id == eventId) || upcomingEvents[0];
    const eventDate = new Date(event.date);
    const formattedDate = eventDate.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Crear modal para mostrar detalles
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${event.name}</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="event-detail-main">
                    <div class="event-detail-image">
                        <img src="${event.image}" alt="${event.name}">
                    </div>
                    <div class="event-detail-info">
                        <div class="event-detail-category">${event.category}</div>
                        <p><strong><i class="fas fa-calendar-alt"></i> Fecha:</strong> ${formattedDate}</p>
                        <p><strong><i class="fas fa-clock"></i> Hora:</strong> ${event.time}</p>
                        <p><strong><i class="fas fa-map-marker-alt"></i> Lugar:</strong> ${event.location}</p>
                        <div class="event-description-full">
                            <h3>Descripción del Evento</h3>
                            <p>${event.description}</p>
                        </div>
                        <div class="event-actions">
                            <button class="btn btn-primary">
                                <i class="fas fa-calendar-plus"></i> Agregar a mi calendario
                            </button>
                            <button class="btn btn-secondary">
                                <i class="fas fa-share-alt"></i> Compartir evento
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Estilos para el modal
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            animation: fadeIn 0.3s;
        }
        
        .modal-content {
            background-color: white;
            border-radius: 12px;
            width: 90%;
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
            animation: slideUp 0.3s;
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem;
            border-bottom: 1px solid #eee;
        }
        
        .modal-header h2 {
            margin: 0;
            color: var(--primary-color);
        }
        
        .modal-close {
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: var(--gray-color);
        }
        
        .modal-body {
            padding: 1.5rem;
        }
        
        .event-detail-main {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }
        
        @media (min-width: 768px) {
            .event-detail-main {
                flex-direction: row;
            }
        }
        
        .event-detail-image {
            flex: 1;
        }
        
        .event-detail-image img {
            width: 100%;
            border-radius: 8px;
        }
        
        .event-detail-info {
            flex: 2;
        }
        
        .event-detail-category {
            display: inline-block;
            background-color: var(--primary-color);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            margin-bottom: 1rem;
        }
        
        .event-description-full {
            margin-top: 1.5rem;
        }
        
        .event-actions {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
            flex-wrap: wrap;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    
    document.head.appendChild(style);
    
    // Event listener para cerrar modal
    modal.querySelector('.modal-close').addEventListener('click', () => {
        document.body.removeChild(modal);
        document.head.removeChild(style);
    });
    
    // Cerrar modal al hacer clic fuera del contenido
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.head.removeChild(style);
        }
    });
}


// (Continuación de la función DOMContentLoaded existente, añadir al final de la función)
    if (page === 'eventos.html') {
        // Página de eventos
        renderEventCards(upcomingEvents, 'eventsContainer');
        
        // Funcionalidad de filtros para eventos
        const eventFilter = document.getElementById('eventFilter');
        if (eventFilter) {
            eventFilter.addEventListener('change', function() {
                const category = this.value;
                let filteredEvents = upcomingEvents;
                
                if (category !== 'all') {
                    filteredEvents = upcomingEvents.filter(event => 
                        event.category.toLowerCase() === category.toLowerCase()
                    );
                }
                
                renderEventCards(filteredEvents, 'eventsContainer');
            });
        }
    }
    else if (page === 'contacto.html') {
        // Página de contacto
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Validación simple
                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const message = document.getElementById('message').value.trim();
                
                if (!name || !email || !message) {
                    showNotification('Por favor completa todos los campos requeridos.', 'error');
                    return;
                }
                
                if (!isValidEmail(email)) {
                    showNotification('Por favor ingresa un correo electrónico válido.', 'error');
                    return;
                }
                
                // Simular envío
                showNotification('¡Mensaje enviado con éxito! Te contactaremos pronto.', 'success');
                contactForm.reset();
            });
        }
        
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
        
        function showNotification(message, type) {
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.textContent = message;
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 1rem 1.5rem;
                border-radius: var(--border-radius);
                color: white;
                font-weight: 500;
                z-index: 1000;
                animation: slideInRight 0.3s;
                box-shadow: var(--shadow);
            `;
            
            if (type === 'success') {
                notification.style.backgroundColor = 'var(--secondary-color)';
            } else {
                notification.style.backgroundColor = '#e74c3c';
            }
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideOutRight 0.3s forwards';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 4000);
            
            // Agregar animaciones CSS si no existen
            if (!document.querySelector('#notification-styles')) {
                const style = document.createElement('style');
                style.id = 'notification-styles';
                style.textContent = `
                    @keyframes slideInRight {
                        from { transform: translateX(100%); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                    @keyframes slideOutRight {
                        from { transform: translateX(0); opacity: 1; }
                        to { transform: translateX(100%); opacity: 0; }
                    }
                `;
                document.head.appendChild(style);
            }
        }
    }
    else if (page === 'turismo-detalle.html') {
        // Página de detalle de turismo (ya existe, solo verificar)
        console.log('Página de detalle de turismo cargada');
    }



    createAccessibilityButton();
});
