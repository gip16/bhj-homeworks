const signin = document.querySelector('#signin');
const form = document.querySelector('#signin__form');
const welcome = document.querySelector('#welcome');
const userId = document.querySelector('#user_id');
const clear = document.querySelector('#clear');

if (localStorage.id) {
  signin.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
  clear.classList.add('signin_active');
  userId.textContent = localStorage.id;
}

form.addEventListener('submit', (e) => {
  const xhr = new XMLHttpRequest();
  const formData = new FormData(form);

  e.preventDefault();

  xhr.addEventListener('load', () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 201) {
      let responceObj = JSON.parse(xhr.response);
      if (responceObj.success) {
        e.target.reset();
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        clear.classList.add('signin_active');
        userId.textContent = responceObj.user_id;
        localStorage.setItem('id', responceObj.user_id);
      } else {
        alert('Неверный логин или пароль');
        e.target.reset();
      }
    }
  });
  
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  xhr.send(formData);
});

clear.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.removeItem('id');
  signin.classList.add('signin_active');
  welcome.classList.remove('welcome_active');
  clear.classList.remove('signin_active');
});