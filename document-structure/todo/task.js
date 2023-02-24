const input = document.querySelector('#task__input');
const addButton = document.querySelector('#tasks__add');
const taskList = document.querySelector('#tasks__list');

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (input.value.trim()) {
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