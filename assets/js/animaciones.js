document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".secciones"); // Todas las secciones con ID
    const navLinks = document.querySelectorAll(".item"); // Todos los enlaces en el nav

    // Configuración del Intersection Observer
    const observerOptions = {
        root: null, // Usa la ventana del navegador como viewport
        threshold: 0.5, // El 50% de la sección visible activa el enlace
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Remover clase 'active' de todos los enlaces
                navLinks.forEach((link) => link.classList.remove("active"));

                // Añadir clase 'active' al enlace correspondiente
                const activeLink = document.querySelector(
                    `a[href="#${entry.target.id}"]`
                );
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    }, observerOptions);

    // Observar cada sección
    sections.forEach((section) => observer.observe(section));
});