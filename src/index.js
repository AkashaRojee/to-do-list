import './style.scss';
import ToDoList from './ToDoList.js';

let toDoList;

function initialiseList() {
  toDoList = new ToDoList();

  [...Array(5).keys()].forEach((i) => {
    toDoList.add(`Task${i}`, false, i);
  });

  toDoList.sort();

  toDoList.populate();
}

new Promise((resolve) => window.addEventListener('load', resolve)).then(() => initialiseList());