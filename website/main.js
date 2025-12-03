const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});
// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
// Close menu when nav link is clicked
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});
/* Initializing Swiper */
let swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,
  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  /* Responsive breakpoints */
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
// ----- Модальное окно Login / Register -----
const loginPopupBtn    = document.querySelector('.btnLogin-popup');
const authOverlay      = document.querySelector('.auth-overlay');
const loginFormBox     = document.querySelector('.form-box.login');
const registerFormBox  = document.querySelector('.form-box.register');
const registerLink     = document.querySelector('.register-link');
const loginLink        = document.querySelector('.login-link');
const closeIcon        = document.querySelector('.icon-close');

if (loginPopupBtn && authOverlay) {
  loginPopupBtn.addEventListener('click', () => {
    authOverlay.classList.add('active');
    // показываем форму логина по умолчанию
    loginFormBox.classList.add('active');
    registerFormBox.classList.remove('active');
  });
}

if (closeIcon && authOverlay) {
  closeIcon.addEventListener('click', () => {
    authOverlay.classList.remove('active');
  });

  // клик по тёмному фону — тоже закрывает окно
  authOverlay.addEventListener('click', (e) => {
    if (e.target === authOverlay) {
      authOverlay.classList.remove('active');
    }
  });
}

// переход Login -> Register
if (registerLink && loginFormBox && registerFormBox) {
  registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginFormBox.classList.remove('active');
    registerFormBox.classList.add('active');
  });
}

// переход Register -> Login
if (loginLink && loginFormBox && registerFormBox) {
  loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    registerFormBox.classList.remove('active');
    loginFormBox.classList.add('active');
  });
}
