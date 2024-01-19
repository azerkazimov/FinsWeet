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
      const selectedCategory = filter
        .getAttribute("data-category")
        .toLowerCase();

      // Toggle active class on buttons
      filterBtn.forEach((btn) => btn.classList.remove("active"));
      filter.classList.add("active");

      // Filter cards based on the selected category only within the podcast section
      podcastSection
        .querySelectorAll(".podcasts")
        .forEach((card) => {
          const cardDataCategory = card
            .getAttribute("data-category")
            .toLowerCase();
          if (
            selectedCategory === "all" ||
            cardDataCategory === selectedCategory
          ) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
    });
  });
}
