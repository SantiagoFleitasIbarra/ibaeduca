// Utilidades para estilos y efectos visuales

/**
 * Aplica estilos globales a la aplicación
 */
export const applyGlobalStyles = () => {
    // Crear elemento de estilo
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        /* Estilos globales */
        body {
            font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
            scroll-behavior: smooth;
            overflow-x: hidden;
            background-color: #0c0619; /* Fondo base más violeta oscuro */
            background-image: 
                radial-gradient(circle at 10% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 90% 80%, rgba(167, 139, 250, 0.1) 0%, transparent 50%),
                linear-gradient(rgba(30, 17, 60, 0.9), rgba(12, 6, 25, 0.95));
            background-attachment: fixed;
        }
        
        /* Animación de entrada para el héroe */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        section {
            animation: fadeIn 0.8s ease-out forwards;
            min-height: 100vh; /* Hace que cada sección ocupe toda la altura de la pantalla */
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        /* Estilos para todas las secciones */
        section {
            position: relative;
            overflow: hidden;
            background: transparent; /* Removemos el gradiente específico para usar el fondo general */
        }
        
        /* Efecto gradiente para títulos */
        h1, h2 {
            background: linear-gradient(90deg, #a5b4fc, #ffffff);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: 0 0 15px rgba(165, 180, 252, 0.3);
        }
        
        /* Transiciones suaves para interacciones */
        button, a {
            transition: all 0.3s ease;
            box-shadow: 0 0 15px rgba(67, 56, 202, 0.1);
        }
        
        button:hover {
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
        }
        
        /* Efecto de parpadeo para el botón de reproducción */
        @keyframes pulse {
            0% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.05); opacity: 1; }
            100% { transform: scale(1); opacity: 0.7; }
        }
        
        #video-promo-card button {
            animation: pulse 2s infinite;
        }
        
        /* Animación de flotación para las testimonial cards */
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
        
        .testimonial-card {
            transition: all 0.5s ease;
            box-shadow: 0 10px 25px rgba(30, 27, 75, 0.4);
        }
        
        /* Efectos de luz para las secciones */
        section::before {
            content: '';
            position: absolute;
            top: 10%;
            left: -5%;
            width: 20%;
            height: 50%;
            background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
            z-index: -1;
            border-radius: 50%;
        }
        
        section::after {
            content: '';
            position: absolute;
            bottom: 10%;
            right: -5%;
            width: 25%;
            height: 30%;
            background: radial-gradient(circle, rgba(129, 140, 248, 0.07) 0%, transparent 70%);
            z-index: -1;
            border-radius: 50%;
        }
        
        /* Efectos adicionales para diferentes secciones */
        #acerca-de-section::before {
            background: radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%);
            width: 35%;
            height: 60%;
            top: 5%;
            left: -10%;
        }
        
        #profesores-section::after {
            background: radial-gradient(circle, rgba(192, 132, 252, 0.08) 0%, transparent 70%);
            width: 30%;
            height: 40%;
            bottom: 0;
            right: 0;
        }
        
        #cursos-section::before {
            background: radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, transparent 70%);
            width: 40%;
            height: 50%;
            top: 10%;
            left: -15%;
        }
        
        /* Efecto de brillos flotantes */
        @keyframes floatingLight {
            0% { transform: translate(0, 0); opacity: 0.5; }
            50% { transform: translate(10px, -15px); opacity: 0.7; }
            100% { transform: translate(0, 0); opacity: 0.5; }
        }
        
        .floating-light {
            position: absolute;
            border-radius: 50%;
            filter: blur(20px);
            z-index: -1;
            animation: floatingLight 10s ease-in-out infinite;
        }
        
        /* Menú de navegación móvil fijo en la parte inferior */
        @media (max-width: 767px) {
            .mobile-nav-bottom {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background-color: #0f0b30;
                display: flex;
                justify-content: space-around;
                padding: 10px 0;
                border-top: 1px solid rgba(99, 102, 241, 0.3);
                z-index: 50;
                box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
            }
            
            .mobile-nav-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                color: #a5b4fc;
                font-size: 0.75rem;
                padding: 5px;
                background: transparent;
                border: none;
                cursor: pointer;
            }
            
            .mobile-nav-item svg {
                width: 24px;
                height: 24px;
                margin-bottom: 4px;
            }
            
            .mobile-nav-item:hover, .mobile-nav-item:active {
                color: white;
            }
            
            /* Ajustar el padding del footer para el menú móvil */
            footer {
                padding-bottom: 80px;
            }
        }
    `;
    
    // Agregar al head
    document.head.appendChild(styleElement);
    
    // Aplicar clases a elementos específicos
    applyDynamicStyles();
};

/**
 * Aplica estilos dinámicos a elementos específicos
 */
const applyDynamicStyles = () => {
    // Estilos para todas las secciones
    const allSections = document.querySelectorAll('section');
    allSections.forEach(section => {
        // No es necesario aplicar estilos de position y overflow aqui, ya que se aplican globalmente en applyGlobalStyles
    });
    
    // Aplicar efecto de animación al título
    setTimeout(() => {
        const title = document.querySelector('h1');
        if (title) {
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }
    }, 300);
};