// ========================================
// MENÚ MOBILE
// ========================================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Cerrar el menú al seleccionar una sección

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ========================================
// FILTROS DE OBRA
// ========================================

const filters = document.querySelectorAll(".filter");
const artworks = document.querySelectorAll(".artwork");


filters.forEach(filter => {

    filter.addEventListener("click", () => {

        // Cambiar botón activo

        filters.forEach(button => {
            button.classList.remove("active");
        });

        filter.classList.add("active");


        // Obtener categoría seleccionada

        const category = filter.dataset.filter;


        // Mostrar / ocultar obras

        artworks.forEach(artwork => {

            const artworkCategory = artwork.dataset.category;

            if (category === "all" || artworkCategory === category) {

                artwork.style.display = "";

            } else {

                artwork.style.display = "none";

            }

        });

    });

});