const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
const items = document.querySelectorAll('.slider__item');

function prevSlide() {
    let slideNumber = Array.from(items).findIndex(element => element.classList.contains('slider__item_active'));
    Array.from(items)[slideNumber].classList.remove('slider__item_active');
    if (slideNumber > 0) {
        slideNumber--;
    } else {
        slideNumber = items.length - 1;
    }
    return Array.from(items)[slideNumber].classList.add('slider__item_active');
};
    
function nextSlide() {
    let slideNumber = Array.from(items).findIndex(element => element.classList.contains('slider__item_active'));
    Array.from(items)[slideNumber].classList.remove('slider__item_active');
    if (slideNumber < items.length - 1) {
        slideNumber ++ 
    } else {
        slideNumber = 0;
    }
    return Array.from(items)[slideNumber].classList.add('slider__item_active')
}

prev.onclick = prevSlide;
next.onclick = nextSlide;



