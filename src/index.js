import './style.scss';
import ToDoList from './ToDoList.js';
import Drag from './Drag.js';
import initCheckboxes from './checkbox.js';
import { addMultipleListeners } from './library.js';

let toDoList;

function initList() {
  toDoList = new ToDoList();

  [...Array(5).keys()].forEach((i) => {
    toDoList.add(`Task${i}`, false, i);
  });

  toDoList.sort();
  toDoList.populate();
  toDoList.setListItems();
}

function initDragEvents() {
  const drag = new Drag();

  addMultipleListeners(
    toDoList.listItems,
    {
      dragstart: (e) => drag.start(e),
      dragover: (e) => drag.over(e),
      drop: (e) => drag.drop(e, toDoList),
    },
  );
}

function init() {
  initList();
  initDragEvents();
  initCheckboxes(toDoList);
}

new Promise((resolve) => window.addEventListener('load', resolve)).then(() => init());