import DragData from './DragData.js';
import { addListeners } from './library.js';
import { updateTarget, findParent, getInnerHTML, queryElement, getChecked } from './DOM.js';

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
    
    const rowButton = queryElement(e.target, 'button');
    const rowCheckbox = queryElement(e.target, 'input');
    const checkboxStatus = getChecked(rowCheckbox);

    if (getInnerHTML(rowButton) === 'delete') crud.toggleDeleteButton(new Event(''));

    const rowInnerHTML = getInnerHTML(e.target);
    this.setPrevTarget(e.target);
    e.dataTransfer.setData(
      'attributes',
      JSON.stringify(new DragData(rowInnerHTML, checkboxStatus)),
    );
    this.setDraggedData(rowInnerHTML, checkboxStatus);
  }

  over(e) {
    let currTarget = findParent(e.target)

    // if dragging over new target, shift current content to previous target,
    // and empty current content
    if (this.prevTarget !== currTarget) {
      updateTarget(
        this.prevTarget,
        new DragData(getInnerHTML(currTarget), getChecked(queryElement(currTarget, 'input'))),
      );

      updateTarget(currTarget, {innerHTML: ''});
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
    if (getInnerHTML(this.prevTarget) === '') {
      updateTarget(
        this.prevTarget,
        new DragData(this.draggedInnerHTML, this.draggedCheck === true),
      );
    }

    toDoList.reOrder();
    checkboxList
      .setCheckboxes()
      .setListeners(toDoList);
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