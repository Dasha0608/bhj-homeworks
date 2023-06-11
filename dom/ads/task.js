 const rotator = document.querySelectorAll('.rotator__case');

let activeIndex = 0;

setInterval(() => {
    if(rotator[activeIndex].classList.contains('rotator__case_active')) {
        rotator[activeIndex].classList.remove('rotator__case_active');
        activeIndex++;
    }

    
    if(activeIndex >= rotator.length) {
        activeIndex = 0;
    }
    
    rotator[activeIndex].classList.add('rotator__case_active');
}, 1000);
