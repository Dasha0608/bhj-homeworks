const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
const items = document.querySelectorAll('.slider__item');

let slideNumber = 0;

function changeSlide () {
    items.forEach((element, index) => {
        if (index === slideNumber) {
            element.classList.add('slider__item_active');
        } else element.classList.remove('slider__item_active');
    })
}

 function prevSlide() {
    slideNumber--;
    if (slideNumber >= items.length) {
        slideNumber = 0;
    } 
    changeSlide()
};
    
function nextSlide() {
    slideNumber++
    if (slideNumber < 0) {
        slideNumber = items.length - 1;
    } 
    changeSlide()
}

prev.onclick = prevSlide;
next.onclick = nextSlide;



