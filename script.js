/* ===================== DONNÉES DES COMPÉTENCES ===================== */
const skillsData = {
    html: {
        icon: 'bi-filetype-html',
        title: 'HTML',
        description: 'HTML (HyperText Markup Language) est le langage de base qui permet de structurer le contenu d\'une page web : textes, images, liens, titres, paragraphes et sections.',
        uses: [
            'Structurer le contenu d\'une page web',
            'Créer des liens entre les pages',
            'Intégrer des images, vidéos et autres médias',
            'Organiser l\'information avec des balises sémantiques'
        ],
        projects: 'Avec HTML, je peux créer la structure complète d\'un site web : pages d\'accueil, formulaires de contact, menus de navigation et tableaux d\'information.'
    },
    css: {
        icon: 'bi-filetype-css',
        title: 'CSS',
        description: 'CSS (Cascading Style Sheets) est le langage qui contrôle l\'apparence et la mise en page d\'une page web : couleurs, polices, espacements, animations et design responsive.',
        uses: [
            'Mettre en forme le contenu (couleurs, polices, tailles)',
            'Créer des mises en page responsives (mobile, tablette, ordinateur)',
            'Ajouter des animations et transitions fluides',
            'Adapter le design entre le mode clair et sombre'
        ],
        projects: 'Avec CSS, je peux rendre un site web visuellement attrayant, professionnel et parfaitement adapté à tous les écrans, du téléphone à l\'ordinateur.'
    },
    javascript: {
        icon: 'bi-filetype-js',
        title: 'JavaScript',
        description: 'JavaScript est le langage de programmation qui rend les pages web interactives : il permet de réagir aux actions de l\'utilisateur (clics, saisies, scroll) et d\'animer le contenu.',
        uses: [
            'Rendre les pages web interactives (menus, modales, boutons)',
            'Valider des formulaires avant l\'envoi',
            'Modifier le contenu de la page en temps réel',
            'Communiquer avec des services externes (APIs)'
        ],
        projects: 'Avec JavaScript, je peux créer des fonctionnalités comme des galeries interactives, des compteurs, des jeux simples, des formulaires intelligents et des animations dynamiques.'
    },
    python: {
        icon: 'bi-code-square',
        title: 'Python',
        description: 'Python est un langage de programmation polyvalent, lisible et puissant. Il est largement utilisé pour l\'automatisation, le traitement de données, le développement web et l\'apprentissage de la programmation.',
        uses: [
            'Automatiser des tâches répétitives',
            'Traiter et analyser des données',
            'Créer des petits jeux et projets d\'apprentissage',
            'Développer des scripts utilitaires'
        ],
        projects: 'Avec Python, j\'ai réalisé un jeu Snake avec Pygame et un projet d\'automatisation avec Excel. Je continue à approfondir mes compétences dans ce langage.'
    },
    reseaux: {
        icon: 'bi-diagram-3',
        title: 'Réseaux informatiques',
        description: 'Les réseaux informatiques permettent de connecter des ordinateurs et des équipements entre eux pour partager des données et des ressources. J\'ai suivi des formations Cisco CCNA 1 & 2.',
        uses: [
            'Configurer des réseaux locaux (LAN)',
            'Comprendre les protocoles de communication (TCP/IP, DNS, DHCP)',
            'Diagnostiquer et résoudre des problèmes réseau',
            'Sécuriser les accès et les communications'
        ],
        projects: 'Avec mes connaissances en réseaux, je peux configurer des petits réseaux locaux, diagnostiquer des pannes de connexion et assurer la maintenance des équipements réseau.'
    },
    'bases-donnees': {
        icon: 'bi-database',
        title: 'Bases de données',
        description: 'Une base de données est un système qui permet de stocker, organiser et retrouver des informations de manière efficace. C\'est un élément essentiel de la plupart des applications et sites web.',
        uses: [
            'Modéliser et organiser des données',
            'Stocker des informations de manière structurée',
            'Assurer l\'intégrité et la cohérence des données',
            'Faciliter la recherche et la gestion des informations'
        ],
        projects: 'Avec les bases de données, je peux concevoir la structure de données nécessaire à un site web ou une application : comptes utilisateurs, catalogues, inventaires et historiques.'
    },
    sql: {
        icon: 'bi-server',
        title: 'SQL',
        description: 'SQL (Structured Query Language) est le langage standard pour communiquer avec les bases de données. Il permet de créer, lire, modifier et supprimer des données.',
        uses: [
            'Interroger une base de données (SELECT, WHERE, JOIN)',
            'Insérer, modifier et supprimer des enregistrements',
            'Créer des tables et définir des relations',
            'Filtrer et trier les résultats de recherche'
        ],
        projects: 'Avec SQL, je peux écrire des requêtes pour extraire des informations précises d\'une base de données, créer des rapports et gérer efficacement les données d\'une application.'
    },
    mysql: {
        icon: 'bi-hdd-network',
        title: 'MySQL',
        description: 'MySQL est l\'un des systèmes de gestion de bases de données les plus utilisés au monde. Il est gratuit, fiable et particulièrement adapté aux applications web.',
        uses: [
            'Créer et administrer des bases de données',
            'Gérer les utilisateurs et les permissions',
            'Optimiser les performances des requêtes',
            'Sauvegarder et restaurer des données'
        ],
        projects: 'Avec MySQL, je peux mettre en place une base de données complète pour un site web ou une application : créer les tables, définir les relations et gérer les données au quotidien.'
    }
};

/* ===================== DONNÉES DES SERVICES ===================== */
const servicesData = {
    web: {
        icon: 'bi-globe2',
        title: 'Création de sites web',
        description: 'Je crée des sites web modernes, responsives et interactifs adaptés à vos besoins. Que ce soit un portfolio, un site vitrine ou une page de présentation, je conçois un site rapide, élégant et fonctionnel.',
        uses: [
            'Sites vitrines et portfolios',
            'Pages responsive (mobile, tablette, ordinateur)',
            'Design moderne et animations légères',
            'Optimisation pour GitHub Pages ou hébergement classique'
        ],
        projects: 'Je peux créer un site web complet avec HTML, CSS et JavaScript, incluant un menu de navigation, des sections interactives, un formulaire de contact et un design adapté à tous les écrans.'
    },
    mobile: {
        icon: 'bi-phone',
        title: 'Applications mobiles',
        description: 'Je propose la création d\'applications mobiles simples et fonctionnelles pour répondre à des besoins précis. Je m\'appuie sur mes compétences en programmation pour développer des applications utilitaires.',
        uses: [
            'Applications simples et utilitaires',
            'Interface claire et facile à utiliser',
            'Fonctionnalités adaptées au besoin',
            'Développement en apprentissage continu'
        ],
        projects: 'Je peux créer des applications mobiles simples avec des fonctionnalités de base : calculatrices, listes de tâches, outils de conversion ou applications de consultation.'
    },
    bdd: {
        icon: 'bi-database',
        title: 'Bases de données',
        description: 'Je propose la conception et la gestion de bases de données pour organiser et stocker vos informations efficacement. De la création de la structure à l\'écriture des requêtes, j\'accompagne la mise en place de votre système de données.',
        uses: [
            'Conception de la structure de données',
            'Création de tables et de relations',
            'Écriture de requêtes SQL',
            'Administration avec MySQL'
        ],
        projects: 'Je peux concevoir une base de données complète : modéliser les données, créer les tables sous MySQL, écrire les requêtes nécessaires et assurer le bon fonctionnement du système.'
    },
    reseaux: {
        icon: 'bi-router',
        title: 'Réseaux locaux & maintenance',
        description: 'Je propose la configuration et la maintenance de réseaux locaux (LAN). Fort de mes formations Cisco CCNA 1 & 2 et IT Essentials, je peux intervenir sur la configuration des équipements et le dépannage réseau.',
        uses: [
            'Configuration de réseaux locaux (LAN)',
            'Paramétrage de routeurs et switchs',
            'Diagnostic et résolution de problèmes réseau',
            'Maintenance préventive des équipements'
        ],
        projects: 'Je peux installer et configurer un petit réseau local, diagnostiquer des pannes de connectivité, et assurer la maintenance des équipements informatiques d\'un bureau ou d\'un petit local.'
    },
    assistance: {
        icon: 'bi-life-preserver',
        title: 'Assistance & solutions informatiques',
        description: 'Je propose un service d\'assistance et de dépannage informatique pour résoudre les problèmes techniques du quotidien : logiciels, matériel, connectivité et usage des outils informatiques.',
        uses: [
            'Dépannage matériel et logiciel',
            'Installation et configuration de logiciels',
            'Aide à l\'utilisation des outils informatiques',
            'Solutions adaptées aux besoins de l\'utilisateur'
        ],
        projects: 'Je peux intervenir pour diagnostiquer et résoudre un problème informatique, installer un environnement de travail, ou accompagner une personne dans l\'utilisation de son matériel et de ses logiciels.'
    }
};

/* ===================== DONNÉES DES PROJETS ===================== */
const projectsData = {
    portfolio: {
        icon: 'bi-globe2',
        title: 'Portfolio personnel',
        description: 'Création de mon propre site portfolio avec HTML, CSS et JavaScript. Le site présente mon profil, mes compétences, mes services, mes projets et mes coordonnées de contact.',
        uses: [
            'HTML pour la structure',
            'CSS pour le design et le responsive',
            'JavaScript pour les interactions (menu, modales, thème)',
            'Mode sombre et clair',
            'Changement d\'arrière-plan dynamique'
        ],
        projects: 'Ce projet est le site que vous consultez actuellement. Il inclut un menu responsive, des modales interactives pour les compétences et services, une visionneuse de CV et un formulaire de contact via WhatsApp.',
        link: null
    },
    snake: {
        icon: 'bi-controller',
        title: 'Jeu Snake',
        description: 'Projet d\'apprentissage réalisé avec Python et la bibliothèque Pygame. C\'est un jeu classique où l\'on contrôle un serpent qui grandit en mangeant des fruits, tout en évitant de se mordre la queue ou de sortir du terrain.',
        uses: [
            'Python pour la logique du jeu',
            'Pygame pour l\'affichage graphique',
            'Gestion des événements clavier',
            'Boucle de jeu et détection de collisions'
        ],
        projects: 'Ce projet m\'a permis de mettre en pratique la programmation orientée objet, la gestion des événements et la logique de jeu. C\'est un excellent exercice d\'apprentissage en Python.',
        link: null
    },
    'excel-python': {
        icon: 'bi-file-earmark-spreadsheet',
        title: 'Excel + Python',
        description: 'Projet d\'apprentissage autour de l\'automatisation et du traitement de données avec Python et Excel. L\'objectif est de manipuler des fichiers Excel de manière automatisée grâce à des scripts Python.',
        uses: [
            'Python pour l\'automatisation',
            'Manipulation de fichiers Excel',
            'Traitement et analyse de données',
            'Scripts pour tâches répétitives'
        ],
        projects: 'Ce projet m\'a permis d\'apprendre à automatiser des tâches répétitives sur Excel avec Python, ce qui est très utile pour gagner du temps dans le traitement de grandes quantités de données.',
        link: null
    }
};

/* ===================== INITIALISATION ===================== */
document.addEventListener('DOMContentLoaded', () => {
    initMenuToggle();
    initThemeToggle();
    initBackgroundSwitcher();
    initCurrentYear();
    initSmoothScroll();
    initWhatsAppForm();
    initSkillModals();
    initServiceModals();
    initProjectModals();
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

/* ===================== ARRIÈRE-PLANS DYNAMIQUES ===================== */
function initBackgroundSwitcher() {
    const heroBackground = document.getElementById('hero-background');
    const backgroundBtns = document.querySelectorAll('.background-btn');

    if (!heroBackground || backgroundBtns.length === 0) return;

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

/* ===================== MODALES — COMPÉTENCES ===================== */
function initSkillModals() {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            const skillKey = card.getAttribute('data-skill');
            const data = skillsData[skillKey];
            if (data) {
                openModal(data);
            }
        });
    });
}

/* ===================== MODALES — SERVICES ===================== */
function initServiceModals() {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceKey = card.getAttribute('data-service');
            const data = servicesData[serviceKey];
            if (data) {
                openModal(data);
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

    modalUsesTitle.textContent = 'Utilisations principales';
    modalUses.innerHTML = '';
    data.uses.forEach(use => {
        const li = document.createElement('li');
        li.textContent = use;
        modalUses.appendChild(li);
    });

    modalProjectsTitle.textContent = 'Ce que je peux réaliser';
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
