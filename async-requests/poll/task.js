const title = document.querySelector('#poll__title');
const answers = document.querySelector('#poll__answers');
const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    let responceObj = JSON.parse(xhr.response);
    let answersArr = responceObj['data']['answers'];

    title.innerHTML = responceObj['data']['title'];
    for (let answer of answersArr) {
      answers.insertAdjacentHTML('beforeend', `
        <button class="poll__answer">${answer}</button>
      `);
      answers.lastElementChild.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
      });
    }
  }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();