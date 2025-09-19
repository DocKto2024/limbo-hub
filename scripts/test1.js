document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image-column img");

  images.forEach(img => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("image-wrapper");

    const overlay = document.createElement("div");
    overlay.classList.add("image-overlay");
    overlay.textContent = img.alt;

    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img);
    wrapper.appendChild(overlay);
  });

});
