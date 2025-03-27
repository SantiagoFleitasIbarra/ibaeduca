// Componente del modal de soporte técnico
import { closeAllModals } from '../../services/ModalService.js';

/**
 * Renderiza el modal de soporte técnico
 * @returns {HTMLElement} Elemento del modal de soporte
 */
export const renderSupportModal = () => {
    // Crear el fondo oscuro del modal
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'support-modal-overlay';
    modalOverlay.className = 'fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center hidden';
    
    // Crear el contenedor del modal
    const modalContainer = document.createElement('div');
    modalContainer.className = 'bg-indigo-950 rounded-xl p-5 w-full max-w-2xl max-h-[90vh] overflow-y-auto';
    modalContainer.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(99, 102, 241, 0.3)';
    
    // Cabecera del modal
    const modalHeader = document.createElement('div');
    modalHeader.className = 'flex justify-between items-center mb-6';
    
    // Título del modal
    const modalTitle = document.createElement('h3');
    modalTitle.className = 'text-2xl font-bold text-indigo-300';
    modalTitle.textContent = 'Soporte Técnico';
    
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
    
    // Descripción
    const description = document.createElement('p');
    description.className = 'text-gray-400 mb-8';
    description.textContent = 'Si experimentas problemas técnicos o tienes consultas sobre la plataforma, contáctanos y te ayudaremos lo antes posible.';
    
    // Formulario de soporte
    const form = document.createElement('form');
    form.className = 'space-y-4';
    form.innerHTML = `
        <div class="space-y-2">
            <label class="text-gray-200 block text-sm font-medium">Nombre completo</label>
            <input type="text" class="w-full px-4 py-2 rounded-lg bg-indigo-900 bg-opacity-40 text-white border border-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Tu nombre" required>
        </div>
        <div class="space-y-2">
            <label class="text-gray-200 block text-sm font-medium">Correo electrónico</label>
            <input type="email" class="w-full px-4 py-2 rounded-lg bg-indigo-900 bg-opacity-40 text-white border border-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="tu@email.com" required>
        </div>
        <div class="space-y-2">
            <label class="text-gray-200 block text-sm font-medium">Asunto</label>
            <select class="w-full px-4 py-2 rounded-lg bg-indigo-900 bg-opacity-40 text-white border border-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600" required>
                <option value="" disabled selected>Selecciona una opción</option>
                <option value="problema-tecnico">Problema técnico</option>
                <option value="acceso-cuenta">Problema de acceso a mi cuenta</option>
                <option value="video-curso">Problema con videos del curso</option>
                <option value="pagos">Problema con pagos</option>
                <option value="otro">Otro</option>
            </select>
        </div>
        <div class="space-y-2">
            <label class="text-gray-200 block text-sm font-medium">Descripción del problema</label>
            <textarea class="w-full px-4 py-2 rounded-lg bg-indigo-900 bg-opacity-40 text-white border border-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600" rows="5" placeholder="Describe tu problema con el mayor detalle posible" required></textarea>
        </div>
        <div class="space-y-2">
            <label class="text-gray-200 block text-sm font-medium">Adjuntar captura de pantalla (opcional)</label>
            <input type="file" accept="image/*" class="w-full px-4 py-2 rounded-lg bg-indigo-900 bg-opacity-40 text-white border border-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600">
            <p class="text-gray-400 text-xs mt-1">Formatos permitidos: JPG, PNG, GIF (máx. 5MB)</p>
        </div>
        <div class="pt-2">
            <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                Enviar Solicitud
            </button>
        </div>
    `;
    
    // Manejar el envío del formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Mostrar mensaje de confirmación
        form.innerHTML = `
            <div class="text-center py-8">
                <svg class="mx-auto h-16 w-16 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 class="mt-4 text-xl font-medium text-indigo-300">Solicitud enviada</h3>
                <p class="mt-2 text-gray-300">Hemos recibido tu solicitud. Nuestro equipo de soporte se pondrá en contacto contigo dentro de las próximas 24 horas.</p>
                <button id="close-support-confirmation" class="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
                    Cerrar
                </button>
            </div>
        `;
        
        // Añadir evento al botón de cerrar confirmación
        setTimeout(() => {
            const closeBtn = document.getElementById('close-support-confirmation');
            if (closeBtn) {
                closeBtn.addEventListener('click', closeAllModals);
            }
        }, 0);
    });
    
    // Sección de contacto directo
    const directContact = document.createElement('div');
    directContact.className = 'mt-8 pt-8 border-t border-indigo-900';
    
    const directContactTitle = document.createElement('h4');
    directContactTitle.className = 'text-lg font-medium text-indigo-300 mb-4';
    directContactTitle.textContent = 'Contacto directo';
    
    const contactMethods = document.createElement('div');
    contactMethods.className = 'space-y-3 text-gray-400';
    
    contactMethods.innerHTML = `
        <div class="flex items-center">
            <svg class="w-5 h-5 text-indigo-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>soporte@ibaeduca.com</span>
        </div>
        <div class="flex items-center">
            <svg class="w-5 h-5 text-indigo-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Horario de atención: Lunes a Viernes de 9:00 a 18:00</span>
        </div>
    `;
    
    directContact.appendChild(directContactTitle);
    directContact.appendChild(contactMethods);
    
    // Ensamblar el modal
    modalContainer.appendChild(modalHeader);
    modalContainer.appendChild(description);
    modalContainer.appendChild(form);
    modalContainer.appendChild(directContact);
    
    modalOverlay.appendChild(modalContainer);
    
    // Cerrar modal al hacer clic fuera
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeAllModals();
        }
    });
    
    return modalOverlay;
};