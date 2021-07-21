import { addListeners } from './library.js';

export default class CheckboxList {
  constructor() {
    this.checkboxes = document.querySelectorAll('li input');
  }

  setListeners(toDoList) {
    this.setCheckboxes();
    addListeners(
      this.checkboxes,
      {
        change: (e) => this.changeStatus(e, toDoList),
      },
    );
    return this;
  }

  changeStatus(e, toDoList) {
    toDoList.updateTask(
      Array.prototype.indexOf.call(this.checkboxes, e.target),
      'completed',
      e.target.checked,
    );
  }

  setCheckboxes() {
    this.checkboxes = document.querySelectorAll('li input');
    return this;
  }
}