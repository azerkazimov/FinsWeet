// Imports
import {
  generateCounter,
  generateIcon,
  generateMember,
  generateSponsor,
  generateBlog,
} from "./showCard.js"; // Get generate cards
import { iconsDB, usersDB, counterDB, sponsorDB, blogDB } from "./db.js"; // Get datas from database
import {
  fetchData,
  fetchPost,
  fetchUser,
  fetchSinglePodcast,
  fetchSingleBlog,
} from "./api-store.js"; // Initialize API
import { initializeBurgerMenu, initializeStickyNavBar, setActiveLinks } from "./header.js"; // Header
import { initializeSlider } from "./slider.js"; // Initialize custom slider
import { setupFilterButtons } from "./filter.js"; // Filter buttons by category
import { setCounter } from "./counter.js"; // Counter

// Set Single Podcast from API data
const singlePodcast = document.querySelector(".podcast-single-banner");
fetchSinglePodcast(singlePodcast);

// Burger menu
initializeBurgerMenu();

// Sticky Nav Bar
initializeStickyNavBar();

// slider js
const brands = document.getElementById("brands");
initializeSlider(brands);

const sponsors = document.getElementById("sponsors");
initializeSlider(sponsors);

// Fetch Episodes
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
fetchPost(articles);

// Swiper
const mySwiper = document.querySelector(".listener-user");
fetchUser(mySwiper);

// Filter Cards by category function
setupFilterButtons();

// Counter
// generate coutenr card
const counterContainer = document.querySelector(".counters-container");
generateCounter(counterContainer, counterDB);

// About Icons subscribe
const iconContainer = document.querySelector(".about-container");
generateIcon(iconContainer, iconsDB);

// start counter
const counts = document.querySelectorAll(".count-num");
setCounter(counts);

// generate team member
const member = document.querySelector(".team-container");
generateMember(usersDB, member);

// generate sponsor item
const sponsor = document.querySelector(".sponsor-container");
generateSponsor(sponsor, sponsorDB);

// generate blogs
const blogItem = document.querySelector(".blogs");
generateBlog(blogDB, blogItem);

const singleBlog = document.querySelector(".blog-content");
fetchSingleBlog(singleBlog);

document.addEventListener("DOMContentLoaded", setActiveLinks);
