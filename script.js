"use strict";

// FAQ dropdowns
document.addEventListener("DOMContentLoaded", () => {
  const faqButtons = document.querySelectorAll(".btn-faq");

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const question = button.closest(".question");
      const text = question.querySelector(".question-text");
      const icon = button.querySelector("img");

      // Toggle the hidden state
      text.classList.toggle("hidden");
      question.classList.toggle("open");

      // Switch icon
      if (text.classList.contains("hidden")) {
        icon.src = "img/icons/plus.svg";
        icon.alt = "button icon to view FAQ";
      } else {
        icon.src = "img/icons/minus.svg";
        icon.alt = "button icon to minimize FAQ";
      }
    });
  });
});

// Mobile navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const navLinks = document.querySelectorAll(".main-nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    headerEl.classList.remove("nav-open");
  });
});

// Scroll Animations
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = { root: null, rootMargin: "0px", threshold: 0.75 };
  const onIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(onIntersection, observerOptions);
  const elementsToAnimate = document.querySelectorAll(
    ".animate-on-scroll, .animate-on-scroll-delay"
  );
  elementsToAnimate.forEach((el) => observer.observe(el));
});
