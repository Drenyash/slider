const sliderTrack = document.querySelector('.slider__track')
const fill = document.querySelector('.slider__fill_item')
const slides = document.querySelectorAll('.slider__item')
const leftBtn = document.querySelector('.slider__btn_left')
const rightBtn = document.querySelector('.slider__btn_right')
const dots = document.querySelector('.dots');

const MAX_SLIDES = slides.length;
const MIN_SLIDES = 0;
let currentSlide = 0;

let dotsArray = [];

for( let i = 0; i < MAX_SLIDES; i++) {
  const dot = document.createElement('div')
  dot.classList.add('dot')
  dotsArray.push(dot);
}

dotsArray[0].classList.add('dot-active')

for (let i = 0; i < dotsArray.length; i++) {
  dots.insertAdjacentElement('beforeend', dotsArray[i])
}

rightBtn.addEventListener('click', nextSlide)
leftBtn.addEventListener('click', prevSlide)

function changeSlide() {
  sliderTrack.style.transform = `translate3d(-${sliderTrack.offsetWidth * currentSlide}px, 0, 0)`
  fill.style.animation = 'fill 3s linear infinite';
  dotsArray.forEach((dot, i) => {
    dot.classList.remove('dot-active')
    dotsArray[currentSlide].classList.add('dot-active')
    dot.addEventListener('click', ()=> {
      currentSlide = i;
      fill.style.animation = ''
      changeSlide()
    })
  })
}

function nextSlide() {
  currentSlide == MAX_SLIDES - 1 ? currentSlide = 0 : currentSlide++;
  fill.style.animation = ''
  changeSlide();
}

function prevSlide() {
  currentSlide == MIN_SLIDES ? currentSlide = MAX_SLIDES - 1 : currentSlide--;
  fill.style.animation = ''
  changeSlide();
}

let next = setInterval(nextSlide, 3000)

changeSlide();