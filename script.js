// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

const translationDictionary = {
    'Accueil': 'Home',
    'À propos': 'About',
    'Projets': 'Projects',
    'Engagement': 'Engagement',
    'Compétences': 'Skills',
    'Contact': 'Contact',
    'Découvrir mes réalisations': 'Discover my work',
    'Entrer en contact': 'Get in touch',
    'Ce que je fais': 'What I do',
    'Développement Logiciel': 'Software Development',
    'Réalisation de sites et d’applications web simples, structurés et adaptés aux besoins utilisateurs.': 'Building simple, structured websites and applications tailored to user needs.',
    'Web': 'Web',
    'PHP/MySQL': 'PHP/MySQL',
    'JavaScript': 'JavaScript',
    'Intelligence Artificielle': 'Artificial Intelligence',
    'Découverte et utilisation d’outils IA pour créer des chatbots, automatiser certaines tâches et enrichir des projets web.': 'Exploring and using AI tools to create chatbots, automate tasks, and enrich web projects.',
    'IA appliquée': 'Applied AI',
    'Intégration de Chatbots': 'Chatbot Integration',
    'Systèmes & Réseaux': 'Systems & Networks',
    'Mise en place, configuration et maintenance d’outils IT, systèmes Linux, réseaux et solutions de gestion de parc.': 'Deploying, configuring, and maintaining IT tools, Linux systems, networks, and infrastructure management solutions.',
    'Objectifs professionnels': 'Professional Goals',
    'Formation & Innovation': 'Training & Innovation',
    'Renforcer mes compétences en développement logiciel, intelligence artificielle et systèmes d’information tout au long de mon cycle d’ingénieur.': 'Strengthen my skills in software development, artificial intelligence, and information systems throughout my engineering program.',
    'En cours': 'In progress',
    'Expérience terrain': 'Field Experience',
    'Acquérir de l’expérience en entreprise sur des projets concrets : développement web, support IT, réseaux et bases de données.': 'Gain corporate experience on real projects: web development, IT support, networks, and databases.',
    'En progression': 'Advancing',
    'Entrepreneuriat Tech': 'Tech Entrepreneurship',
    'Développer à terme des solutions numériques utiles aux PME, à l’agriculture et aux organisations locales.': 'Eventually build useful digital solutions for SMEs, agriculture, and local organizations.',
    'En développement': 'In development',
    'Centres d’intérêt techniques': 'Technical Interests',
    'Cybersécurité': 'Cybersecurity',
    'Bases de données': 'Databases',
    'Leadership associatif': 'Associative Leadership',
    'Mes projets': 'My projects',
    'Terminé': 'Completed',
    'Voir le site': 'View site',
    'Code source': 'Source code',
    'Contexte': 'Context',
    'Projet de gestion intelligente de flotte avec chatbot, conçu pour faciliter le suivi et l’organisation des informations de transport.': 'Intelligent fleet management project with chatbot, designed to simplify tracking and organizing transport information.',
    'Solution Technique': 'Technical Solution',
    'Bases de données microservices avec FastAPI front-end, Python back-end, base MySQL et intégration ML pour recommandations.': 'Microservices database with FastAPI front-end, Python back-end, MySQL database, and ML integration for recommendations.',
    'Stack Technique': 'Tech Stack',
    'Résultats': 'Results',
    'Projet en développement permettant de pratiquer les API REST, la logique backend et la gestion de données.': 'Project in development to practice REST APIs, backend logic, and data management.',
    'Aperçu': 'Preview',
    'Plateforme de suivi de tension artérielle': 'Blood Pressure Monitoring Platform',
    'Stage ATECH': 'ATECH Internship',
    'Documentation': 'Documentation',
    'Projet réalisé dans le cadre de mon stage chez ATECH-CYBERSÉCURITÉ pour le suivi de la pression artérielle avec géolocalisation.': 'Project delivered during my internship at ATECH-CYBERSÉCURITÉ for blood pressure monitoring with geolocation.',
    'Bases de données Technique': 'Technical Database',
    'Développement d’une plateforme web en HTML, PHP et MySQL pour recevoir, analyser et visualiser les données collectées.': 'Development of a web platform in HTML, PHP and MySQL to receive, analyze, and visualize collected data.',
    'Technologies': 'Technologies',
    'Performance': 'Performance',
    'Projet combinant développement web, base de données, composants IoT et visualisation de données en temps réel.': 'Project combining web development, database, IoT components, and real-time data visualization.',
    'Gestion CAN': 'CAN Management',
    'Projet académique': 'Academic Project',
    'Démo en ligne': 'Online demo',
    'Objectif Métier': 'Business Objective',
    'Application web académique pour organiser les données liées à une compétition CAN : équipes, joueurs, stades, matchs et poules.': 'Academic web application to organize CAN competition data: teams, players, stadiums, matches, and groups.',
    'Implémentation': 'Implementation',
    'Système hybride de filtrage collaboratif et content-based avec traitement Chatbots et modèles deep learning.': 'Hybrid collaborative filtering and content-based system with chatbot processing and deep learning models.',
    'Métriques de Succès': 'Success Metrics',
    'Projet utile pour renforcer la logique métier, la conception de base de données et le développement web dynamique.': 'Useful project to strengthen business logic, database design, and dynamic web development.',
    'Projets en cours': 'Projects in progress',
    'Plateforme Linux PHP/MySQL': 'Linux PHP/MySQL Platform',
    'Bases de données distribuée avec conteneurisation Géolocalisation et pipelines CI/CD pour déploiement continu.': 'Distributed database with containerization, geolocation, and CI/CD pipelines for continuous deployment.',
    'En amélioration': 'Improving',
    'Moteur de Traitement Chatbots': 'Chatbot Processing Engine',
    'Développement progressif du projet avec FastAPI, MySQL et chatbot pour consolider mes bases en backend et API REST.': 'Progressive development of the project with FastAPI, MySQL, and chatbot to reinforce backend and REST API foundations.',
    'Expériences & Engagements': 'Experience & Engagements',
    'Expérience terrain': 'On-site experience',
    'Stagiaire en informatique': 'IT Intern',
    'Système IoT de suivi de tension artérielle': 'IoT system for blood pressure monitoring',
    'Migration vers le cloud et JavaScript': 'Migration to cloud and JavaScript',
    'Maintenance informatique, réseaux et terrain': 'IT maintenance, networks, and field work',
    'mois de stage': 'months of internship',
    'Recueil des besoins IT et cahiers de charge': 'Gathering IT requirements and specifications',
    'Installation et configuration GLPI': 'Installing and configuring GLPI',
    'Liaison LDAP, SSO et serveur Linux local': 'LDAP, SSO, and local Linux server integration',
    'Leadership associatif d’Équipe': 'Team Associative Leadership',
    'Enactus ESP & 2X Xamxam': 'Enactus ESP & 2X Xamxam',
    'Adjointe du pôle IT Enactus ESP': 'Deputy of the IT team at Enactus ESP',
    'Participation au site vitrine du club': 'Participation in the club showcase website',
    'Formation de lycéens en programmation, IA et IoT': 'Training high school students in programming, AI, and IoT',
    'Plusieurs': 'Several',
    'ateliers animés': 'workshops led',
    'Compétences techniques': 'Technical Skills',
    'Intelligence Artificielle': 'Artificial Intelligence',
    'IA appliquée': 'Applied AI',
    'Outils IA': 'AI Tools',
    'Chatbots & Traitement Langage': 'Chatbots & Language Processing',
    'Machine Learning débutant': 'Beginner Machine Learning',
    'Chatbot & Azure': 'Chatbot & Azure',
    'Géolocalisation & Docker': 'Geolocation & Docker',
    'Réseaux Cisco': 'Cisco Networks',
    'Services réseaux': 'Network Services',
    'Méthodologies & Outils': 'Methodologies & Tools',
    'Génie logiciel': 'Software Engineering',
    'Git & Version Control': 'Git & Version Control',
    'Figma & VS Code': 'Figma & VS Code',
    'Bases de données Patterns': 'Database Patterns',
    'Formation & certifications': 'Education & Certifications',
    'Formation Académique': 'Academic Education',
    'Ingénierie Informatique': 'Computer Engineering',
    'Développement web': 'Web Development',
    'Bases de données Logicielle': 'Software Databases',
    'Objectifs Professionnels': 'Professional Objectives',
    'Excellence académique': 'Academic excellence',
    'Réussir mon cycle d’ingénieur et consolider mes bases techniques': 'Complete my engineering program and strengthen my technical foundations',
    'Construire des projets utiles combinant web, données et outils IA': 'Build useful projects combining web, data, and AI tools',
    'Contribuer aux projets IT d’Enactus ESP et accompagner les plus jeunes': 'Contribute to Enactus ESP IT projects and support younger students',
    'Créer à terme des solutions numériques adaptées aux besoins africains': 'Ultimately build digital solutions tailored to African needs',
    'Parcours': 'Journey',
    'Formation': 'Education',
    'Baccalauréat Série S2 - École Mariama Niasse': 'S2 Science Baccalaureate - École Mariama Niasse',
    'DST Informatique - École Supérieure Polytechnique de Dakar': 'DST Computer Science - École Supérieure Polytechnique de Dakar',
    'DIC Informatique - École Supérieure Polytechnique de Dakar': 'DIC Computer Science - École Supérieure Polytechnique de Dakar',
    'Objectifs Professionnels': 'Professional Objectives',
    'Excellent académique': 'Academic Excellence',
    'Développement web & IA': 'Web development & AI',
    'Leadership associatif': 'Associative leadership',
    'Entrepreneuriat Tech': 'Tech entrepreneurship',
    'L\'innovation distingue un leader d\'un suiveur.': 'Innovation distinguishes a leader from a follower.',
    'Le code est comme l\'humour. Quand vous avez à l\'expliquer, c\'est que c\'est mauvais.': 'Code is like humor. When you have to explain it, it is bad.',
    'La meilleure façon de prédire l\'avenir est de l\'inventer.': 'The best way to predict the future is to invent it.',
    'Disponible pour un stage, des projets web, des missions freelance ou des collaborations techniques.': 'Available for internship, web projects, freelance missions, or technical collaborations.',
    'LinkedIn Professionnel': 'Professional LinkedIn',
    'GitHub': 'GitHub',
    '© 2026 Mariama Diop. Élève ingénieure informatique & développeuse web junior.': '© 2026 Mariama Diop. Computer engineering student & junior web developer.'
};

const altTranslationDictionary = {
    'Aperçu Plateforme E-Learning': 'Preview E-Learning Platform',
    'Aperçu API de Gestion': 'Preview API Management',
    'Aperçu Système IA': 'Preview AI System'
};

const originalTextNodes = [];

function initI18n() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            return node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
    });

    let node;
    while (node = walker.nextNode()) {
        originalTextNodes.push({ node, text: node.textContent });
    }
}

function setLanguage(lang) {
    document.documentElement.lang = lang;

    originalTextNodes.forEach(({ node, text }) => {
        const trimmed = text.trim();
        if (translationDictionary[trimmed]) {
            node.textContent = text.replace(trimmed, lang === 'en' ? translationDictionary[trimmed] : trimmed);
        } else {
            node.textContent = text;
        }
    });

    document.querySelectorAll('img').forEach(img => {
        const alt = img.getAttribute('alt');
        if (!alt) return;
        if (lang === 'en' && altTranslationDictionary[alt]) {
            img.setAttribute('alt', altTranslationDictionary[alt]);
        } else if (lang === 'fr') {
            const originalAlt = Object.keys(altTranslationDictionary).find(key => altTranslationDictionary[key] === alt);
            if (originalAlt) {
                img.setAttribute('alt', originalAlt);
            }
        }
    });

    const titleText = lang === 'en'
        ? 'Mariama Diop - Computer Engineering Student & Junior Web Developer'
        : 'Mariama Diop - Élève Ingénieure Informatique & Développeuse Web Junior';
    document.title = titleText;

    const toggle = document.getElementById('lang-toggle');
    if (toggle) {
        toggle.textContent = lang === 'en' ? 'Français' : 'English';
        toggle.dataset.lang = lang;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initI18n();
    setLanguage('fr');

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const next = langToggle.dataset.lang === 'fr' ? 'en' : 'fr';
            setLanguage(next);
        });
    }
});

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Add spectacular hover effect to interactive elements
const interactiveElements = document.querySelectorAll('a, button, .nav-link, .hero-btn, .hero-btn-secondary, .project-card, .what-i-do-card, .vision-card, .leadership-category');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        // Add ripple effect
        createRipple(element);
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
    
    // Add magnetic effect
    element.addEventListener('mousemove', (e) => {
        magneticEffect(e, element);
    });
});

// Create ripple effect
function createRipple(element) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 182, 193, 0.3);
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        z-index: 9999;
    `;
    
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = '50%';
    ripple.style.top = '50%';
    ripple.style.marginLeft = -size/2 + 'px';
    ripple.style.marginTop = -size/2 + 'px';
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

// Magnetic effect
function magneticEffect(e, element) {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const distance = Math.sqrt(x * x + y * y);
    const maxDistance = 100;
    
    if (distance < maxDistance) {
        const force = (maxDistance - distance) / maxDistance;
        const moveX = x * force * 0.3;
        const moveY = y * force * 0.3;
        
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
}

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Reveal Animation
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Add reveal class to elements that should animate
window.addEventListener('DOMContentLoaded', () => {
    const elementsToReveal = [
        '.about-content',
        '.project-card',
        '.current-item',
        '.engagement-card',
        '.skills-category',
        '.contact-content'
    ];
    
    elementsToReveal.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.classList.add('reveal');
        });
    });
    
    // Initial reveal check
    reveal();
});

window.addEventListener('scroll', reveal);

// Active Navigation Link on Scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Progress Bar Animation
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    
    progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && !bar.classList.contains('animated')) {
            bar.classList.add('animated');
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }
    });
}

window.addEventListener('scroll', animateProgressBars);
window.addEventListener('load', animateProgressBars);

// Skill Bar Animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && !bar.classList.contains('animated')) {
            bar.classList.add('animated');
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }
    });
}

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// Parallax Effect for Hero Section
function parallaxEffect() {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
}

window.addEventListener('scroll', parallaxEffect);

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add hover effect to engagement cards
const engagementCards = document.querySelectorAll('.engagement-card');
engagementCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Typing Effect for Hero Title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        // Uncomment the line below to enable typing effect
        // typeWriter(heroTitle, originalText, 80);
    }
});

// Form validation (if contact form is added later)
function validateForm(form) {
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector('textarea');
    
    if (email && !email.value.includes('@')) {
        showError(email, 'Veuillez entrer une adresse email valide');
        return false;
    }
    
    if (message && message.value.trim().length < 10) {
        showError(message, 'Veuillez entrer un message d\'au moins 10 caractères');
        return false;
    }
    
    return true;
}

function showError(element, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '0.9rem';
    errorDiv.style.marginTop = '0.5rem';
    
    element.parentNode.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loaded state
const loadedStyle = document.createElement('style');
loadedStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .nav-link.active {
        color: var(--primary-color);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
    
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            transition: left 0.3s ease;
        }
    }
`;
document.head.appendChild(loadedStyle);

// Intersection Observer for better performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe all elements with reveal class
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
});

// Smooth scroll behavior for better UX
document.documentElement.style.scrollBehavior = 'smooth';

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Performance optimization - debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(() => {
    updateActiveNavLink();
    reveal();
    animateProgressBars();
    animateSkillBars();
    parallaxEffect();
}, 10));
