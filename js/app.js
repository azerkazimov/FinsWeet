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
const elem = document.querySelector(".episodes");

fetchData(elem);
