const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let i = 1; i <= 9; i++) {
  let hole = document.getElementById(`hole${i}`);
  function clickOnHole() {
    if (hole.className.includes('hole_has-mole')) {
      dead.textContent = Number(dead.textContent) + 1;
    } else {
      lost.textContent = Number(lost.textContent) + 1;
    }
    if (Number(dead.textContent) === 10) {
      alert('Вы победили!');
      dead.textContent = 0;
      lost.textContent = 0;
    } 
    if (Number(lost.textContent) === 5) {
      alert('Вы проиграли.');
      dead.textContent = 0;
      lost.textContent = 0;
    }
  };
  hole.onclick = clickOnHole;
}