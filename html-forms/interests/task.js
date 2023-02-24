const checkboxes = document.querySelectorAll('.interest__check');

for (let checkbox of checkboxes) {
  checkbox.addEventListener('change', (e) => {
    const liCollection = checkbox.closest('.interest').querySelectorAll('.interests>.interest');
    for (let li of liCollection) {
      const nestedCheckbox = li.firstElementChild.firstElementChild;
      if (!nestedCheckbox.checked) {
        nestedCheckbox.checked = true;
      } else {
        nestedCheckbox.checked = false;
      }
    }
  });
}