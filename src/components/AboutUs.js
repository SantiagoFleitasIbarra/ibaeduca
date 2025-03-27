// Componente de la sección Acerca de Nosotros
import { appConfig } from '../config.js';

/**
 * Renderiza la sección "Acerca de Nosotros" con información sobre la empresa
 * @returns {HTMLElement} Elemento de la sección Acerca de Nosotros
 */
export const renderAboutUs = () => {
    // Crear sección principal
    const section = document.createElement('section');
    section.id = 'acerca-de-section';
    section.className = 'py-16 px-4 md:px-8 lg:px-16 min-h-screen flex flex-col items-center relative overflow-hidden max-w-full mx-auto';

    // Etiqueta superior
    const sectionTag = document.createElement('div');
    sectionTag.className = 'text-center mb-2';
    sectionTag.innerHTML = `<span class="text-indigo-400 text-sm bg-indigo-900 bg-opacity-50 py-1 px-3 rounded-lg">Nuestra Historia</span>`;

    // Título de la sección
    const title = document.createElement('h2');
    title.className = 'text-3xl font-bold text-center mb-12 text-indigo-300';
    title.textContent = 'Acerca de Nosotros';

    // Contenedor de la cuadrícula principal
    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid grid-cols-1 md:grid-cols-2 gap-8 w-full';

    // Tarjeta "Quiénes Somos"
    const aboutCard = createInfoCard(
        'Quiénes Somos',
        'Somos formadores apasionados por la educación y el conocimiento, dedicados a empoderar a estudiantes y profesionales a través de una educación de alta calidad en múltiples disciplinas académicas y empresariales.',
        '#4c1d95',
        'bg-indigo-950'
    );

    // Tarjeta "Nuestra Misión"
    const missionCard = createInfoCard(
        'Nuestra Misión',
        'Transformar vidas mediante una educación integral y práctica, proporcionando herramientas y conocimientos que impulsen el desarrollo profesional y académico.',
        '#5b21b6',
        'bg-indigo-950'
    );

    // Agregar tarjetas al contenedor
    gridContainer.appendChild(aboutCard);
    gridContainer.appendChild(missionCard);

    // Contenedor de áreas de especialidad
    const specialtiesContainer = document.createElement('div');
    specialtiesContainer.className = 'grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8';

    // Áreas de especialidad
    const specialties = [
        {
            title: 'Matemáticas',
            description: 'Desarrollamos habilidades analíticas y de resolución de problemas a través de métodos innovadores.',
            icon: '<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>',
            color: '#818cf8'
        },
        {
            title: 'Programación',
            description: 'Formamos profesionales competentes en tecnologías actuales para los desafíos digitales.',
            icon: '<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>',
            color: '#6366f1'
        },
        {
            title: 'Física',
            description: 'Explicamos conceptos complejos de manera clara y accesible, conectando teoría con práctica.',
            icon: '<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
            color: '#a78bfa'
        },
        {
            title: 'Administración',
            description: 'Proporcionamos conocimientos estratégicos para la gestión efectiva de organizaciones.',
            icon: '<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>',
            color: '#8b5cf6'
        }
    ];

    // Crear tarjetas de especialidad
    specialties.forEach(specialty => {
        const card = createSpecialtyCard(specialty);
        specialtiesContainer.appendChild(card);
    });

    // Sección de compromiso
    const commitmentSection = createCommitmentSection();

    // Efectos de luz flotante
    const floatingLights = createFloatingLights();

    // Ensamblar la sección completa
    section.appendChild(sectionTag);
    section.appendChild(title);
    section.appendChild(gridContainer);
    section.appendChild(specialtiesContainer);
    section.appendChild(commitmentSection);
    floatingLights.forEach(light => section.appendChild(light));

    return section;
};

/**
 * Crea una tarjeta informativa para la sección Acerca de
 * @param {string} title - Título de la tarjeta
 * @param {string} content - Contenido de texto
 * @param {string} borderColor - Color del borde
 * @param {string} bgClass - Clase de fondo
 * @returns {HTMLElement} Elemento de tarjeta
 */
const createInfoCard = (title, content, borderColor, bgClass) => {
    const card = document.createElement('div');
    card.className = `${bgClass} rounded-xl p-6 shadow-lg relative overflow-hidden`;
    card.style.boxShadow = `0 10px 25px rgba(139, 92, 246, 0.3)`;

    // Título
    const titleEl = document.createElement('h3');
    titleEl.className = 'text-xl font-semibold text-indigo-300 mb-4';
    titleEl.textContent = title;

    // Contenido
    const contentEl = document.createElement('p');
    contentEl.className = 'text-gray-300';
    contentEl.textContent = content;

    // Agregar elementos a la tarjeta
    card.appendChild(titleEl);
    card.appendChild(contentEl);

    return card;
};

/**
 * Crea una tarjeta de especialidad
 * @param {Object} specialty - Datos de la especialidad
 * @returns {HTMLElement} Elemento de tarjeta de especialidad
 */
const createSpecialtyCard = (specialty) => {
    const card = document.createElement('div');
    card.className = 'bg-indigo-950 bg-opacity-70 rounded-xl p-5 shadow-lg relative';
    card.style.backdropFilter = 'blur(10px)';
    card.style.boxShadow = `0 8px 20px rgba(30, 27, 75, 0.3)`;

    // Icono
    const icon = document.createElement('div');
    icon.className = 'text-indigo-400 mb-3';
    icon.innerHTML = specialty.icon;
    icon.style.color = specialty.color;

    // Título
    const title = document.createElement('h4');
    title.className = 'text-lg font-semibold text-indigo-200 mb-2';
    title.textContent = specialty.title;

    // Descripción
    const description = document.createElement('p');
    description.className = 'text-gray-400 text-sm';
    description.textContent = specialty.description;

    // Agregar elementos a la tarjeta
    card.appendChild(icon);
    card.appendChild(title);
    card.appendChild(description);

    return card;
};

/**
 * Crea la sección de compromiso
 * @returns {HTMLElement} Elemento de la sección de compromiso
 */
const createCommitmentSection = () => {
    const section = document.createElement('div');
    section.className = 'w-full mt-12';

    // Título
    const title = document.createElement('h3');
    title.className = 'text-xl font-semibold text-center text-indigo-300 mb-8';
    title.textContent = 'Nuestro Compromiso';

    // Contenedor de características
    const featuresContainer = document.createElement('div');
    featuresContainer.className = 'grid grid-cols-1 md:grid-cols-4 gap-4';

    // Características
    const features = [
        {
            title: 'Contenido académico de alta calidad',
            icon: '<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>'
        },
        {
            title: 'Metodologías personalizadas',
            icon: '<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>'
        },
        {
            title: 'Materiales actualizados',
            icon: '<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>'
        },
        {
            title: 'Soporte continuo',
            icon: '<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>'
        }
    ];

    // Crear tarjetas de características
    features.forEach(feature => {
        const featureEl = document.createElement('div');
        featureEl.className = 'flex flex-col items-center text-center p-4';

        const iconEl = document.createElement('div');
        iconEl.className = 'text-indigo-400 mb-3';
        iconEl.innerHTML = feature.icon;

        const titleEl = document.createElement('div');
        titleEl.className = 'text-sm text-gray-300';
        titleEl.textContent = feature.title;

        featureEl.appendChild(iconEl);
        featureEl.appendChild(titleEl);
        featuresContainer.appendChild(featureEl);
    });

    // Ensamblar la sección
    section.appendChild(title);
    section.appendChild(featuresContainer);

    return section;
};

/**
 * Crea luces flotantes para efectos visuales
 * @returns {Array} Array de elementos de luz
 */
const createFloatingLights = () => {
    const lights = [];
    const positions = [
        { top: '15%', left: '10%', width: '150px', height: '150px', color: 'rgba(79, 70, 229, 0.05)', delay: '0s' },
        { top: '80%', left: '20%', width: '120px', height: '120px', color: 'rgba(139, 92, 246, 0.05)', delay: '3s' },
        { top: '40%', right: '10%', width: '180px', height: '180px', color: 'rgba(165, 180, 252, 0.04)', delay: '1s' }
    ];

    positions.forEach(pos => {
        const light = document.createElement('div');
        light.className = 'floating-light';
        light.style.top = pos.top;
        light.style.left = pos.left;
        light.style.right = pos.right;
        light.style.width = pos.width;
        light.style.height = pos.height;
        light.style.background = pos.color;
        light.style.animationDelay = pos.delay;

        lights.push(light);
    });

    return lights;
};