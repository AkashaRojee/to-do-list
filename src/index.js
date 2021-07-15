import './style.scss';
import ToDoList from './ToDoList.js';
import {initDrag} from './Drag.js';

function initialiseList() {

  let toDoList;

  toDoList = new ToDoList();

  [...Array(5).keys()].forEach((i) => {
    toDoList.add(`Task${i}`, false, i);
  });

  toDoList.sort();

  toDoList.populate();

}

function initialise() {
  initialiseList();
  initDrag();
}

new Promise((resolve) => window.addEventListener('load', resolve)).then(() => initialise());