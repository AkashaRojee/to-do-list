import { addListeners } from './library';
import LocalStorage from './LocalStorage.js';

export default class CRUD {
  constructor() {
    this.textbox = document.querySelector('input[type="text"]');
    this.spans = document.querySelectorAll('span');
  }

  setListeners(toDoList, checkboxList, drag) {

    this.textbox.addEventListener(
      'keydown',
      (e) => this.addNewTask(e, toDoList, checkboxList, drag)
    );

    addListeners(
      this.spans,
      {
        focusout: (e) => this.editTask(e, toDoList)
      }
    );

  }

  setSpans() {
    this.spans = document.querySelectorAll('span');
  }

  addNewTask(e, toDoList, checkboxList, drag) {
    if (e.key === 'Enter') {
      toDoList.add(e.target.value, false, toDoList.tasks.length + 1);
      LocalStorage.update(toDoList.tasks);
      toDoList.populate();
      toDoList.setListItems();
      checkboxList.setListeners(toDoList);
      drag.setListeners(toDoList, checkboxList);
      this.setSpans();
      this.setListeners(toDoList, checkboxList, drag);
    }
  }

  editTask(e, toDoList) {
    toDoList.updateTask(
      Array.prototype.indexOf.call(this.spans, e.target),
      'description',
      e.target.innerHTML
    );
  }
}