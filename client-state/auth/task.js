const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

form.addEventListener('submit', (event) => {
    event.preventDefault();
})
signin.classList.add('signin_active');
form.onsubmit = (() => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    let formData = new FormData(form);
    xhr.send(formData);

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.response.success) {
                localStorage.setItem('user_id', xhr.response.user_id);
                userId.textContent = localStorage.getItem('user_id');
                signin.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
            } else {
                alert ('Неверный логин/пароль');
            }
        }
    })
})

window.addEventListener('load', ()=> {
    savedId = localStorage.getItem('user_id');
    if (savedId) {
        userId.textContent = savedId;
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
    }
})
