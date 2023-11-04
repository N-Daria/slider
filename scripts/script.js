// элементы слайдера и константы
const slidersData = [
  {
    id: 1,
    url: "./img/main-banners_slider2.png",
    name: "Подбор участка для жизни",
  },
  {
    id: 0,
    url: "./img/main-banners_slider1.png",
    name: "Строительство в ипотеку от 5% на весь срок",
  },
  {
    id: 2,
    url: "./img/main-banners_slider3.png",
    name: "Начните строительство",
  },
];
const sliderContainer = document.querySelector(".content");
const slider = document.querySelector(".slider");

class Slider {
  constructor(data) {
    this.slideIndex = 1;
    this.data = data;
    this.sliderTemplate = document.querySelector("#sliderTemplate");

    // данные для будущих элементов
    this.slideLeft = null;
    this.slideCentral = null;
    this.slideRight = null;
    this.prevButton = null;
    this.nextButton = null;
  }

  generateTemplate() {
    return this.sliderTemplate.content.querySelector(".slider").cloneNode(true);
  }

  createSliderImage(block, data) {
    block.querySelector(".slider__image").setAttribute("src", data.url);
    block.querySelector(".slider__image").setAttribute("alt", data.name);
  }

  setSliders() {
    // левый слайд
    this.createSliderImage(
      this.slideLeft,
      this.data[this.slideIndex - 1] || this.data[this.data.length - 1]
    );

    // центральный слайд
    this.createSliderImage(this.slideCentral, this.data[this.slideIndex]);

    // правый слайд
    this.createSliderImage(
      this.slideRight,
      this.data[this.slideIndex + 1] || this.data[0]
    );
    // }
  }

  // установка новых значений в шаблон
  getSlider() {
    this.slider = this.generateTemplate();

    this.slideLeft = this.slider.querySelector(".slider__image-block_left");
    this.slideCentral = this.slider.querySelector(
      ".slider__image-block_center"
    );
    this.slideRight = this.slider.querySelector(".slider__image-block_right");

    this.prevButton = this.slideCentral.querySelector(".slider__button_prev");
    this.nextButton = this.slideCentral.querySelector(".slider__button_next");

    this.setSliders();

    this.setEventListeners();

    return this.slider;
  }

  setEventListeners() {
    this.prevButton.addEventListener("click", () => this.switchLeft());
    this.nextButton.addEventListener("click", () => this.switchRight());
  }

  switchRight() {
    this.slideIndex = this.slideIndex + 1;

    if (this.slideIndex >= this.data.length) {
      // отсчет сначала
      this.slideIndex = 0;
    }

    this.setSliders();
  }

  switchLeft() {
    this.slideIndex = this.slideIndex - 1;

    if (this.slideIndex < 0) {
      // отсчет с конца
      this.slideIndex = this.data.length - 1;
    }

    this.setSliders();
  }
}

const initialRender = () => {
  const newSlider = new Slider(slidersData);
  sliderContainer.prepend(newSlider.getSlider());
};

initialRender();
