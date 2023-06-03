let tab = document.querySelectorAll('.tab');
let tabContent = document.querySelectorAll('.tab__content');

Array.from(tab).forEach((element, index) => {
    element.onclick = function () {
        let activeIndex = Array.from(tab).findIndex(e =>
            e.classList.contains('tab_active'));
            Array.from(tab)[activeIndex].classList.remove('tab_active');
            Array.from(tabContent)[activeIndex].classList.remove('tab__content_active');
            element.classList.add('tab_active');
            Array.from(tabContent)[index].classList.add('tab__content_active');
    }
})