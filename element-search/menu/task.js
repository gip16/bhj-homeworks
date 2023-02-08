const links = Array.from(document.querySelectorAll('.menu__link'));

links.forEach(link => {
  link.onclick = () => {
    if (link.closest('.menu_sub') !== null) {
      link.closest('.menu_sub').classList.add('menu_active');
      return false;
    }
  };
});