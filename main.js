// ==========================================
// Lógica JavaScript - Reparadora Express
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ DOM cargado - Reparadora Express');
    
    // 1. Menú móvil toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            const isOpen = mobileMenu.classList.contains('open');
            menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
            console.log('Menú:', isOpen ? 'abierto' : 'cerrado');
        });
    }
    
    // 2. Smooth scroll para navegación
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId !== '#' && targetId !== '') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    if (mobileMenu && mobileMenu.classList.contains('open')) {
                        mobileMenu.classList.remove('open');
                    }
                    console.log('Navegando a:', targetId);
                }
            }
        });
    });
    
    // 3. Formulario de contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();
            
            if (!nombre || !email || !mensaje) {
                alert('Por favor, completa todos los campos.');
                return;
            }
            if (!email.includes('@')) {
                alert('Por favor, ingresa un email válido.');
                return;
            }
            console.log('✅ Formulario enviado:', { nombre, email, mensaje });
            alert(`¡Gracias ${nombre}! Hemos recibido tu mensaje. Te contactaremos a ${email} pronto.`);
            contactForm.reset();
        });
    }
    
    // 4. Efecto header en scroll
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 50) {
                header.classList.add('shadow-lg');
            } else {
                header.classList.remove('shadow-lg');
            }
        });
    }
    
    console.log('%c🔧 Reparadora Express - Sitio Web', 'color: #8B4513; font-size: 16px; font-weight: bold;');
});

// ==========================================
// Ejercicios para Carlos (Práctica)
// ==========================================

const servicios = [
    { id: 1, nombre: 'Reparación de Calzado', icono: '👞', descripcion: 'Cambio de suelas, tacones, costuras.' },
    { id: 2, nombre: 'Artículos Ortopédicos', icono: '🦽', descripcion: 'Reparación de productos ortopédicos.' },
    { id: 3, nombre: 'Marroquinería', icono: '👜', descripcion: 'Arreglo de carteras y cinturones.' },
    { id: 4, nombre: 'Servicio Express', icono: '⚡', descripcion: 'Reparaciones en el día.' },
    { id: 5, nombre: 'Tintura', icono: '🎨', descripcion: 'Cambio de color y personalización.' },
    { id: 6, nombre: 'Recogida a Domicilio', icono: '📦', descripcion: 'Te recogemos en casa.' }
];

// TAREAS PARA PRACTICAR:
// 1. Agregar botón "Volver arriba" que aparezca al hacer scroll
// 2. Animar los números de estadísticas (+20, +5000, 100%)
// 3. Validación de formulario más robusta (regex email, largo mínimo)
