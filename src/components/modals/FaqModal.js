// Componente del modal de preguntas frecuentes
import { closeAllModals } from '../../services/ModalService.js';

/**
 * Renderiza el modal de preguntas frecuentes
 * @returns {HTMLElement} Elemento del modal de FAQ
 */
export const renderFaqModal = () => {
    // Crear el fondo oscuro del modal
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'faq-modal-overlay';
    modalOverlay.className = 'fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center hidden';
    
    // Crear el contenedor del modal
    const modalContainer = document.createElement('div');
    modalContainer.className = 'bg-indigo-950 rounded-xl p-5 w-full max-w-3xl max-h-[90vh] overflow-y-auto';
    modalContainer.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(99, 102, 241, 0.3)';
    
    // Cabecera del modal
    const modalHeader = document.createElement('div');
    modalHeader.className = 'flex justify-between items-center mb-6';
    
    // Título del modal
    const modalTitle = document.createElement('h3');
    modalTitle.className = 'text-2xl font-bold text-indigo-300';
    modalTitle.textContent = 'Preguntas Frecuentes';
    
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
    description.textContent = 'Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.';
    
    // Lista de preguntas y respuestas
    const faqList = document.createElement('div');
    faqList.className = 'space-y-6';
    
    const faqs = [
        {
            question: '¿Cómo puedo acceder a las clases después de pagar?',
            answer: 'Una vez realizado el pago, recibirás un correo electrónico con las instrucciones para acceder a tu cuenta. Allí encontrarás todos los cursos y materiales a los que tienes acceso.'
        },
        {
            question: '¿Cuál es la duración de los cursos?',
            answer: 'La duración varía según el curso. Los cursos básicos suelen durar entre 4 y 6 semanas, mientras que los cursos avanzados pueden extenderse hasta 8-12 semanas. Cada curso especifica su duración en la descripción.'
        },
        {
            question: '¿Las clases son en vivo o grabadas?',
            answer: 'Ofrecemos ambas modalidades. Las clases grabadas están disponibles 24/7 y puedes avanzar a tu propio ritmo. Las clases en vivo se realizan según un calendario establecido y permiten interacción directa con el profesor.'
        },
        {
            question: '¿Qué sucede si no puedo asistir a una clase en vivo?',
            answer: 'Todas las clases en vivo son grabadas y puestas a disposición de los estudiantes dentro de las 24 horas posteriores a su realización. No te preocupes si no puedes asistir, podrás verla después.'
        },
        {
            question: '¿Ofrecen certificaciones por completar los cursos?',
            answer: 'Sí, al finalizar cada curso recibirás un certificado digital de IbaEduca que acredita la finalización exitosa del programa.'
        },
        {
            question: '¿Puedo cancelar mi suscripción? ¿Hay reembolso?',
            answer: 'Puedes cancelar tu suscripción en cualquier momento. Para políticas de reembolso, contamos con un período de 7 días de garantía de satisfacción. Si no estás conforme, puedes solicitar un reembolso completo dentro de este período.'
        }
    ];
    
    // Crear elementos de FAQ con acordeón
    faqs.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'bg-indigo-900 bg-opacity-40 rounded-lg overflow-hidden';
        
        const questionButton = document.createElement('button');
        questionButton.className = 'w-full flex justify-between items-center p-4 text-left text-indigo-300 hover:text-white transition-colors';
        questionButton.innerHTML = `
            <span class="font-medium">${faq.question}</span>
            <svg class="faq-icon w-5 h-5 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        `;
        
        const answerPanel = document.createElement('div');
        answerPanel.className = 'faq-answer bg-indigo-900 bg-opacity-20 p-4 text-gray-400 hidden';
        answerPanel.textContent = faq.answer;
        
        // Alternar la visibilidad de la respuesta
        questionButton.addEventListener('click', () => {
            const isOpen = !answerPanel.classList.contains('hidden');
            
            // Cerrar todas las respuestas abiertas
            document.querySelectorAll('.faq-answer').forEach(answer => {
                answer.classList.add('hidden');
            });
            
            document.querySelectorAll('.faq-icon').forEach(icon => {
                icon.classList.remove('rotate-180');
            });
            
            // Si no estaba abierta, mostrar esta respuesta
            if (!isOpen) {
                answerPanel.classList.remove('hidden');
                questionButton.querySelector('.faq-icon').classList.add('rotate-180');
            }
        });
        
        // Abrir el primer elemento por defecto
        if (index === 0) {
            answerPanel.classList.remove('hidden');
            questionButton.querySelector('.faq-icon').classList.add('rotate-180');
        }
        
        faqItem.appendChild(questionButton);
        faqItem.appendChild(answerPanel);
        faqList.appendChild(faqItem);
    });
    
    // Ensamblar el modal
    modalContainer.appendChild(modalHeader);
    modalContainer.appendChild(description);
    modalContainer.appendChild(faqList);
    
    modalOverlay.appendChild(modalContainer);
    
    // Cerrar modal al hacer clic fuera
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeAllModals();
        }
    });
    
    return modalOverlay;
};