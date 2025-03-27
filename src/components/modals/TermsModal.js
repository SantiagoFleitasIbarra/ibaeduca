// Componente del modal de términos y condiciones
import { closeAllModals } from '../../services/ModalService.js';

/**
 * Renderiza el modal de términos y condiciones
 * @returns {HTMLElement} Elemento del modal de términos
 */
export const renderTermsModal = () => {
    // Crear el fondo oscuro del modal
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'terms-modal-overlay';
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
    modalTitle.textContent = 'Términos y Condiciones';
    
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
    
    // Contenido de los términos
    const termsContent = document.createElement('div');
    termsContent.className = 'space-y-6 text-gray-300';
    
    termsContent.innerHTML = `
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">1. Introducción</h4>
            <p>Estos Términos y Condiciones ("Términos") rigen el uso de la plataforma educativa IbaEduca ("Plataforma"), incluyendo todos los servicios, contenidos y funcionalidades disponibles a través de nuestro sitio web.</p>
            <p>Al acceder o utilizar nuestra Plataforma, usted acepta estar legalmente obligado por estos Términos. Si no está de acuerdo con estos Términos, no debe utilizar nuestra Plataforma.</p>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">2. Definiciones</h4>
            <p>"Usuario" se refiere a cualquier persona que acceda, navegue o se registre en nuestra Plataforma.</p>
            <p>"Contenido" se refiere a todos los materiales disponibles en la Plataforma, incluyendo pero no limitado a textos, gráficos, logotipos, imágenes, videos, audio, programas informáticos, y cualquier otro material.</p>
            <p>"Servicios" se refiere a todas las funcionalidades, herramientas y servicios educativos ofrecidos a través de la Plataforma.</p>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">3. Registro y Cuentas de Usuario</h4>
            <p>Para acceder a ciertos Servicios, puede ser necesario registrarse y crear una cuenta de usuario. Al hacerlo, el Usuario se compromete a proporcionar información precisa, actual y completa.</p>
            <p>El Usuario es responsable de mantener la confidencialidad de su contraseña y de todas las actividades que ocurran bajo su cuenta. IbaEduca no será responsable por ninguna pérdida o daño derivado del incumplimiento de esta obligación.</p>
            <p>Nos reservamos el derecho de suspender o terminar cuentas de usuario a nuestra discreción, particularmente en caso de incumplimiento de estos Términos.</p>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">4. Licencia y Uso de Contenido</h4>
            <p>IbaEduca otorga al Usuario una licencia limitada, no exclusiva, no transferible y revocable para acceder y utilizar el Contenido únicamente para fines educativos personales y no comerciales.</p>
            <p>El Usuario no puede copiar, modificar, distribuir, vender, alquilar, realizar ingeniería inversa o crear obras derivadas basadas en la Plataforma o su Contenido.</p>
            <p>Todos los derechos no expresamente otorgados al Usuario en estos Términos están reservados por IbaEduca y sus licenciantes.</p>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">5. Pagos y Suscripciones</h4>
            <p>El acceso a ciertos Servicios puede requerir el pago de una tarifa o suscripción. Los precios y las condiciones de pago se especificarán en la Plataforma.</p>
            <p>Los pagos realizados no son reembolsables excepto en los casos específicamente previstos en nuestra Política de Reembolso.</p>
            <p>IbaEduca se reserva el derecho de modificar los precios de los Servicios en cualquier momento, notificando a los Usuarios con antelación cuando sea aplicable.</p>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">6. Limitación de Responsabilidad</h4>
            <p>En la máxima medida permitida por la ley aplicable, IbaEduca no será responsable por daños directos, indirectos, incidentales, consecuentes, especiales o punitivos, incluyendo pérdida de beneficios, datos, uso o cualquier otra pérdida intangible.</p>
            <p>IbaEduca no garantiza que la Plataforma estará disponible de forma ininterrumpida o libre de errores, ni que los defectos serán corregidos, ni que la Plataforma o los servidores que la hacen disponible estén libres de virus o componentes dañinos.</p>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">7. Modificaciones</h4>
            <p>IbaEduca se reserva el derecho de modificar estos Términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en la Plataforma.</p>
            <p>El uso continuado de la Plataforma después de la publicación de los Términos modificados constituirá la aceptación de dichas modificaciones.</p>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">8. Ley Aplicable</h4>
            <p>Estos Términos se regirán e interpretarán de acuerdo con las leyes de Uruguay, sin tener en cuenta sus principios de conflicto de leyes.</p>
            <p>Cualquier disputa que surja en relación con estos Términos estará sujeta a la jurisdicción exclusiva de los tribunales de Montevideo, Uruguay.</p>
        </section>
        
        <section class="space-y-3">
            <h4 class="text-xl font-medium text-indigo-300">9. Contacto</h4>
            <p>Si tiene alguna pregunta sobre estos Términos, puede contactarnos a través de:</p>
            <p>Correo electrónico: info@ibaeduca.com</p>
            <p>Dirección: Montevideo, Uruguay</p>
        </section>
    `;
    
    // Ensamblar el modal
    modalContainer.appendChild(modalHeader);
    modalContainer.appendChild(updateDate);
    modalContainer.appendChild(termsContent);
    
    modalOverlay.appendChild(modalContainer);
    
    // Cerrar modal al hacer clic fuera
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeAllModals();
        }
    });
    
    return modalOverlay;
};