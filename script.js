/* ===================== INITIALISATION ===================== */
document.addEventListener('DOMContentLoaded', () => {
    initMenuToggle();
    initThemeToggle();
    initBackgroundSwitcher();
    initCurrentYear();
    initSmoothScroll();
    initWhatsAppForm();
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
    heroBackground.style.backgroundImage = "url('fond1.jpg')";

    backgroundBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const background = btn.getAttribute('data-background');

            backgroundBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            heroBackground.style.backgroundImage = `url('${background}')`;
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

/* ===================== FORMULAIRE WHATSAPP ===================== */
function initWhatsAppForm() {
    const form = document.getElementById('whatsapp-form');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('visitor-name');
        const name = nameInput.value.trim();

        // Validation : au moins 2 caractères
        if (name === '' || name.length < 2) {
            alert('Veuillez entrer un nom valide (au moins 2 lettres).');
            nameInput.focus();
            return;
        }

        // ⚠️ Remplace ce numéro par le tien si besoin
        // Format international : indicatif pays + numéro, SANS + ni espaces
        const phoneNumber = '243986707685';

        // Message personnalisé avec le nom du visiteur
        const message = `Bonjour Fabrice, je suis ${name}. J'ai une suggestion pour votre site :`;

        // Encoder le message pour l'URL
        const encodedMessage = encodeURIComponent(message);

        // Ouvrir WhatsApp (appli mobile ou WhatsApp Web)
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');
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