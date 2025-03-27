// Archivo de configuración con valores que puedan necesitar edición

export const appConfig = {
    // Información general de la aplicación
    siteName: "IbaEduca",
    siteDescription: "Plataforma educativa para la venta de cursos en línea",
    
    // Configuración del héroe
    hero: {
        title: "Educación que Transforma Vidas",
        subtitle: "Aprende. Crece. Triunfa.",
        description: "Únete a nuestra comunidad de más de 100 estudiantes y domina las habilidades más demandadas en matemáticas, física, programación y administración de empresas.",
        cta: {
            primary: "Explorar Cursos",
            secondary: "Clase Gratuita"
        },
        backgroundGradient: "transparent"
    },
    
    // Configuración del video promocional
    videoPromo: {
        title: "¡Bienvenido/a a IbaEduca!",
        description: "La plataforma de aprendizaje personalizado líderes en el mundo de conocimientos con mentores expertos.",
        ctaText: "Descubre cómo IbaEduca está transformando la educación online",
        videoSrc: "videos/video.mp4" // URL de ejemplo, reemplazar con video real
    },
    
    // Sección Acerca de Nosotros
    aboutUs: {
        tagline: "Nuestra Historia",
        title: "Acerca de Nosotros",
        quienesSomos: "Somos formadores apasionados por la educación y el conocimiento, dedicados a empoderar a estudiantes y profesionales a través de una educación de alta calidad en múltiples disciplinas académicas y empresariales.",
        mision: "Transformar vidas mediante una educación integral y práctica, proporcionando herramientas y conocimientos que impulsen el desarrollo profesional y académico."
    },
    
    // Sección de Profesores
    professors: [
        {
            name: "Santiago Fleitas",
            image: "images/profes/santiago.jpg",
            subjects: ["Matemáticas", "Programación"],
            bio: "Apasionado por hacer que los números y el código cobren vida, Santiago tiene años de experiencia transformando conceptos complejos en aprendizajes accesibles."
        },
        {
            name: "Diego Fleitas",
            image: "images/profes/diego.jpg", 
            subjects: ["Física", "Administración"],
            bio: "Combina su experticia en física con conocimientos sólidos en administración de empresas para ofrecer una perspectiva única en la enseñanza."
        }
    ],
    
    // Enlaces de navegación
    navLinks: [
        { text: "Acerca de", href: "#acerca-de-section" },
        { text: "Profesores", href: "#profesores-section" },
        { text: "Cursos", href: "#cursos-section" },
        { text: "Contacto", href: "#contacto-section" }
    ],
    
    // Testimonios de alumnos para la sección de Historias de Éxito
    testimonials: [
        {
            name: "Albert Einstein",
            quote: "Logré mejores resultados",
            imgSrc: "images/otros/albert.webp",
            subject: "Matemáticas"
        },
        {
            name: "Albert Einstein",
            quote: "Excelente metodología",
            imgSrc: "images/otros/albert.webp",
            subject: ""
        },
        {
            name: "Albert Einstein",
            quote: "Logré aprobar mi examen final con honores",
            imgSrc: "images/otros/albert.webp",
            subject: "Matemáticas"
        }
    ],
    
    // Planes de pago
    paymentPlans: {
        basicPlan: {
            title: "Plan Alumno Avanzado",
            priceUYU: "$1500 UYU",
            priceUSD: "$50 USD",
            features: [
                "Acceso completo a clases grabadas",
                "Material didáctico exclusivo"
            ]
        },
        proPlan: {
            title: "Plan Alumno Experto",
            priceUYU: "$2000 UYU",
            priceUSD: "$65 USD",
            features: [
                "Acceso completo a clases grabadas",
                "Material didáctico exclusivo",
                "2 clases presenciales semanales",
                "Acceso a nuestro grupo en Whatsapp"
            ],
            recommended: true
        }
    },
    
    // Información de contacto
    contactInfo: {
        email: "a@ibaeduca.com",
        phone: "Número",
        location: "Montevideo, Uruguay",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209933.77093742298!2d-56.433047450534315!3d-34.83055422823492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f80ffc63bf7d3%3A0x6b321b2e355bec99!2sMontevideo%2C%20Uruguay!5e0!3m2!1ses!2sus!4v1659922152595!5m2!1ses!2sus"
    }
};