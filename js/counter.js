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
