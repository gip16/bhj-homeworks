const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
cookie.onclick = function() {
  clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
  if (cookie.width === 200) {
    cookie.width = 150;
  } else {
    cookie.width = 200;
  }
};