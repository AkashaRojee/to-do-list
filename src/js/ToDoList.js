import Task from './Task.js';
import { createElement } from './library.js';

export default class ToDoList {
  constructor() {
    this.tasks = [];
    this.list = document.querySelector('ul');
    this.listItems = '';
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
      .forEach((description) => this.appendListItem(description));
  }

  appendListItem(description) {
    const listItem = createElement('li', 'flex-row space-between align-center', { draggable: true });
    const checkBoxContainer = createElement('div', 'flex-row align-center');
    checkBoxContainer.append(
      createElement('input', '', { type: 'checkbox' }),
      createElement('span', '', {}, description),
    );
    listItem.append(
      checkBoxContainer,
      createElement('button', 'material-icons drag', {}, 'more_vert'),
    );
    this.list.append(listItem);
  }

  setListItems() {
    this.listItems = document.querySelectorAll('li');
  }

  clear() {
    this.tasks = [];
  }

  reOrder() {
    this.clear();

    this.listItems.forEach((listItem, index) => {
      this.add(
        listItem.querySelector('span').innerHTML,
        listItem.querySelector('input').checked,
        index,
      );
    });
  }

  updateTask(index, property, value) {
    this.tasks[index][property] = value;
  }
}