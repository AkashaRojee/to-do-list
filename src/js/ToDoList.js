import Task from './Task.js';
import LocalStorage from './LocalStorage.js';
import { createElement } from './library.js';

export default class ToDoList {
  constructor() {
    this.tasks = [];
    this.list = document.querySelector('ul');
    this.listItems = '';
    this.ls = new LocalStorage();
  }

  init() {
    if (this.ls.length > 0) {
      LocalStorage.fetch().forEach((task) => {
        this.add(task.description, task.completed, task.index);
      });
    }
  }

  add(description, completed, index) {
    this.tasks.push(new Task(description, completed, index));
  }

  sort() {
    this.tasks.sort((a, b) => a.index - b.index);
  }

  populate() {
    this.tasks
      .map((task) => [task.description, task.completed])
      .forEach(([description, completed]) => this.appendListItem(description, completed));
  }

  appendListItem(description, completed) {
    const listItem = createElement('li', 'flex-row space-between align-center', { draggable: true });
    const checkboxContainer = createElement('div', 'flex-row align-center');
    checkboxContainer.append(
      createElement('input', '', { type: 'checkbox' }, '', { checked: completed }),
      createElement('span', '', {}, description),
    );
    listItem.append(
      checkboxContainer,
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

    LocalStorage.update(this.tasks);
  }

  updateTask(index, property, value) {
    this.tasks[index][property] = value;
    LocalStorage.update(this.tasks);
  }
}