/*=============== SHOW SIDEBAR ===============*/
const sidebar = document.getElementById('sidebar');
const btnShare = document.querySelector('.btn__share');

if(btnShare) {
    btnShare.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
}

document.addEventListener('click', (e) => {
    if(!sidebar.contains(e.target) && !btnShare.contains(e.target)) {
        sidebar.classList.remove('active');
    }
});


/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */


/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */


/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')

    tabs.forEach(tab=> {
        tab.addEventListener("click", () =>{
            const target =  document.querySelector(tab.getAttribute('data-target'))

            tabContent.forEach(tabContents => {
                tabContents.classList.remove('skills__active')
            })

            target.classList.add('skills__active')

            tabs.forEach(tabs => {
                tabs.classList.remove('skills__active')
            })
        tab.classList.add('skills__active')
        })
        
    }
    )

/*=============== MIXITUP FILTER PORTFOLIO ===============*/


/*===== Link Active Work =====*/
const workButtons = document.querySelectorAll('.work__button');
const portfolioModals = document.querySelectorAll('.portfolio__modal');

workButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const target = button.getAttribute('data-target');
        const modal = document.querySelector(target);
        
        if(modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});


/*===== Work Popup =====*/
const closeButtons = document.querySelectorAll('.portfolio__modal-close');

closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const targetId = btn.getAttribute('data-close');
        const modal = document.querySelector(targetId);
        
        if(modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

portfolioModals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});


/*=============== SERVICES MODAL ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/
const testimonialSwiper = new Swiper('.testimonial-swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    spaceBetween: 20
});


/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll('.contact__input');

inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.borderColor = 'var(--skin-color)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.borderColor = 'transparent';
    });
});


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const navLinks = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('[id]');

function activateLink() {
    navLinks.forEach(link => {
        link.classList.remove('active-link');
    });

    sections.forEach(section => {
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        const scroll = window.scrollY;

        if(scroll >= top && scroll <= bottom) {
            const id = section.getAttribute('id');
            const activeLink = document.querySelector(`.nav__link[href="#${id}"]`);
            if(activeLink) {
                activeLink.classList.add('active-link');
            }
        }
    });
}

window.addEventListener('scroll', activateLink);


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUpBtn = document.querySelector('.scrollup');
    if(scrollUpBtn) {
        if(this.scrollY >= 560) {
            scrollUpBtn.classList.add('show-scroll');
        } else {
            scrollUpBtn.classList.remove('show-scroll');
        }
    }
}

window.addEventListener('scroll', scrollUp);

/*=============== SCROLL DIRECTION ANIMATION ===============*/
let lastScrollY = 0;
let isScrollingDown = false;

// Add scroll-animate class to all sections and major elements
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.section, .work__card, .services__card, .contact__card, .about__box, .skills__header, .timeline__item'
    );
    elementsToAnimate.forEach(el => {
        el.classList.add('scroll-animate');
    });
    
    // Trigger initial animation for elements already in viewport
    animateOnScroll();
});

function animateOnScroll() {
    const currentScrollY = window.scrollY;
    isScrollingDown = currentScrollY > lastScrollY;
    lastScrollY = currentScrollY;

    const animatedElements = document.querySelectorAll('.scroll-animate');
    
    animatedElements.forEach(element => {
        const elementRect = element.getBoundingClientRect();
        const elementTop = elementRect.top;
        const elementHeight = elementRect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate how far into viewport the element is (0 to 1)
        // Start animation when element reaches bottom of viewport
        const startPoint = windowHeight;
        const endPoint = -elementHeight / 2;
        
        const distance = startPoint - elementTop;
        const totalDistance = startPoint - endPoint;
        
        // Clamp progress between 0 and 1
        let progress = Math.min(1, Math.max(0, distance / totalDistance));
        
        // Check if element is completely out of view
        if (elementTop > windowHeight || elementTop + elementHeight < 0) {
            // Don't animate out of view elements
            return;
        }
        
        // Apply smooth animation based on scroll progress
        const opacity = Math.min(1, progress * 1.2);
        const translateY = isScrollingDown ? 
            (1 - progress) * 30 : 
            -(1 - progress) * 30;
        
        element.style.opacity = opacity;
        element.style.transform = `translateY(${translateY}px)`;
        
        // Remove animation classes as we're using inline styles now
        element.classList.remove('scroll-down', 'scroll-up');
    });
}

window.addEventListener('scroll', animateOnScroll, { passive: true });
window.addEventListener('resize', animateOnScroll, { passive: true });

/*=============== SWIPER CERTIFICATE ===============*/
const certificateSwiper = new Swiper('.certificate-swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    }
});
