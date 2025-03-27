// Componente de la sección Profesores
import { appConfig } from '../config.js';

/**
 * Renderiza la sección de Profesores con perfiles de expertos
 * @returns {HTMLElement} Elemento de la sección Profesores
 */
export const renderProfessors = () => {
    // Crear sección principal
    const section = document.createElement('section');
    section.id = 'profesores-section';
    section.className = 'py-16 px-4 md:px-8 lg:px-16 min-h-screen flex flex-col items-center relative overflow-hidden max-w-full mx-auto';
    
    // Etiqueta superior
    const sectionTag = document.createElement('div');
    sectionTag.className = 'text-center mb-2';
    sectionTag.innerHTML = `<span class="text-indigo-400 text-sm bg-indigo-900 bg-opacity-50 py-1 px-3 rounded-lg">Nuestro Equipo</span>`;
    
    // Título de la sección
    const title = document.createElement('h2');
    title.className = 'text-3xl font-bold text-center mb-12 text-indigo-300';
    title.textContent = 'Profesores Expertos';
    
    // Contenedor de tarjetas de profesores
    const professorsContainer = document.createElement('div');
    professorsContainer.className = 'grid grid-cols-1 md:grid-cols-2 gap-8 w-full';
    
    // Datos de profesores
    const professors = [
        {
            name: 'Santiago Fleitas',
            image: 'images/profes/santiago.jpg',
            subjects: ['Matemáticas', 'Programación'],
            bio: 'Apasionado por hacer que los números y el código cobren vida, Santiago tiene años de experiencia transformando conceptos complejos en aprendizajes accesibles.'
        },
        {
            name: 'Diego Fleitas',
            image: 'images/profes/diego.jpg',
            subjects: ['Física', 'Administración'],
            bio: 'Combina su experticia en física con conocimientos sólidos en administración de empresas para ofrecer una perspectiva única en la enseñanza.'
        }
    ];
    
    // Crear tarjetas de profesores
    professors.forEach(professor => {
        const professorCard = createProfessorCard(professor);
        professorsContainer.appendChild(professorCard);
    });
    
    // Efectos decorativos
    const decorativeElement = document.createElement('div');
    decorativeElement.className = 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]';
    decorativeElement.innerHTML = `
        <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
                <path d="M300 300V0C300 0 300 300 600 300C300 300 300 300 300 600C300 600 300 300 0 300C0 300 300 300 300 300Z" fill="rgba(139, 92, 246, 0.02)"/>
            </g>
        </svg>
    `;
    
    // Efectos de luz flotante
    const floatingLights = createFloatingLights();
    
    // Ensamblar la sección
    section.appendChild(sectionTag);
    section.appendChild(title);
    section.appendChild(professorsContainer);
    section.appendChild(decorativeElement);
    floatingLights.forEach(light => section.appendChild(light));
    
    return section;
};

/**
 * Crea una tarjeta de perfil de profesor
 * @param {Object} professor - Datos del profesor
 * @returns {HTMLElement} Elemento de tarjeta de profesor
 */
const createProfessorCard = (professor) => {
    const card = document.createElement('div');
    card.className = 'bg-indigo-950 bg-opacity-70 rounded-xl overflow-hidden shadow-xl relative transition-all duration-300 hover:shadow-2xl';
    card.style.backdropFilter = 'blur(10px)';
    card.style.boxShadow = '0 10px 25px rgba(139, 92, 246, 0.4)';
    
    // Contenedor flexible para foto y datos
    const container = document.createElement('div');
    container.className = 'flex flex-row';
    
    // Contenedor de imagen
    const imageContainer = document.createElement('div');
    imageContainer.className = 'w-1/3 relative overflow-hidden';
    imageContainer.style.borderRadius = '50%';
    imageContainer.style.aspectRatio = '1/1';
    
    // Imagen del profesor
    const image = document.createElement('img');
    image.src = professor.image;
    image.alt = professor.name;
    image.className = 'w-full h-full object-cover';
    
    // Gradiente sobre la imagen
    const imageOverlay = document.createElement('div');
    imageOverlay.className = 'absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-transparent';
    
    // Agregar elementos al contenedor de imagen
    imageContainer.appendChild(image);
    imageContainer.appendChild(imageOverlay);
    
    // Contenedor de contenido
    const content = document.createElement('div');
    content.className = 'w-2/3 p-5';
    
    // Nombre del profesor
    const name = document.createElement('h3');
    name.className = 'text-xl font-semibold text-indigo-300 mb-2';
    name.textContent = professor.name;
    
    // Especialidades
    const subjects = document.createElement('div');
    subjects.className = 'flex flex-wrap gap-2 mb-3';
    
    professor.subjects.forEach(subject => {
        const badge = document.createElement('span');
        badge.className = 'text-xs bg-indigo-900/80 text-indigo-300 py-1 px-2 rounded';
        badge.textContent = subject;
        subjects.appendChild(badge);
    });
    
    // Biografía
    const bio = document.createElement('p');
    bio.className = 'text-gray-300 text-sm';
    bio.textContent = professor.bio;
    
    // Agregar elementos al contenido
    content.appendChild(name);
    content.appendChild(subjects);
    content.appendChild(bio);
    
    // Agregar elementos al contenedor
    container.appendChild(imageContainer);
    container.appendChild(content);
    card.appendChild(container);
    
    // Agregar efecto hover
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
        { top: '20%', right: '10%', width: '200px', height: '200px', color: 'rgba(139, 92, 246, 0.06)', delay: '0s' },
        { bottom: '15%', left: '5%', width: '150px', height: '150px', color: 'rgba(99, 102, 241, 0.05)', delay: '2s' },
        { top: '50%', left: '30%', width: '100px', height: '100px', color: 'rgba(165, 180, 252, 0.04)', delay: '4s' }
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