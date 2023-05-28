const modalMain = document.getElementById('modal_main');
const modalCloses = document.querySelectorAll('modal__close');
const modal = document.getElementsByClassName('modal');
const modalSuccess = document.getElementById('modal_success');
const showSuccess = document.querySelector('.show-success');

modalMain.className = 'modal modal_active';

for (let modalClose of modalCloses) {
    modalClose.onclick = () => {
        modalMain.className('modal');
        modalSuccess.className('modal');
    }
}

showSuccess.onclick = () => {
    if (modalMain.className === 'modal modal_active') {
        modalSuccess.className = 'modal modal_active';
        modalMain.className = 'modal';
    }
}