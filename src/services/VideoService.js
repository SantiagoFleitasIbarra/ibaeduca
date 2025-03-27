// Servicio para gestionar la reproducción de videos
import videojs from 'videojs';

let videoPlayers = {};

/**
 * Inicializa un reproductor de video con Video.js
 * @param {string} videoElementId - ID del elemento de video a inicializar
 * @param {string} videoSrc - URL del video a reproducir
 * @returns {Object} Instancia del reproductor de video
 */
export const initializeVideoPlayer = (videoElementId, videoSrc) => {
    // Si ya existe un reproductor para este elemento, destruirlo
    if (videoPlayers[videoElementId]) {
        videoPlayers[videoElementId].dispose();
    }
    
    const videoElement = document.getElementById(videoElementId);
    
    // Configurar la fuente del video
    videoElement.src = videoSrc;
    
    // Inicializar Video.js
    const player = videojs(videoElementId, {
        controls: true,
        autoplay: false,
        preload: 'auto',
        fluid: true,
        responsive: true,
        playbackRates: [0.5, 1, 1.5, 2]
    });
    
    // Guardar la referencia al reproductor
    videoPlayers[videoElementId] = player;
    
    // Reproducir después de iniciar
    player.ready(() => {
        // Solo para garantizar que el jugador está listo
        console.log('Reproductor de video inicializado');
    });
    
    return player;
};

/**
 * Destruye todos los reproductores de video activos
 */
export const destroyAllPlayers = () => {
    Object.keys(videoPlayers).forEach(playerId => {
        if (videoPlayers[playerId]) {
            videoPlayers[playerId].dispose();
            delete videoPlayers[playerId];
        }
    });
};

