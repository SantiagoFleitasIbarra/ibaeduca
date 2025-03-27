// Componente de la sección Contacto
import { appConfig } from '../config.js';

/**
 * Renderiza la sección de Contacto con mapa y datos de contacto
 * @returns {HTMLElement} Elemento de la sección de contacto
 */
export const renderContact = () => {
    // Crear sección principal
    const section = document.createElement('section');
    section.id = 'contacto-section';
    section.className = 'py-16 px-4 md:px-8 lg:px-16 min-h-screen flex flex-col items-center relative overflow-hidden max-w-full mx-auto';
    
    // Etiqueta superior
    const sectionTag = document.createElement('div');
    sectionTag.className = 'text-center mb-2';
    sectionTag.innerHTML = `<span class="text-indigo-400 text-sm bg-indigo-900 bg-opacity-50 py-1 px-3 rounded-lg">¿Preguntas?</span>`;
    
    // Título de la sección
    const title = document.createElement('h2');
    title.className = 'text-3xl font-bold text-center mb-12 text-indigo-300';
    title.textContent = 'Contáctanos';
    
    // Contenedor de la cuadrícula principal
    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid grid-cols-1 md:grid-cols-2 gap-8 w-full';
    
    // Tarjeta del mapa
    const mapCard = document.createElement('div');
    mapCard.className = 'bg-indigo-950 bg-opacity-70 rounded-xl overflow-hidden shadow-xl relative';
    mapCard.style.backdropFilter = 'blur(10px)';
    mapCard.style.boxShadow = '0 10px 25px rgba(139, 92, 246, 0.4)';
    
    // Contenido del mapa
    mapCard.innerHTML = `
        <div class="w-full h-64 md:h-72">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209933.77093742298!2d-56.433047450534315!3d-34.83055422823492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f80ffc63bf7d3%3A0x6b321b2e355bec99!2sMontevideo%2C%20Uruguay!5e0!3m2!1ses!2sus!4v1659922152595!5m2!1ses!2sus" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        <div class="p-4">
            <h3 class="text-indigo-300 font-medium mb-1">Nuestra ubicación</h3>
            <p class="text-gray-400">Montevideo, Uruguay</p>
        </div>
    `;
    
    // Tarjeta de información de contacto
    const contactCard = document.createElement('div');
    contactCard.className = 'bg-indigo-950 bg-opacity-70 rounded-xl p-6 shadow-xl';
    contactCard.style.backdropFilter = 'blur(10px)';
    contactCard.style.boxShadow = '0 10px 25px rgba(30, 27, 75, 0.4)';
    
    // Título de la tarjeta
    const contactTitle = document.createElement('h3');
    contactTitle.className = 'text-xl font-semibold text-indigo-300 mb-6';
    contactTitle.textContent = 'Detalles de contacto';
    
    // Lista de información de contacto
    const contactList = document.createElement('div');
    contactList.className = 'space-y-6';
    
    // Correo electrónico
    const emailContact = document.createElement('div');
    emailContact.className = 'flex items-start';
    emailContact.innerHTML = `
        <div class="text-indigo-400 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        </div>
        <div>
            <div class="text-gray-300 font-medium mb-1">Correo electrónico</div>
            <div class="text-gray-400">info@ibaeduca.com</div>
        </div>
    `;
    
    // Teléfono
    const phoneContact = document.createElement('div');
    phoneContact.className = 'flex items-start';
    phoneContact.innerHTML = `
        <div class="text-indigo-400 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        </div>
        <div>
            <div class="text-gray-300 font-medium mb-1">Teléfono</div>
            <div class="text-gray-400">Número</div>
        </div>
    `;
    
    // Redes sociales
    const socialContact = document.createElement('div');
    socialContact.className = 'flex items-start';
    socialContact.innerHTML = `
        <div class="text-indigo-400 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        </div>
        <div>
            <div class="text-gray-300 font-medium mb-1">Redes sociales</div>
            <div class="flex space-x-2 mt-2">
                <a href="#" class="text-gray-400 hover:text-indigo-400 transition duration-300">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                    </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-indigo-400 transition duration-300">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-indigo-400 transition duration-300">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>
    `;
    
    // Agregar los elementos de contacto a la lista
    contactList.appendChild(emailContact);
    contactList.appendChild(phoneContact);
    contactList.appendChild(socialContact);
    
    // Agregar elementos a la tarjeta de contacto
    contactCard.appendChild(contactTitle);
    contactCard.appendChild(contactList);
    
    // Agregar tarjetas al contenedor
    gridContainer.appendChild(mapCard);
    gridContainer.appendChild(contactCard);
    
    // Efectos de luz flotante
    const floatingLights = createFloatingLights();
    
    // Ensamblar la sección
    section.appendChild(sectionTag);
    section.appendChild(title);
    section.appendChild(gridContainer);
    floatingLights.forEach(light => section.appendChild(light));
    
    return section;
};

/**
 * Crea luces flotantes para efectos visuales
 * @returns {Array} Array de elementos de luz
 */
const createFloatingLights = () => {
    const lights = [];
    const positions = [
        { top: '10%', right: '5%', width: '150px', height: '150px', color: 'rgba(79, 70, 229, 0.05)', delay: '0s' },
        { top: '80%', left: '15%', width: '120px', height: '120px', color: 'rgba(139, 92, 246, 0.05)', delay: '3s' },
        { top: '40%', right: '20%', width: '180px', height: '180px', color: 'rgba(165, 180, 252, 0.04)', delay: '1s' }
    ];

    positions.forEach(pos => {
        const light = document.createElement('div');
        light.className = 'floating-light';
        if (pos.top) light.style.top = pos.top;
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