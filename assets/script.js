

/**
 * Lógica del Catálogo de Hongos
 */

const carousel = document.getElementById('fungiCarousel');
let lastScrollTop = 0;

// 1. Ocultar el carrusel al hacer clic (excepto en los botones de navegación)
carousel.addEventListener('click', (e) => {
    // Usamos .closest para verificar si el clic NO fue en los botones de flechas
    const isNavBtn = e.target.closest('.carousel-control-prev') || e.target.closest('.carousel-control-next');
    
    if (!isNavBtn) {
        // En lugar de removerlo del DOM, usamos opacidad para que sea elegante
        carousel.style.opacity = '0';
        setTimeout(() => {
            carousel.classList.add('d-none');
        }, 500); // Espera a que termine la transición
    }
});

// 2. Mostrar el carrusel al hacer scroll hacia arriba
window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Si el usuario sube el scroll (y no está en el tope de la página)
    if (currentScroll < lastScrollTop) {
        if (carousel.classList.contains('d-none')) {
            carousel.classList.remove('d-none');
            // Un pequeño timeout para que la transición de opacidad funcione
            setTimeout(() => {
                carousel.style.opacity = '1';
            }, 10);
        }
    }

    // Actualizamos la posición para la siguiente comparación
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, { passive: true });