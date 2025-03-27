// Archivo principal que inicializa la aplicación
import { renderNavbar } from './components/Navbar.js';
import { renderHero } from './components/Hero.js';
import { renderVideoModal } from './components/VideoModal.js';
import { renderSuccessStories } from './components/SuccessStories.js';
import { renderAboutUs } from './components/AboutUs.js'; 
import { renderProfessors } from './components/Professors.js';
import { renderCourses } from './components/Courses.js';
import { renderContact } from './components/Contact.js';
import { renderPaymentModal } from './components/PaymentModal.js';
import { renderLoginModal } from './components/LoginModal.js';
import { renderFreeClassModal } from './components/FreeClassModal.js';
import { renderFooter } from './components/Footer.js';
import { renderTutorialsModal } from './components/modals/TutorialsModal.js';
import { renderFaqModal } from './components/modals/FaqModal.js';
import { renderSupportModal } from './components/modals/SupportModal.js';
import { renderTermsModal } from './components/modals/TermsModal.js';
import { renderPrivacyModal } from './components/modals/PrivacyModal.js';
import { renderCookiesModal } from './components/modals/CookiesModal.js';
import { renderRefundModal } from './components/modals/RefundModal.js';
import { appConfig } from './config.js';

// Función para inicializar la aplicación
const initApp = () => {
    const appContainer = document.getElementById('app');
    
    // Renderizar los componentes principales
    appContainer.appendChild(renderNavbar());
    appContainer.appendChild(renderHero());
    appContainer.appendChild(renderSuccessStories());
    appContainer.appendChild(renderAboutUs());
    appContainer.appendChild(renderProfessors());
    appContainer.appendChild(renderCourses());
    appContainer.appendChild(renderContact());
    appContainer.appendChild(renderFooter());
    
    // Renderizar modales
    appContainer.appendChild(renderVideoModal());
    appContainer.appendChild(renderPaymentModal());
    appContainer.appendChild(renderLoginModal());
    appContainer.appendChild(renderFreeClassModal());
    appContainer.appendChild(renderTutorialsModal());
    appContainer.appendChild(renderFaqModal());
    appContainer.appendChild(renderSupportModal());
    appContainer.appendChild(renderTermsModal());
    appContainer.appendChild(renderPrivacyModal());
    appContainer.appendChild(renderCookiesModal());
    appContainer.appendChild(renderRefundModal());
    
    // Inicializar eventos y funcionalidades
    import('./services/EventService.js').then(module => {
        module.initializeEvents();
    });
    
    // Inicializar estilos adicionales
    import('./utils/StyleUtils.js').then(module => {
        module.applyGlobalStyles();
    });
    
    // Crear menú de navegación móvil
    createMobileNavigation();
};

// Crear menú de navegación móvil para la parte inferior
const createMobileNavigation = () => {
    if (window.innerWidth >= 768) return; // Solo para móviles
    
    const mobileNav = document.createElement('div');
    mobileNav.className = 'mobile-nav-bottom';
    
    const navItems = [
        {
            text: 'Inicio',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h2" /></svg>',
            action: () => window.scrollTo({ top: 0, behavior: 'smooth' })
        },
        {
            text: 'Cursos',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>',
            action: () => document.getElementById('cursos-section').scrollIntoView({ behavior: 'smooth' })
        },
        {
            text: 'Profesores',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>',
            action: () => document.getElementById('profesores-section').scrollIntoView({ behavior: 'smooth' })
        },
        {
            text: 'Contacto',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
            action: () => document.getElementById('contacto-section').scrollIntoView({ behavior: 'smooth' })
        },
        {
            text: 'Ingresar',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>',
            action: () => {
                import('./services/ModalService.js').then(module => {
                    module.openLoginModal();
                });
            }
        }
    ];
    
    navItems.forEach(item => {
        const navItem = document.createElement('button');
        navItem.className = 'mobile-nav-item';
        navItem.innerHTML = `
            ${item.icon}
            <span>${item.text}</span>
        `;
        navItem.addEventListener('click', item.action);
        mobileNav.appendChild(navItem);
    });
    
    document.body.appendChild(mobileNav);
};

// Iniciar la aplicación cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', initApp);