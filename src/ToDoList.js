import Task from './Task.js';
import createElement from './library.js';

const list = document.querySelector('ul');

function appendListItem(description) {
  const listItem = createElement('li', 'flex-row space-between align-center');
  const checkBoxContainer = createElement('div', 'flex-row align-center');
  checkBoxContainer.append(
    createElement('input', '', { type: 'checkbox' }),
    createElement('span', '', {}, description),
  );
  listItem.append(
    checkBoxContainer,
    createElement('span', 'material-icons', {}, 'more_vert'),
  );
  list.append(listItem);
}

export default class ToDoList {
  constructor() {
    this.tasks = [];
  }

  add(description, completed, index) {
    this.tasks.push(new Task(description, completed, index));
  }

  sort() {
    this.tasks.sort((a, b) => a.index - b.index);
  }

  populate() {
    this.tasks
      .map((task) => task.description)
      .forEach((description) => appendListItem(description));
  }
}