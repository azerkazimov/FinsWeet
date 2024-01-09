export function initializeSlider(element) {
  let brandWidth = element.querySelector(".client-slider-pic").offsetWidth;
  let brandChildren = [...element.children];

  // ============== Slider Mousemove ===============

  let isDraggable = false,
    startFromX,
    startingScrollLeft,
    intervalId;

  function dragStart(e) {
    isDraggable = true;
    element.classList.add("dragging");

    startFromX = e.pageX;
    startingScrollLeft = element.scrollLeft;
  }

  function dragging(e) {
    if (!isDraggable) return;
    element.scrollLeft = startingScrollLeft - (e.pageX - startFromX);
  }

  function dragStop() {
    isDraggable = false;
    element.classList.remove("dragging");
  }

  // ============ Clone Classes for Infinite Scroll =============
  function cloneAndInsert(_element, position) {
    let clonedCard = _element.cloneNode(true);
    element.insertAdjacentElement(position, clonedCard);
  }

  let brandPerView = Math.round(element.offsetWidth / brandWidth);

  // Clone cards at the beginning and end
  function cloneCards() {
    // Clone cards at the beginning
    brandChildren
      .slice(-brandPerView)
      .reverse()
      .forEach((card) => {
        cloneAndInsert(card, "afterbegin");
      });

    // Clone cards at the end
    brandChildren.slice(0, brandPerView).forEach((card) => {
      cloneAndInsert(card, "beforeend");
    });
  }

  cloneCards();

  // =========== Infinite Scroll =================
  function infiniteScroll() {
    const { scrollLeft, scrollWidth, offsetWidth } = element;

    if (scrollLeft === 0) {
      element.classList.add("no-transition");
      element.scrollLeft = scrollWidth - 2 * offsetWidth;
      element.classList.remove("no-transition");
    } else if (Math.ceil(scrollLeft) === scrollWidth - offsetWidth) {
      element.classList.add("no-transition");
      element.scrollLeft = offsetWidth;
      element.classList.remove("no-transition");
    }
  }

  // =============== Autoplay =================

  function autoPlay() {
    intervalId = setInterval(() => {
      element.scrollLeft += brandWidth;
    }, 2500);
  }

  autoPlay();

  element.addEventListener("mousemove", dragging);
  element.addEventListener("mousedown", dragStart);
  element.addEventListener("mouseup", dragStop);
  element.addEventListener("scroll", infiniteScroll);
}
