// Componente del modal de política de reembolso
import { closeAllModals } from '../../services/ModalService.js';

/**
 * Renderiza el modal de política de reembolso
 * @returns {HTMLElement} Elemento del modal de reembolso
 */
export const renderRefundModal = () => {
    // Crear el fondo oscuro del modal
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'refund-modal-overlay';
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
    modalTitle.textContent = 'Política de Reembolso';
    
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
    
    // Contenido de la política de reembolso
    const refundContent = document.createElement('div');
    refundContent.className = 'space-y-6 text-gray-300';
    
    refundContent.innerHTML = `
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">1. Introducción</h4>
            <p>En IbaEduca, nuestro objetivo es proporcionar servicios educativos de alta calidad. Entendemos que pueden surgir circunstancias en las que un reembolso pueda ser necesario. Esta Política de Reembolso explica nuestro proceso de reembolso y las condiciones bajo las cuales los reembolsos pueden ser otorgados.</p>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">2. Período de Garantía de Satisfacción</h4>
            <p>Ofrecemos una garantía de satisfacción de 7 días para todos nuestros cursos. Si no está satisfecho con su compra, puede solicitar un reembolso completo dentro de los 7 días posteriores a la fecha de compra, siempre que no haya completado más del 30% del contenido del curso.</p>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">3. Condiciones para Reembolsos</h4>
            <p>Los reembolsos pueden ser aprobados en los siguientes casos:</p>
            <ul class="list-disc pl-6 space-y-1">
                <li>Solicitud dentro del período de garantía de satisfacción (7 días).</li>
                <li>Problemas técnicos significativos que impidan el acceso al contenido y que no puedan ser resueltos por nuestro equipo de soporte.</li>
                <li>Cancelación de un curso o programa por parte de IbaEduca.</li>
                <li>Duplicación accidental de la compra (verificable).</li>
                <li>Circunstancias excepcionales evaluadas caso por caso por nuestro equipo.</li>
            </ul>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">4. Casos No Elegibles para Reembolso</h4>
            <p>No se otorgarán reembolsos en los siguientes casos:</p>
            <ul class="list-disc pl-6 space-y-1">
                <li>Solicitudes después del período de garantía de satisfacción (más de 7 días desde la compra).</li>
                <li>Si ha accedido a más del 30% del contenido del curso.</li>
                <li>Si ha descargado una cantidad significativa de materiales del curso.</li>
                <li>Por falta de tiempo para completar el curso o desinterés en el contenido después del período de garantía.</li>
                <li>Por cambios en circunstancias personales (excepto en casos excepcionales evaluados individualmente).</li>
            </ul>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">5. Proceso de Solicitud de Reembolso</h4>
            <p>Para solicitar un reembolso, debe seguir estos pasos:</p>
            <ol class="list-decimal pl-6 space-y-1">
                <li>Enviar un correo electrónico a reembolsos@ibaeduca.com con el asunto "Solicitud de Reembolso".</li>
                <li>Incluir su nombre completo, dirección de correo electrónico asociada a su cuenta, fecha de compra y el motivo de su solicitud de reembolso.</li>
                <li>Proporcionar el recibo o comprobante de pago.</li>
                <li>Esperar la confirmación de recepción de su solicitud, que se enviará dentro de las 48 horas hábiles.</li>
            </ol>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">6. Procesamiento de Reembolsos</h4>
            <p>Una vez aprobada su solicitud de reembolso:</p>
            <ul class="list-disc pl-6 space-y-1">
                <li>Los reembolsos se procesarán a través del mismo método de pago utilizado para la compra original.</li>
                <li>El tiempo de procesamiento puede variar de 5 a 15 días hábiles, dependiendo de su institución financiera.</li>
                <li>Recibirá una confirmación por correo electrónico una vez que se haya procesado el reembolso.</li>
            </ul>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">7. Consideraciones Especiales</h4>
            <p>Promociones y ofertas especiales: Los cursos adquiridos durante promociones especiales pueden estar sujetos a condiciones específicas de reembolso, que se comunicarán claramente en el momento de la compra.</p>
            <p>Paquetes de cursos: Para paquetes de múltiples cursos, el reembolso se calculará proporcionalmente según los cursos a los que se haya accedido.</p>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">8. Modificaciones a la Política</h4>
            <p>IbaEduca se reserva el derecho de modificar esta Política de Reembolso en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestra plataforma. Para compras realizadas antes de un cambio en la política, se aplicará la política vigente en el momento de la compra.</p>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">9. Contacto</h4>
            <p>Si tiene alguna pregunta sobre nuestra Política de Reembolso, póngase en contacto con nosotros en:</p>
            <p>Correo electrónico: reembolsos@ibaeduca.com</p>
            <p>Dirección: Montevideo, Uruguay</p>
        </section>
    `;
    
    // Ensamblar el modal
    modalContainer.appendChild(modalHeader);
    modalContainer.appendChild(updateDate);
    modalContainer.appendChild(refundContent);
    
    modalOverlay.appendChild(modalContainer);
    
    // Cerrar modal al hacer clic fuera
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeAllModals();
        }
    });
    
    return modalOverlay;
};