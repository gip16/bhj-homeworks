const form = document.querySelector('#tasks__form');
const input = document.querySelector('#task__input');
const addButton = document.querySelector('#tasks__add');
const taskList = document.querySelector('#tasks__list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

input.addEventListener('keyup', (e) => {
  if (e.code === 'Enter' && input.value) {
    e.preventDefault();
    taskList.insertAdjacentHTML('afterbegin', `
      <div class="task">
        <div class="task__title">
          ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>
    `);
    input.value = '';
    taskList.firstElementChild.lastElementChild.addEventListener('click', (e) => {
      e.preventDefault();
      e.currentTarget.parentElement.remove();
    });
  }
});

addButton.addEventListener('click', (e) => {
  if (input.value) {
    e.preventDefault();
    taskList.insertAdjacentHTML('afterbegin', `
      <div class="task">
        <div class="task__title">
          ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>
    `);
    input.value = '';
    taskList.firstElementChild.lastElementChild.addEventListener('click', (e) => {
      e.preventDefault();
      e.currentTarget.parentElement.remove();
    });
  }
});