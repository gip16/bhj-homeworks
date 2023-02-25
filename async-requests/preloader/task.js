const img = document.querySelector('#loader');
const items = document.querySelector('#items');
const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    img.classList.remove('loader_active');
    let responceObj = JSON.parse(xhr.response);
    let valute = {};
    valute = responceObj["response"]['Valute'];
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