import Task from './Task.js';
import LocalStorage from './LocalStorage.js';
import { createElement } from './library.js';
import { getInnerHTML, getChecked, queryElement, queryElements } from './DOM.js';

export default class ToDoList {
  constructor() {
    this.tasks = [];
    this.list = queryElement(document, 'ul');
    this.listItems = queryElements(document, 'li');
    this.ls = new LocalStorage();
  }

  init() {
    if (this.ls.length > 0) {
      LocalStorage.fetch().forEach(({description, completed, index}) => {
        this.add(description, completed, index);
      });
      this.populate();
    }
  }

  add(description, completed, index) {
    this.tasks.push(new Task(description, completed, index));
  }

  sort() {
    this.tasks.sort((a, b) => a.index - b.index);
  }

  populate() {
    this.list.innerHTML = '';
    this.tasks
      .map((task) => [task.description, task.completed])
      .forEach(([description, completed]) => this.appendListItem(description, completed));
    this.setListItems();
    return this;
  }

  appendListItem(description, completed) {
    const listItem = createElement('li', 'flex-row space-between align-center', { draggable: true });
    const checkboxContainer = createElement('div', 'flex-row align-center fill');
    checkboxContainer.append(
      createElement('input', '', { type: 'checkbox' }, '', { checked: completed }),
      createElement('span', 'fill', { contenteditable: true }, description),
    );
    listItem.append(
      checkboxContainer,
      createElement('button', 'material-icons drag', {}, 'more_vert'),
    );
    this.list.append(listItem);
  }

  setListItems() {
    this.listItems = queryElements(document, 'li');
  }

  clear() {
    this.tasks = [];
  }

  reOrder() {
    this.clear();

    this.listItems.forEach((listItem, index) => {
      this.add(
        getInnerHTML(queryElement(listItem, 'span')),
        getChecked(queryElement(listItem, 'input')),
        index + 1,
      );
    });

    LocalStorage.update(this.tasks);

    return this;
  }

  updateTask(index, property, value) {
    this.tasks[index][property] = value;
    LocalStorage.update(this.tasks);
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
  }

  filterTasks() {
    this.tasks = this.tasks.filter((task) => task.completed === false);
  }
}