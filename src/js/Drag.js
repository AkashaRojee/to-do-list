import DragData from './DragData.js';
import { addListeners } from './library.js';

function updateTarget(target, source) {
  target.innerHTML = source.innerHTML;
  target.querySelector('input').checked = source.checked;
}

export default class Drag {
  constructor() {
    this.prevTarget = '';
    this.currTarget = '';
    this.draggedInnerHTML = '';
    this.draggedCheck = '';
  }

  setListeners(toDoList, checkboxList) {
    addListeners(
      toDoList.listItems,
      {
        dragstart: (e) => this.start(e),
        dragover: (e) => this.over(e),
        drop: (e) => Drag.drop(e),
        dragend: (e) => this.end(e, toDoList, checkboxList),
      },
    );
  }

  start(e) {
    this.setPrevTarget(e.target);
    e.dataTransfer.setData(
      'attributes',
      JSON.stringify(new DragData(e.target.innerHTML, e.target.querySelector('input').checked)),
    );
    this.setDraggedData(e.target.innerHTML, e.target.querySelector('input').checked);
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

  static drop(e) {
    const dataTransfer = JSON.parse(e.dataTransfer.getData('attributes'));

    updateTarget(
      e.target,
      new DragData(dataTransfer.innerHTML, dataTransfer.checked === true),
    );
  }

  // in case list item is dropped outside of list
  end(e, toDoList, checkboxList) {
    if (this.prevTarget.innerHTML === '') {
      updateTarget(
        this.prevTarget,
        new DragData(this.draggedInnerHTML, this.draggedCheck === true),
      );
    }

    toDoList.reOrder();
    checkboxList.setCheckboxes();
    checkboxList.setListeners(toDoList);
  }

  setPrevTarget(element) {
    this.prevTarget = element;
  }

  setDraggedData(innerHTML, checked) {
    this.draggedInnerHTML = innerHTML;
    this.draggedCheck = checked;
  }
}