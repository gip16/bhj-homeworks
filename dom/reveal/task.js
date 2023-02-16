const reveals = Array.from(document.querySelectorAll('.reveal'));

function isVisible(element) {
  const viewportHeight = window.innerHeight;
  const elementTop = element.getBoundingClientRect().top;

  if (elementTop < viewportHeight) {
    return true;
  }
  return false;
};

function viewport() {
  reveals.forEach(item => {
    if (isVisible(item)) {
      item.classList.add('reveal_active');
    }
  })
}

window.addEventListener('scroll', viewport);