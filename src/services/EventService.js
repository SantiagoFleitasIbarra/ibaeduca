// Servicio para manejar eventos globales de la aplicación

/**
 * Inicializa los eventos globales de la aplicación
 */
export const initializeEvents = () => {
    // Inicializar eventos de teclado
    initKeyboardEvents();
    
    // Inicializar eventos de redimensionamiento
    initResizeEvents();
    
    // Inicializar efectos visuales
    initVisualEffects();
    
    // Inicializar evento de scroll para la navbar
    initScrollEvents();
};

/**
 * Inicializa eventos de teclado
 */
const initKeyboardEvents = () => {
    document.addEventListener('keydown', (e) => {
        // Cerrar modales con la tecla Escape
        if (e.key === 'Escape') {
            const modals = document.querySelectorAll('[id$="-modal-overlay"]');
            modals.forEach(modal => {
                if (!modal.classList.contains('hidden')) {
                    modal.classList.add('hidden');
                }
            });
        }
    });
};

/**
 * Inicializa eventos de redimensionamiento
 */
const initResizeEvents = () => {
    window.addEventListener('resize', () => {
        // Ajustar elementos según el tamaño de pantalla
        handleResponsiveElements();
    });
    
    // Ejecutar una vez al inicio
    handleResponsiveElements();
};

/**
 * Ajusta elementos según el tamaño de pantalla
 */
const handleResponsiveElements = () => {
    const isMobile = window.innerWidth < 768;
    
    // Ajustar navegación
    const navLinks = document.querySelector('nav div:not([id="mobile-menu"])');
    if (navLinks) {
        navLinks.classList.toggle('hidden', isMobile);
        navLinks.classList.toggle('md:flex', !isMobile);
    }
};

/**
 * Inicializa efectos visuales
 */
const initVisualEffects = () => {
    // Efecto de hover en la tarjeta de video
    const videoCard = document.getElementById('video-promo-card');
    if (videoCard) {
        videoCard.addEventListener('mouseenter', () => {
            videoCard.classList.add('shadow-2xl');
            videoCard.style.transform = 'scale(1.05)';
        });
        
        videoCard.addEventListener('mouseleave', () => {
            videoCard.classList.remove('shadow-2xl');
            videoCard.style.transform = '';
        });
    }
};

/**
 * Inicializa eventos de scroll
 */
const initScrollEvents = () => {
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('main-navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.remove('bg-transparent');
                navbar.classList.add('bg-indigo-950', 'bg-opacity-70', 'py-4');
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
            } else {
                navbar.classList.add('bg-transparent');
                navbar.classList.remove('bg-indigo-950', 'bg-opacity-70', 'py-4');
                navbar.style.boxShadow = 'none';
            }
        }
    });
};