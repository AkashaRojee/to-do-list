import ToDoList from './ToDoList.js';
import {addMultipleListeners} from './library.js'

class Drag {
  constructor() {
    this.prevTarget;
    this.listItems = document.querySelectorAll('li');
  }

  updatePrevTarget(element) {
    this.prevTarget = element;
  }

  start(e) {
    this.updatePrevTarget(e.target);
    e.dataTransfer.setData('text/html', e.target.innerHTML);
  }

  over(e) {
    let currTarget = (e.target.parentNode.tagName === 'LI' ? e.target.parentNode : e.target);

    //if dragging over new target, shift current content to previous target, and empty current content
    if (this.prevTarget !== currTarget) {
      [this.prevTarget.innerHTML, currTarget.innerHTML] = [currTarget.innerHTML, ''];
    }

    this.updatePrevTarget(currTarget);
    e.preventDefault(); //to allow drop at this location
  }

  drop(e) {
    e.target.innerHTML = e.dataTransfer.getData('text/html');
    this.sort();
  }

  sort() {
    let toDoList = new ToDoList();
    
    this.listItems.forEach((listItem, index) => {
      toDoList.add(
        listItem.querySelector('span').innerHTML,
        listItem.querySelector('input').checked,
        index);
    });
  }
  
}

export function initDrag() {

  let drag = new Drag();

  addMultipleListeners(
    drag.listItems,
    {
      dragstart: (e) => drag.start(e),
      dragover: (e) => drag.over(e),
      drop: (e) => drag.drop(e)
    }
  );

}