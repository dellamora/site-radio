document.addEventListener("DOMContentLoaded", function () {
  const carouselInner = document.querySelector(".carousel");
  const carouselItems = document.querySelectorAll(".carousel-item");
  const totalItems = carouselItems.length;
  const itemWidth = carouselItems[0].offsetWidth;
  let currentIndex = 0;

  function moveCarousel() {
    currentIndex++;
    if (currentIndex >= totalItems) {
      currentIndex = 0;
    }
    updateCarousel();
  }

  setInterval(moveCarousel, 2000);

  function updateCarousel() {
    const offset = -currentIndex * itemWidth;
    carouselInner.style.transition = "transform 0.5s ease";
    carouselInner.style.transform = `translateX(${offset}px)`;

    if (currentIndex === totalItems - 1) {
      setTimeout(() => {
        carouselInner.style.transition = "none";
        carouselInner.style.transform = "translateX(0)";
      }, 500);
    }
  }
});
