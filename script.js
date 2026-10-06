/* ===================== DONNÉES DES PROJETS ===================== */
const projectsData = {
    portfolio: {
        icon: 'bi-globe2',
        title: 'Portfolio personnel',
        description: 'Création de mon propre site portfolio avec HTML, CSS et JavaScript. Un site one-page avec design responsive, mode sombre, accordéon de compétences et visionneuse de CV intégrée.',
        uses: [
            'HTML pour la structure sémantique',
            'CSS pour le design responsive et le mode sombre',
            'JavaScript pour les interactions (menu, accordéon, slider)',
            'Défilement fluide entre les sections'
        ],
        projects: 'Ce projet est le site que vous consultez actuellement. Il montre ce que je peux accomplir en HTML, CSS et JavaScript, sans framework ni bibliothèque externe.'
    },
    snake: {
        icon: 'bi-controller',
        title: 'Jeu Snake',
        description: 'Projet réalisé avec Python et la bibliothèque Pygame. Le joueur contrôle un serpent qui grandit en mangeant des fruits, tout en évitant de se mordre la queue ou de sortir du terrain.',
        uses: [
            'Python pour la logique du jeu',
            'Pygame pour l\'affichage graphique',
            'Gestion des événements clavier',
            'Boucle de jeu et détection de collisions'
        ],
        projects: 'Ce projet m\'a permis de mettre en pratique la programmation orientée objet, la gestion des événements et la logique de jeu. C\'est un excellent exercice que je recommande pour apprendre Python.'
    },
    'excel-python': {
        icon: 'bi-file-earmark-spreadsheet',
        title: 'Excel + Python',
        description: 'Projet d\'automatisation autour du traitement de données avec Python et Excel. L\'objectif : manipuler des fichiers Excel de manière automatisée grâce à des scripts Python.',
        uses: [
            'Python pour l\'automatisation',
            'Manipulation de fichiers Excel',
            'Traitement et analyse de données',
            'Scripts pour tâches répétitives'
        ],
        projects: 'Ce projet m\'a appris à automatiser des tâches répétitives sur Excel avec Python, ce qui est très utile pour gagner du temps dans le traitement de grandes quantités de données.'
    }
};

/* ===================== INITIALISATION ===================== */
document.addEventListener('DOMContentLoaded', () => {
    initMenuToggle();
    initThemeToggle();
    initHeroSlider();
    initCurrentYear();
    initSmoothScroll();
    initWhatsAppForm();
    initProjectModals();
    initScrollSpy();
    initBackToTop();
    initRevealOnScroll();
    initVisitCounter();
    initSkillAccordion();
});

/* ===================== MENU MOBILE ===================== */
function initMenuToggle() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', () => {
        const isActive = navMenu.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');

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
            menuToggle.setAttribute('aria-expanded', 'false');

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

/* ===================== SLIDER HERO AUTOMATIQUE ===================== */
function initHeroSlider() {
    const heroBackground = document.getElementById('hero-background');
    if (!heroBackground) return;

    const backgrounds = ['fond1.jpg', 'fond2.jpg', 'fond3.jpg'];
    let current = 0;

    heroBackground.style.backgroundImage = `url('${backgrounds[0]}')`;

    setInterval(() => {
        current = (current + 1) % backgrounds.length;
        heroBackground.style.opacity = '0';

        setTimeout(() => {
            heroBackground.style.backgroundImage = `url('${backgrounds[current]}')`;
            heroBackground.style.opacity = '1';
        }, 600);
    }, 6000);
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

        if (name === '' || name.length < 2) {
            alert('Veuillez entrer un nom valide (au moins 2 lettres).');
            nameInput.focus();
            return;
        }

        const phoneNumber = '243986707685';
        const message = `Bonjour Fabrice, je suis ${name}. J'ai une suggestion pour votre site :`;
        const encodedMessage = encodeURIComponent(message);
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

                const headerOffset = 70;
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

/* ===================== ACCORDÉON COMPÉTENCES ===================== */
function initSkillAccordion() {
    const headers = document.querySelectorAll('.skill-category-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const category = header.closest('.skill-category');
            const isOpen = category.classList.contains('open');

            document.querySelectorAll('.skill-category.open').forEach(cat => {
                cat.classList.remove('open');
                cat.querySelector('.skill-category-header').setAttribute('aria-expanded', 'false');
            });

            if (!isOpen) {
                category.classList.add('open');
                header.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

/* ===================== MODALES — PROJETS ===================== */
function initProjectModals() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectKey = card.getAttribute('data-project');
            const data = projectsData[projectKey];
            if (data) {
                openModal(data);
            }
        });

        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
}

/* ===================== MODALE GÉNÉRIQUE ===================== */
function openModal(data) {
    const overlay = document.getElementById('modal-overlay');
    if (!overlay) return;

    const modalIcon = document.getElementById('modal-icon');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalUsesTitle = document.getElementById('modal-uses-title');
    const modalUses = document.getElementById('modal-uses');
    const modalProjectsTitle = document.getElementById('modal-projects-title');
    const modalProjects = document.getElementById('modal-projects');

    modalIcon.innerHTML = `<i class="bi ${data.icon}"></i>`;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;

    modalUsesTitle.textContent = 'Technologies et compétences';
    modalUses.innerHTML = '';
    data.uses.forEach(use => {
        const li = document.createElement('li');
        li.textContent = use;
        modalUses.appendChild(li);
    });

    modalProjectsTitle.textContent = 'Ce que j\'ai appris';
    modalProjects.textContent = data.projects;

    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const closeBtn = document.getElementById('modal-close');
    if (closeBtn) {
        closeBtn.focus();
    }
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    if (!overlay) return;

    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('modal-overlay');
    const closeBtn = document.getElementById('modal-close');

    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeModal();
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

/* ===================== INDICATEUR SECTION ACTIVE ===================== */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    if (sections.length === 0 || navLinks.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === '#' + id) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, { rootMargin: '-70px 0px -70% 0px' });

    sections.forEach(section => observer.observe(section));
}

/* ===================== BOUTON RETOUR EN HAUT ===================== */
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ===================== ANIMATION REVEAL AU DÉFILEMENT ===================== */
function initRevealOnScroll() {
    const elements = document.querySelectorAll('.section-title, .about-content, .timeline-item, .cv-viewer, .cv-actions, .suggestion-box, .skill-category');
    if (elements.length === 0) return;

    elements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
}

/* ===================== COMPTEUR DE VISITES ===================== */
function initVisitCounter() {
    const visitSpan = document.getElementById('visit-count');
    if (!visitSpan) return;

    const STORAGE_KEY = 'fn-visit-count';
    let count = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);

    if (!sessionStorage.getItem('fn-session-counted')) {
        count += 1;
        localStorage.setItem(STORAGE_KEY, String(count));
        sessionStorage.setItem('fn-session-counted', '1');
    }

    visitSpan.textContent = count;
}
