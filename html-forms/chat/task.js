const chat = document.querySelector('.chat-widget');
const widgetInput = document.querySelector('.chat-widget__input');
const widgetMessages = document.querySelector('.chat-widget__messages');
const widgetContainer = document.querySelector('.chat-widget__messages-container')
const allMessages = [
    "Вы не купили ни одного товара для того, чтобы так разговаривать",
    "Кто тут?",
    "Где ваша совесть?",
    "К сожалению, все операторы сейчас заняты. Не пишите нам больше",
    "Добрый день! До свидания",
    "Мне нечего вам продавать"
];

chat.addEventListener('click', function() {
    chat.classList.add('chat-widget_active')
});

let time = new Date().toLocaleTimeString('ru-RU', {hour: 'numeric', minute: 'numeric'});

const botAnswer = function() {
    let answer = Math.floor(Math.random() * allMessages.length);
    widgetMessages.innerHTML += `
    <div class = "message">
    <div class = "message__time">${time}</div>
    <div class = "message__text">${allMessages[answer]}</div>
    </div>`;
    widgetContainer.scrollTop = widgetContainer.scrollHeight;
};

const sendMessage = (event) => {
    if (event.key !== "Enter") {
        return;
    }
    const text = widgetInput.value.trim();
    if (!text) {
        return;
    }
    widgetInput.value = "";
    widgetMessages.innerHTML += `
    <div class = "message message_client">
        <div class = "message__time">${time}</div>
        <div class = "message__text">${text}</div>
    </div>`;

    botAnswer();
};
 
chat.addEventListener ('keyup', sendMessage);    



