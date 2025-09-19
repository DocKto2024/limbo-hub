document.addEventListener("DOMContentLoaded", () => {
  // Выбираем все элементы внутри main, которые хотим анимировать
  const elements = document.querySelectorAll("main h2, main h3, main p, main li, main a, main span");

  elements.forEach((el, i) => {
    // Начальное состояние: невидимо и немного смещено вниз
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 1s ease-out, transform 1s ease-out";

    // Появление с небольшой задержкой для каждого элемента
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 500 + i * 1000); // базовая задержка + шаг между элементами
  });
});