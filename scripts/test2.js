document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("main h2, main h3, main p, main li, main a, main span");

  elements.forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 1s ease-out, transform 1s ease-out";

    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 500 + i * 1000);
  });

});
