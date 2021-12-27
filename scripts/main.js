function $(id) {
    return document.querySelector(id)
}
const reviewsConainer = document.querySelectorAll(".reviews-container");
const reviewsSection = $(".reviews-section");
const arrowRight = $(".arrow-right");
const arrowLeft = $(".arrow-left");
const lines = $(".lines");

const plus = document.getElementsByClassName("plus");
const faqs =  document.getElementsByClassName("faqs");
const faqsText = document.querySelectorAll(".faqs-text");
const plusLine = document.querySelectorAll(".plus-line");
 
for (let i = 0; i < faqs.length; i++) {
    plus[i].addEventListener("click", function(){
        this.classList.toggle(
            faqsText[i].classList.toggle("hide")
        );
        this.classList.toggle(plusLine[i].classList.toggle("plus-rotate"));
    })
    
}


var currentSlide = 0;

var numberOfReviews = reviewsConainer.length;


function init() {
    reviewsConainer.forEach((review, i)=>{
        review.style.left = i * 100 + "%"
    })
};
init();

for (var i =0; i < numberOfReviews; i++ ) {
    linesMaker()
    var lineBackground = document.querySelectorAll(".line");

}

function linesMaker(num) {
    const line =  document.createElement("div");
    line.classList.add("line")
    lines.appendChild(line)
   
}

function changeLineColor(before, after) {
    lineBackground[currentSlide].classList.add("silected-slide");


}
var lineColor =  changeLineColor();



arrowRight.addEventListener("click", ()=>{
    
    currentSlide++;
    lineBackground[currentSlide -1].classList.remove("silected-slide");

    if (currentSlide >= numberOfReviews ) {
        goToSLide(0);
        return  
    }
    goToSLide(currentSlide);

});
arrowLeft.addEventListener("click", ()=>{

    if (currentSlide  <= 0) {
        lineBackground[currentSlide +1].classList.remove("silected-slide");
        lineBackground[0].classList.remove("silected-slide");

        goToSLide(numberOfReviews - 1);

        return
    }
    currentSlide--;
    lineBackground[currentSlide +1].classList.remove("silected-slide");
    goToSLide(currentSlide)
});

function goToSLide(slideNumber) {

    reviewsSection.style.transform =
    "translateX(-" + 100 * slideNumber + "%)";
    const crurrentSlider = currentSlide;
    currentSlide = slideNumber;
 
    changeLineColor(crurrentSlider, slideNumber)


}

for (let i = 0; i <numberOfReviews; i++) {


    lineBackground[i].addEventListener("click", ()=>{
        goToSLide(i)
    })
    
    
}

   

