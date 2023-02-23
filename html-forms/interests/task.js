const checkboxes = Array.from(document.querySelectorAll('.interest__check'));
let filteredCheckboxes = checkboxes.filter(item => item.parentElement.parentElement.children[1]);

for (let checkbox of checkboxes) {
  checkbox.addEventListener('change', (e) => {
    if (checkbox.parentElement.parentElement.children[1]) {
      let currentChilds = Array.from(checkbox.parentElement.parentElement.querySelectorAll('.interest__check'));
      currentChilds.shift();
      currentChilds.forEach(item => {
        if (checkbox.checked) {
          if (!item.checked) {
            item.checked = true;
          } else {
            item.checked = false;
          }
        }
      });
    }
  });
}