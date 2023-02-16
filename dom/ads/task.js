const cards = Array.from(document.querySelectorAll('.card'));
let spanId = 1;

function spanRotation() {
  cards.forEach(card => {
    const currentSpans = Array.from(card.querySelectorAll('.rotator__case'));
    currentSpans.forEach(span => {
      span.classList.remove('rotator__case_active');
    });
    currentSpans[spanId].classList.add('rotator__case_active');
    spanId++;
    if (spanId === currentSpans.length) {
      spanId = 0;
    }
  })
}; 

setInterval(spanRotation, 1000);