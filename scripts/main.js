function $(id, slectAll = false) {
  return slectAll ? document.querySelectorAll(id) : document.querySelector(id);
}

const reviewsConainer = document.querySelectorAll(".reviews-container");
const reviewsSection = $(".reviews-section");
const arrowRight = $(".arrow-right");
const arrowLeft = $(".arrow-left");
const lines = $(".lines");
const hamMenu = $(".ham-menu");
const hamburgerMenu = $(".hamburger-menu");
const plus = $(".plus");
const faqs = $(".faqs");
const faqsText = $(".faqs-text", true);
const plusLine = $(".plus-line", true);

hamburgerMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("hide");
  document.body.classList.toggle("overflow-hiden");
});

faqs.addEventListener("click", function (e) {
  if (e.target.closest(".question-container")) {
    console.log("ok");
    e.target.closest(".question-container").classList.toggle("show-question");
    e.target
      .closest(".question-container")
      .children[0].children[1].children[1].classList.toggle("rotate-line");
  }
});
