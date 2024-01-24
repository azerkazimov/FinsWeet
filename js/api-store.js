// Get data from Fake Store API and paste it into card element
import { generateCard, generatePost, generateMember } from "./showCard.js";
export function fetchData(element, maxCount) {
  return fetch("https://fakestoreapi.com/products?limit=14")
    .then((data) => data.json())
    .then((complatedata) => {
      generateCard(complatedata, element, maxCount);
      return complatedata;
    })
    .catch((error) => console.error("Error fetching data:", error));
}

import { swiperFunc } from "./swiper.js";

export function fetchUser(element) {
  fetch("https://freetestapi.com/api/v1/users?limit=12")
    .then((response) => response.json())
    .then((data) => {
      swiperFunc(data, element);
    })
    .catch((error) => console.error("Error fetching data: ", error));
}

export function fetchPost(element) {
  fetch("https://freetestapi.com/api/v1/currencies?sort=name&order=dec&limit=4")
    .then((response) => response.json())
    .then((data) => {
      generatePost(data, element);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

export function fetchMember(element) {
  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => {
      generateMember(data, element);
    })
    .catch((error) => console.error("Error fetching data:", error));
}
