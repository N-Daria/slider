// элементы слайдера и константы
const slidersData = [
  {
    id: 1,
    url: "./img/main-banners_slider2.png",
    name: "Строительство в ипотеку от 5% на весь срок",
  },
  {
    id: 2,
    url: "./img/main-banners_slider1.png",
    name: "Подбор участка для жизни",
  },
  {
    id: 3,
    url: "./img/main-banners_slider3.png",
    name: "Начните строительство",
  },
];
const sliderContainer = document.querySelector(".content");
const slider = document.querySelector(".slider");

// const prevButton = document.querySelector(".slider__button_prev");
// const nextButton = document.querySelector(".slider__button_next");

// const slides = Array.from(slider.querySelectorAll(".slider__image-block"));
// const slideCount = slides.length;
// let slideIndex = 0;

// обработчики событий для кнопок
// prevButton.addEventListener("click", showPreviousSlide);
// nextButton.addEventListener("click", showNextSlide);

// показ предыдущего слайда
function showPreviousSlide() {
  console.log("prev");

  // slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  // updateSlider();
}

// показ следующего слайда
function showNextSlide() {
  console.log("next");

  // slideIndex = (slideIndex + 1) % slideCount;
  // updateSlider();
}

// обновление отображения слайдера
function updateSlider() {
  // slides.forEach((slide, index) => {
  //   if (index === slideIndex) {
  //     slide.style.display = "block";
  //   } else {
  //     slide.style.display = "none";
  //   }
  // });
}

// Инициализация слайдера
updateSlider();
// ___________________________________________________________________________
class Slider {
  constructor(data) {
    // this.id = data.id;
    // this.alt = data.name;
    // this.img = data.url;

    this.data = data;
    this.sliderTemplate = document.querySelector("#sliderTemplate");
  }

  generateTemplate() {
    return this.sliderTemplate.content.querySelector(".slider").cloneNode(true);
  }

  createSliderImage(block, data) {
    block.querySelector(".slider__image").setAttribute("src", data.url);
    block.querySelector(".slider__image").setAttribute("alt", data.name);
  }

  // установка новых значений в шаблон
  getSlider() {
    this.slider = this.generateTemplate();

    this.slideLeft = this.slider.querySelector(".slider__image-block_left");
    this.slideCentral = this.slider.querySelector(
      ".slider__image-block_center"
    );
    this.slideRight = this.slider.querySelector(".slider__image-block_right");

    // левый слайд
    this.createSliderImage(this.slideLeft, this.data[0]);
    // центральный слайд
    this.createSliderImage(this.slideCentral, this.data[1]);
    // правый слайд
    this.createSliderImage(this.slideRight, this.data[2]);

    this.setEventListeners();

    return this.slider;
  }

  setEventListeners() {
    console.log("setEventListeners");
  }
}

const initialRender = () => {
  const newSlider = new Slider(slidersData);
  sliderContainer.prepend(newSlider.getSlider());
};

initialRender();
