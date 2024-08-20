export default class Slide {
  container: Element;
  slides: Element[];
  controls: Element;
  time: number;
  index: number;
  slide: Element;

  constructor(
    container: Element,
    slides: Element[],
    controls: Element,
    time: number = 5000
  ) {
    this.container = container;
    this.slides = slides;
    this.controls = controls;
    this.time = time;

    this.index = 0;
    this.slide = this.slides[this.index];

    console.log(slides, container, controls, time);

    this.show(0);
  }

  show(index: number) {
    this.index = index;
    this.slide = this.slides[this.index];

    this.slides.forEach((slide) => this.hide(slide));
    this.slide.classList.add("active");
  }

  hide(element: Element) {
    element.classList.remove("active");
  }
}
