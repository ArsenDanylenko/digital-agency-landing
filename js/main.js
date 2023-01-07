// ==== BURGER MENU ====
const iconMenu = document.querySelector('.menu-items__menu-icon');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo__icon');
iconMenu.addEventListener('click', () => {
   if (iconMenu) {
      menu.classList.toggle('_active');
      iconMenu.classList.toggle('_active');
      logo.classList.toggle('_active');
      document.body.classList.toggle('_lock');
   }
})

// ==== TABS =====

// Declare tab-content
const uiDesign = document.querySelector('.services__info-block-1');
const digMark = document.querySelector('.services__info-block-2');
const seo = document.querySelector('.services__info-block-3');
const webDev = document.querySelector('.services__info-block-4');

// Declare tab-links
const digMarkLink = document.querySelector('.services__tab-link--1');
const seoLink = document.querySelector('.services__tab-link--2');
const uiDesignLink = document.querySelector('.services__tab-link--3');
const webDevLink = document.querySelector('.services__tab-link--4');

uiDesignLink.addEventListener('click', () => {
   uiDesign.classList.add('_active');
   digMark.classList.remove('_active');
   seo.classList.remove('_active');
   webDev.classList.remove('_active');
   uiDesignLink.classList.add('_active');
   digMarkLink.classList.remove('_active');
   seoLink.classList.remove('_active');
   webDevLink.classList.remove('_active');
})
digMarkLink.addEventListener('click', () => {
   uiDesign.classList.remove('_active');
   digMark.classList.add('_active');
   seo.classList.remove('_active');
   webDev.classList.remove('_active');
   uiDesignLink.classList.remove('_active');
   digMarkLink.classList.add('_active');
   seoLink.classList.remove('_active');
   webDevLink.classList.remove('_active');
})
seoLink.addEventListener('click', () => {
   uiDesign.classList.remove('_active');
   digMark.classList.remove('_active');
   seo.classList.add('_active');
   webDev.classList.remove('_active');
   uiDesignLink.classList.remove('_active');
   digMarkLink.classList.remove('_active');
   seoLink.classList.add('_active');
   webDevLink.classList.remove('_active');
})
webDevLink.addEventListener('click', () => {
   uiDesign.classList.remove('_active');
   digMark.classList.remove('_active');
   seo.classList.remove('_active');
   webDev.classList.add('_active');
   uiDesignLink.classList.remove('_active');
   digMarkLink.classList.remove('_active');
   seoLink.classList.remove('_active');
   webDevLink.classList.add('_active');
})

// ==== PORTFOLIO ACTIVE ====
function setupTabs() {
   document.querySelectorAll(".portfolio__link").forEach(link => {
      link.addEventListener('click', () => {
         const portLinks = document.querySelector('.portfolio__links');
         const tabsContainer = portLinks.parentElement;
         const tabNumber = link.dataset.forTab;
         const tabToActivate = tabsContainer.querySelector(`.portfolio__examples[data-tab="${tabNumber}"]`);

         portLinks.querySelectorAll('.portfolio__link').forEach(link => {
            link.classList.remove('_active');
         })

         tabsContainer.querySelectorAll('.portfolio__examples').forEach(tab => {
            tab.classList.remove('_active');
         })

         link.classList.add('_active');
         tabToActivate.classList.add('_active');
      })
   })
}
document.addEventListener('DOMContentLoaded', () => {
   setupTabs();
});

// ==== TESTIMONIAL SLIDER ====
function windowLoaded() {
   if (document.querySelector('.testimonial__content')) {
      new Swiper('.testimonial__content', {
         direction: 'horizontal',
         loop: true,
         slidesPerView: 1,
         speed: 1000,
         mousewheel: true,
         keyboard: true,
         grabCursor: true,
         spaceBetween: 30,

         navigation: {
            nextEl: '.testimonial__slider-btn-next',
            prevEl: '.testimonial__slider-btn-prev',
         },
      });
   }
}
window.addEventListener('load', windowLoaded);