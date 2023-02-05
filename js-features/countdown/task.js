const timer = document.getElementById('timer');
function timerCounter() {
  timer.textContent = Number(timer.textContent) - 1;
  if (Number(timer.textContent) === 0) {
    clearInterval(intervalId);
    alert('Вы победили в конкурсе!');
  }
}
let intervalId = setInterval(timerCounter, 1000);