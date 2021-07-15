import {addMultipleListeners} from './library.js'

let prevTarget;

function updatePrevTarget(element) {
  prevTarget = element;
}

//Initialise previous target and data transfer
function dragStart(e) {
  updatePrevTarget(e.target);
  e.dataTransfer.setData('text/html', e.target.innerHTML);
}

//Save target being dragged over;
//If dragging over new target, shift current content to previous target, and empty current content;
//Update previous target
function dragOver(e) {

  let currentTarget = (e.target.parentNode.tagName === 'LI' ? e.target.parentNode : e.target);

  if (prevTarget !== currentTarget) {
    [prevTarget.innerHTML, currentTarget.innerHTML] = [currentTarget.innerHTML, ''];
  }
  updatePrevTarget(currentTarget);
  e.preventDefault(); //to allow drop at this location
}

//Update target content to transferred data
function drop(e) {
  e.target.innerHTML = e.dataTransfer.getData('text/html');
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