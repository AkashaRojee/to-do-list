import { addListeners } from './library.js';

export default class CheckboxList {
  constructor() {
    this.checkBoxes = document.querySelectorAll('li input');
  }

  setListeners(toDoList) {
    addListeners(
      this.checkBoxes,
      {
        change: (e) => this.changeStatus(e, toDoList),
      },
    );
  }

  changeStatus(e, toDoList) {
    toDoList.updateTask(
      Array.prototype.indexOf.call(this.checkBoxes, e.target),
      'completed',
      e.target.checked,
    );
  }
}