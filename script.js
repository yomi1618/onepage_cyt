document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.main-header');
    
    // Creamos un punto de referencia justo debajo del header
    const sentinel = document.createElement('div');
    header.parentNode.insertBefore(sentinel, header.nextSibling);

    const observer = new IntersectionObserver(([entry]) => {
        // Cuando el header sale de la pantalla, activamos la clase sticky
        if (!entry.isIntersecting) {
            header.classList.add('is-sticky');
        } else {
            header.classList.remove('is-sticky');
        }
    }, { threshold: 0 });

    observer.observe(sentinel);
});
