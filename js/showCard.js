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
                  <a href="./single_podcast.html?id=${elem.id}"><i class="fa-solid fa-play"></i> <span>Listen Now</span></a>
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
  `;
}

export function generateBlog(data, element) {
  if (!element) return;

  data.forEach((elem) => {
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
                  <a href="./single_blog.html?id=${elem.id}"><span>Read More</span></a>
              </div>
          </div>
        </div>
      </div>
    `;
  });
}

export function generateSinglePodcast(data, element) {
  if (!element || !data) return;

  element.innerHTML = `
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6 flex-container flex-justify-center flex-align-center">
            <div class="blog-image">
              <img src=${data.image} alt="">
            </div>
          </div>
          <div class="col-12 col-lg-6 px-5">
            <div class="section-content">
              <div class="section-header">
                <span>Business</span>
                <h2>${data.title}</h2>
                <p>${data.description}</p>
              </div>
            <a href="#" class="btn">Listen now <span>53:32</span></a>
            </div>
          </div>
        </div>
      </div>
    `;
}

export function generateSingleBlog(data, element) {
  if (!element || !data) return;

  element.innerHTML = `
        <!-- Main banner header -->
        <section class="blog-banner my-5">
          <div class="container">
            <div class="row">
              <div class="col-12 col-lg-8 offset-lg-2">
                <div class="section-content">
                  <div class="section-header">
                    <span>12 Sep 2021</span>
                    <h2>${data.header}</h2>
                    <p>${data.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Main banner header end -->

        <!-- Main background start -->
        <section class="training-background" style="background-image: url('${data.image}');"></section>
        <!-- Main background end -->
    `;
}
