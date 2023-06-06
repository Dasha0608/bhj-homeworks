const fontSize = document.querySelectorAll('.font-size');
const book = document.querySelectorAll('.book');

Array.from(fontSize).forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        let prevIndex = Array.from(fontSize).findIndex(e => e.classList.contains('font-size_active'));
        Array.from(fontSize)[prevIndex].classList.remove('font-size_active');
        element.classList.add('font-size_active');

        if (element.dataset.size == 'big') {
            book.forEach(element => {
                element.classList.remove('book_fs-small');
                element.classList.add('book_fs-big');
            });
        } else if (element.dataset.size == 'small') {
            book.forEach(element => {
                element.classList.remove('book_fs-big');
                element.classList.add('book_fs-small');
            });
        } else {
            book.forEach(element => {
                element.classList.remove('book_fs-small');
                element.classList.remove('book_fs-big');
            });
        }

    })
})
