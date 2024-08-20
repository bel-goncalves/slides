export default class Slide {
    container;
    slides;
    controls;
    time;
    index;
    slide;
    constructor(container, slides, controls, time = 5000) {
        this.container = container;
        this.slides = slides;
        this.controls = controls;
        this.time = time;
        this.index = 0;
        this.slide = this.slides[this.index];
        console.log(slides, container, controls, time);
        this.show(0);
    }
    show(index) {
        this.index = index;
        this.slide = this.slides[this.index];
        this.slides.forEach((slide) => this.hide(slide));
        this.slide.classList.add("active");
    }
    hide(element) {
        element.classList.remove("active");
    }
}
//# sourceMappingURL=Slide.js.map