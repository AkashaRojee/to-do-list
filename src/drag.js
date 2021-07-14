
function dragStart() {
  console.log('dragstart');
}

function dragOver(e) {
  console.log('dragover');
  e.preventDefault();
}

function drop() {
  console.log('drop');
}

export function initDrag() {

  const listItems = document.querySelectorAll('li');

  listItems.forEach(listItem => {
    listItem.addEventListener('dragstart', () => dragStart);
    listItem.addEventListener('dragover', (e) => dragOver(e));
    listItem.addEventListener('drop', () => drop);
  });

}