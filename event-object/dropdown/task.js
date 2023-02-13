// Решение для нескольких кнопок

const value = Array.from(document.querySelectorAll('.dropdown__value'));
const list = Array.from(document.querySelectorAll('.dropdown__list'));
const links = Array.from(document.querySelectorAll('.dropdown__link'));

value.forEach(item => item.addEventListener('click', () => {
  if (!item.nextElementSibling.classList.contains('dropdown__list_active')) {
    item.nextElementSibling.classList.add('dropdown__list_active');
  } else {
    item.nextElementSibling.classList.remove('dropdown__list_active');
  }
}));

function dropdown(e) {
  e.preventDefault();
  e.currentTarget.closest('.dropdown__list').classList.remove('dropdown__list_active');
  e.currentTarget.closest('.dropdown').querySelector('.dropdown__value').textContent = this.textContent;
}

links.forEach(link => link.addEventListener('click', dropdown));

// Решение для одной кнопки

// const value = document.querySelectorAll('.dropdown__value');
// const list = document.querySelectorAll('.dropdown__list');
// const links = Array.from(document.querySelectorAll('.dropdown__link'));

// value.addEventListener('click', () => {
//   if (!list.classList.contains('dropdown__list_active')) {
//     list.classList.add('dropdown__list_active');
//   } else {
//     list.classList.remove('dropdown__list_active');
//   }
// });

// function dropdown(e) {
//   e.preventDefault();
//   list.classList.remove('dropdown__list_active');
//   value.textContent = this.textContent;
// }

// links.forEach(link => link.addEventListener('click', dropdown));