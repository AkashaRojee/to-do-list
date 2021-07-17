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
  toDoList.init();
}

function initCheckboxEvents() {
  checkboxList.setListeners(toDoList);
}

function initDragEvents() {
  drag.setListeners(toDoList, checkboxList, crud);
}

function initCRUD() {
  crud.setListeners(toDoList, checkboxList, drag);
}

function initObjects() {
  toDoList = new ToDoList();
  checkboxList = new CheckboxList();
  drag = new Drag();
  crud = new CRUD();
}

function init() {
  initObjects();
  initList();
  initCheckboxEvents();
  initDragEvents();
  initCRUD();
}

new Promise((resolve) => window.addEventListener('load', resolve)).then(() => init());