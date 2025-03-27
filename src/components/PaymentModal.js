// Componente del modal de planes de pago
import { closeAllModals } from '../services/ModalService.js';
import { openLoginModal } from '../services/ModalService.js';

/**
 * Renderiza el modal de planes de pago
 * @returns {HTMLElement} Elemento del modal de planes
 */
export const renderPaymentModal = () => {
    // Crear el fondo oscuro del modal
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'payment-modal-overlay';
    modalOverlay.className = 'fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center hidden';
    
    // Crear el contenedor del modal
    const modalContainer = document.createElement('div');
    modalContainer.className = 'bg-indigo-950 rounded-xl p-5 md:p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto';
    modalContainer.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(99, 102, 241, 0.3)';
    
    // Cabecera del modal
    const modalHeader = document.createElement('div');
    modalHeader.className = 'flex justify-between items-center mb-6';
    
    // Título del modal
    const modalTitle = document.createElement('h3');
    modalTitle.className = 'text-2xl font-bold text-indigo-300';
    modalTitle.textContent = 'Nuestros Planes';
    
    // Subtítulo
    const modalSubtitle = document.createElement('p');
    modalSubtitle.className = 'text-gray-400 mt-2';
    modalSubtitle.textContent = 'No es necesario tener una cuenta de PayPal. Se aceptan todas las tarjetas de débito y crédito.';
    
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
    
    // Contenido del modal
    const modalContent = document.createElement('div');
    modalContent.className = 'mt-6';
    
    // Selector de moneda
    const currencySelector = document.createElement('div');
    currencySelector.className = 'mb-8 flex justify-center';
    
    // Botón UYU
    const uyuButton = document.createElement('button');
    uyuButton.className = 'bg-indigo-700 text-white font-medium py-2 px-4 rounded-l-lg transition duration-300';
    uyuButton.textContent = 'UYU';
    uyuButton.dataset.currency = 'UYU';
    
    // Botón USD
    const usdButton = document.createElement('button');
    usdButton.className = 'bg-indigo-900 text-gray-300 font-medium py-2 px-4 rounded-r-lg transition duration-300';
    usdButton.textContent = 'USD';
    usdButton.dataset.currency = 'USD';
    
    // Agregar botones al selector de moneda
    currencySelector.appendChild(uyuButton);
    currencySelector.appendChild(usdButton);
    
    // Agregar funcionalidad a los botones de moneda
    uyuButton.addEventListener('click', () => {
        uyuButton.className = 'bg-indigo-700 text-white font-medium py-2 px-4 rounded-l-lg transition duration-300';
        usdButton.className = 'bg-indigo-900 text-gray-300 font-medium py-2 px-4 rounded-r-lg transition duration-300';
        
        // Cambiar precios a UYU
        document.querySelectorAll('.plan-price').forEach(price => {
            if (price.dataset.uyu) {
                price.textContent = price.dataset.uyu;
                
                // Actualizar moneda en el botón de pago
                const payButton = price.closest('.plan-card').querySelector('.pay-button');
                if (payButton) {
                    payButton.textContent = 'Pagar con PayPal, Débito o Crédito';
                }
            }
        });
    });
    
    usdButton.addEventListener('click', () => {
        usdButton.className = 'bg-indigo-700 text-white font-medium py-2 px-4 rounded-r-lg transition duration-300';
        uyuButton.className = 'bg-indigo-900 text-gray-300 font-medium py-2 px-4 rounded-l-lg transition duration-300';
        
        // Cambiar precios a USD
        document.querySelectorAll('.plan-price').forEach(price => {
            if (price.dataset.usd) {
                price.textContent = price.dataset.usd;
                
                // Actualizar moneda en el botón de pago
                const payButton = price.closest('.plan-card').querySelector('.pay-button');
                if (payButton) {
                    payButton.textContent = 'Pay with PayPal, Debit or Credit';
                }
            }
        });
    });
    
    // Contenedor de planes
    const plansContainer = document.createElement('div');
    plansContainer.className = 'grid grid-cols-1 md:grid-cols-2 gap-6';
    
    // Plan Alumno Avanzado
    const plan1 = document.createElement('div');
    plan1.className = 'plan-card bg-indigo-900 bg-opacity-40 rounded-xl p-6 flex flex-col';
    plan1.style.boxShadow = '0 10px 25px rgba(30, 27, 75, 0.4)';
    
    plan1.innerHTML = `
        <h4 class="text-xl font-semibold text-indigo-300 mb-3">Plan Alumno Avanzado</h4>
        <div class="text-3xl font-bold text-white mb-6">
            <span class="plan-price" data-uyu="$1500 UYU" data-usd="$50 USD">$1500 UYU</span>
        </div>
        <ul class="text-gray-300 mb-8 flex-grow space-y-2">
            <li class="flex items-center">
                <svg class="w-5 h-5 text-indigo-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Acceso completo a clases grabadas
            </li>
            <li class="flex items-center">
                <svg class="w-5 h-5 text-indigo-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Material didáctico exclusivo
            </li>
        </ul>
        <button class="pay-button bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300">
            Pagar con PayPal, Débito o Crédito
        </button>
    `;
    
    // Plan Alumno Experto
    const plan2 = document.createElement('div');
    plan2.className = 'plan-card bg-indigo-900 bg-opacity-40 rounded-xl p-6 flex flex-col relative overflow-hidden';
    plan2.style.boxShadow = '0 10px 25px rgba(30, 27, 75, 0.4)';
    
    // Etiqueta de recomendado
    const recommendedTag = document.createElement('div');
    recommendedTag.className = 'absolute top-0 right-0 bg-indigo-600 text-xs text-white font-semibold py-1 px-3 rounded-bl-lg';
    recommendedTag.textContent = 'Más recomendado';
    
    plan2.innerHTML = `
        <h4 class="text-xl font-semibold text-indigo-300 mb-3">Plan Alumno Experto</h4>
        <div class="text-3xl font-bold text-white mb-6">
            <span class="plan-price" data-uyu="$2000 UYU" data-usd="$65 USD">$2000 UYU</span>
        </div>
        <ul class="text-gray-300 mb-8 flex-grow space-y-2">
            <li class="flex items-center">
                <svg class="w-5 h-5 text-indigo-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Acceso completo a clases grabadas
            </li>
            <li class="flex items-center">
                <svg class="w-5 h-5 text-indigo-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Material didáctico exclusivo
            </li>
            <li class="flex items-center">
                <svg class="w-5 h-5 text-indigo-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                2 clases presenciales semanales
            </li>
            <li class="flex items-center">
                <svg class="w-5 h-5 text-indigo-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Acceso a nuestro grupo en Whatsapp
            </li>
        </ul>
        <button class="pay-button bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300">
            Pagar con PayPal, Débito o Crédito
        </button>
    `;
    
    plan2.appendChild(recommendedTag);
    
    // Agregar planes al contenedor
    plansContainer.appendChild(plan1);
    plansContainer.appendChild(plan2);
    
    // Agregar evento a los botones de pago
    const setupPaymentButtons = () => {
        const payButtons = modalContainer.querySelectorAll('.pay-button');
        payButtons.forEach(button => {
            button.addEventListener('click', () => {
                closeAllModals();
                openLoginModal();
            });
        });
    };
    
    // Ensamblar el modal
    modalContent.appendChild(currencySelector);
    modalContent.appendChild(plansContainer);
    
    modalContainer.appendChild(modalHeader);
    modalContainer.appendChild(modalSubtitle);
    modalContainer.appendChild(modalContent);
    
    modalOverlay.appendChild(modalContainer);
    
    // Cerrar modal al hacer clic fuera
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeAllModals();
        }
    });
    
    // Configurar botones después de agregar al DOM
    setTimeout(setupPaymentButtons, 0);
    
    return modalOverlay;
};