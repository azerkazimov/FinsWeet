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

// Counter
import { generateCounter } from "./showCard.js";
import { setCounter } from "./counter.js";
const counterDB = [
  {
    icon: "../images/icons/Icon.png",
    count: 500,
    value: "+",
    title: "Podcast",
  },
  {
    icon: "../images/icons/Icon-1.png",
    count: 24,
    value: "M",
    title: "Views",
  },
  {
    icon: "../images/icons/Icon-2.png",
    count: 600,
    value: "K",
    title: "Subscribers",
  },
  {
    icon: "../images/icons/Icon-3.png",
    count: 24,
    value: "M",
    title: "Views",
  },
];
// generate coutenr card
const counterContainer = document.querySelector(".counters-container");
generateCounter(counterContainer, counterDB);



// About Icons subscribe
import { genrateIcon } from "./showCard.js";
const iconsDB = [
  {
    icon: "../images/icons/Icon-4.png",
    count: 500,
    value: "+",
    title: "Podcast",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. ",
  },
  {
    icon: "../images/icons/Icon-5.png",
    count: 24,
    value: "M",
    title: "Views",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. ",
  },
  {
    icon: "../images/icons/Icon-6.png",
    count: 600,
    value: "K",
    title: "Subs",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. ",
  },
];

const iconContainer = document.querySelector(".about-container");
genrateIcon(iconContainer, iconsDB)

// start counter
const counts = document.querySelectorAll(".count-num");
setCounter(counts);
