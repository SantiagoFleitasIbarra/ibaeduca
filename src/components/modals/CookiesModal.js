// Componente del modal de política de cookies
import { closeAllModals } from '../../services/ModalService.js';

/**
 * Renderiza el modal de política de cookies
 * @returns {HTMLElement} Elemento del modal de cookies
 */
export const renderCookiesModal = () => {
    // Crear el fondo oscuro del modal
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'cookies-modal-overlay';
    modalOverlay.className = 'fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center hidden';
    
    // Crear el contenedor del modal
    const modalContainer = document.createElement('div');
    modalContainer.className = 'bg-indigo-950 rounded-xl p-5 w-full max-w-4xl max-h-[90vh] overflow-y-auto';
    modalContainer.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
    
    // Cabecera del modal
    const modalHeader = document.createElement('div');
    modalHeader.className = 'flex justify-between items-center mb-6 sticky top-0 bg-indigo-950 py-2 z-10';
    
    // Título del modal
    const modalTitle = document.createElement('h3');
    modalTitle.className = 'text-2xl font-bold text-indigo-300';
    modalTitle.textContent = 'Política de Cookies';
    
    // Botón de cerrar
    const closeButton = document.createElement('button');
    closeButton.className = 'text-gray-400 hover:text-white transition duration-300';
    closeButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    `;
    closeButton.addEventListener('click', closeAllModals);
    
    // Agregar elementos a la cabecera
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);
    
    // Fecha de actualización
    const updateDate = document.createElement('p');
    updateDate.className = 'text-gray-400 text-sm mb-6';
    updateDate.textContent = 'Última actualización: 1 de enero de 2023';
    
    // Contenido de la política de cookies
    const cookiesContent = document.createElement('div');
    cookiesContent.className = 'space-y-6 text-gray-300';
    
    cookiesContent.innerHTML = `
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">1. ¿Qué son las Cookies?</h4>
            <p>Las cookies son pequeños archivos de texto que los sitios web que visita colocan en su computadora. Se utilizan ampliamente para hacer que los sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio. Las cookies pueden ser "persistentes" o "de sesión".</p>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">2. Cookies que Utilizamos</h4>
            <p>Utilizamos los siguientes tipos de cookies:</p>
            
            <div class="pl-4">
                <h5 class="font-medium text-white mt-4">Cookies Esenciales</h5>
                <p>Estas cookies son necesarias para el funcionamiento de nuestro sitio web y no pueden ser desactivadas en nuestros sistemas. Generalmente se establecen solo en respuesta a acciones realizadas por usted que equivalen a una solicitud de servicios, como establecer sus preferencias de privacidad, iniciar sesión o completar formularios.</p>
                
                <h5 class="font-medium text-white mt-4">Cookies de Rendimiento</h5>
                <p>Estas cookies nos permiten contar visitas y fuentes de tráfico para que podamos medir y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y menos populares y a ver cómo los visitantes se mueven por el sitio.</p>
                
                <h5 class="font-medium text-white mt-4">Cookies de Funcionalidad</h5>
                <p>Estas cookies permiten que el sitio proporcione una funcionalidad y personalización mejoradas. Pueden ser establecidas por nosotros o por proveedores externos cuyos servicios hemos agregado a nuestras páginas.</p>
                
                <h5 class="font-medium text-white mt-4">Cookies de Publicidad</h5>
                <p>Estas cookies pueden ser establecidas a través de nuestro sitio por nuestros socios publicitarios. Pueden ser utilizadas por esas empresas para construir un perfil de sus intereses y mostrarle anuncios relevantes en otros sitios.</p>
            </div>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">3. Gestión de Cookies</h4>
            <p>La mayoría de los navegadores web permiten cierto control de la mayoría de las cookies a través de la configuración del navegador. Para más información sobre las cookies, incluido cómo ver qué cookies se han establecido y cómo administrarlas y eliminarlas, visite <a href="http://www.allaboutcookies.org" class="text-indigo-400 hover:text-indigo-300" target="_blank">www.allaboutcookies.org</a>.</p>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">4. Cookies de Terceros</h4>
            <p>También utilizamos cookies proporcionadas por terceros de confianza. A continuación, se detallan las cookies de terceros que podría encontrar a través de nuestro sitio:</p>
            <ul class="list-disc pl-6 space-y-1">
                <li>Google Analytics: utilizamos Google Analytics para entender cómo los usuarios interactúan con nuestro contenido y crear estadísticas sobre el rendimiento del sitio web.</li>
                <li>Redes sociales: algunos de nuestros sitios incluyen botones de redes sociales y widgets que pueden recopilar información sobre su dirección IP y qué página está visitando.</li>
                <li>Proveedores de servicios de pago: nuestros proveedores de servicios de pago pueden utilizar cookies para procesar pagos y prevenir el fraude.</li>
            </ul>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">5. Cambios a nuestra Política de Cookies</h4>
            <p>Cualquier cambio que podamos hacer a nuestra Política de Cookies en el futuro se publicará en esta página. Por favor, revise con frecuencia para ver actualizaciones o cambios.</p>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">6. Contacto</h4>
            <p>Si tiene alguna pregunta sobre nuestra Política de Cookies, póngase en contacto con nosotros en:</p>
            <p>Correo electrónico: cookies@ibaeduca.com</p>
            <p>Dirección: Montevideo, Uruguay</p>
        </section>
    `;
    
    // Ensamblar el modal
    modalContainer.appendChild(modalHeader);
    modalContainer.appendChild(updateDate);
    modalContainer.appendChild(cookiesContent);
    
    modalOverlay.appendChild(modalContainer);
    
    // Cerrar modal al hacer clic fuera
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeAllModals();
        }
    });
    
    return modalOverlay;
};