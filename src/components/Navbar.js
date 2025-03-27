// Componente de la barra de navegación
import { appConfig } from '../config.js';

/**
 * Renderiza la barra de navegación principal
 * @returns {HTMLElement} Elemento de la barra de navegación
 */
export const renderNavbar = () => {
    // Crear el contenedor principal de la navbar
    const navbar = document.createElement('nav');
    navbar.className = 'fixed top-0 left-0 w-full bg-transparent py-4 px-4 flex justify-center items-center z-50 transition-all duration-300';
    navbar.id = 'main-navbar';
    navbar.style.backdropFilter = 'blur(10px)';
    
    // Create an inner container to center the content
    const navbarInner = document.createElement('div');
    navbarInner.className = 'w-full max-w-5xl flex justify-between items-center';

    // Crear el logo
    const logo = document.createElement('a');
    logo.href = "/";
    logo.className = 'text-xl font-bold text-white';
    logo.textContent = appConfig.siteName;
    
    // Crear contenedor para los enlaces
    const navLinks = document.createElement('div');
    navLinks.className = 'hidden md:flex items-center space-x-8';
    
    // Agregar los enlaces de navegación
    appConfig.navLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.className = 'text-gray-300 hover:text-white transition duration-300';
        a.textContent = link.text;
        navLinks.appendChild(a);
    });
    
    // Crear botón de iniciar sesión
    const loginButton = document.createElement('button');
    loginButton.className = 'bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition duration-300 ml-6';
    loginButton.textContent = 'Iniciar Sesión';
    loginButton.addEventListener('click', () => {
        import('../services/ModalService.js').then(module => {
            module.openLoginModal();
        });
    });
    
    // Crear botón de menú móvil
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'md:hidden text-white';
    mobileMenuButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
    `;
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
    
    // Agregar elementos al navbar inner container
    navbarInner.appendChild(logo);
    navbarInner.appendChild(navLinks);
    navLinks.appendChild(loginButton);
    
    // No agregamos el botón de menú móvil ya que ahora usamos la navegación fija en la parte inferior
    // navbarInner.appendChild(mobileMenuButton);
    
    // Agregamos un menú móvil oculto pero no lo usaremos (lo mantenemos para compatibilidad)
    const mobileMenu = document.createElement('div');
    mobileMenu.id = 'mobile-menu';
    mobileMenu.className = 'hidden md:hidden absolute top-16 left-0 w-full bg-indigo-900 py-4 px-6 flex flex-col space-y-4';
    
    // Agregar enlaces al menú móvil
    appConfig.navLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.className = 'text-gray-300 hover:text-white transition duration-300';
        a.textContent = link.text;
        mobileMenu.appendChild(a);
    });
    
    // Agregar botón de iniciar sesión al menú móvil
    const mobileLoginButton = document.createElement('button');
    mobileLoginButton.className = 'bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition duration-300 w-full';
    mobileLoginButton.textContent = 'Iniciar Sesión';
    mobileMenu.appendChild(mobileLoginButton);
    
    navbarInner.appendChild(mobileMenu);
    
    // Agregar inner container a navbar
    navbar.appendChild(navbarInner);
    
    return navbar;
};

/**
 * Alterna la visibilidad del menú móvil
 */
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

// Inicializa eventos de scroll
const initScrollEvents = () => {
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('main-navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.remove('bg-transparent');
                navbar.classList.add('bg-indigo-950', 'bg-opacity-70', 'py-2');
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
            } else {
                navbar.classList.add('bg-transparent');
                navbar.classList.remove('bg-indigo-950', 'bg-opacity-70', 'py-2');
                navbar.style.boxShadow = 'none';
            }
        }
    });
};

initScrollEvents();