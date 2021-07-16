import '../scss/style.scss';
import ToDoList from './ToDoList.js';
import CheckboxList from './CheckboxList.js';
import Drag from './Drag.js';
import CRUD from './CRUD.js';

let toDoList;
let checkboxList;
let drag;
let crud;

function initList() {
  toDoList = new ToDoList();
  toDoList.init();
  // toDoList.sort();
}

function initCheckboxEvents() {
  checkboxList = new CheckboxList();
  checkboxList.setListeners(toDoList);
}

function initDragEvents() {
  drag = new Drag();
  drag.setListeners(toDoList, checkboxList);
}

function initCRUD() {
  crud = new CRUD();
  crud.setListeners(toDoList, checkboxList, drag);
}

function init() {
  initList();
  initCheckboxEvents();
  initDragEvents();
  initCRUD();
}

new Promise((resolve) => window.addEventListener('load', resolve)).then(() => init());