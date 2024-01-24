// Generate card for episodes section
export function generateCard(cards, element, count) {
  if (!element) return;

  cards.slice(0, count).forEach((elem) => {
    element.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4 podcasts" id="${elem.id}" data-category="${elem.category}">
          <div class="common-card-container" >
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
              <div class="btn-play">
                  <a href="#"><i class="fa-solid fa-play"></i> <span>Listen Now</span></a>
              </div>
            </div>
          </div>
        </div>
      `;
  });
}

// Generate post for articles section
export function generatePost(data, element) {
  if (!element) return;

  data.forEach((elem) => {
    element.innerHTML += `
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

// Generate counter card
export function generateCounter(element, data) {
  if (!element) return;

  data.forEach((elem) => {
    element.innerHTML += `
          <div class="col-12 col-md-6 col-lg-3 px-1">
              <div class="counter">
                  <div class="icon">
                      <img src=${elem.icon}>
                  </div>
                  <div class="counter-content">
                      <div class="row"><h5 class="count-num" data-val="${elem.count}">000</h5><span>${elem.value}</span></div>
                      <p>${elem.title}</p>
                  </div>
              </div>
          </div>
      `;
  });
}

// Generate subscribe card with icon
export function generateIcon(element, data) {
  if (!element) return;

  data.forEach((elem) => {
    element.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4 subscribe-card">
      <div class="subscribe-icon">
        <img src=${elem.icon} alt="">
      </div>
      <div class="subscribe-description">
        <div class="row"><h4 class="count-num" data-val="${elem.count}">000</h4><span>${elem.value} ${elem.title}</span></div>
        <p>${elem.description}</p>
      </div>
    </div>
    `;
  });
}

// Generate team member card
export function generateMember(data, element) {
  if (!element) return;

  data.forEach((elem) => {
    element.innerHTML += `
            <div class="col-12 col-md-6 col-lg-3">
              <div class="team-member">
                <div class="member-img">
                  <img src=${elem.picture} alt=${elem.position}>
                </div>
                <div class="member-info">
                  <h2>${elem.name} ${elem.surname}</h2>
                  <span>${elem.position}</span>
                  <div class="row member-sosial">
                    <a href=${elem.sosial.facebook}><i class="fa-brands fa-facebook"></i></a>
                    <a href=${elem.sosial.twitter}><i class="fa-brands fa-twitter"></i></a>
                    <a href=${elem.sosial.linkedin}><i class="fa-brands fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
    `;
  });
}

export function generateSponsor(element, data) {
  if (!element) return;

  data.forEach((elem) => {
    element.innerHTML += `
      <div class="col-12 col-md-6 col-lg-4 p-1">
        <div class="sponsor-item">
          <img src=${elem.icon} alt="logo" id=${elem.id}>
        </div>
      </div>
    `;
  });

  element.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4 p-1">
      <div class="sponsor-item-custom ">
        <h3>Become a Sponsor</h3>
        <a href="contact.html">Contact Now</a>
      </div>
    </div>
  `
}

export function generateBlog (data, element){
  if(!element) return

  data.forEach(elem=>{
    element.innerHTML += `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="common-card-container" id=${elem.id}>
          <div class="card-image">
              <img src=${elem.image} alt="">
          </div>
          <div class="card-info">
              <div class="card-text">
                  <h3>${elem.header}</h3>
                  <p>${elem.description}</p>
              </div>
              <div class="btn-play">
                  <a href="#"><span>Read More</span></a>
              </div>
          </div>
        </div>
      </div>
    `
  })
}
