import DragData from './DragData.js';
import initCheckBoxes from './checkbox.js';

function updateTarget(target, source) {
  target.innerHTML = source.innerHTML;
  target.querySelector('input').checked = source.checked;
}

export default class Drag {
  constructor() {
    this.prevTarget = '';
  }

  setPrevTarget(element) {
    this.prevTarget = element;
  }

  start(e) {
    this.setPrevTarget(e.target);
    e.dataTransfer.setData(
      'attributes',
      JSON.stringify(new DragData(e.target.innerHTML, e.target.querySelector('input').checked)),
    );
  }

  over(e) {
    const currTarget = (e.target.parentNode.tagName === 'LI' ? e.target.parentNode : e.target);

    // if dragging over new target, shift current content to previous target,
    // and empty current content
    if (this.prevTarget !== currTarget) {
      updateTarget(
        this.prevTarget,
        new DragData(currTarget.innerHTML, currTarget.querySelector('input').checked),
      );

      currTarget.innerHTML = '';
    }

    this.setPrevTarget(currTarget);
    e.preventDefault(); // to allow drop at this location
  }

  drop(e, toDoList) {
    const dataTransfer = JSON.parse(e.dataTransfer.getData('attributes'));

    updateTarget(
      e.target,
      new DragData(dataTransfer.innerHTML, dataTransfer.checked === true),
    );

    initCheckBoxes(toDoList);

    toDoList.reOrder();
  }
}