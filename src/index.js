import './style.scss';

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
    console.log(index);
  }

  sort() {
    this.tasks.sort((a, b) => a.index - b.index);
  }

  populate() {
    this.tasks.map(task => task.description).forEach(description => appendListItem(description));
  }
}

function initialiseList() {

  toDoList = new ToDoList();

  [...Array(10).keys()].forEach(i => {
    toDoList.add(`Task${i}`, false, i);
  });

  toDoList.sort();

  toDoList.populate();

}

new Promise(resolve => window.addEventListener('load', resolve)).then(() => initialiseList());