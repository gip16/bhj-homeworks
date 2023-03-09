const modal = document.querySelector('#subscribe-modal');
const close = document.querySelector('.modal__close');

close.addEventListener('click', () => modal.classList.remove('modal_active'));

if (!document.cookie) {
  modal.classList.add('modal_active');
  document.cookie = 'modal=true';
}