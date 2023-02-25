const form = document.querySelector('#form');
const progress = document.querySelector('#progress');
const file = document.querySelector('#file');
const send = document.querySelector('#send');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();
  xhr.upload.addEventListener('progress', (e) => {
    progress.max = e.total;
    progress.value = e.loaded;
  });

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  const formData = new FormData(form);
  xhr.send(formData);
});

file.addEventListener('click', () => {
  progress.value = 0;
});