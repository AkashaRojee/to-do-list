import '../scss/style.scss';
import ToDoList from './ToDoList.js';
import CheckboxList from './CheckboxList.js';
import Drag from './Drag.js';

let toDoList;
let checkboxList;

function initList() {
  toDoList = new ToDoList();

  [...Array(5).keys()].forEach((i) => {
    toDoList.add(`Task${i}`, false, i);
  });

  toDoList.sort();
  toDoList.populate();
  toDoList.setListItems();
}

function initCheckboxEvents() {
  checkboxList = new CheckboxList();
  checkboxList.setListeners(toDoList);
}

function initDragEvents() {
  const drag = new Drag();
  drag.setListeners(toDoList, checkboxList);
}

function init() {
  initList();
  initCheckboxEvents();
  initDragEvents();
}

new Promise((resolve) => window.addEventListener('load', resolve)).then(() => init());