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

function acceptCookies() {
  document.getElementById("cookieAlert").style.display = "none";

  document.cookie =
    "cookies_accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

document.querySelectorAll(".menu li a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("check").checked = false;
  });
});

function showCurrentDay() {
  var today = new Date().getDay();
  var days = [
    "domingo",
    "segunda",
    "terca",
    "quarta",
    "quinta",
    "sexta",
    "sabado",
  ];
  var currentDay = days[today];
  showDay(currentDay);
}

function showDay(day) {
  var days = document.getElementsByClassName("day-content");
  for (var i = 0; i < days.length; i++) {
    days[i].style.display = "none";
  }
  document.getElementById(day).style.display = "block";

  var buttons = document.querySelectorAll("#programacao button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  document
    .getElementById("btn" + day.charAt(0).toUpperCase() + day.slice(1))
    .classList.add("active");
}

showCurrentDay();
