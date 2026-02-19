const track = document.getElementById('track');
const carousel = document.querySelector('.slider-wrapper');

let lastScrollTop = 0;

function move(direction) {
    const items = document.querySelectorAll('.carousel-item');

    if (direction === 1) {
        track.appendChild(items[0]);
    } else {
        track.prepend(items[items.length - 1]);
    }
}

carousel.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-btn')) return;
    carousel.classList.add('hidden');
});

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll < lastScrollTop) {
        carousel.classList.remove('hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
