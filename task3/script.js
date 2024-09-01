let slideIndex = 0;
let slideInterval;

document.addEventListener("DOMContentLoaded", () => {
  showSlide(slideIndex);
  startSlideShow();

  const slider = document.querySelector(".slider");
  slider.addEventListener("mouseover", () => clearInterval(slideInterval));
  slider.addEventListener("mouseout", () => startSlideShow());
});

function startSlideShow() {
  slideInterval = setInterval(() => {
    moveSlide(1);
  }, 4000); // Change slides every 4 seconds
}

function moveSlide(n) {
  showSlide((slideIndex += n));
}

function currentSlide(n) {
  showSlide((slideIndex = n - 1));
}

function showSlide(n) {
  const slides = document.querySelectorAll(".slides img");
  const dots = document.querySelectorAll(".dot");
  const slider = document.querySelector(".slider");

  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide, index) => {
    slide.classList.remove("active");
    dots[index].classList.remove("active");
  });

  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");

  // Change the body background to match the current slide
  slider.style.backgroundImage = `url(${slides[slideIndex].src})`;

  // Add animation
  slider.style.transition = "background-image 0.3s";
}

