const links = document.querySelectorAll('.has-tooltip');

for (let link of links) {
  let tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.textContent = link.title;
  tooltip.style.left = `${link.offsetLeft}px`;
  tooltip.style.position = 'absolute';
  link.insertAdjacentElement('afterend', tooltip);

  link.addEventListener('click', (e) => {
    e.preventDefault();
    for (let link of links) {
      link.nextElementSibling.classList.remove('tooltip_active')
    }
    tooltip.classList.add('tooltip_active');
  });
}