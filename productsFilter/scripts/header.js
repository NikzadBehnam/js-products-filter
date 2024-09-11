export function initializeHeaderScroll(header) {
  let headerTimeout;

  window.addEventListener("scroll", () => {
    header.classList.remove("slide-up");
    header.classList.add("slide-down");
    clearTimeout(headerTimeout);
    headerTimeout = setTimeout(() => {
      header.classList.remove("slide-down");
      header.classList.add("slide-up");
    }, 1000);
  });
}
