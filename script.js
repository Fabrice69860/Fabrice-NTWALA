/* ===================== INITIALISATION ===================== */
document.addEventListener('DOMContentLoaded', () => {
    initMenuToggle();
    initThemeToggle();
    initBackgroundSwitcher();
    initCurrentYear();
    initSuggestionForm();
    initSmoothScroll();
});

/* ===================== MENU MOBILE ===================== */
function initMenuToggle() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        const icon = menuToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('bi-list');
            icon.classList.toggle('bi-x');
        }
    });

    // Fermer le menu au clic sur un lien
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');

            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.add('bi-list');
                icon.classList.remove('bi-x');
            }
        });
    });
}

/* ===================== THÈME SOMBRE / CLAIR ===================== */
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (!themeToggle) return;

    // Charger le thème sauvegardé
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        updateThemeIcon(true);
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');

        const isDark = body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        updateThemeIcon(isDark);
    });
}

function updateThemeIcon(isDark) {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const icon = themeToggle.querySelector('i');
    if (!icon) return;

    if (isDark) {
        icon.classList.remove('bi-moon');
        icon.classList.add('bi-sun');
    } else {
        icon.classList.remove('bi-sun');
        icon.classList.add('bi-moon');
    }
}

/* ===================== ARRIÈRE-PLANS DYNAMIQUES ===================== */
function initBackgroundSwitcher() {
    const heroBackground = document.getElementById('hero-background');
    const backgroundBtns = document.querySelectorAll('.background-btn');

    if (!heroBackground || backgroundBtns.length === 0) return;

    // Fond par défaut
    heroBackground.style.backgroundImage = "url('images/fond1.jpg')";

    backgroundBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const background = btn.getAttribute('data-background');

            // Retirer la classe active de tous les boutons
            backgroundBtns.forEach(b => b.classList.remove('active'));

            // Ajouter la classe active au bouton cliqué
            btn.classList.add('active');

            // Changer l'arrière-plan
            heroBackground.style.backgroundImage = `url('images/${background}')`;
        });
    });
}

/* ===================== ANNÉE COURANTE ===================== */
function initCurrentYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

/* ===================== FORMULAIRE DE SUGGESTIONS ===================== */
function initSuggestionForm() {
    const form = document.getElementById('suggestion-form');
    const formMessage = document.getElementById('form-message');

    if (!form || !formMessage) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('name');
        const messageInput = document.getElementById('message');

        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        // Validation
        if (name === '' || message === '') {
            formMessage.textContent = 'Veuillez remplir tous les champs.';
            formMessage.className = 'form-message error';
            return;
        }

        // Simulation d'envoi
        formMessage.textContent = 'Merci pour votre message ! Il a bien été envoyé.';
        formMessage.className = 'form-message success';

        // Réinitialiser le formulaire
        form.reset();

        // Effacer le message après 5 secondes
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = 'form-message';
        }, 5000);
    });
}

/* ===================== DÉFILEMENT FLUIDE ===================== */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}