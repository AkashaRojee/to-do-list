import { addListeners } from './library';
import LocalStorage from './LocalStorage.js';

export default class CRUD {
  constructor() {

  }

  setListeners(toDoList, checkboxList, drag) {
    addListeners(
      [document.querySelector('input[type="text"]')],
      {
        keydown: (e) => this.addNewTask(e, toDoList, checkboxList, drag)
      }
    );
  }

  addNewTask(e, toDoList, checkboxList, drag) {
    if (e.key === 'Enter') {
      toDoList.add(e.target.value, false, toDoList.tasks.length + 1);
      LocalStorage.update(toDoList.tasks);
      toDoList.populate();
      toDoList.setListItems();
      checkboxList.setListeners(toDoList);
      drag.setListeners(toDoList, checkboxList);
    }
  }
}