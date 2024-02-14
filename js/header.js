//   Burger Menu
export function initializeBurgerMenu() {
  const burger = document.querySelector(".burger-menu");
  const mobileMenu = document.querySelector(".mobile-nav");

  burger.addEventListener("click", function () {
    burger.classList.toggle("is-active");
    mobileMenu.classList.toggle("is-active");
  });
}

// nav-bar header sticky on scroll
export function initializeStickyNavBar() {
  window.addEventListener("load", function () {
    const header = document.querySelector(".header");
    const logo = document.querySelector(".header-navbar-brand img");
    window.addEventListener("scroll", function () {
      const burgerMenu = this.document.querySelector(".burger-menu-bar");
      header.classList.toggle("sticky", window.scrollY > 10);

      if (header.classList.contains("sticky")) {
        logo.src = "images/Logo-white-min-min.png";
      } else {
        logo.src = "images/Logo-min.png";
      }
    });
  });
}

// Set active link to nav-bar
export const setActiveLinks = function () {
  const navLinks = document.querySelectorAll(".header-nav-link");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");
  const currentUrl = window.location.href;

  function setActiveLink(links) {
    links.forEach((link) => {
      if (currentUrl.includes(link.getAttribute("href"))) {
        link.classList.add("active-link");
      }
    });
  }

  setActiveLink(navLinks);
  setActiveLink(mobileLinks);
};
