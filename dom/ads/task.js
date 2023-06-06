const rotator = document.querySelectorAll('.rotator__case');

let activeIndex = 0;

setInterval(() => {
    activeIndex += 1;
    rotator.forEach(e => {
        e.classList.remove('rotator__case_active')
    })
    if (activeIndex === rotator.lenght - 1) {
        activeIndex = 0;
    }
    rotator[activeIndex].classList.add('rotator__case_active');
}, 1000)
