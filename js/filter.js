// export function filterDatas(elem) {
//   elem.forEach((filter) => {
//     filter.addEventListener("click", function (e) {
//       e.preventDefault();

//       elem.forEach((btn) => {
//         btn.classList.remove("active");
//       });

//       filter.classList.toggle("active");
//     });
//   });
// }

// filterButtons.js

import { generateCard } from "./showCard.js";

// filterButtons.js

export function setupFilterButtons() {
  const filterBtn = document.querySelectorAll(".btn-filter");
  const allCards = document.querySelectorAll(".card-info");

  filterBtn.forEach((filter) => {
    filter.addEventListener("click", function () {
      const selectedCategory = filter.textContent.toLowerCase();

      // Toggle active class on buttons
      filterBtn.forEach((btn) => btn.classList.remove("active"));
      filter.classList.add("active");

      // Filter cards based on the selected category
      allCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category").toLowerCase();
        card.style.display =
          cardCategory === selectedCategory || selectedCategory === "all"
            ? "block"
            : "none";
      });
    });
  });
}
