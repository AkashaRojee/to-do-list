import '../scss/style.scss';
import ToDoList from './ToDoList.js';
import CheckboxList from './CheckboxList.js';
import Drag from './Drag.js';

let toDoList;
let checkboxList;
let drag;

function initList() {
  toDoList = new ToDoList();
  toDoList.init();
  toDoList.sort();
  toDoList.populate();
  toDoList.setListItems();
}

function initCheckboxEvents() {
  checkboxList = new CheckboxList();
  checkboxList.setListeners(toDoList);
}

function initDragEvents() {
  drag = new Drag();
  drag.setListeners(toDoList, checkboxList);
}

function init() {
  initList();
  initCheckboxEvents();
  initDragEvents();
}

new Promise((resolve) => window.addEventListener('load', resolve)).then(() => init());