import { addListeners } from './library.js';
import LocalStorage from './LocalStorage.js';
import SuperArray from './SuperArray.js';
import {
  queryElement, queryElements, getInnerHTML, setInnerHTML, getValue,
  setValue, toggleClass, getParent, getNextSibling, getNextElementSibling,
} from './DOM.js';

export default class CRUD {
  constructor() {
    this.textbox = queryElement(document, 'input[type="text"]');
    this.addButton = getNextElementSibling(this.textbox);
    this.spans = queryElements(document, 'span');
    this.deleteButton = '';
    this.clearButton = queryElement(document, '.btn-clear');
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
    if (getValue(this.textbox) !== '' && (
      (e.type === 'keydown' && e.key === 'Enter') || (e.type === 'click'))) {
      toDoList.add(getValue(this.textbox), false, toDoList.tasks.length + 1);
      LocalStorage.update(toDoList.tasks);
      toDoList.populate();
      this.addAllListeners(toDoList, checkboxList, drag);
      e.stopImmediatePropagation();
      setValue(this.textbox, '');
    }
  }

  toggleDeleteButton(e) {
    if (e.type !== '') this.deleteButton = getNextSibling(getParent(e.target));
    setInnerHTML(this.deleteButton, (e.type === 'focusin' ? 'delete' : 'more_vert'));
    toggleClass(this.deleteButton, 'pointer');
  }

  editTask(e, toDoList, checkboxList, drag) {
    const spanArray = new SuperArray(...this.spans);
    if (e.relatedTarget === this.deleteButton) {
      this.deleteTask(e, spanArray, toDoList, checkboxList, drag);
    } else {
      this.editDescription(e, spanArray, toDoList);
    }
  }

  deleteTask(e, spanArray, toDoList, checkboxList, drag) {
    toDoList.deleteTask(spanArray.indexOfElement(e.target));
    this.refresh(toDoList, checkboxList, drag);
  }

  editDescription(e, spanArray, toDoList) {
    this.toggleDeleteButton(e);

    toDoList.updateTask(
      spanArray.indexOfElement(e.target),
      'description',
      getInnerHTML(e.target),
    );
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
    this.spans = queryElements(document, 'span');
  }
}