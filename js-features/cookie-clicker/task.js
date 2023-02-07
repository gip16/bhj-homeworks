const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
cookie.onclick = function() {
  count.textContent++; 
  click.width = (click.width === 200) ? 300 : 200;
};