// Get data from Fake Store API and paste it into card element
import { generateCard, generatePost } from "./showCard.js";
export function fetchData(element) {
  return fetch("https://fakestoreapi.com/products?limit=14")
    .then((data) => data.json())
    .then((complatedata) => generateCard(complatedata, element))
    .catch((error) => console.error("Error fetching data:", error));
}

import { swiperFunc } from "./swiper.js";

export function fetchUser() {
  fetch("https://freetestapi.com/api/v1/users?limit=12")
    .then((response) => response.json())
    .then((data) => {
      swiperFunc(data);
    })
    .catch((error) => console.error("Error fetching data: ", error));
}

export function fetchPost() {
  fetch("https://freetestapi.com/api/v1/currencies?sort=name&order=dec&limit=4")
    .then((response) => response.json()) // Fix: added parentheses after json
    .then((data) => {
      generatePost(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
}
