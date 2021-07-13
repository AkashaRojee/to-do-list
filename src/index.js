import './style.css';

const list = document.querySelector('ul');
let toDoList;

function createElement(elementType, classNames = '', attributes = {}, innerHTML = '') {
  const elementObject = document.createElement(elementType);
  if (classNames) elementObject.classList.add(...(classNames.split(' ')));
  Object.keys(attributes).forEach((attribute) => {
    elementObject.setAttribute(attribute, attributes[attribute]);
  });
  elementObject.innerHTML = innerHTML;
  return elementObject;
}

function appendListItem(description) {
  list.appendChild(createElement('li', '', {}, description));
}

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

class ToDoList {

  constructor() {
    this.tasks = [];
  }

  add(description, completed, index) {
    this.tasks.push(new Task(description, completed, index));
  }

  populate() {
    this.tasks.map(task => task.description).forEach(description => appendListItem(description));
  }
}

function initialiseList() {

  toDoList = new ToDoList();

  toDoList.add('Task1', false, 0);
  toDoList.add('Task2', false, 1);
  toDoList.add('Task3', false, 2);
  toDoList.add('Task4', false, 3);
  toDoList.add('Task5', false, 4);
  toDoList.add('Task6', false, 5);

  toDoList.populate();

}

window.addEventListener('load', initialiseList);