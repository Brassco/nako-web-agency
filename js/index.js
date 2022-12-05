const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== TOGGLE MENU =====*/
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show_menu");
});

// document.addEventListener("click", (event) => {
//   if (event.target?.id !== "nav-toggle") {
//     navMenu.classList.add("show_menu");
//   }
// });

/*========== SWIPER SLIDER ==========*/
let swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

/*========== SWIPER TESTIMONIAL SLIDER ==========*/
let testimonialSwiper = new Swiper(".testimonial__container", {
  loop: true,
  // grabCursor: true,
  // spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination-testimonial",
    clickable: true,
    // dynamicBullets: true,
  },

  // breakpoints: {
  //     568: {
  //         slidesPerView: 2,
  //     }
  // }
  mousewheel: true,
  keyboard: true,
});

/*========== SCROLL ACTIVE LINKS ==========*/

const sections = document.querySelectorAll(".section");

function scrollActive() {
  const scrollY = pageYOffset;
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    const sectionId = section.getAttribute("id");

    if (sectionId) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.add("active-link");
      } else {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.remove("active-link");
      }
    }
  });
}

const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach((section) => {
  section.addEventListener('click', () => {
    navMenu.classList.toggle("show_menu");
  }) 
});

window.addEventListener("scroll", scrollActive);

/*========== TYPED TEXT ==========*/
// var youCan = new Typed('.you_can', {
//   strings: ['imagine it'],
//   typeSpeed: 100,
//   loop: true,
//   startDelay: 300,
//   showCursor: false,
// });

// var weCan = new Typed('.we_can', {
//   strings: ['...', 'do it'],
//   typeSpeed: 100,
//   loop: true,
//   startDelay: 800,
//   showCursor: false,
// });
