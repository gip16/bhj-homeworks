const textarea = document.querySelector('#editor');
const btn = document.querySelector('#button');

textarea.addEventListener('input', () => {
  localStorage.setItem('text', textarea.value);
});

document.addEventListener('DOMContentLoaded', () => {
  textarea.value = localStorage.getItem('text');
});

btn.addEventListener('click', (e) => {
  e.preventDefault();
  textarea.value = '';
  localStorage.removeItem('text');
});