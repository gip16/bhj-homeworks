const tabs = Array.from(document.querySelectorAll('.tab'));

function clickOnTab(e) {
  const contents = Array.from(e.currentTarget.closest('.tabs').querySelectorAll('.tab__content'));
  const currentTabs = Array.from(e.currentTarget.closest('.tabs').querySelectorAll('.tab'));
  let indexOfTab = currentTabs.indexOf(e.currentTarget);

  currentTabs.forEach(tab => tab.classList.remove('tab_active'));
  e.currentTarget.classList.add('tab_active');

  contents.forEach(content => content.classList.remove('tab__content_active'));
  contents[indexOfTab].classList.add('tab__content_active');
}

tabs.forEach(tab => tab.addEventListener('click', clickOnTab));