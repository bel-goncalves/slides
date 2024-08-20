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

    this.init();
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

  private init() {
    this.addControls();
    this.show(this.index);
  }

  private addControls() {
    const prevButton = document.createElement("button");
    const nextButton = document.createElement("button");

    this.controls.appendChild(prevButton);
    this.controls.appendChild(nextButton);
    prevButton.innerText = "Slide anterior";
    nextButton.innerText = "Próximo slide";

    prevButton.addEventListener("pointerup", () => this.prev());
    nextButton.addEventListener("pointerup", () => this.next());
  }

  prev() {
    const prev = this.index > 0 ? this.index - 1 : this.slides.length - 1;
    this.show(prev);
  }

  next() {
    const next = this.index + 1 < this.slides.length ? this.index + 1 : 0;
    this.show(next);
  }
}
