document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       MENU MOBILE
    ========================================================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });

        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");
            });
        });
    }


    /* =========================================================
       CHANGEMENT DES 3 FONDS DU HERO
    ========================================================= */

    const backgroundButtons =
        document.querySelectorAll(".background-btn");

    const heroBackground =
        document.querySelector(".hero-background");

    if (backgroundButtons.length > 0 && heroBackground) {

        backgroundButtons.forEach(function (button) {

            button.addEventListener("click", function () {

                const background =
                    button.getAttribute("data-background");

                if (!background) {
                    return;
                }

                heroBackground.style.backgroundImage =
                    "linear-gradient(rgba(3, 13, 25, 0.75), rgba(3, 13, 25, 0.75)), url('images/" +
                    background +
                    "')";

                backgroundButtons.forEach(function (btn) {
                    btn.classList.remove("active");
                });

                button.classList.add("active");
            });

        });
    }


    // ================== MODE SOMBRE ==================
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Changer l'icône
        if (document.body.classList.contains("dark-mode")) {
            themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
        } else {
            themeToggle.innerHTML = '<i class="bi bi-moon"></i>';
        }
    });
}


    /* =========================================================
       ANIMATION AU DÉFILEMENT
    ========================================================= */

    const animatedElements =
        document.querySelectorAll(".section, .skill-card, .project-card");

    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },
        observerOptions
    );

    animatedElements.forEach(function (element) {
        observer.observe(element);
    });


    /* =========================================================
       INFORMATIONS DES COMPÉTENCES
    ========================================================= */

    const skillCards =
        document.querySelectorAll(".skill-card");

    skillCards.forEach(function (card) {

        card.addEventListener("click", function () {

            card.classList.toggle("active");

        });

    });


    /* =========================================================
       FORMULAIRE DE SUGGESTIONS
    ========================================================= */

    const suggestionForm =
        document.querySelector("#suggestion-form");

    if (suggestionForm) {

        suggestionForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                suggestionForm.querySelector("#name");

            const message =
                suggestionForm.querySelector("#message");

            if (!name || !message) {
                return;
            }

            if (
                name.value.trim() === "" ||
                message.value.trim() === ""
            ) {
                alert("Veuillez remplir tous les champs.");
                return;
            }

            alert(
                "Merci " +
                name.value.trim() +
                " ! Votre suggestion a bien été prise en compte."
            );

            suggestionForm.reset();

        });

    }


    /* =========================================================
       BOUTON RETOUR EN HAUT
    ========================================================= */

    const backToTop =
        document.querySelector("#back-to-top");

    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 400) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =========================================================
       ANNÉE AUTOMATIQUE DU FOOTER
    ========================================================= */

    const currentYear =
        document.querySelector("#current-year");

    if (currentYear) {
        currentYear.textContent =
            new Date().getFullYear();
    }


    /* =========================================================
       LIENS DE NAVIGATION AVEC DÉFILEMENT DOUX
    ========================================================= */

    const navigationLinks =
        document.querySelectorAll('a[href^="#"]');

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =========================================================
       CONSOLE DE VÉRIFICATION
    ========================================================= */

    console.log("Site Fabrice Nt wala : JavaScript chargé.");

    console.log(
        "Nombre de boutons de fond : " +
        backgroundButtons.length
    );

});