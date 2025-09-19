document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image-column img");

  images.forEach(img => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("image-wrapper");

    // Создаем overlay с текстом alt
    const overlay = document.createElement("div");
    overlay.classList.add("image-overlay");
    overlay.textContent = img.alt;

    // Вставляем overlay и img в wrapper
    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img);
    wrapper.appendChild(overlay);
  });
});