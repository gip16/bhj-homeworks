const widgetSide = document.querySelector('.chat-widget__side');
const widget = document.querySelector('.chat-widget');
const input = document.querySelector('#chat-widget__input');
const messages = document.querySelector('#chat-widget__messages');
const scroll = document.querySelector('.chat-widget__messages-container');
const botMessages = [
  'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
  'Мы ничего не будем вам продавать',
  'До свидания',
  'Где ваша совесть?',
  'Кто тут?',
  'Не пишите нам больше'
];
let date = new Date().toLocaleTimeString().slice(0,-3);

widgetSide.addEventListener('click', () => {
  widget.classList.add('chat-widget_active');
});

input.addEventListener('keyup', (e) => {
  if (e.code === 'Enter' && input.value) {
    messages.innerHTML += `
      <div class="message message_client">
      <div class="message__time">${date}</div>
      <div class="message__text">${input.value}</div>
      </div>
      <div class="message">
      <div class="message__time">${date}</div>
      <div class="message__text">${botMessages[Math.floor(Math.random() * botMessages.length)]}</div>
      </div>
    `;
    input.value = '';
    scroll.scrollTop = scroll.scrollHeight;
  }
});