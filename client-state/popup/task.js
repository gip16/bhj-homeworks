const modal = document.querySelector('#subscribe-modal');
const close = document.querySelector('.modal__close');

close.addEventListener('click', () => modal.classList.remove('modal_active'));

if (!localStorage.modal) {
modal.classList.add('modal_active');
  localStorage.setItem('modal', true);
}