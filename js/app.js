// Swiper
import { fetchUser } from "./api-store.js";
fetchUser();

// Burger menu
import { initializeBurgerMenu } from "./header.js";
initializeBurgerMenu();

// Sticky Nav Bar
import { initializeStickyNavBar } from "./header.js";
initializeStickyNavBar();

// slider js
import { initializeSlider } from "./slider.js";
const brands = document.getElementById("brands");
initializeSlider(brands);

const sponsors = document.getElementById("sponsors");
initializeSlider(sponsors);

// Fetch Episodes
import { fetchData } from "./api-store.js";
const episode = document.querySelector(".episodes");
const podcast = document.querySelector(".podcast-cards");

fetchData(episode);
fetchData(podcast);

// Fetch Post

import { fetchPost } from "./api-store.js";
fetchPost();

document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.href;
  document.querySelectorAll(".header-nav-link").forEach((link) => {
    const linkUrl = new URL(link.href).pathname;
    if (currentPage === linkUrl) {
      link.classList.add("active-link");
    }
  });
});


import { setupFilterButtons } from "./filter.js";
setupFilterButtons()


// const filterBtn = document.querySelectorAll(".btn-filter");

// import { filterDatas } from "./filter.js";

// filterDatas(filterBtn);


