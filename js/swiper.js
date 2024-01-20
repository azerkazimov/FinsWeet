import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

export const swiperFunc = (data, element) => {
  if (!element) return;

  // Initialize Swiper
  const swiper = new Swiper(".mySwiper", {
    // slidesPerView: 3,
    // slidesPerGroup: 3,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      376: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    },
  });

  // Append slides to the swiper
  data.forEach((elem) => {
    swiper.appendSlide(`
      <div class="swiper-slide">
        <div class="listener-card-container">
          <div class="card-image">
              <img src="images/listeners/pexels-ike-louie-natividad-3310695.jpg" alt="">
              <div class="listener-description">
                  <p>${elem.name}</p>
                  <div class="star-icons">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                  </div>
              </div>
          </div>
          <div class="card-info">
              <div class="card-text">
                  <p>${elem.email}</p>
              </div>
          </div>
        </div>
    </div>
    `);
  });
};
