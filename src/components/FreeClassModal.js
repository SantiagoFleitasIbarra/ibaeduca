// Componente del modal para reservar clase gratuita
import { closeAllModals } from '../services/ModalService.js';

/**
 * Renderiza el modal para reservar una clase gratuita
 * @returns {HTMLElement} Elemento del modal de clase gratuita
 */
export const renderFreeClassModal = () => {
    // Crear el fondo oscuro del modal
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'free-class-modal-overlay';
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
    modalTitle.textContent = 'Reserva tu Clase Gratuita';
    
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
    
    // Descripción del formulario
    const formDescription = document.createElement('p');
    formDescription.className = 'text-gray-300 mb-6';
    formDescription.textContent = 'Completa el siguiente formulario para reservar una clase gratuita de 1 hora. Te contactaremos para confirmar el horario.';
    
    // Formulario
    const form = document.createElement('form');
    form.className = 'space-y-4';
    form.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-2">
                <label class="text-gray-200 block text-sm font-medium">Nombre</label>
                <input type="text" class="w-full px-4 py-2 rounded-lg bg-indigo-900 bg-opacity-40 text-white border border-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Tu nombre" required>
            </div>
            <div class="space-y-2">
                <label class="text-gray-200 block text-sm font-medium">Apellido</label>
                <input type="text" class="w-full px-4 py-2 rounded-lg bg-indigo-900 bg-opacity-40 text-white border border-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Tu apellido" required>
            </div>
        </div>
        <div class="space-y-2">
            <label class="text-gray-200 block text-sm font-medium">Correo electrónico</label>
            <input type="email" class="w-full px-4 py-2 rounded-lg bg-indigo-900 bg-opacity-40 text-white border border-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="tu@email.com" required>
        </div>
        <div class="space-y-2">
            <label class="text-gray-200 block text-sm font-medium">Teléfono</label>
            <input type="tel" class="w-full px-4 py-2 rounded-lg bg-indigo-900 bg-opacity-40 text-white border border-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Tu número de teléfono" required>
        </div>
        <div class="space-y-2">
            <label class="text-gray-200 block text-sm font-medium">Asignatura de interés</label>
            <select class="w-full px-4 py-2 rounded-lg bg-indigo-900 bg-opacity-40 text-white border border-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600" required>
                <option value="" disabled selected>Selecciona una asignatura</option>
                <option value="matematicas">Matemáticas</option>
                <option value="fisica">Física</option>
                <option value="programacion">Programación</option>
                <option value="administracion">Administración</option>
            </select>
        </div>
        <div class="space-y-2">
            <label class="text-gray-200 block text-sm font-medium">¿Cuál es tu disponibilidad horaria?</label>
            <textarea class="w-full px-4 py-2 rounded-lg bg-indigo-900 bg-opacity-40 text-white border border-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600" rows="3" placeholder="Indica días y horarios en que estás disponible"></textarea>
        </div>
        <div class="space-y-2">
            <label class="text-gray-200 block text-sm font-medium">¿Cómo nos conociste?</label>
            <select class="w-full px-4 py-2 rounded-lg bg-indigo-900 bg-opacity-40 text-white border border-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600">
                <option value="" disabled selected>Selecciona una opción</option>
                <option value="google">Búsqueda en Google</option>
                <option value="social">Redes sociales</option>
                <option value="friend">Recomendación de un amigo</option>
                <option value="other">Otro</option>
            </select>
        </div>
        <div class="pt-2">
            <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                Reservar Clase Gratuita
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
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 class="mt-4 text-xl font-medium text-indigo-300">¡Solicitud recibida!</h3>
                <p class="mt-2 text-gray-300">Te contactaremos pronto para confirmar el horario de tu clase gratuita.</p>
                <button id="close-confirmation" class="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
                    Cerrar
                </button>
            </div>
        `;
        
        // Añadir evento al botón de cerrar confirmación
        setTimeout(() => {
            const closeBtn = document.getElementById('close-confirmation');
            if (closeBtn) {
                closeBtn.addEventListener('click', closeAllModals);
            }
        }, 0);
    });
    
    // Ensamblar el modal
    modalContainer.appendChild(modalHeader);
    modalContainer.appendChild(formDescription);
    modalContainer.appendChild(form);
    
    modalOverlay.appendChild(modalContainer);
    
    // Cerrar modal al hacer clic fuera
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeAllModals();
        }
    });
    
    return modalOverlay;
};