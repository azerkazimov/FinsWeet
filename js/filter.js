import { generateCard } from "./showCard.js";

// filterButtons.js

export function setupFilterButtons() {
  const filterBtn = document.querySelectorAll(".btn-filter");
  const allCards = document.querySelector("common-card-container");
  console.log(allCards);

  filterBtn.forEach((filter) => {
    filter.addEventListener("click", function () {
      const selectedCategory = filter.textContent.toLowerCase();

      // Toggle active class on buttons
      filterBtn.forEach((btn) => btn.classList.remove("active"));
      filter.classList.add("active");

      const cardCategory = filter.getAttribute("data-category").toLowerCase();
      console.log(cardCategory);
      // Filter cards based on the selected category
      filterBtn.forEach((card) => {
        // card.style.display =
        //   cardCategory === selectedCategory || selectedCategory === "all"
        //     ? "block"
        //     : "none";
      });
    });
  });
}
