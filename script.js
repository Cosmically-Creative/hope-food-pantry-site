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
