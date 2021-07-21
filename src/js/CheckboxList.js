import { addListeners } from './library.js';
import SuperArray from './SuperArray.js';

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
    const checkboxArray = new SuperArray(...this.checkboxes);
    toDoList.updateTask(
      checkboxArray.indexOfElement(e.target),
      'completed',
      e.target.checked,
    );
  }

  setCheckboxes() {
    this.checkboxes = document.querySelectorAll('li input');
    return this;
  }
}