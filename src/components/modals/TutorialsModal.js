// Componente del modal de tutoriales
import { closeAllModals } from '../../services/ModalService.js';

/**
 * Renderiza el modal de tutoriales en video
 * @returns {HTMLElement} Elemento del modal de tutoriales
 */
export const renderTutorialsModal = () => {
    // Crear el fondo oscuro del modal
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'tutorials-modal-overlay';
    modalOverlay.className = 'fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center hidden';
    
    // Crear el contenedor del modal
    const modalContainer = document.createElement('div');
    modalContainer.className = 'bg-indigo-950 rounded-xl p-5 w-full max-w-4xl max-h-[90vh] overflow-y-auto';
    modalContainer.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(99, 102, 241, 0.3)';
    
    // Cabecera del modal
    const modalHeader = document.createElement('div');
    modalHeader.className = 'flex justify-between items-center mb-6';
    
    // Título del modal
    const modalTitle = document.createElement('h3');
    modalTitle.className = 'text-2xl font-bold text-indigo-300';
    modalTitle.textContent = 'Tutoriales en Video';
    
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
    description.textContent = 'Explora nuestros tutoriales para aprovechar al máximo nuestra plataforma educativa.';
    
    // Contenedor de videos
    const videosContainer = document.createElement('div');
    videosContainer.className = 'grid grid-cols-1 md:grid-cols-2 gap-6';
    
    // Lista de tutoriales
    const tutorials = [
        {
            title: 'Cómo crear una cuenta',
            thumbnail: '/a/afc33964-2f0f-4d0e-9225-2867eb9cb467',
            duration: '2:45',
            description: 'Aprende a registrarte en IbaEduca en simples pasos.'
        },
        {
            title: 'Cómo reservar una clase gratuita',
            thumbnail: '/a/afc33964-2f0f-4d0e-9225-2867eb9cb467',
            duration: '3:10',
            description: 'Guía completa para reservar tu primera clase gratuita.'
        },
        {
            title: 'Navegando por la plataforma',
            thumbnail: '/a/afc33964-2f0f-4d0e-9225-2867eb9cb467',
            duration: '4:22',
            description: 'Conoce todas las funcionalidades de nuestra plataforma.'
        },
        {
            title: 'Cómo acceder a tus materiales',
            thumbnail: '/a/afc33964-2f0f-4d0e-9225-2867eb9cb467',
            duration: '2:50',
            description: 'Aprende a descargar y utilizar los materiales didácticos.'
        }
    ];
    
    // Crear tarjetas de tutoriales
    tutorials.forEach(tutorial => {
        const card = document.createElement('div');
        card.className = 'bg-indigo-900 bg-opacity-40 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer';
        
        // Añadir evento para reproducir el video
        card.addEventListener('click', () => {
            // Para el ejemplo, usamos el reproductor de video existente
            closeAllModals();
            setTimeout(() => {
                // Usar el mismo servicio de video que para el video promocional
                import('../../services/ModalService.js').then(module => {
                    module.openVideoModal('https://vjs.zencdn.net/v/oceans.mp4', tutorial.title);
                });
            }, 100);
        });
        
        const thumbnailContainer = document.createElement('div');
        thumbnailContainer.className = 'relative';
        
        const thumbnail = document.createElement('img');
        thumbnail.src = tutorial.thumbnail;
        thumbnail.alt = tutorial.title;
        thumbnail.className = 'w-full h-40 object-cover';
        
        const playButton = document.createElement('div');
        playButton.className = 'absolute inset-0 flex items-center justify-center bg-black bg-opacity-40';
        playButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        `;
        
        const duration = document.createElement('span');
        duration.className = 'absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded';
        duration.textContent = tutorial.duration;
        
        thumbnailContainer.appendChild(thumbnail);
        thumbnailContainer.appendChild(playButton);
        thumbnailContainer.appendChild(duration);
        
        const content = document.createElement('div');
        content.className = 'p-4';
        
        const title = document.createElement('h4');
        title.className = 'text-lg font-medium text-indigo-300 mb-2';
        title.textContent = tutorial.title;
        
        const desc = document.createElement('p');
        desc.className = 'text-gray-400 text-sm';
        desc.textContent = tutorial.description;
        
        content.appendChild(title);
        content.appendChild(desc);
        
        card.appendChild(thumbnailContainer);
        card.appendChild(content);
        videosContainer.appendChild(card);
        
        // Efecto hover
        card.addEventListener('mouseenter', () => {
            card.classList.add('transform', 'scale-[1.02]');
            card.style.boxShadow = '0 10px 25px rgba(30, 27, 75, 0.5), 0 0 15px rgba(139, 92, 246, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('transform', 'scale-[1.02]');
            card.style.boxShadow = '';
        });
    });
    
    // Ensamblar el modal
    modalContainer.appendChild(modalHeader);
    modalContainer.appendChild(description);
    modalContainer.appendChild(videosContainer);
    
    modalOverlay.appendChild(modalContainer);
    
    // Cerrar modal al hacer clic fuera
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeAllModals();
        }
    });
    
    return modalOverlay;
};