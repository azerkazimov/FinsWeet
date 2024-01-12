// Get data from Fake Store API and paste it into card element
export function fetchData(element) {
  return fetch("https://fakestoreapi.com/products")
    .then((data) => data.json())
    .then((complatedata) => {
      complatedata.forEach((elem) => {
        element.innerHTML += `
          <div class="col-12 col-md-6 col-lg-4">
            <div class="episode-card-container">
              <div class="card-image">
                  <img src=${elem.image} alt="">
                  <div class="card-icon">
                      <i class="fa-solid fa-microphone"></i>
                  </div>
              </div>
              <div class="card-info">
                <div class="card-text">
                    <h3>${elem.title}</h3>
                    <p>${elem.description}</p>
                </div>
                <div class="card-button">
                    <a href="#"><i class="fa-solid fa-play"></i> <span>Listen Now</span></a>
                </div>
              </div>
            </div>
          </div>
        `;
      });
    })
    .catch((err) => {
      console.log(err);
      return "";
    });
}

import { swiperFunc } from "./swiper.js";

export function fetchUser() {
  fetch("https://freetestapi.com/api/v1/users?limit=12")
    .then((response) => response.json())
    .then((data) => {
      swiperFunc(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
}
