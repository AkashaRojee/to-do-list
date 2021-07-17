import DragData from './DragData.js';
import { addListeners } from './library.js';

function updateTarget(target, source) {
  target.innerHTML = source.innerHTML;
  target.querySelector('input').checked = source.checked;
}

export default class Drag {
  constructor() {
    this.prevTarget = '';
    this.draggedInnerHTML = '';
    this.draggedCheck = '';
  }

  setListeners(toDoList, checkboxList, crud) {
    addListeners(
      toDoList.listItems,
      {
        dragstart: (e) => this.start(e, crud),
        dragover: (e) => this.over(e),
        drop: (e) => Drag.drop(e),
        dragend: (e) => this.end(e, toDoList, checkboxList, crud),
      },
    );
  }

  start(e, crud) {
    if (e.target.querySelector('button').innerHTML === 'delete') crud.toggleDeleteButton(new Event(''));
    this.setPrevTarget(e.target);
    e.dataTransfer.setData(
      'attributes',
      JSON.stringify(new DragData(e.target.innerHTML, e.target.querySelector('input').checked)),
    );
    this.setDraggedData(e.target.innerHTML, e.target.querySelector('input').checked);
  }

  over(e) {
    let currTarget;

    if (e.target.parentNode.tagName === 'LI') currTarget = e.target.parentNode;
    else if (e.target.parentNode.tagName === 'DIV') currTarget = e.target.parentNode.parentNode;
    else currTarget = e.target;

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
  end(e, toDoList, checkboxList, crud) {
    if (this.prevTarget.innerHTML === '') {
      updateTarget(
        this.prevTarget,
        new DragData(this.draggedInnerHTML, this.draggedCheck === true),
      );
    }

    toDoList.reOrder();
    checkboxList.setCheckboxes();
    checkboxList.setListeners(toDoList);
    crud.setListeners(toDoList, checkboxList, this);
  }

  setPrevTarget(element) {
    this.prevTarget = element;
  }

  setDraggedData(innerHTML, checked) {
    this.draggedInnerHTML = innerHTML;
    this.draggedCheck = checked;
  }
}