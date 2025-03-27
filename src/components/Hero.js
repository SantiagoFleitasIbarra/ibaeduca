// Componente de la sección héroe
import { appConfig } from '../config.js';
import { openVideoModal } from '../services/ModalService.js';

/**
 * Renderiza la sección principal (héroe) de la página
 * @returns {HTMLElement} Elemento de la sección héroe
 */
export const renderHero = () => {
    // Crear contenedor principal con altura completa
    const heroSection = document.createElement('section');
    heroSection.className = 'pt-16 md:pt-24 pb-6 md:pb-12 px-4 md:px-8 lg:px-16 min-h-[90vh] flex flex-col md:flex-row items-center justify-center max-w-full mx-auto';
    
    // Columna izquierda con texto
    const leftColumn = document.createElement('div');
    leftColumn.className = 'w-full md:w-1/2 mb-8 md:mb-0 md:pr-6';
    
    // Subtítulo
    const subtitle = document.createElement('p');
    subtitle.className = 'text-indigo-400 text-lg mb-2 bg-indigo-900 bg-opacity-50 inline-block py-1 px-3 rounded-lg';
    subtitle.textContent = appConfig.hero.subtitle;
    
    // Título principal
    const title = document.createElement('h1');
    title.className = 'text-3xl md:text-4xl lg:text-5xl font-bold mb-5';
    title.innerHTML = `${appConfig.hero.title.split(' ')[0]} ${appConfig.hero.title.split(' ')[1]} <br/><span class="text-white">${appConfig.hero.title.split(' ').slice(2).join(' ')}</span>`;
    
    // Descripción
    const description = document.createElement('p');
    description.className = 'text-gray-300 mb-8 text-lg max-w-xl';
    description.textContent = appConfig.hero.description;
    
    // Contenedor de botones
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'flex flex-wrap gap-4';
    
    // Botón primario
    const primaryButton = document.createElement('button');
    primaryButton.className = 'bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300';
    primaryButton.textContent = appConfig.hero.cta.primary;
    primaryButton.addEventListener('click', () => {
        document.getElementById('cursos-section').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Botón secundario
    const secondaryButton = document.createElement('button');
    secondaryButton.className = 'bg-transparent hover:bg-indigo-900 text-white font-medium py-3 px-6 rounded-lg border border-indigo-600 transition duration-300';
    secondaryButton.textContent = appConfig.hero.cta.secondary;
    secondaryButton.addEventListener('click', () => {
        import('../services/ModalService.js').then(module => {
            module.openFreeClassModal();
        });
    });
    
    // Agregar botones al contenedor
    buttonContainer.appendChild(primaryButton);
    buttonContainer.appendChild(secondaryButton);
    
    // Agregar elementos a la columna izquierda
    leftColumn.appendChild(subtitle);
    leftColumn.appendChild(title);
    leftColumn.appendChild(description);
    leftColumn.appendChild(buttonContainer);
    
    // Columna derecha con video
    const rightColumn = document.createElement('div');
    rightColumn.className = 'w-full md:w-1/2 flex justify-center';
    
    // Contenedor del video (tarjeta)
    const videoCard = document.createElement('div');
    videoCard.className = 'bg-indigo-950 rounded-xl p-1 w-full max-w-md transform transition-all duration-300 hover:scale-105 cursor-pointer';
    videoCard.id = 'video-promo-card';
    videoCard.style.boxShadow = '0 0 0 transparent';
    
    // Agregar efecto hover para el borde y sombra
    videoCard.addEventListener('mouseenter', () => {
        videoCard.style.boxShadow = '0 10px 25px rgba(139, 92, 246, 0.8), 0 0 15px rgba(99, 102, 241, 0.3)';
        videoCard.classList.add('bg-gradient-to-br', 'from-purple-900', 'to-indigo-900');
    });
    
    videoCard.addEventListener('mouseleave', () => {
        videoCard.style.boxShadow = '0 0 0 transparent';
        videoCard.classList.remove('bg-gradient-to-br', 'from-purple-900', 'to-indigo-900');
    });
    
    // Contenido del video
    const videoContent = document.createElement('div');
    videoContent.className = 'bg-indigo-950 rounded-lg p-4 flex flex-col items-center';
    
    // Título del video
    const videoTitle = document.createElement('h3');
    videoTitle.className = 'text-xl font-semibold text-center text-blue-300 mb-2';
    videoTitle.textContent = appConfig.videoPromo.title;
    
    // Thumbnail con botón de reproducción
    const videoThumb = document.createElement('div');
    videoThumb.className = 'relative w-full rounded-lg overflow-hidden mb-4 bg-indigo-950';
    
    // Imagen de fondo (usando imagen real en lugar de un div con background)
    const thumbImage = document.createElement('img');
    thumbImage.className = 'w-full h-auto object-cover aspect-video'; 
    thumbImage.src = 'images/otros/ibaeducademo.png'; 
    thumbImage.alt = 'Miniatura del video';
    
    // Texto indicador para hacer clic
    const clickPrompt = document.createElement('div');
    clickPrompt.className = 'absolute inset-0 flex items-center justify-center text-indigo-300 text-sm font-medium bg-black bg-opacity-50';
    clickPrompt.innerHTML = 'Clic para ver el vídeo introductorio';
    
    // Agregar elementos al thumbnail
    videoThumb.appendChild(thumbImage);
    videoThumb.appendChild(clickPrompt);
    
    // CTA del video
    const videoCta = document.createElement('p');
    videoCta.className = 'text-sm text-center text-blue-300';
    videoCta.textContent = appConfig.videoPromo.ctaText;
    
    // Agregar elementos al contenido del video
    videoContent.appendChild(videoTitle);
    videoContent.appendChild(videoThumb);
    videoContent.appendChild(videoCta);
    
    // Agregar contenido a la tarjeta
    videoCard.appendChild(videoContent);
    
    // Agregar evento para abrir el modal
    videoCard.addEventListener('click', () => {
        openVideoModal(appConfig.videoPromo.videoSrc, appConfig.videoPromo.title);
    });
    
    // Agregar tarjeta a la columna derecha
    rightColumn.appendChild(videoCard);
    
    // Agregar columnas al contenedor principal
    heroSection.appendChild(leftColumn);
    heroSection.appendChild(rightColumn);
    
    return heroSection;
};