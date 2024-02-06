// Get data from Fake Store API and paste it into card element
import {
  generateCard,
  generatePost,
  generateMember,
  generateSinglePodcast,
  generateSingleBlog,
} from "./showCard.js";
import { blogDB } from "./db.js";

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

export function fetchSinglePodcast(element) {
  if(!element || !data) return
  const id = new URLSearchParams(document.location.search).get("id");

  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json())
    .then((data) => {
      generateSinglePodcast(data, element);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

export function fetchSingleBlog(element) {
  if (!element || !data) return
  const id = new URLSearchParams(document.location.search).get("id");
  const data = blogDB[id-1];

  if (data) {
    generateSingleBlog(data, element);
  } else {
    console.error("Error fetching data");
  }
}
