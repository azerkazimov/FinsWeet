// filter.js
import { fetchData } from "./api-store.js";
import { generateCard } from "./showCard.js";

export function setupFilterButtons() {
  const filterBtn = document.querySelectorAll(".btn-filter");
  const podcastSection = document.querySelector(".podcast-cards");

  fetchData().then((data) => {
    generateCard(data, podcastSection);
  });

  filterBtn.forEach((filter) => {
    filter.addEventListener("click", function () {
      const selectedCategory = filter.textContent.toLowerCase();

      // Toggle active class on buttons
      filterBtn.forEach((btn) => btn.classList.remove("active"));
      filter.classList.add("active");

      const cardCategory = filter.getAttribute("data-category").toLowerCase();

      // Filter cards based on the selected category only within the podcast section
      podcastSection
        .querySelectorAll(".common-card-container")
        .forEach((card) => {
          const cardDataCategory = card
            .getAttribute("data-category")
            .toLowerCase();
          card.style.display =
            cardDataCategory === selectedCategory || selectedCategory === "all"
              ? "block"
              : "none";
        });
    });
  });
}
