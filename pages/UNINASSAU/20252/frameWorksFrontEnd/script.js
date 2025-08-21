// ===================================
// CONFIGURAÇÕES GLOBAIS
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollEffects();
    initAnimations();
    initMobileMenu();
    initProgressBar();
});

// ===================================
// NAVEGAÇÃO SUAVE
// ===================================
function initNavigation() {
    // Smooth scroll para links internos
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Fecha menu mobile se estiver aberto
                closeMobileMenu();
                
                // Atualiza link ativo
                updateActiveNavLink(targetId);
            }
        });
    });
}

// ===================================
// EFEITOS DE SCROLL
// ===================================
function initScrollEffects() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Header com backdrop blur
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = 'none';
        }
        
        // Auto-hide header (opcional)
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
        
        // Atualiza link ativo baseado na seção visível
        updateActiveNavLinkOnScroll();
    });
}

// ===================================
// ANIMAÇÕES DE ENTRADA
// ===================================
function initAnimations() {
    // Intersection Observer para animações de entrada
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animação especial para cards
                if (entry.target.classList.contains('about-card') || 
                    entry.target.classList.contains('project-card') ||
                    entry.target.classList.contains('resource-card')) {
                    animateCard(entry.target);
                }
                
                // Animação especial para módulos
                if (entry.target.classList.contains('module')) {
                    animateModule(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observa elementos para animação
    const animateElements = document.querySelectorAll('.about-card, .project-card, .resource-card, .module, .contact-method');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

function animateCard(card) {
    const delay = Array.from(card.parentNode.children).indexOf(card) * 100;
    setTimeout(() => {
        card.style.animation = 'fadeInUp 0.6s ease forwards';
    }, delay);
}

function animateModule(module) {
    const lessons = module.querySelectorAll('.lesson-card');
    lessons.forEach((lesson, index) => {
        setTimeout(() => {
            lesson.style.opacity = '1';
            lesson.style.transform = 'translateX(0)';
        }, index * 100);
    });
}

// ===================================
// MENU MOBILE
// ===================================
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        
        // Fecha menu ao clicar em um link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
        
        // Fecha menu ao clicar fora
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }
}

function closeMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    
    if (navMenu && navToggle) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
}

// ===================================
// BARRA DE PROGRESSO
// ===================================
function initProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #61dafb, #21232a);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// ===================================
// NAVEGAÇÃO ATIVA
// ===================================
function updateActiveNavLink(activeId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === activeId) {
            link.classList.add('active');
        }
    });
}

function updateActiveNavLinkOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    const scrollPosition = window.scrollY + 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ===================================
// EFEITOS ESPECIAIS
// ===================================

// Parallax effect para o hero background
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    const codeAnimation = document.querySelector('.code-animation');
    
    if (hero && codeAnimation) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            codeAnimation.style.transform = `translate3d(0, ${rate}px, 0)`;
        });
    }
}

// Typing effect para o título
function initTypingEffect() {
    const titleElement = document.querySelector('.hero-title .gradient-text');
    if (titleElement) {
        const text = titleElement.textContent;
        titleElement.textContent = '';
        titleElement.style.borderRight = '2px solid';
        
        let i = 0;
        const typeWriter = function() {
            if (i < text.length) {
                titleElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                titleElement.style.borderRight = 'none';
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
}

// Counter animation para estatísticas
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });
    
    counters.forEach(counter => observer.observe(counter));
}

// ===================================
// FUNCIONALIDADES DE TOOLTIP
// ===================================
function initTooltips() {
    const elementsWithTooltip = document.querySelectorAll('[data-tooltip]');
    
    elementsWithTooltip.forEach(element => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = element.getAttribute('data-tooltip');
        tooltip.style.cssText = `
            position: absolute;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            font-size: 0.8rem;
            white-space: nowrap;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 1000;
        `;
        
        element.style.position = 'relative';
        element.appendChild(tooltip);
        
        element.addEventListener('mouseenter', function() {
            tooltip.style.opacity = '1';
        });
        
        element.addEventListener('mouseleave', function() {
            tooltip.style.opacity = '0';
        });
    });
}

// ===================================
// PERFORMANCE OPTIMIZATIONS
// ===================================

// Lazy loading para imagens
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Debounce function para eventos de scroll
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

// ===================================
// EASTER EGGS E INTERAÇÕES ESPECIAIS
// ===================================

// Konami Code
function initKonamiCode() {
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

function activateEasterEgg() {
    const reactLogos = document.querySelectorAll('.react-logo');
    reactLogos.forEach(logo => {
        logo.style.animation = 'spin 0.5s linear infinite';
        setTimeout(() => {
            logo.style.animation = 'spin 10s linear infinite';
        }, 5000);
    });
    
    console.log('🎉 Konami Code ativado! Os logos React estão girando mais rápido!');
}

// Double click no logo para mostrar informações de debug
function initDebugMode() {
    const reactLogos = document.querySelectorAll('.react-logo');
    
    reactLogos.forEach(logo => {
        logo.addEventListener('dblclick', function() {
            console.group('🔧 Debug Info');
            console.log('📱 User Agent:', navigator.userAgent);
            console.log('📏 Screen Size:', window.screen.width + 'x' + window.screen.height);
            console.log('🖼️ Viewport Size:', window.innerWidth + 'x' + window.innerHeight);
            console.log('📍 Scroll Position:', window.scrollY);
            console.log('🎯 Active Section:', document.querySelector('.nav-link.active')?.getAttribute('href'));
            console.groupEnd();
            
            // Visual feedback
            logo.style.color = '#ff6b6b';
            setTimeout(() => {
                logo.style.color = '';
            }, 1000);
        });
    });
}

// ===================================
// INICIALIZAÇÃO ADICIONAL
// ===================================
window.addEventListener('load', function() {
    initParallaxEffect();
    initTypingEffect();
    initCounterAnimation();
    initTooltips();
    initLazyLoading();
    initKonamiCode();
    initDebugMode();
});

// ===================================
// EXPORTAR FUNÇÕES PARA USO GLOBAL
// ===================================
window.ReactCourseFunctions = {
    closeMobileMenu,
    updateActiveNavLink,
    animateCard,
    animateModule,
    debounce
};
