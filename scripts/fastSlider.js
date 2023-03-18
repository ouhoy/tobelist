import {getAverageColor} from "./getAverageColor.js";
import {$} from "./controller.js"

export class Slider {
    constructor(container, options = {timer: 0, getAverageColor: false}) {

        this.curSlide = 0;
        this.container = container;
        this.options = options;


        // TODO timer duration should be given by the user via an object.
        this.sliderTimer =
            this.options.timer && setInterval(() => this.nextSlide(), this.options.timer * 1000);


        // Slider Elements
        this.img = $("img", true);
        this.slides = $(`${container} .slide`, true);

        this.dotContainer = $(`${container} .dots`);

        this.sliderBtnRight = $(`${container} .button-right`);
        this.sliderBtnLeft = $(`${container} .button-left`);

        // Place every slide
        // TODO placement of each slide shouldn't be static
        this.slides.forEach(
            (slide, i) => (slide.style.transform = ` translateX(${100 * i}%)`)
        );

        this.#createDots();
        this.gotToSlide(0);

        // Add transform transition to each slide
        // TODO transform duration should be given by the user
        window.onload = () => {
            this.slides.forEach((el) => (el.style.transition = "transform .5s"));
        };

        // Check if slider's elements are available in the DOM
        this.sliderBtnRight &&
        this.sliderBtnRight.addEventListener("click", this.nextSlide.bind(this));

        this.sliderBtnLeft &&
        this.sliderBtnLeft.addEventListener("click", this.prevSlide.bind(this));

        // TODO if no dots is available set activate dots to false in the options object
        this.dotContainer &&
        $(`${container} .dots__dot`, true)[0].classList.add("dots__dot--active");

        this.dotContainer &&
        this.dotContainer.addEventListener("click", this.dotsSliderHandler.bind(this));
    };

    dotsSliderHandler(e) {
        if (e.target.classList.contains("dots__dot")) {
            const {slider} = e.target.dataset;
            this.curSlide = slider;
            this.gotToSlide(slider);
            this.activateDots(slider);
        }
    }

    activateDots(slides) {

        if (!this.dotContainer) return;

        $(`${this.container} .dots__dot`, true).forEach((dot) =>
            dot.classList.remove("dots__dot--active")
        );
        $(`${this.container} .dots__dot[data-slider="${slides}"]`).classList.add(
            "dots__dot--active"
        );

        // Reset slider timer on click on one of the dots
        if (this.options.timer) {
            clearInterval(this.sliderTimer);
            this.sliderTimer = setInterval(() => this.nextSlide(), this.options.timer * 1000);
        }

        this.options.getAverageColor && this.getAverageColor();
    }

    #createDots() {
        if (!this.dotContainer) return;
        this.slides.forEach((_, i) => {
            const insertedHTML = `<div class="dots__dot" data-slider=${i}></div>`;
            this.dotContainer.insertAdjacentHTML("beforeend", insertedHTML);
        });
    }

    gotToSlide(slide) {
        this.slides.forEach((s, i) => {
            s.style.transform = ` translateX(${100 * (i - slide)}%)`;
        });
    }

    nextSlide() {
        if (this.options.timer) {
            clearInterval(this.sliderTimer);
            this.sliderTimer = setInterval(() => this.nextSlide(), this.options.timer * 1000);
        }
        this.curSlide++;

        if (this.curSlide === this.slides.length) {
            this.curSlide = 0;
        }

        this.gotToSlide(this.curSlide);
        this.activateDots(this.curSlide);
        return this.curSlide
    }

    prevSlide() {
        if (this.options.timer) {
            clearInterval(this.sliderTimer);
            this.sliderTimer = setInterval(() => this.nextSlide(), this.options.timer * 1000);
        }
        this.curSlide--;
        if (this.curSlide < 0) {
            this.curSlide = this.slides.length - 1;
        }
        this.gotToSlide(this.curSlide);
        this.activateDots(this.curSlide);
        return this.curSlide
    }

    // TODO average color should return the RGB value only
    getAverageColor() {
        const {R, G, B} = getAverageColor(this.img[this.curSlide], 4);

        // return {R,G,B}

        document.body.style.background = `rgb(${R}, ${G},${B})`;
        if (this.sliderBtnRight) {
            this.sliderBtnRight.style.background = `rgb(${R + 11}, ${G + 11},${B + 8})`
        }

        if (this.sliderBtnLeft) {
            this.sliderBtnLeft.style.background = `rgb(${R + 11}, ${G + 11},${B + 8})`
        }


    }


}