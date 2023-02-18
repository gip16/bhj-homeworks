const value = document.querySelectorAll('.dropdown__value');
const list = document.querySelectorAll('.dropdown__list');
const links = document.querySelectorAll('.dropdown__link');

value.forEach(item => item.addEventListener('click', () => {
  item.nextElementSibling.classList.toggle('dropdown__list_active');
}));

function dropdown(e) {
  e.preventDefault();
  e.currentTarget.closest('.dropdown__list').classList.remove('dropdown__list_active');
  e.currentTarget.closest('.dropdown').querySelector('.dropdown__value').textContent = this.textContent;
}

links.forEach(link => link.addEventListener('click', dropdown));