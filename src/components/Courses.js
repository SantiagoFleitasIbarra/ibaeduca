// Componente de la sección Cursos
import { appConfig } from '../config.js';
import { openPaymentModal, openFreeClassModal } from '../services/ModalService.js';

/**
 * Renderiza la sección de Cursos disponibles
 * @returns {HTMLElement} Elemento de la sección de cursos
 */
export const renderCourses = () => {
    // Crear sección principal
    const section = document.createElement('section');
    section.id = 'cursos-section';
    section.className = 'py-16 px-4 md:px-8 lg:px-16 min-h-screen flex flex-col items-center relative overflow-hidden max-w-full mx-auto';
    
    // Etiqueta superior
    const sectionTag = document.createElement('div');
    sectionTag.className = 'text-center mb-2';
    sectionTag.innerHTML = `<span class="text-indigo-400 text-sm bg-indigo-900 bg-opacity-50 py-1 px-3 rounded-lg">Nuestros Programas</span>`;
    
    // Título de la sección
    const title = document.createElement('h2');
    title.className = 'text-3xl font-bold text-center mb-12 text-indigo-300';
    title.textContent = 'Cursos Disponibles';
    
    // Contenedor de tarjetas de cursos
    const coursesContainer = document.createElement('div');
    coursesContainer.className = 'grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl';
    
    // Crear tarjetas de cursos
    const courses = [
        {
            title: 'Clases en Vivo',
            description: 'Interactúa en tiempo real con nuestros profesores y recibe respuestas inmediatas a tus dudas.',
            icon: '<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>',
            action: 'Reserva tu clase gratuita',
            color: 'from-indigo-900 to-purple-900',
            onClick: () => openFreeClassModal()
        },
        {
            title: 'Clases Grabadas',
            description: 'Accede a nuestro contenido cuando quieras y avanza a tu propio ritmo con clases pregrabadas.',
            icon: '<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
            action: 'Ver planes',
            color: 'from-purple-900 to-indigo-900',
            onClick: () => openPaymentModal()
        },
        {
            title: 'Material Didáctico',
            description: 'Complementa tu aprendizaje con guías, ejercicios y recursos exclusivos para nuestros alumnos.',
            icon: '<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>',
            action: 'Ver planes',
            color: 'from-blue-900 to-indigo-900',
            onClick: () => openPaymentModal()
        }
    ];
    
    courses.forEach(course => {
        const courseCard = createCourseCard(course);
        coursesContainer.appendChild(courseCard);
    });
    
    // Cita inspiradora
    const quoteSection = document.createElement('div');
    quoteSection.className = 'w-full max-w-6xl mt-20 flex flex-col md:flex-row items-center bg-indigo-950 bg-opacity-70 rounded-xl p-6 shadow-xl';
    quoteSection.style.backdropFilter = 'blur(10px)';
    
    // Imagen de la cita
    const quoteImageContainer = document.createElement('div');
    quoteImageContainer.className = 'w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 mb-6 md:mb-0 md:mr-8';
    quoteImageContainer.style.boxShadow = '0 0 25px rgba(139, 92, 246, 0.3)';
    
    const quoteImage = document.createElement('img');
    quoteImage.src = 'images/otros/albert.webp';
    quoteImage.alt = 'Albert Einstein';
    quoteImage.className = 'w-full h-full object-cover';
    
    quoteImageContainer.appendChild(quoteImage);
    
    // Contenido de la cita
    const quoteContent = document.createElement('div');
    quoteContent.className = 'flex flex-col';
    
    const quoteText = document.createElement('p');
    quoteText.className = 'text-lg md:text-xl text-indigo-300 italic mb-2';
    quoteText.textContent = '"La educación no es aprendizaje de hechos, sino el entrenamiento de la mente para pensar."';
    
    const quoteAuthor = document.createElement('p');
    quoteAuthor.className = 'text-right text-gray-400';
    quoteAuthor.textContent = '- Albert Einstein';
    
    quoteContent.appendChild(quoteText);
    quoteContent.appendChild(quoteAuthor);
    
    quoteSection.appendChild(quoteImageContainer);
    quoteSection.appendChild(quoteContent);
    
    // Efectos de luz flotante
    const floatingLights = createFloatingLights();
    
    // Ensamblar la sección
    section.appendChild(sectionTag);
    section.appendChild(title);
    section.appendChild(coursesContainer);
    section.appendChild(quoteSection);
    floatingLights.forEach(light => section.appendChild(light));
    
    return section;
};

/**
 * Crea una tarjeta de curso
 * @param {Object} course - Datos del curso
 * @returns {HTMLElement} Elemento de tarjeta de curso
 */
const createCourseCard = (course) => {
    const card = document.createElement('div');
    card.className = `bg-gradient-to-b ${course.color} rounded-xl overflow-hidden shadow-xl transition-all duration-300 relative h-full`;
    card.style.boxShadow = '0 10px 25px rgba(139, 92, 246, 0.4)';
    
    const cardContent = document.createElement('div');
    cardContent.className = 'p-6 flex flex-col h-full';
    
    // Icono
    const iconContainer = document.createElement('div');
    iconContainer.className = 'text-indigo-300 mb-4';
    iconContainer.innerHTML = course.icon;
    
    // Título
    const title = document.createElement('h3');
    title.className = 'text-xl font-semibold text-white mb-2';
    title.textContent = course.title;
    
    // Descripción
    const description = document.createElement('p');
    description.className = 'text-gray-300 mb-6 flex-grow';
    description.textContent = course.description;
    
    // Botón
    const button = document.createElement('button');
    button.className = 'mt-auto bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300';
    button.textContent = course.action;
    button.addEventListener('click', course.onClick);
    
    // Agregar elementos a la tarjeta
    cardContent.appendChild(iconContainer);
    cardContent.appendChild(title);
    cardContent.appendChild(description);
    cardContent.appendChild(button);
    card.appendChild(cardContent);
    
    // Efecto hover
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 15px 30px rgba(30, 27, 75, 0.5), 0 0 15px rgba(139, 92, 246, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 10px 25px rgba(30, 27, 75, 0.4)';
    });
    
    return card;
};

/**
 * Crea luces flotantes para efectos visuales
 * @returns {Array} Array de elementos de luz
 */
const createFloatingLights = () => {
    const lights = [];
    const positions = [
        { top: '15%', right: '10%', width: '200px', height: '200px', color: 'rgba(139, 92, 246, 0.06)', delay: '0s' },
        { bottom: '15%', left: '5%', width: '150px', height: '150px', color: 'rgba(99, 102, 241, 0.05)', delay: '2s' },
        { top: '60%', left: '20%', width: '100px', height: '100px', color: 'rgba(165, 180, 252, 0.04)', delay: '4s' }
    ];
    
    positions.forEach(pos => {
        const light = document.createElement('div');
        light.className = 'floating-light';
        if (pos.top) light.style.top = pos.top;
        if (pos.bottom) light.style.bottom = pos.bottom;
        if (pos.left) light.style.left = pos.left;
        if (pos.right) light.style.right = pos.right;
        light.style.width = pos.width;
        light.style.height = pos.height;
        light.style.background = pos.color;
        light.style.animationDelay = pos.delay;
        
        lights.push(light);
    });
    
    return lights;
};