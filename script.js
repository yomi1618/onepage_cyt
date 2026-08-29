document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.main-header');
    
    // Creamos el punto de referencia justo debajo del header
    const sentinel = document.createElement('div');
    header.parentNode.insertBefore(sentinel, header.nextSibling);

    const observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) {
            // El usuario bajó: Entra el header azul
            header.classList.remove('is-exiting');
            header.classList.add('is-sticky');
        } else {
            // El usuario regresó arriba: Iniciamos animación de salida
            if (header.classList.contains('is-sticky')) {
                header.classList.add('is-exiting');
                
                // Esperamos los 400ms que dura la animación en CSS antes de quitar el header azul
                setTimeout(() => {
                    header.classList.remove('is-sticky', 'is-exiting');
                }, 400); 
            }
        }
    }, { threshold: 0 });

    observer.observe(sentinel);
});
