function $(id, slectAll = false) {
  return slectAll ? document.querySelectorAll(id) : document.querySelector(id);
}

const hamMenu = $(".ham-menu");
const hamburgerMenu = $(".hamburger-menu");
const faqs = $(".faqs");

hamburgerMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("hide");
  document.body.classList.toggle("overflow-hiden");
});

faqs.addEventListener("click", function (e) {
  if (!e.target.closest(".question-container")) return;
  e.target.closest(".question-container").classList.toggle("show-question");
  e.target
    .closest(".question-container")
    .children[0].children[1].children[1].classList.toggle("rotate-line");
});

//Show Sections On Scroll
const sections = $(".section", true);
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.05,
});

sections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
