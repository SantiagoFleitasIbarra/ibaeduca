// Componente del modal de política de privacidad
import { closeAllModals } from '../../services/ModalService.js';

/**
 * Renderiza el modal de política de privacidad
 * @returns {HTMLElement} Elemento del modal de privacidad
 */
export const renderPrivacyModal = () => {
    // Crear el fondo oscuro del modal
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'privacy-modal-overlay';
    modalOverlay.className = 'fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center hidden';
    
    // Crear el contenedor del modal
    const modalContainer = document.createElement('div');
    modalContainer.className = 'bg-indigo-950 rounded-xl p-5 w-full max-w-4xl max-h-[90vh] overflow-y-auto';
    modalContainer.style.boxShadow = '0 15px 30px rgba(139, 92, 246, 0.3)';
    
    // Cabecera del modal
    const modalHeader = document.createElement('div');
    modalHeader.className = 'flex justify-between items-center mb-6 sticky top-0 bg-indigo-950 py-2 z-10';
    
    // Título del modal
    const modalTitle = document.createElement('h3');
    modalTitle.className = 'text-2xl font-bold text-indigo-300';
    modalTitle.textContent = 'Política de Privacidad';
    
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
    
    // Contenido de la política de privacidad
    const privacyContent = document.createElement('div');
    privacyContent.className = 'space-y-6 text-gray-300';
    
    privacyContent.innerHTML = `
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">1. Introducción</h4>
            <p>En IbaEduca ("nosotros", "nos", "nuestro"), respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta Política de Privacidad le informará sobre cómo cuidamos sus datos personales cuando visita nuestra plataforma y le informará sobre sus derechos de privacidad y cómo la ley lo protege.</p>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">2. Información que Recopilamos</h4>
            <p>Podemos recopilar, utilizar, almacenar y transferir diferentes tipos de datos personales sobre usted:</p>
            <ul class="list-disc pl-6 space-y-1">
                <li>Información de identidad: nombre, apellido, nombre de usuario o identificador similar.</li>
                <li>Información de contacto: dirección de correo electrónico, número de teléfono, dirección postal.</li>
                <li>Información técnica: dirección IP, datos de inicio de sesión, tipo y versión del navegador, configuración de zona horaria, tipos y versiones de plugins, sistema operativo y plataforma.</li>
                <li>Información de uso: información sobre cómo utiliza nuestra plataforma, productos y servicios.</li>
                <li>Información de marketing y comunicaciones: sus preferencias para recibir marketing de nosotros y nuestros terceros y sus preferencias de comunicación.</li>
            </ul>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">3. Cómo Utilizamos su Información</h4>
            <p>Utilizamos su información personal para los siguientes propósitos:</p>
            <ul class="list-disc pl-6 space-y-1">
                <li>Proporcionar, mantener y mejorar nuestra plataforma educativa.</li>
                <li>Procesar sus pagos y gestionar su cuenta.</li>
                <li>Comunicarnos con usted, incluyendo notificaciones sobre su cuenta, actualizaciones de la plataforma, y otras informaciones importantes.</li>
                <li>Personalizar su experiencia y proporcionar contenido relevante.</li>
                <li>Conducir investigación y análisis sobre cómo mejorar nuestros servicios.</li>
                <li>Cumplir con nuestras obligaciones legales y resolver disputas.</li>
            </ul>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">4. Compartir sus Datos</h4>
            <p>Podemos compartir sus datos personales con las siguientes categorías de destinatarios:</p>
            <ul class="list-disc pl-6 space-y-1">
                <li>Proveedores de servicios que nos ayudan a proporcionar nuestros servicios (procesamiento de pagos, alojamiento web, análisis, etc.).</li>
                <li>Socios comerciales con los que ofrecemos productos o servicios conjuntos.</li>
                <li>Autoridades legales cuando sea requerido por ley o para proteger nuestros derechos legales.</li>
            </ul>
            <p>No vendemos ni alquilamos sus datos personales a terceros.</p>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">5. Seguridad de Datos</h4>
            <p>Hemos implementado medidas de seguridad apropiadas para evitar que sus datos personales se pierdan, se utilicen o se acceda a ellos de forma no autorizada. Además, limitamos el acceso a sus datos personales a aquellos empleados, agentes, contratistas y otros terceros que tienen una necesidad comercial de saber.</p>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">6. Sus Derechos</h4>
            <p>Dependiendo de su ubicación, puede tener los siguientes derechos con respecto a sus datos personales:</p>
            <ul class="list-disc pl-6 space-y-1">
                <li>Derecho de acceso a sus datos personales.</li>
                <li>Derecho de rectificación de datos inexactos.</li>
                <li>Derecho de supresión de sus datos personales.</li>
                <li>Derecho a la limitación del tratamiento de sus datos.</li>
                <li>Derecho a la portabilidad de los datos.</li>
                <li>Derecho de oposición al tratamiento de sus datos.</li>
                <li>Derecho a no ser objeto de decisiones automatizadas, incluida la elaboración de perfiles.</li>
            </ul>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">7. Retención de Datos</h4>
            <p>Conservaremos sus datos personales sólo durante el tiempo necesario para cumplir con los fines para los que los recopilamos, incluyendo el cumplimiento de requisitos legales, contables o de informes.</p>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">8. Cambios a esta Política</h4>
            <p>Podemos actualizar nuestra Política de Privacidad de vez en cuando. Publicaremos cualquier cambio en nuestra plataforma y, si los cambios son significativos, proporcionaremos un aviso más prominente.</p>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">9. Contacto</h4>
            <p>Si tiene alguna pregunta sobre esta Política de Privacidad o nuestras prácticas de privacidad, póngase en contacto con nosotros en:</p>
            <p>Correo electrónico: privacidad@ibaeduca.com</p>
            <p>Dirección: Montevideo, Uruguay</p>
        </section>
    `;
    
    // Ensamblar el modal
    modalContainer.appendChild(modalHeader);
    modalContainer.appendChild(updateDate);
    modalContainer.appendChild(privacyContent);
    
    modalOverlay.appendChild(modalContainer);
    
    // Cerrar modal al hacer clic fuera
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeAllModals();
        }
    });
    
    return modalOverlay;
};