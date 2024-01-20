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

export function setCounter(element) {
  if (!element) return;

  element.forEach((value) => {
    const interval = 100;
    let start = 0;
    const end = parseInt(value.getAttribute("data-val"));
    const duration = Math.floor(interval / end);
    let counter = setInterval(() => {
      start += 1;
      value.textContent = start;
      if (start >= end) {
        clearInterval(counter);
      }
    }, duration);
  });
}
