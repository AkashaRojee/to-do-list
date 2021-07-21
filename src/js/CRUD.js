import { addListeners } from './library.js';
import LocalStorage from './LocalStorage.js';
import SuperArray from './SuperArray.js';

export default class CRUD {
  constructor() {
    this.textbox = document.querySelector('input[type="text"]');
    this.addButton = this.textbox.nextElementSibling;
    this.spans = document.querySelectorAll('span');
    this.deleteButton = '';
    this.clearButton = document.querySelector('.btn-clear');
  }

  setListeners(toDoList, checkboxList, drag) {
    this.textbox.addEventListener(
      'keydown',
      (e) => this.addNewTask(e, toDoList, checkboxList, drag),
    );

    this.addButton.addEventListener(
      'click',
      (e) => this.addNewTask(e, toDoList, checkboxList, drag),
    );

    this.setSpans();
    addListeners(
      this.spans,
      {
        focusin: (e) => this.toggleDeleteButton(e),
        focusout: (e) => this.editTask(e, toDoList, checkboxList, drag),
      },
    );

    this.clearButton.addEventListener(
      'click',
      () => this.clearCompleted(toDoList, checkboxList, drag),
    );
  }

  addNewTask(e, toDoList, checkboxList, drag) {
    if (this.textbox.value !== '' && (
      (e.type === 'keydown' && e.key === 'Enter') || (e.type === 'click'))) {
      toDoList.add(this.textbox.value, false, toDoList.tasks.length + 1);
      LocalStorage.update(toDoList.tasks);
      toDoList.populate();
      this.addAllListeners(toDoList, checkboxList, drag);
      e.stopImmediatePropagation();
      this.textbox.value = '';
    }
  }

  toggleDeleteButton(e) {
    if (e.type !== '') this.deleteButton = e.target.parentNode.nextSibling;
    this.deleteButton.innerHTML = (e.type === 'focusin' ? 'delete' : 'more_vert');
    this.deleteButton.classList.toggle('pointer');
  }

  editTask(e, toDoList, checkboxList, drag) {
    const spanArray = new SuperArray(...this.spans);
    if (e.relatedTarget === this.deleteButton) {
      toDoList.deleteTask(spanArray.indexOfElement(e.target));
      this.refresh(toDoList, checkboxList, drag);
    } else {
      this.toggleDeleteButton(e);

      toDoList.updateTask(
        spanArray.indexOfElement(e.target),
        'description',
        e.target.innerHTML,
      );
    }
  }

  clearCompleted(toDoList, checkboxList, drag) {
    toDoList.filterTasks();
    this.refresh(toDoList, checkboxList, drag);
  }

  refresh(toDoList, checkboxList, drag) {
    toDoList
      .populate()
      .reOrder();
    this.addAllListeners(toDoList, checkboxList, drag);
  }

  addAllListeners(toDoList, checkboxList, drag) {
    checkboxList.setListeners(toDoList);
    drag.setListeners(toDoList, checkboxList, this);
    this.setSpans();
    this.setListeners(toDoList, checkboxList, drag);
  }

  setSpans() {
    this.spans = document.querySelectorAll('span');
  }
}