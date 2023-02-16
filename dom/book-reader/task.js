const fontSizeButtons = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('#book');

function clickOnFont(e) {
  fontSizeButtons.forEach(button => button.classList.remove('font-size_active'));
  e.currentTarget.classList.add('font-size_active');
  book.classList.remove('book_fs-big');
  if (e.currentTarget.classList.contains('font-size_small')) {
    book.classList.add('book_fs-small');
  }
  if (e.currentTarget.classList.contains('font-size_big')) {
    book.classList.add('book_fs-big');
  }
};

fontSizeButtons.forEach(button => button.addEventListener('click', clickOnFont));