// Componente del modal de reproducción de video
import { initializeVideoPlayer } from '../services/VideoService.js';

/**
 * Renderiza el modal para la reproducción de videos
 * @returns {HTMLElement} Elemento del modal de video
 */
export const renderVideoModal = () => {
    // Crear el fondo oscuro del modal
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'video-modal-overlay';
    modalOverlay.className = 'fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center hidden';
    
    // Crear el contenedor del modal
    const modalContainer = document.createElement('div');
    modalContainer.className = 'bg-indigo-950 rounded-xl p-3 md:p-5 w-full max-w-2xl max-h-[90vh] flex flex-col';
    modalContainer.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(99, 102, 241, 0.3)';
    
    // Crear la cabecera del modal
    const modalHeader = document.createElement('div');
    modalHeader.className = 'flex justify-between items-center mb-4';
    
    // Título del modal
    const modalTitle = document.createElement('h3');
    modalTitle.id = 'video-modal-title';
    modalTitle.className = 'text-xl font-bold text-white';
    modalTitle.textContent = 'Reproduciendo video';
    
    // Botón de cerrar
    const closeButton = document.createElement('button');
    closeButton.className = 'text-gray-400 hover:text-white transition duration-300';
    closeButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    `;
    closeButton.addEventListener('click', closeVideoModal);
    
    // Agregar elementos a la cabecera
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);
    
    // Crear el contenedor del reproductor de video
    const videoContainer = document.createElement('div');
    videoContainer.className = 'w-full aspect-video bg-black rounded-lg overflow-hidden';
    
    // Elemento de video
    const videoElement = document.createElement('video');
    videoElement.id = 'modal-video-player';
    videoElement.className = 'video-js vjs-big-play-centered w-full h-full';
    videoElement.controls = true;
    videoElement.preload = 'auto';
    
    // Agregar elementos al contenedor
    videoContainer.appendChild(videoElement);
    
    // Agregar elementos al modal
    modalContainer.appendChild(modalHeader);
    modalContainer.appendChild(videoContainer);
    
    // Agregar modal al overlay
    modalOverlay.appendChild(modalContainer);
    
    // Agregar evento para cerrar el modal al hacer clic fuera
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeVideoModal();
        }
    });
    
    return modalOverlay;
};

/**
 * Cierra el modal de video
 */
function closeVideoModal() {
    const modalOverlay = document.getElementById('video-modal-overlay');
    modalOverlay.classList.add('hidden');
    
    // Detener el video cuando se cierra el modal
    const videoPlayer = document.querySelector('#modal-video-player');
    if (videoPlayer && videoPlayer.player) {
        videoPlayer.player.pause();
    }
}