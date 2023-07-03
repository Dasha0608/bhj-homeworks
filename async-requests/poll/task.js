const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers'); 

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.onload = function() {
     const response = JSON.parse(xhr.responseText);
    pollTitle.innerText = response.data.title;
    const answers = response.data.answers;
    for (let i = 0; i < answers.length; i++) {
        const button = document.createElement('button');
        button.classList.add('poll__answer');
        button.textContent = answers[i];
        pollAnswers.appendChild(button);
        button.addEventListener('click', function(){
            alert ('Спасибо, ваш голос засчитан!');
        })
    }
}