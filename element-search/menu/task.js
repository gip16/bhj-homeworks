const links = document.querySelectorAll('.menu__link');

Array.from(links).forEach(link => {
  function clickOnMenu() {
    if (link.closest('.menu_sub') !== null) {
      link.closest('.menu_sub').classList.add('menu_active');
      return false;
    }
  };
  link.onclick = clickOnMenu;
});