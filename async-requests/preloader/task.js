const img = document.querySelector('#loader');
const items = document.querySelector('#items');
const xhr = new XMLHttpRequest();
let responceObj;
let valute = {};

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    responceObj = JSON.parse(xhr.responseText);
    valute = responceObj["response"]['Valute'];
    img.classList.remove('loader_active')
    for (let key in valute) {
      items.insertAdjacentHTML('beforeend', `
        <div class="item">
          <div class="item__code">${valute[key]['CharCode']}</div>
          <div class="item__value">${valute[key]['Value']}</div>
          <div class="item__currency">руб.</div>
        </div>
      `);
    }
  }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();