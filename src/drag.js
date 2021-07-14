import {addMultipleListeners} from './library.js'

let draggedItem;
let draggedData, targetData;
let currentTarget;

function dragStart(e) {
  draggedItem = e.target;
  draggedData = e.target.innerHTML;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', e.target.innerHTML);
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
      targetData = thisTarget.cloneNode(true).innerHTML;
      thisTarget.innerHTML = '';
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

  addMultipleListeners(
    document.querySelectorAll('li'),
    {
      dragstart: (e) => dragStart(e),
      dragover: (e) => dragOver(e),
      drop: (e) => drop(e)
    }
  );

}