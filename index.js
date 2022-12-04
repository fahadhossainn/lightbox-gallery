"use strict";
const parent = document.querySelector(".slider__container");
const slides = document.querySelectorAll(".slide");
const left = document.querySelector(".slider__btn--left");
const right = document.querySelector(".slider__btn--right");
const overlay = document.querySelector(".overlay");
const container = document.querySelector(".container");
let maxSlide = slides.length;
let curSlide = 0;

//Go to a specific  Slide
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
//Next Slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};
//previous Slide
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};
//Initiate Lightbox effect
const initiateLightbx = (e) => {
  container.classList.add("hidden");
  overlay.classList.remove("hidden");
  parent.classList.remove("hidden");
  const targetsrc = e.target.getAttribute("src");
  let curr;
  slides.forEach((s, i) => {
    if (s.querySelector("img").getAttribute("src") === targetsrc) {
      curr = i;
      return;
    }
  });
  goToSlide(curr);
};
//toggle visibility
const toggleVisibility = () => {
  container.classList.remove("hidden");
  overlay.classList.add("hidden");
  parent.classList.add("hidden");
};

//Event Handler Functions
container.addEventListener("click", initiateLightbx);
overlay.addEventListener("click", toggleVisibility);
left.addEventListener("click", prevSlide);
right.addEventListener("click", nextSlide);

window.addEventListener("keydown", (e) => {
  if (parent.classList.contains("hidden")) return;
  if (e.key === "ArrowRight") nextSlide(curSlide);
  if (e.key === "ArrowLeft") prevSlide(curSlide);
  else return;
});
