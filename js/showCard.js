export function generateCard(cards, element) {
  if (!element) {
    console.error("Element not found");
    return;
  }

  element.innerHTML = "";

  cards.forEach((elem) => {
    element.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">
          <div class="common-card-container" id="${elem.id}">
            <div class="card-image">
                <img src=${elem.image} alt="">
                <div class="card-icon">
                    <i class="fa-solid fa-microphone"></i>
                </div>
            </div>
            <div class="card-info" data-category="${elem.category}">
              <div class="card-text">
                  <h3>${elem.title}</h3>
                  <p>${elem.description}</p>
              </div>
              <div class="btn-play">
                  <a href="#"><i class="fa-solid fa-play"></i> <span>Listen Now</span></a>
              </div>
            </div>
          </div>
        </div>
      `;
  });
}

export function generatePost(data) {
  data.forEach((elem) => {
    document.querySelector(".articles").innerHTML += `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="common-card-container">
        <div class="card-image">
            <img src=${elem.image} alt="">
        </div>
        <div class="card-info">
            <div class="card-text">
                <h3>${elem.name}</h3>
                <p>${elem.description}</p>
            </div>
            <div class="btn-play">
                <a href="#"><span>Read More</span></a>
            </div>
        </div>
      </div>
    </div>
    `;
  });
}
