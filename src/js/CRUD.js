import { addListeners } from './library';
import LocalStorage from './LocalStorage.js';

export default class CRUD {
  constructor() {
    this.textbox = document.querySelector('input[type="text"]');
    this.spans = document.querySelectorAll('span');
    this.deleteButton = '';
  }

  setListeners(toDoList, checkboxList, drag) {

    this.textbox.addEventListener(
      'keydown',
      (e) => this.addNewTask(e, toDoList, checkboxList, drag)
    );

    addListeners(
      this.spans,
      {
        focusin: (e) => this.toggleDeleteButton(e),
        focusout: (e) => this.editTask(e, toDoList, checkboxList, drag)
      }
    );
  }

  addNewTask(e, toDoList, checkboxList, drag) {
    if (e.key === 'Enter') {
      toDoList.add(e.target.value, false, toDoList.tasks.length + 1);
      LocalStorage.update(toDoList.tasks);
      toDoList.populate();
      this.addAllListeners(toDoList, checkboxList, drag);
      e.stopImmediatePropagation();
    }
  }

  toggleDeleteButton(e) {
    this.deleteButton = e.target.parentNode.nextSibling;
    this.deleteButton.innerHTML = (e.type === 'focusin' ? 'delete' : 'more_vert');
    this.deleteButton.classList.toggle('pointer');
  }

  editTask(e, toDoList, checkboxList, drag) {

    if (e.relatedTarget === this.deleteButton) {

      toDoList.deleteTask(Array.prototype.indexOf.call(this.spans, e.target));
      toDoList.populate();
      toDoList.reOrder();
      this.addAllListeners(toDoList, checkboxList, drag);
      
    } else {

      this.toggleDeleteButton(e);

      toDoList.updateTask(
        Array.prototype.indexOf.call(this.spans, e.target),
        'description',
        e.target.innerHTML
      );
    }    
  }

  addAllListeners(toDoList, checkboxList, drag) {
    checkboxList.setListeners(toDoList);
    drag.setListeners(toDoList, checkboxList);
    this.setSpans();
    this.setListeners(toDoList, checkboxList, drag);
  }

  setSpans() {
    this.spans = document.querySelectorAll('span');
  }
}