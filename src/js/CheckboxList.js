import { addListeners } from './library.js';
import SuperArray from './SuperArray.js';
import { getChecked, queryElements } from './DOM.js';

export default class CheckboxList {
  constructor() {
    this.checkboxes = queryElements(document, 'li input');;
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
      getChecked(e.target),
    );
  }

  setCheckboxes() {
    this.checkboxes = queryElements(document, 'li input');
    return this;
  }
}