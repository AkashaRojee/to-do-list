let draggedItem;
let draggedData, targetData;
let currentTarget;

function dragStart(e) {
  draggedItem = e.target;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', e.target.innerHTML);
  draggedData = e.target.innerHTML;
}

function dragOver(e) {

  let thisTarget;
  if (e.target.parentNode.tagName === 'LI') {
    thisTarget = e.target.parentNode;
  } else  if (e.target.tagName === 'LI') {
    thisTarget = e.target;
  }

  if (currentTarget === undefined ) {
    currentTarget = thisTarget;
  } else {
    if (currentTarget !== thisTarget) {
      currentTarget = thisTarget;
      e.preventDefault();
      if (e.target.parentNode.tagName === 'LI') {
        targetData = e.target.parentNode.cloneNode(true).innerHTML;
        e.target.parentNode.innerHTML == '';
      } else  if (e.target.tagName === 'LI') {
        targetData = e.target.cloneNode(true).innerHTML;
        e.target.innerHTML = '';
      }
      draggedItem.innerHTML = targetData;
      draggedItem = e.target;
    }
    e.preventDefault();
  }
}

function drop(e) {
  e.dataTransfer.dropEffect = 'move';
  if (e.target.tagName === 'LI') {
    e.target.innerHTML = e.dataTransfer.getData('text/html');
    currentTarget = undefined;
    e.dataTransfer.clearData();
  }
}

export function initDrag() {

  const listItems = document.querySelectorAll('li');

  listItems.forEach(listItem => {
    listItem.addEventListener('dragstart', (e) => dragStart(e));
    listItem.addEventListener('dragover', (e) => dragOver(e));
    listItem.addEventListener('drop', (e) => drop(e));
  });

}