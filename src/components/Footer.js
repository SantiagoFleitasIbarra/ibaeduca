// Componente del footer con enlaces y secciones legales
import { appConfig } from '../config.js';
import { 
    openTutorialsModal, 
    openFaqModal, 
    openSupportModal, 
    openTermsModal, 
    openPrivacyModal, 
    openCookiesModal, 
    openRefundModal 
} from '../services/ModalService.js';

/**
 * Renderiza el footer con enlaces y secciones
 * @returns {HTMLElement} Elemento del footer
 */
export const renderFooter = () => {
    // Crear footer principal
    const footer = document.createElement('footer');
    footer.className = 'bg-indigo-950 bg-opacity-80 py-12 px-4 md:px-8 lg:px-16 border-t border-indigo-900';
    
    // Contenedor principal con grid
    const container = document.createElement('div');
    container.className = 'max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8';
    
    // Columna del logo y descripción
    const logoColumn = document.createElement('div');
    logoColumn.className = 'lg:col-span-2';
    
    // Logo
    const logo = document.createElement('h3');
    logo.className = 'text-2xl font-bold text-white mb-3';
    logo.textContent = appConfig.siteName;
    
    // Descripción
    const description = document.createElement('p');
    description.className = 'text-gray-400 mb-6 max-w-md';
    description.textContent = 'Transformando vidas a través de una educación integral y práctica en matemáticas, física, programación y administración de empresas.';
    
    // Redes sociales
    const socialIcons = document.createElement('div');
    socialIcons.className = 'flex space-x-4 mb-6';
    
    // Iconos de redes sociales
    const socialLinks = [
        { icon: 'facebook', url: '#' },
        { icon: 'twitter', url: '#' },
        { icon: 'instagram', url: '#' },
        { icon: 'youtube', url: '#' }
    ];
    
    socialLinks.forEach(social => {
        const link = document.createElement('a');
        link.href = social.url;
        link.className = 'text-gray-400 hover:text-indigo-400 transition';
        
        // Iconos de redes según el tipo
        let icon = '';
        switch(social.icon) {
            case 'facebook':
                icon = '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>';
                break;
            case 'twitter':
                icon = '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>';
                break;
            case 'instagram':
                icon = '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>';
                break;
            case 'youtube':
                icon = '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd" /></svg>';
                break;
        }
        
        link.innerHTML = icon;
        socialIcons.appendChild(link);
    });
    
    // Agregar elementos a la columna del logo
    logoColumn.appendChild(logo);
    logoColumn.appendChild(description);
    logoColumn.appendChild(socialIcons);
    
    // Columna de Educación
    const eduColumn = document.createElement('div');
    eduColumn.className = 'footer-column';
    
    // Título de Educación
    const eduTitle = document.createElement('h4');
    eduTitle.className = 'text-lg font-semibold text-indigo-300 mb-4';
    eduTitle.textContent = 'Educación';
    
    // Enlaces de Educación
    const eduLinks = document.createElement('ul');
    eduLinks.className = 'space-y-2';
    
    // Lista de enlaces de educación
    const educationLinks = [
        { text: 'Cursos', href: '#cursos-section' },
        { text: 'Clases grabadas', href: '#cursos-section' },
        { text: 'Material didáctico', href: '#cursos-section' },
        { text: 'Clase gratuita', href: '#cursos-section' },
    ];
    
    educationLinks.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.className = 'text-gray-400 hover:text-indigo-400 transition';
        a.textContent = link.text;
        li.appendChild(a);
        eduLinks.appendChild(li);
    });
    
    // Agregar elementos a la columna de educación
    eduColumn.appendChild(eduTitle);
    eduColumn.appendChild(eduLinks);
    
    // Columna de Empresa
    const companyColumn = document.createElement('div');
    companyColumn.className = 'footer-column';
    
    // Título de Empresa
    const companyTitle = document.createElement('h4');
    companyTitle.className = 'text-lg font-semibold text-indigo-300 mb-4';
    companyTitle.textContent = 'Empresa';
    
    // Enlaces de Empresa
    const companyLinks = document.createElement('ul');
    companyLinks.className = 'space-y-2';
    
    // Lista de enlaces de empresa
    const companyLinksList = [
        { text: 'Acerca de nosotros', href: '#acerca-de-section' },
        { text: 'Profesores', href: '#profesores-section' },
        { text: 'Contacto', href: '#contacto-section' },
    ];
    
    companyLinksList.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.className = 'text-gray-400 hover:text-indigo-400 transition';
        a.textContent = link.text;
        li.appendChild(a);
        companyLinks.appendChild(li);
    });
    
    // Agregar elementos a la columna de empresa
    companyColumn.appendChild(companyTitle);
    companyColumn.appendChild(companyLinks);
    
    // Columna de Recursos
    const resourcesColumn = document.createElement('div');
    resourcesColumn.className = 'footer-column';
    
    // Título de Recursos
    const resourcesTitle = document.createElement('h4');
    resourcesTitle.className = 'text-lg font-semibold text-indigo-300 mb-4';
    resourcesTitle.textContent = 'Recursos';
    
    // Enlaces de Recursos
    const resourcesLinks = document.createElement('ul');
    resourcesLinks.className = 'space-y-2';
    
    // Lista de enlaces de recursos
    const resourcesList = [
        { text: 'Tutoriales', action: () => openTutorialsModal() },
        { text: 'Preguntas frecuentes', action: () => openFaqModal() },
        { text: 'Soporte', action: () => openSupportModal() },
    ];
    
    resourcesList.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('button');
        a.className = 'text-gray-400 hover:text-indigo-400 transition bg-transparent border-0 p-0 cursor-pointer text-left';
        a.textContent = link.text;
        a.addEventListener('click', link.action);
        li.appendChild(a);
        resourcesLinks.appendChild(li);
    });
    
    // Agregar elementos a la columna de recursos
    resourcesColumn.appendChild(resourcesTitle);
    resourcesColumn.appendChild(resourcesLinks);
    
    // Columna Legal
    const legalColumn = document.createElement('div');
    legalColumn.className = 'footer-column';
    
    // Título Legal
    const legalTitle = document.createElement('h4');
    legalTitle.className = 'text-lg font-semibold text-indigo-300 mb-4';
    legalTitle.textContent = 'Legal';
    
    // Enlaces Legales
    const legalLinks = document.createElement('ul');
    legalLinks.className = 'space-y-2';
    
    // Lista de enlaces legales
    const legalList = [
        { text: 'Términos y condiciones', action: () => openTermsModal() },
        { text: 'Política de privacidad', action: () => openPrivacyModal() },
        { text: 'Política de cookies', action: () => openCookiesModal() },
        { text: 'Política de reembolso', action: () => openRefundModal() },
    ];
    
    legalList.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('button');
        a.className = 'text-gray-400 hover:text-indigo-400 transition bg-transparent border-0 p-0 cursor-pointer text-left';
        a.textContent = link.text;
        a.addEventListener('click', link.action);
        li.appendChild(a);
        legalLinks.appendChild(li);
    });
    
    // Agregar elementos a la columna legal
    legalColumn.appendChild(legalTitle);
    legalColumn.appendChild(legalLinks);
    
    // Agregar columnas al contenedor
    container.appendChild(logoColumn);
    container.appendChild(eduColumn);
    container.appendChild(companyColumn);
    container.appendChild(resourcesColumn);
    container.appendChild(legalColumn);
    
    // Botón para volver arriba
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'fixed bottom-8 right-8 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-3 shadow-lg transform transition-transform hover:scale-110';
    backToTopButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
    `;
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    backToTopButton.style.display = 'none'; // Inicialmente oculto
    
    // Mostrar/ocultar botón según scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    // Línea divisoria
    const divider = document.createElement('div');
    divider.className = 'border-t border-indigo-900 mt-12 pt-8 pb-4 max-w-7xl mx-auto';
    
    // Copyright
    const copyright = document.createElement('p');
    copyright.className = 'text-center text-gray-500';
    copyright.textContent = `© ${new Date().getFullYear()} ${appConfig.siteName}. Todos los derechos reservados.`;
    
    divider.appendChild(copyright);
    
    // Agregar todo al footer
    footer.appendChild(container);
    footer.appendChild(divider);
    footer.appendChild(backToTopButton);
    
    return footer;
};