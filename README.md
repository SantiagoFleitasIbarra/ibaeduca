# IbaEduca - Plataforma Educativa

## Descripción
IbaEduca es una plataforma educativa para la venta de cursos en línea. Incluye sistema de gestión de contenido, reproducción de videos y procesamiento de pagos. Desarrollado en módulos JavaScript para facilitar la migración a React.

## Estructura del Proyecto

### Archivos Principales
- `index.html`: Punto de entrada HTML minimalista que carga los módulos JavaScript.
- `src/main.js`: Inicializador de la aplicación que carga los componentes principales.
- `src/config.js`: Archivo de configuración con valores editables.

### Componentes (`src/components/`)
- `Navbar.js`: Barra de navegación responsiva con menú para dispositivos móviles.
  - `renderNavbar()`: Genera y devuelve el elemento de navegación.
  - `toggleMobileMenu()`: Controla la visibilidad del menú en dispositivos móviles.

- `Hero.js`: Sección principal de bienvenida con texto y video promocional.
  - `renderHero()`: Crea la sección héroe con información y video destacado.

- `VideoModal.js`: Modal para reproducción de videos de cursos.
  - `renderVideoModal()`: Crea el modal que alberga el reproductor de video.
  - `closeVideoModal()`: Cierra el modal y detiene la reproducción.

- `SuccessStories.js`: Sección de historias de éxito con testimonios animados.
  - `renderSuccessStories()`: Crea la sección de testimonios.
  - `createTestimonialCard()`: Genera tarjetas de testimonios con imágenes.
  - `initTestimonialAnimation()`: Inicializa la animación de las tarjetas.

- `AboutUs.js`: Sección de información sobre la plataforma.
  - `renderAboutUs()`: Genera la sección "Acerca de Nosotros".
  - `createInfoCard()`: Crea tarjetas informativas.
  - `createSpecialtyCard()`: Crea tarjetas de especialidades.
  - `createCommitmentSection()`: Genera la sección de compromiso.
  - `createFloatingLights()`: Crea efectos visuales de luces flotantes.

- `Professors.js`: Sección que muestra los profesores de la plataforma.
  - `renderProfessors()`: Genera la sección de profesores.
  - `createProfessorCard()`: Crea tarjetas con perfiles de profesores.
  - `createFloatingLights()`: Crea efectos visuales de luces flotantes.

- `Courses.js`: Sección que muestra los cursos disponibles.
  - `renderCourses()`: Genera la sección de cursos.
  - `createCourseCard()`: Crea tarjetas con información de cursos.
  - `createFloatingLights()`: Crea efectos visuales de luces flotantes.

- `Contact.js`: Sección de contacto con mapa y detalles de comunicación.
  - `renderContact()`: Genera la sección de contacto con mapa y datos.
  - `createFloatingLights()`: Crea efectos visuales de luces flotantes.

- `PaymentModal.js`: Modal para mostrar planes de pago y precios.
  - `renderPaymentModal()`: Crea el modal con los planes disponibles.

- `LoginModal.js`: Modal para inicio de sesión y registro de usuarios.
  - `renderLoginModal()`: Crea el modal con formularios de login y registro.

- `FreeClassModal.js`: Modal para reservar una clase gratuita.
  - `renderFreeClassModal()`: Crea el modal con formulario de reserva.

- `Footer.js`: Pie de página completo con enlaces y secciones legales.
  - `renderFooter()`: Genera el footer con enlaces a secciones y modales.
  - Incluye botón para volver al inicio de la página.

### Modales (`src/components/modals/`)
- `TutorialsModal.js`: Modal con tutoriales en video.
  - `renderTutorialsModal()`: Crea el modal con lista de videos tutoriales clicables.

- `FaqModal.js`: Modal de preguntas frecuentes.
  - `renderFaqModal()`: Crea el modal con preguntas y respuestas en formato acordeón.

- `SupportModal.js`: Modal de soporte técnico.
  - `renderSupportModal()`: Crea el modal con formulario de contacto para soporte.

- `TermsModal.js`: Modal de términos y condiciones.
  - `renderTermsModal()`: Crea el modal con el texto legal de términos.

- `PrivacyModal.js`: Modal de política de privacidad.
  - `renderPrivacyModal()`: Crea el modal con la política de privacidad.

- `CookiesModal.js`: Modal de política de cookies.
  - `renderCookiesModal()`: Crea el modal con la política de cookies.

- `RefundModal.js`: Modal de política de reembolso.
  - `renderRefundModal()`: Crea el modal con la política de reembolsos.

### Servicios (`src/services/`)
- `ModalService.js`: Gestiona la visualización de ventanas modales.
  - `openVideoModal(videoSrc, videoTitle)`: Abre el modal con el video especificado.
  - `openPaymentModal()`: Abre el modal de planes de pago.
  - `openLoginModal()`: Abre el modal de inicio de sesión.
  - `openFreeClassModal()`: Abre el modal para reservar clase gratuita.
  - `openTutorialsModal()`: Abre el modal de tutoriales en video.
  - `openFaqModal()`: Abre el modal de preguntas frecuentes.
  - `openSupportModal()`: Abre el modal de soporte técnico.
  - `openTermsModal()`: Abre el modal de términos y condiciones.
  - `openPrivacyModal()`: Abre el modal de política de privacidad.
  - `openCookiesModal()`: Abre el modal de política de cookies.
  - `openRefundModal()`: Abre el modal de política de reembolso.
  - `closeAllModals()`: Cierra todos los modales abiertos.

- `VideoService.js`: Controla la reproducción de videos usando Video.js.
  - `initializeVideoPlayer(videoElementId, videoSrc)`: Inicializa el reproductor de video.
  - `destroyAllPlayers()`: Libera recursos de todos los reproductores.

- `EventService.js`: Maneja eventos globales de la aplicación.
  - `initializeEvents()`: Inicializa todos los eventos de la aplicación.
  - `initKeyboardEvents()`: Configura eventos de teclado.
  - `initResizeEvents()`: Maneja eventos de redimensionamiento.
  - `handleResponsiveElements()`: Ajusta elementos según el tamaño de pantalla.
  - `initVisualEffects()`: Aplica efectos visuales interactivos.
  - `initScrollEvents()`: Controla cambios en la navegación al hacer scroll.

### Utilidades (`src/utils/`)
- `StyleUtils.js`: Utilidades para estilos y efectos visuales.
  - `applyGlobalStyles()`: Aplica estilos globales mediante CSS en JavaScript.
  - `applyDynamicStyles()`: Aplica estilos dinámicos a elementos específicos.

## Funcionalidades Implementadas
- Diseño responsivo adaptado a dispositivos móviles
- Barra de navegación con menú móvil y efecto de transparencia/opacidad según scroll
- Sección de héroe con información principal a pantalla completa
- Reproductor de video en modal con Video.js
- Sección de historias de éxito con testimonios animados
- Sección "Acerca de Nosotros" con especialidades y compromiso
- Sección de profesores con perfiles y especialidades
- Sección de cursos disponibles con tarjetas informativas
- Sección de contacto con mapa interactivo y datos de contacto
- Modal de planes de pago con opción para cambiar moneda (UYU/USD)
- Modal de inicio de sesión y registro de usuarios
- Modal para reservar una clase gratuita
- Footer completo con enlaces a secciones y modales de recursos legales
- Botón para volver al inicio de la página
- Modales de recursos (tutoriales con videos reproducibles, FAQ, soporte técnico)
- Modales de información legal (términos, privacidad, cookies, reembolsos) con diseño simplificado
- Efectos y animaciones CSS con luces y gradientes
- Eventos de teclado para mejorar la accesibilidad
- Tema oscuro violeta y negro unificado para toda la página
- Fondos con efectos sutiles de degradado violeta
- Cita inspiracional de una figura reconocida
- Menú de navegación móvil fijo en la parte inferior con iconos

## Tecnologías Utilizadas
- JavaScript (ES6+) modular
- TailwindCSS para estilos
- Video.js para reproducción de videos
- Sistema de módulos ES (ESM)

## Cómo Ejecutar
1. Clona el repositorio
2. Abre `index.html` en un servidor web local (por ejemplo, con Live Server de VS Code)
3. La aplicación se cargará automáticamente

## Desarrollo Futuro
Este proyecto está estructurado para facilitar la migración a React. Los componentes están organizados de manera modular siguiendo un patrón similar al de React para facilitar la transición.