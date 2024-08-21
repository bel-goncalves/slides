import Timeout from "./Timeout.js";
export default class Slide {
    container;
    slides;
    controls;
    time;
    index;
    slide;
    timeout;
    paused;
    pausedTimeout;
    constructor(container, slides, controls, time = 5000) {
        this.container = container;
        this.slides = slides;
        this.controls = controls;
        this.time = time;
        this.index = 0;
        this.slide = this.slides[this.index];
        this.timeout = null;
        this.paused = false;
        this.pausedTimeout = null;
        this.init();
    }
    show(index) {
        this.index = index;
        this.slide = this.slides[this.index];
        this.slides.forEach((slide) => this.hide(slide));
        this.slide.classList.add("active");
        this.auto(this.time);
    }
    hide(element) {
        element.classList.remove("active");
    }
    init() {
        this.addControls();
        this.show(this.index);
    }
    addControls() {
        const prevButton = document.createElement("button");
        const nextButton = document.createElement("button");
        this.controls.appendChild(prevButton);
        this.controls.appendChild(nextButton);
        prevButton.innerText = "Slide anterior";
        nextButton.innerText = "Próximo slide";
        prevButton.addEventListener("pointerup", () => this.prev());
        nextButton.addEventListener("pointerup", () => this.next());
        this.controls.addEventListener("pointerdown", () => this.pause());
        this.controls.addEventListener("pointerup", () => this.continue());
    }
    prev() {
        if (this.paused)
            return;
        const prev = this.index > 0 ? this.index - 1 : this.slides.length - 1;
        this.show(prev);
    }
    next() {
        if (this.paused)
            return;
        const next = this.index + 1 < this.slides.length ? this.index + 1 : 0;
        this.show(next);
    }
    auto(time) {
        this.timeout?.clear();
        this.timeout = new Timeout(() => this.next(), time);
    }
    pause() {
        console.log("pausou");
        this.pausedTimeout = new Timeout(() => {
            this.paused = true;
        }, 300);
    }
    continue() {
        console.log("continuou");
        this.pausedTimeout?.clear();
        if (this.paused) {
            this.paused = false;
            this.timeout?.continue();
        }
    }
}
//# sourceMappingURL=Slide.js.map