// Componente de la sección Historias de Éxito
import { appConfig } from '../config.js';

/**
 * Renderiza la sección de Historias de Éxito con un carrusel de testimonios
 * @returns {HTMLElement} Elemento de la sección de historias de éxito
 */
export const renderSuccessStories = () => {
    // Crear sección principal
    const section = document.createElement('section');
    section.id = 'historias-exito';
    section.className = 'py-12 px-4 md:px-8 lg:px-16 min-h-[90vh] flex flex-col relative overflow-hidden max-w-full mx-auto';

    // Etiqueta de estudiantes ayudados
    const studentTag = document.createElement('div');
    studentTag.className = 'text-center mb-4';
    studentTag.innerHTML = `<span class="text-indigo-400 text-sm bg-indigo-900 bg-opacity-50 py-1 px-3 rounded-lg">+ 100 Estudiantes ayudados</span>`;

    // Título de la sección
    const title = document.createElement('h2');
    title.className = 'text-3xl font-bold text-center mb-10 text-indigo-300';
    title.textContent = 'Historias de Éxito';

    // Contenedor principal con grid
    const container = document.createElement('div');
    container.className = 'grid grid-cols-1 md:grid-cols-2 gap-10 items-center';

    // Columna izquierda con texto
    const leftColumn = document.createElement('div');
    leftColumn.className = 'text-gray-400 space-y-5 max-w-xl z-10';

    // Descripción
    const description = document.createElement('p');
    description.className = 'text-lg';
    description.textContent = 'A lo largo de nuestra trayectoria, hemos ayudado a más de 100 estudiantes a mejorar sus habilidades en matemática, física, programación y administración de empresas. Desde aprobar exámenes clave hasta desarrollar proyectos y emprender con éxito, nuestros alumnos han logrado sus metas con nuestro apoyo.';

    // Llamado a la acción
    const ctaText = document.createElement('p');
    ctaText.className = 'text-xl font-semibold text-white';
    ctaText.textContent = 'Tu éxito puede ser el próximo. ¡Aprende con nosotros!';

    // Botón de acción
    const ctaButton = document.createElement('button');
    ctaButton.className = 'bg-indigo-800 hover:bg-indigo-700 text-white font-medium py-2 px-5 rounded-lg transition duration-300 mt-4';
    ctaButton.textContent = 'Comienza Ahora';
    ctaButton.style.boxShadow = '0 0 15px rgba(79, 70, 229, 0.4)';

    // Agregar elementos a la columna izquierda
    leftColumn.appendChild(description);
    leftColumn.appendChild(ctaText);
    leftColumn.appendChild(ctaButton);

    // Columna derecha con imágenes animadas
    const rightColumn = document.createElement('div');
    rightColumn.className = 'relative h-80 md:h-96';

    // Crear testimonios animados
    appConfig.testimonials.forEach((testimonial, index) => {
        const testimonialCard = createTestimonialCard(testimonial, index);
        rightColumn.appendChild(testimonialCard);
    });

    // Agregar elementos de luces ambientales
    const ambientLight1 = document.createElement('div');
    ambientLight1.className = 'absolute -top-20 -left-20 w-40 h-40 rounded-full';
    ambientLight1.style.background = 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)';
    ambientLight1.style.filter = 'blur(20px)';

    const ambientLight2 = document.createElement('div');
    ambientLight2.className = 'absolute bottom-10 right-10 w-60 h-60 rounded-full';
    ambientLight2.style.background = 'radial-gradient(circle, rgba(165, 180, 252, 0.1) 0%, transparent 70%)';
    ambientLight2.style.filter = 'blur(25px)';

    rightColumn.appendChild(ambientLight1);
    rightColumn.appendChild(ambientLight2);

    // Agregar columnas al contenedor
    container.appendChild(leftColumn);
    container.appendChild(rightColumn);

    // Ensamblar la sección
    section.appendChild(studentTag);
    section.appendChild(title);
    section.appendChild(container);

    // Iniciar animación después de montar
    setTimeout(() => {
        initTestimonialAnimation();
    }, 500);

    return section;
};

/**
 * Crea una tarjeta de testimonio con la imagen y texto
 * @param {Object} testimonial - Datos del testimonio
 * @param {number} index - Índice para posicionamiento
 * @returns {HTMLElement} Elemento de tarjeta de testimonio
 */
const createTestimonialCard = (testimonial, index) => {
    const card = document.createElement('div');
    card.className = 'testimonial-card absolute bg-indigo-950 rounded-xl overflow-hidden shadow-lg transition-all duration-1000';
    card.dataset.index = index;

    // Calcular posición inicial
    const positions = [
        { top: '10%', left: '50%', transform: 'translate(-50%, 0) scale(0.9)' },
        { top: '50%', left: '30%', transform: 'translate(-50%, -50%) scale(1.1)' },
        { top: '75%', left: '60%', transform: 'translate(-50%, -50%) scale(0.8)' }
    ];

    // Aplicar posición inicial
    const pos = positions[index % positions.length];
    Object.assign(card.style, pos);

    // Contenido de la tarjeta
    const content = document.createElement('div');
    content.className = 'relative';

    // Imagen
    const image = document.createElement('img');
    image.src = testimonial.imgSrc;
    image.alt = testimonial.name;
    image.className = 'w-48 h-48 object-cover aspect-square'; 

    // Texto del testimonio
    const quote = document.createElement('div');
    quote.className = 'absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900 to-transparent p-3 text-white text-xs';
    quote.innerHTML = `<p class="font-semibold">"${testimonial.quote}"</p>`;
    if (testimonial.subject) {
        quote.innerHTML += `<p class="text-indigo-300 text-xs mt-1">de ${testimonial.subject}</p>`;
    }

    // Agregar elementos a la tarjeta
    content.appendChild(image);
    content.appendChild(quote);
    card.appendChild(content);

    return card;
};

/**
 * Inicializa la animación de los testimonios
 */
const initTestimonialAnimation = () => {
    const cards = document.querySelectorAll('.testimonial-card');
    if (!cards.length) return;

    // Posiciones para la animación
    const positions = [
        { top: '10%', left: '50%', transform: 'translate(-50%, 0) scale(0.9)' },
        { top: '50%', left: '30%', transform: 'translate(-50%, -50%) scale(1.1)' },
        { top: '75%', left: '60%', transform: 'translate(-50%, -50%) scale(0.8)' }
    ];

    // Función para animar las tarjetas
    const animateCards = () => {
        cards.forEach(card => {
            const currentIdx = parseInt(card.dataset.index);
            const nextIdx = (currentIdx + 1) % positions.length;

            // Actualizar posición
            const pos = positions[nextIdx];
            Object.assign(card.style, pos);

            // Actualizar índice
            card.dataset.index = nextIdx;
        });
    };

    // Iniciar intervalo de animación
    setInterval(animateCards, 3000);
};