import jsonServer from 'https://cdn.jsdelivr.net/npm/json-server@1.0.0-alpha.19/+esm'


// Fetch Users
const listener = document.querySelector(".listener-user");

import { fetchUser } from "./api-store.js";
document.addEventListener("DOMContentLoaded", function () {
    fetchUser(listener);
  });

// Swiper
import { initializeSwiper } from "./swiper.js";
initializeSwiper();


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
const elem = document.querySelector(".episodes");

fetchData(elem);

