// Navigation functionality
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// Handle navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.remove('transparent');
    } else {
        navbar.classList.add('transparent');
    }
});

// Initialize navbar as transparent
navbar.classList.add('transparent');

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    console.log('Mobile menu toggle clicked'); // Debug log
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Close mobile menu when clicking on links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('Nav link clicked'); // Debug log
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to About section function
function scrollToAbout() {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        aboutSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Testimonials data
const testimonials = [
    {
        name: "Piotr Dyba",
        position: "SAP EMEA HR Project Manager",
        company: "ADP",
        rating: 5,
        text: "After the switch made (putting Manish as Lead Consultant for <span class='blur-text'>Iveco</span> CZ) she noticed a dramatic improvement in the Project. Many thanks for your professional attitude and work delivered."
    },
    {
        name: "Axel Nijsen",
        position: "Regional Project Manager",
        company: "ADP - MNC EMEA Implementation",
        rating: 5,
        text: "<span class='blur-text'>PHILIPS</span> appreciate the way you are working with the local client team, your professionalism and all support so far. Let's keep up the good work!"
    },
    {
        name: "Yoeri Olbrechts",
        position: "Director",
        company: "EPI-USE Global Services",
        rating: 5,
        text: "You deliver professional work and are well structured in everything you do. Your motivation and culture is perfectly aligned with EPI-USE."
    },
    {
        name: "Shanna Henderson",
        position: "GV Sr. Implementation PM",
        company: "Globalview Americas - ADP",
        rating: 5,
        text: "Your collaboration and calmness under pressure is unlike any client I have previously implemented. Your attention to detail and impeccable planning/tracking is unsurpassed."
    },
    {
        name: "Data Migration Team",
        position: "Project Team Member",
        company: "EPI-USE",
        rating: 5,
        text: "Special thanks to Manish from the data migration team for your availability, your patience, your efficiency and your enthusiasm."
    },
    {
        name: "Armenio Silva",
        position: "GV Project Manager",
        company: "ADP",
        rating: 5,
        text: "Manish has been outstanding in fully coordinating the UATs for both these clients. He has relentlessly pursuing to ensure that the UATs are successful with great cooperation and client centric attitude."
    },
    {
        name: "Fabiana Gonzalez",
        position: "Portal Lead Consultant",
        company: "GlobalView, MNC EMEA Implementation",
        rating: 5,
        text: "Manish was awesome, a real team player, providing guidance and support until completion. It's incredible when I find teammates that live up to 'ADP as One', and he sure does."
    },
    {
        name: "Rik Gullentops",
        position: "Managing Director",
        company: "EPI-USE Global Services",
        rating: 5,
        text: "Xavi was very positive about the delivered work and the quality of your services. You are the spider in the web in these countries and your extension is needed to deliver these projects."
    },
    {
        name: "Aida Nedu",
        position: "eTime Lead Implementation Consultant",
        company: "ADP",
        rating: 5,
        text: "Your patience deserves a trophy. Thank you for your calm demeanor and crystal-clear explanations that kept things flowing throughout this challenging project."
    },
    {
        name: "Aida Nedu",
        position: "eTime Lead Implementation Consultant",
        company: "ADP",
        rating: 5,
        text: "Your deep knowledge of the GV tool and its various functionalities has been instrumental in the success of our project. Your dedication, patience and collaborative spirit are truly appreciated."
    },
    {
        name: "Arun Sundararaman",
        position: "Project Manager",
        company: "ADP",
        rating: 5,
        text: "Thanks so much for your hard work in all our DM related interface issues. I am really impressed with your dedication and looking forward in working together for several more years to come!"
    }
];

// Testimonials functionality
let currentTestimonial = 0;
const testimonialText = document.getElementById('testimonial-text');
const authorName = document.getElementById('author-name');
const authorPosition = document.getElementById('author-position');
const authorCompany = document.getElementById('author-company');
const testimonialCounter = document.getElementById('testimonial-counter');
const testimonialDots = document.getElementById('testimonial-dots');
const prevTestimonial = document.getElementById('prev-testimonial');
const nextTestimonial = document.getElementById('next-testimonial');

// Initialize testimonials
function initTestimonials() {
    // Create dots
    testimonials.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'testimonial-dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => setTestimonial(index));
        testimonialDots.appendChild(dot);
    });
    
    // Set initial testimonial
    setTestimonial(0);
    
    // Add event listeners
    prevTestimonial.addEventListener('click', showPrevTestimonial);
    nextTestimonial.addEventListener('click', showNextTestimonial);
}

function setTestimonial(index) {
    currentTestimonial = index;
    const testimonial = testimonials[index];
    
    testimonialText.innerHTML = `"${testimonial.text}"`;
    authorName.textContent = testimonial.name;
    authorPosition.textContent = testimonial.position;
    authorCompany.textContent = testimonial.company;
    testimonialCounter.textContent = `${index + 1} of ${testimonials.length}`;
    
    // Update dots
    const dots = testimonialDots.querySelectorAll('.testimonial-dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function showNextTestimonial() {
    const nextIndex = (currentTestimonial + 1) % testimonials.length;
    setTestimonial(nextIndex);
}

function showPrevTestimonial() {
    const prevIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    setTestimonial(prevIndex);
}

// Auto-advance testimonials
let testimonialInterval = setInterval(showNextTestimonial, 8000);

// Pause auto-advance on hover
const testimonialCard = document.getElementById('testimonial-card');
testimonialCard.addEventListener('mouseenter', () => {
    clearInterval(testimonialInterval);
});

testimonialCard.addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(showNextTestimonial, 8000);
});

// Skills animation
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                setTimeout(() => {
                    bar.style.width = width + '%';
                }, 200);
            });
        }
    });
}, observerOptions);

// Observe skills section
const skillsSection = document.querySelector('.skills-section');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Intersection Observer for fade-in animations
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Apply fade-in to sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    fadeObserver.observe(section);
});

// Counter animation for stats
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (element.textContent.includes('%') ? '%' : '+');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (element.textContent.includes('%') ? '%' : '+');
        }
    }, 16);
};

// Observe stats for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                if (number) {
                    stat.textContent = '0' + (text.includes('%') ? '%' : '+');
                    animateCounter(stat, number);
                }
            });
        }
    });
}, { threshold: 0.5 });

// Observe hero stats and client stats
document.querySelectorAll('.hero-stats, .stats-showcase').forEach(section => {
    statsObserver.observe(section);
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Initialize testimonials
    initTestimonials();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Handle window resize
window.addEventListener('resize', () => {
    // Close mobile menu on resize
    if (window.innerWidth > 768) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Keyboard navigation for testimonials
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        showPrevTestimonial();
    } else if (e.key === 'ArrowRight') {
        showNextTestimonial();
    }
});

// Add touch/swipe support for testimonials
let touchStartX = 0;
let touchEndX = 0;

testimonialCard.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

testimonialCard.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            showNextTestimonial();
        } else {
            showPrevTestimonial();
        }
    }
}

// Performance optimization: Debounce scroll events
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

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    const scrolled = window.pageYOffset;
    
    // Navbar effect
    if (scrolled > 100) {
        navbar.classList.remove('transparent');
    } else {
        navbar.classList.add('transparent');
    }
    
    // Parallax effect
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add error handling for external resources
window.addEventListener('error', (e) => {
    if (e.target.tagName === 'SCRIPT' && e.target.src.includes('lucide')) {
        console.warn('Lucide icons failed to load, using fallback');
        // You could implement fallback icons here
    }
});

// Accessibility improvements
document.addEventListener('keydown', (e) => {
    // Skip to main content with Tab
    if (e.key === 'Tab' && !e.shiftKey && document.activeElement === document.body) {
        const mainContent = document.querySelector('#about');
        if (mainContent) {
            e.preventDefault();
            mainContent.focus();
        }
    }
});

// Add focus indicators for keyboard navigation
document.addEventListener('focusin', (e) => {
    if (e.target.matches('a, button, input, textarea, select')) {
        e.target.style.outline = '2px solid #667eea';
        e.target.style.outlineOffset = '2px';
    }
});

document.addEventListener('focusout', (e) => {
    if (e.target.matches('a, button, input, textarea, select')) {
        e.target.style.outline = '';
        e.target.style.outlineOffset = '';
    }
});

// Preload critical images
const preloadImages = [
    // Add any critical images here if needed
];

preloadImages.forEach(src => {
    const img = new Image();
    img.src = src;
});