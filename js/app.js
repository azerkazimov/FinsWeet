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
const seeMoreBtn = document.getElementById("seeMore");
const initialCardCount = 3;

fetchData(episode, initialCardCount);

document.addEventListener("DOMContentLoaded", () => {
  if (seeMoreBtn) {
    seeMoreBtn.addEventListener("click", () => {
      const isExpanded = episodeContainer.classList.contains("expanded");

      if (isExpanded) {
        // If already expanded, hide all cards
        episodeContainer.innerHTML = "";
        fetchData(episodeContainer, initialCardCount);
        episodeContainer.classList.remove("expanded");
      } else {
        // If not expanded, show all cards
        fetchData(episodeContainer).then((data) => {
          // If you want to display all cards, you can remove the initialCardCount parameter.
          // generateCard(data, episodeContainer);
          episodeContainer.classList.add("expanded");
        });
      }
    });
  }
});

// Fetch Post
const articles = document.querySelector(".articles");
import { fetchPost } from "./api-store.js";
fetchPost(articles);

document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.href;
  document.querySelectorAll(".header-nav-link").forEach((link) => {
    const linkUrl = new URL(link.href).pathname;
    if (currentPage === linkUrl) {
      link.classList.add("active-link");
    }
  });
});

// Swiper
import { fetchUser } from "./api-store.js";

const mySwiper = document.querySelector(".listener-user");
fetchUser(mySwiper);

// Filter Cards by category function
import { setupFilterButtons } from "./filter.js";
import { generateCard } from "./showCard.js";
setupFilterButtons();
