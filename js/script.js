// Esperar a que el documento cargue completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // Animación suave de aparición al hacer Scroll
    const elementosAnimados = document.querySelectorAll('.service-card, .gallery-item, .contact-container');

    const mostrarElementos = () => {
        const disparadorEfecto = window.innerHeight * 0.85;

        elementosAnimados.forEach(elemento => {
            const distanciaElemento = elemento.getBoundingClientRect().top;

            if (distanciaElemento < disparadorEfecto) {
                elemento.style.opacity = '1';
                elemento.style.transform = 'translateY(0)';
            }
        });
    };

    // Configurar estado inicial para la animación mediante JS sutil
    elementosAnimados.forEach(elemento => {
        elemento.style.opacity = '0';
        elemento.style.transform = 'translateY(30px)';
        elemento.style.transition = 'all 0.6s ease-out';
    });

    // Escuchar el evento de scroll en el navegador
    window.addEventListener('scroll', mostrarElementos);
    
    // Ejecutar una vez al cargar por si hay elementos ya visibles
    mostrarElementos();
});