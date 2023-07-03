const progress = document.getElementById('progress');
const form = document.getElementById('form');
const xhr = new XMLHttpRequest();

form.addEventListener('submit', (event) => {
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.upload.addEventListener('progress', (event) => {
        progress.value = event.loaded / event.total;
    });
    let data = new FormData();
    xhr.send(data);
    event.preventDefault();
})