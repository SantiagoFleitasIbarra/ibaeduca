// Componente del modal de inicio de sesión y registro
import { closeAllModals } from '../services/ModalService.js';

/**
 * Renderiza el modal de inicio de sesión y registro
 * @returns {HTMLElement} Elemento del modal de login
 */
export const renderLoginModal = () => {
    // Crear el fondo oscuro del modal
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'login-modal-overlay';
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
    modalTitle.id = 'login-modal-title';
    modalTitle.className = 'text-2xl font-bold text-indigo-300';
    modalTitle.textContent = 'Iniciar Sesión';
    
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
    
    // Contenedor de formularios
    const formsContainer = document.createElement('div');
    formsContainer.className = 'relative';
    
    // Formulario de inicio de sesión
    const loginForm = document.createElement('div');
    loginForm.id = 'login-form';
    loginForm.className = 'space-y-4';
    
    loginForm.innerHTML = `
        <div class="space-y-2">
            <label class="text-gray-200 block text-sm font-medium">Correo electrónico</label>
            <input type="email" class="w-full px-4 py-2 rounded-lg bg-indigo-900 bg-opacity-40 text-white border border-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="tu@email.com">
        </div>
        <div class="space-y-2">
            <label class="text-gray-200 block text-sm font-medium">Contraseña</label>
            <input type="password" class="w-full px-4 py-2 rounded-lg bg-indigo-900 bg-opacity-40 text-white border border-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="••••••••">
        </div>
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <input type="checkbox" id="remember-me" class="h-4 w-4 text-indigo-600 bg-indigo-900">
                <label for="remember-me" class="ml-2 block text-sm text-gray-300">Recordarme</label>
            </div>
            <div class="text-sm">
                <a href="#" class="text-indigo-400 hover:text-indigo-300">¿Olvidaste tu contraseña?</a>
            </div>
        </div>
        <button class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
            Iniciar Sesión
        </button>
        <div class="text-center mt-4">
            <span class="text-gray-400">¿No tienes una cuenta?</span>
            <button id="switch-to-register" class="text-indigo-400 hover:text-indigo-300 ml-1">Regístrate</button>
        </div>
    `;
    
    // Formulario de registro
    const registerForm = document.createElement('div');
    registerForm.id = 'register-form';
    registerForm.className = 'space-y-4 hidden';
    
    registerForm.innerHTML = `
        <div class="space-y-2">
            <label class="text-gray-200 block text-sm font-medium">Nombre completo</label>
            <input type="text" class="w-full px-4 py-2 rounded-lg bg-indigo-900 bg-opacity-40 text-white border border-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Tu nombre">
        </div>
        <div class="space-y-2">
            <label class="text-gray-200 block text-sm font-medium">Correo electrónico</label>
            <input type="email" class="w-full px-4 py-2 rounded-lg bg-indigo-900 bg-opacity-40 text-white border border-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="tu@email.com">
        </div>
        <div class="space-y-2">
            <label class="text-gray-200 block text-sm font-medium">Contraseña</label>
            <input type="password" class="w-full px-4 py-2 rounded-lg bg-indigo-900 bg-opacity-40 text-white border border-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="••••••••">
        </div>
        <div class="space-y-2">
            <label class="text-gray-200 block text-sm font-medium">Confirmar contraseña</label>
            <input type="password" class="w-full px-4 py-2 rounded-lg bg-indigo-900 bg-opacity-40 text-white border border-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="••••••••">
        </div>
        <div class="flex items-center">
            <input type="checkbox" id="accept-terms" class="h-4 w-4 text-indigo-600 bg-indigo-900">
            <label for="accept-terms" class="ml-2 block text-sm text-gray-300">
                Acepto los <a href="#" class="text-indigo-400 hover:text-indigo-300">términos y condiciones</a>
            </label>
        </div>
        <button class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
            Registrarse
        </button>
        <div class="text-center mt-4">
            <span class="text-gray-400">¿Ya tienes una cuenta?</span>
            <button id="switch-to-login" class="text-indigo-400 hover:text-indigo-300 ml-1">Inicia sesión</button>
        </div>
    `;
    
    // Agregar formularios al contenedor
    formsContainer.appendChild(loginForm);
    formsContainer.appendChild(registerForm);
    
    // Ensamblar el modal
    modalContainer.appendChild(modalHeader);
    modalContainer.appendChild(formsContainer);
    
    modalOverlay.appendChild(modalContainer);
    
    // Cerrar modal al hacer clic fuera
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeAllModals();
        }
    });
    
    // Configurar eventos de cambio entre formularios
    const setupFormSwitching = () => {
        const switchToRegister = modalContainer.querySelector('#switch-to-register');
        const switchToLogin = modalContainer.querySelector('#switch-to-login');
        const loginForm = modalContainer.querySelector('#login-form');
        const registerForm = modalContainer.querySelector('#register-form');
        const modalTitle = modalContainer.querySelector('#login-modal-title');
        
        if (switchToRegister) {
            switchToRegister.addEventListener('click', () => {
                loginForm.classList.add('hidden');
                registerForm.classList.remove('hidden');
                modalTitle.textContent = 'Registrarse';
            });
        }
        
        if (switchToLogin) {
            switchToLogin.addEventListener('click', () => {
                registerForm.classList.add('hidden');
                loginForm.classList.remove('hidden');
                modalTitle.textContent = 'Iniciar Sesión';
            });
        }
    };
    
    // Configurar después de agregar al DOM
    setTimeout(setupFormSwitching, 0);
    
    return modalOverlay;
};