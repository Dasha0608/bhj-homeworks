let reveals = document.querySelectorAll('.reveal');

let revealVisible = function() {
    reveals.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight && element.getBoundingClientRect().bottom >= 0) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active')
        }
    });      
}

window.addEventListener('scroll', revealVisible);
