import {addMultipleListeners} from './library.js'

let itemToShift;
let targetData;
let savedTarget;

function updateItemToShift(element) {
  itemToShift = element;
}

function dragStart(e) {
  updateItemToShift(e.target);
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', e.target.innerHTML);
}

function dragOver(e) {
  let currentTarget = (e.target.parentNode.tagName === 'LI' ? e.target.parentNode : e.target);

  if (savedTarget === undefined ) {
    savedTarget = currentTarget;
  } else {
    if (savedTarget !== currentTarget) {
      savedTarget = currentTarget;
      targetData = currentTarget.cloneNode(true).innerHTML;
      currentTarget.innerHTML = '';
      itemToShift.innerHTML = targetData;
      updateItemToShift(currentTarget);
    }
    e.preventDefault();
  }
}

function drop(e) {
  e.dataTransfer.dropEffect = 'move';
  if (e.target.tagName === 'LI') {
    e.target.innerHTML = e.dataTransfer.getData('text/html');
    savedTarget = undefined;
    e.dataTransfer.clearData();
  }
}

export function initDrag() {

  addMultipleListeners(
    document.querySelectorAll('li'),
    {
      dragstart: (e) => dragStart(e),
      dragover: (e) => dragOver(e),
      drop: (e) => drop(e)
    }
  );

}