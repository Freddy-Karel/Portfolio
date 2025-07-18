document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation on scroll
    const animateElements = () => {
        const elements = document.querySelectorAll('.animate__animated');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementPosition < windowHeight - elementVisible) {
                const animationType = element.dataset.animation || 'fadeInUp';
                element.classList.add(`animate__${animationType}`);
            }
        });
    };

    // Initialize animations
    animateElements();
    window.addEventListener('scroll', animateElements);

    // Add floating animation to avatar
    const avatar = document.querySelector('.hero-avatar');
    if (avatar) {
        avatar.classList.add('floating');
    }

    // Add animation delays
    const animationDelays = {
        '.hero-title': '0.3s',
        '.hero-subtitle': '0.6s',
        '.social-links a': '0.9s'
    };

    for (const [selector, delay] of Object.entries(animationDelays)) {
        const element = document.querySelector(selector);
        if (element) {
            element.style.animationDelay = delay;
        }
    }

    // Section animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        const delay = index * 0.1;
        section.style.animationDelay = `${delay}s`;
        section.dataset.animation = 'fadeIn';
    });

    // Project cards animation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.dataset.animation = 'fadeInUp';
        card.style.animationDelay = `${0.1 * index}s`;
    });

    // Timeline items animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.dataset.animation = index % 2 === 0 ? 'fadeInRight' : 'fadeInLeft';
        item.style.animationDelay = `${0.2 * index}s`;
    });

    // Contact cards animation
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach((card, index) => {
        card.dataset.animation = 'fadeInUp';
        card.style.animationDelay = `${0.1 * index}s`;
    });
});