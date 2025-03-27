// Servicio para gestionar modales en la aplicación
import { initializeVideoPlayer } from './VideoService.js';

/**
 * Abre el modal de video con la URL y título especificados
 * @param {string} videoSrc - URL del video a reproducir
 * @param {string} videoTitle - Título del video
 */
export const openVideoModal = (videoSrc, videoTitle) => {
    const modalOverlay = document.getElementById('video-modal-overlay');
    const modalTitle = document.getElementById('video-modal-title');
    
    // Actualizar título
    modalTitle.textContent = videoTitle || 'Reproduciendo video';
    
    // Mostrar el modal
    modalOverlay.classList.remove('hidden');
    
    // Inicializar el reproductor de video
    initializeVideoPlayer('modal-video-player', videoSrc);
};

/**
 * Abre el modal de planes de pago
 */
export const openPaymentModal = () => {
    const modalOverlay = document.getElementById('payment-modal-overlay');
    modalOverlay.classList.remove('hidden');
};

/**
 * Abre el modal de inicio de sesión
 */
export const openLoginModal = () => {
    const modalOverlay = document.getElementById('login-modal-overlay');
    modalOverlay.classList.remove('hidden');
};

/**
 * Abre el modal para reservar clase gratuita
 */
export const openFreeClassModal = () => {
    const modalOverlay = document.getElementById('free-class-modal-overlay');
    modalOverlay.classList.remove('hidden');
};

/**
 * Abre el modal de tutoriales en video
 */
export const openTutorialsModal = () => {
    const modalOverlay = document.getElementById('tutorials-modal-overlay');
    modalOverlay.classList.remove('hidden');
};

/**
 * Abre el modal de preguntas frecuentes
 */
export const openFaqModal = () => {
    const modalOverlay = document.getElementById('faq-modal-overlay');
    modalOverlay.classList.remove('hidden');
};

/**
 * Abre el modal de soporte técnico
 */
export const openSupportModal = () => {
    const modalOverlay = document.getElementById('support-modal-overlay');
    modalOverlay.classList.remove('hidden');
};

/**
 * Abre el modal de términos y condiciones
 */
export const openTermsModal = () => {
    const modalOverlay = document.getElementById('terms-modal-overlay');
    modalOverlay.classList.remove('hidden');
};

/**
 * Abre el modal de política de privacidad
 */
export const openPrivacyModal = () => {
    const modalOverlay = document.getElementById('privacy-modal-overlay');
    modalOverlay.classList.remove('hidden');
};

/**
 * Abre el modal de política de cookies
 */
export const openCookiesModal = () => {
    const modalOverlay = document.getElementById('cookies-modal-overlay');
    modalOverlay.classList.remove('hidden');
};

/**
 * Abre el modal de política de reembolso
 */
export const openRefundModal = () => {
    const modalOverlay = document.getElementById('refund-modal-overlay');
    modalOverlay.classList.remove('hidden');
};

/**
 * Cierra todos los modales abiertos
 */
export const closeAllModals = () => {
    const modals = document.querySelectorAll('[id$="-modal-overlay"]');
    modals.forEach(modal => {
        modal.classList.add('hidden');
    });
};