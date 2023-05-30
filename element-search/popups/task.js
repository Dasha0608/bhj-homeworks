const modalMain = document.getElementById('modal_main');
const modalCloses = document.querySelectorAll('.modal__close');
const modalSuccess = document.getElementById('modal_success');
const showSuccess = document.querySelector('.show-success');

modalMain.classList.add('modal_active');

/*for (let i = 0; i < modalCloses.length; i++) {*/
modalCloses.forEach(function(closeBtn) {
    closeBtn.onclick = function() {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.remove('modal_active');
    }
})

showSuccess.onclick = function() {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}


