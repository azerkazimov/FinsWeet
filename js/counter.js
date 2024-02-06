export function setCounter(element) {
  if (!element) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });

  element.forEach((value) => {
    observer.observe(value);
  });
}

function startCounter(value) {
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
}
