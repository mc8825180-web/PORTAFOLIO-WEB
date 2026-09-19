// ================================
// MENÚ MOBILE
// ================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Cerrar menú al hacer click en un enlace

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ================================
// ANIMACIONES AL HACER SCROLL
// ================================

const elements = document.querySelectorAll(
    ".timeline-item, .skill-card, .project-card, .education-card, .stat-card"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.12
    }
);


elements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});


// ================================
// AÑO AUTOMÁTICO DEL FOOTER
// ================================

const yearElement = document.querySelector(".footer-bottom");

if (yearElement) {

    yearElement.innerHTML =
        © ${new Date().getFullYear()} Agustina Chacón. Todos los derechos reservados.;

}
