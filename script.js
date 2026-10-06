/* ===================== DONNÉES DES PROJETS ===================== */
const projectsData = {
    portfolio: {
        icon: 'bi-globe2',
        title: 'Portfolio personnel',
        description: 'Création de mon propre site portfolio avec HTML, CSS et JavaScript. Un site one-page avec design responsive, mode sombre, accordéon de compétences et jeu Snake jouable.',
        uses: [
            'HTML pour la structure sémantique',
            'CSS pour le design responsive et le mode sombre',
            'JavaScript pour les interactions (menu, accordéon, jeu)',
            'Défilement fluide entre les sections'
        ],
        projects: 'Ce projet est le site que vous consultez actuellement. Il montre ce que je peux accomplir en HTML, CSS et JavaScript, sans framework ni bibliothèque externe.'
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
    initSnakeGame();
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

            if (projectKey === 'snake') {
                const snakeSection = document.getElementById('snake');
                if (snakeSection) {
                    const headerOffset = 70;
                    const elementPosition = snakeSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
                return;
            }

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
    const elements = document.querySelectorAll('.section-title, .about-content, .timeline-item, .suggestion-box, .skill-category, .snake-game');
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

/* ===================== JEU SNAKE ===================== */
function initSnakeGame() {
    const canvas = document.getElementById('snake-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const gridSize = 20;
    const tileCount = canvas.width / gridSize;

    const scoreEl = document.getElementById('snake-score');
    const bestEl = document.getElementById('snake-best');
    const overlay = document.getElementById('snake-overlay');
    const overlayTitle = document.getElementById('snake-overlay-title');
    const overlayText = document.getElementById('snake-overlay-text');
    const startBtn = document.getElementById('snake-start-btn');
    const startText = document.getElementById('snake-start-text');

    let snake = [];
    let dx = 0;
    let dy = 0;
    let food = { x: 0, y: 0 };
    let score = 0;
    let bestScore = parseInt(localStorage.getItem('fn-snake-best') || '0', 10);
    let gameLoop = null;
    let isRunning = false;
    let isPaused = false;
    let speed = 120;

    bestEl.textContent = bestScore;

    function resetGame() {
        snake = [
            { x: 8, y: 8 },
            { x: 7, y: 8 },
            { x: 6, y: 8 }
        ];
        dx = 1;
        dy = 0;
        score = 0;
        speed = 120;
        scoreEl.textContent = score;
        placeFood();
    }

    function placeFood() {
        let valid = false;
        while (!valid) {
            food.x = Math.floor(Math.random() * tileCount);
            food.y = Math.floor(Math.random() * tileCount);
            valid = !snake.some(seg => seg.x === food.x && seg.y === food.y);
        }
    }

    function draw() {
        ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--bg-alt').trim() || '#f8fafc';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const isDark = document.body.classList.contains('dark-theme');

        ctx.fillStyle = isDark ? '#ef4444' : '#dc2626';
        ctx.beginPath();
        ctx.arc(food.x * gridSize + gridSize / 2, food.y * gridSize + gridSize / 2, gridSize / 2 - 2, 0, Math.PI * 2);
        ctx.fill();

        snake.forEach((seg, i) => {
            if (i === 0) {
                ctx.fillStyle = isDark ? '#3b82f6' : '#2563eb';
            } else {
                const shade = isDark ? '#2563eb' : '#3b82f6';
                ctx.fillStyle = shade;
            }
            const pad = i === 0 ? 1 : 2;
            ctx.fillRect(seg.x * gridSize + pad, seg.y * gridSize + pad, gridSize - pad * 2, gridSize - pad * 2);
        });
    }

    function update() {
        if (isPaused) return;

        const head = { x: snake[0].x + dx, y: snake[0].y + dy };

        if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
            gameOver();
            return;
        }

        if (snake.some(seg => seg.x === head.x && seg.y === head.y)) {
            gameOver();
            return;
        }

        snake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            score++;
            scoreEl.textContent = score;
            placeFood();
            if (speed > 70) speed -= 3;
            clearInterval(gameLoop);
            gameLoop = setInterval(tick, speed);
        } else {
            snake.pop();
        }
    }

    function tick() {
        update();
        draw();
    }

    function startGame() {
        resetGame();
        isRunning = true;
        isPaused = false;
        overlay.classList.add('hidden');
        clearInterval(gameLoop);
        gameLoop = setInterval(tick, speed);
        draw();
    }

    function gameOver() {
        clearInterval(gameLoop);
        isRunning = false;
        isPaused = false;

        if (score > bestScore) {
            bestScore = score;
            localStorage.setItem('fn-snake-best', String(bestScore));
            bestEl.textContent = bestScore;
        }

        overlayTitle.textContent = 'Game Over !';
        overlayText.textContent = `Score : ${score} · Record : ${bestScore}`;
        startText.textContent = 'Rejouer';
        overlay.classList.remove('hidden');
    }

    function togglePause() {
        if (!isRunning) return;
        isPaused = !isPaused;
        if (isPaused) {
            overlayTitle.textContent = 'Pause';
            overlayText.textContent = 'Appuyez sur Espace pour reprendre.';
            startText.textContent = 'Reprendre';
            overlay.classList.remove('hidden');
        } else {
            overlay.classList.add('hidden');
        }
    }

    function setDirection(dir) {
        if (!isRunning || isPaused) return;
        switch (dir) {
            case 'up':
                if (dy !== 1) { dx = 0; dy = -1; }
                break;
            case 'down':
                if (dy !== -1) { dx = 0; dy = 1; }
                break;
            case 'left':
                if (dx !== 1) { dx = -1; dy = 0; }
                break;
            case 'right':
                if (dx !== -1) { dx = 1; dy = 0; }
                break;
        }
    }

    document.addEventListener('keydown', (e) => {
        const snakeSection = document.getElementById('snake');
        if (!snakeSection) return;
        const rect = snakeSection.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (!inView) return;

        switch (e.key) {
            case 'ArrowUp': case 'z': case 'Z':
                e.preventDefault(); setDirection('up'); break;
            case 'ArrowDown': case 's': case 'S':
                e.preventDefault(); setDirection('down'); break;
            case 'ArrowLeft': case 'q': case 'Q':
                e.preventDefault(); setDirection('left'); break;
            case 'ArrowRight': case 'd': case 'D':
                e.preventDefault(); setDirection('right'); break;
            case ' ':
                e.preventDefault();
                if (isRunning) {
                    togglePause();
                } else {
                    startGame();
                }
                break;
        }
    });

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            if (isPaused) {
                isPaused = false;
                overlay.classList.add('hidden');
            } else {
                startGame();
            }
        });
    }

    document.querySelectorAll('.snake-dir-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const dir = btn.getAttribute('data-dir');
            if (dir) setDirection(dir);
        });
    });

    draw();
}

