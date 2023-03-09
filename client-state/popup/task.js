const modal = document.querySelector('#subscribe-modal');
const close = document.querySelector('.modal__close');

close.addEventListener('click', () => modal.classList.remove('modal_active'));

function getCookie() {
  return document.cookie.split('; ').reduce((acc, item) => {
    const [name, value] = item.split('=');
    acc[name] = value;
    return acc;
  }, {});
}

const cookie = getCookie();

if (!cookie.modal) {
  modal.classList.add('modal_active');
  document.cookie = 'modal=true';
}