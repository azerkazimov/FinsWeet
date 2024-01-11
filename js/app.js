// Swiper
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

import { initializeSwiper } from "./swiper.js";
document.addEventListener("DOMContentLoaded", function () {
  initializeSwiper();
});

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

// Fetch Users

import { fetchUser } from "./api-store.js";
document.addEventListener("DOMContentLoaded", function () {
    const listener = document.querySelector(".listener-user");
    fetchUser(listener);
  });