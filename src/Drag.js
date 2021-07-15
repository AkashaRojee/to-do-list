import ToDoList from './ToDoList.js';

function DragData(innerHTML, checked) {
  this.innerHTML = innerHTML;
  this.checked = checked;
}

export default class Drag {
  constructor() {
    this.prevTarget = '';
    this.listItems = document.querySelectorAll('li');
  }

  setPrevTarget(element) {
    this.prevTarget = element;
  }

  updateTarget(target, source) {
    target.innerHTML = source.innerHTML;
    target.querySelector('input').checked = source.checked;
  }

  start(e) {
    this.setPrevTarget(e.target);
    e.dataTransfer.setData(
      'attributes',
      JSON.stringify(new DragData(e.target.innerHTML, e.target.querySelector('input').checked))
    );
  }

  over(e) {
    const currTarget = (e.target.parentNode.tagName === 'LI' ? e.target.parentNode : e.target);

    // if dragging over new target, shift current content to previous target,
    // and empty current content
    if (this.prevTarget !== currTarget) {
      this.updateTarget(
        this.prevTarget,
        new DragData(currTarget.innerHTML, currTarget.querySelector('input').checked)
      );
      currTarget.innerHTML = '';
    }
    this.setPrevTarget(currTarget);
    e.preventDefault(); // to allow drop at this location
  }

  drop(e, toDoList) {
    let dataTransfer = JSON.parse(e.dataTransfer.getData('attributes'));
    this.updateTarget(
      e.target,
      new DragData(dataTransfer.innerHTML, dataTransfer.checked === true)
    )
    this.reOrder(toDoList);
  }

  reOrder(toDoList) {
    toDoList.clear();
    
    this.listItems.forEach((listItem, index) => {
      toDoList.add(
        listItem.querySelector('span').innerHTML,
        listItem.querySelector('input').checked,
        index,
      );
    });
    console.log(toDoList);
  }
}