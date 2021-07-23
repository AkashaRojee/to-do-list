import ToDoList from './ToDoList.js';
import CheckboxList from './CheckboxList.js';
import Drag from './Drag.js';
import CRUD from './CRUD.js';
import Task from './Task.js';
import LocalStorageMock from './LocalStorageMock.js';
import SuperArray from './SuperArray.js';

let e; let spanArray; let toDoList; let checkboxList; let drag; let
  crud;

function setupObjects(eventType = 'click') {
  e = new Event(eventType);
  toDoList = new ToDoList();
  checkboxList = new CheckboxList();
  drag = new Drag();
  crud = new CRUD();
}

describe('add', () => {
  describe('add to empty to-do list', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div class="flex-row">'
        + ' <input type="text" value="Task 1" class="fill" placeholder="Add to your list...">'
        + ' <button type="button" class="material-icons">add</button>'
        + '</div>'
        + '<ul>'
        + '</ul>'
        + '<div class="flex-row justify-center align-center">'
        + ' <button type="button" class="btn-clear pointer">Clear all completed</button>'
        + '</div>';

      setupObjects();
    });

    test('Add new item via textbox adds item to empty array', () => {
      const expected = [new Task('Task 1', false, 1)];

      crud.addNewTask(e, toDoList, checkboxList, drag);
      const result = toDoList.tasks;

      expect(result).toStrictEqual(expected);
    });

    test('Add new item via textbox adds item to empty list in DOM', () => {
      const expected = {
        liCount: 1,
        innerHTML: (
          '<div class="flex-row align-center fill">'
          + ' <input type="checkbox">'
          + ' <span class="fill" contenteditable="true">Task 1</span>'
          + '</div>'
          + '<button class="material-icons drag" type="button">more_vert</button>').replace(/>\s+</g, '><'),
      };

      crud.addNewTask(e, toDoList, checkboxList, drag);
      const result = {
        liCount: document.querySelector('ul').childElementCount,
        innerHTML: document.querySelector('li').innerHTML,
      };

      expect(result.liCount).toStrictEqual(expected.liCount);
      expect(result.innerHTML).toStrictEqual(expected.innerHTML);
    });

    test('Add new item via textbox adds to empty local storage', () => {
      Object.defineProperty(window, 'localStorage', { value: new LocalStorageMock() });
      const expected = [{ description: 'Task 1', completed: false, index: 1 }];

      crud.addNewTask(e, toDoList, checkboxList, drag);
      const result = JSON.parse(localStorage.getItem('tasks'));

      expect(result).toStrictEqual(expected);
    });

    test('Add new item via textbox clears textbox afterwards', () => {
      const expected = '';

      crud.addNewTask(e, toDoList, checkboxList, drag);
      const result = document.querySelector('input[type="text"]').value;

      expect(result).toStrictEqual(expected);
    });
  });

  describe('add to non-empty to-do list', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div class="flex-row">'
        + ' <input type="text" value="Task 4" class="fill" placeholder="Add to your list...">'
        + ' <button type="button" class="material-icons">add</button>'
        + '</div>'
        + '<ul>'
        + ' <li class="flex-row space-between align-center" draggable="true">'
        + '   <div class="flex-row align-center fill">'
        + '     <input type="checkbox">'
        + '     <span class="fill" contenteditable="true">Task 1</span>'
        + '   </div>'
        + '   <button class="material-icons drag" type="button">more_vert</button>'
        + ' </li>'
        + ' <li class="flex-row space-between align-center" draggable="true">'
        + '   <div class="flex-row align-center fill">'
        + '     <input type="checkbox">'
        + '     <span class="fill" contenteditable="true">Task 2</span>'
        + '   </div>'
        + '   <button class="material-icons drag" type="button">more_vert</button>'
        + ' </li>'
        + ' <li class="flex-row space-between align-center" draggable="true">'
        + '   <div class="flex-row align-center fill">'
        + '     <input type="checkbox">'
        + '     <span class="fill" contenteditable="true">Task 3</span>'
        + '   </div>'
        + '   <button class="material-icons drag" type="button">more_vert</button>'
        + ' </li>'
        + '</ul>'
        + '<div class="flex-row justify-center align-center">'
        + ' <button type="button" class="btn-clear pointer">Clear all completed</button>'
        + '</div>';

      setupObjects();

      toDoList.tasks = [
        new Task('Task 1', false, 1),
        new Task('Task 2', false, 2),
        new Task('Task 3', false, 3),
      ];
    });

    test('Add new item via textbox adds item to non-empty array', () => {
      const expected = [
        new Task('Task 1', false, 1),
        new Task('Task 2', false, 2),
        new Task('Task 3', false, 3),
        new Task('Task 4', false, 4),
      ];

      crud.addNewTask(e, toDoList, checkboxList, drag);
      const result = toDoList.tasks;

      expect(result).toStrictEqual(expected);
    });

    test('Add new item via textbox adds item to non-empty list in DOM', () => {
      const expected = {
        liCount: 4,
        innerHTML: (
          '<li class="flex-row space-between align-center" draggable="true">'
          + ' <div class="flex-row align-center fill">'
          + '   <input type="checkbox">'
          + '   <span class="fill" contenteditable="true">Task 1</span>'
          + ' </div>'
          + ' <button class="material-icons drag" type="button">more_vert</button>'
          + '</li>'
          + '<li class="flex-row space-between align-center" draggable="true">'
          + ' <div class="flex-row align-center fill">'
          + '   <input type="checkbox">'
          + '   <span class="fill" contenteditable="true">Task 2</span>'
          + ' </div>'
          + ' <button class="material-icons drag" type="button">more_vert</button>'
          + '</li>'
          + '<li class="flex-row space-between align-center" draggable="true">'
          + ' <div class="flex-row align-center fill">'
          + '   <input type="checkbox">'
          + '   <span class="fill" contenteditable="true">Task 3</span>'
          + ' </div>'
          + ' <button class="material-icons drag" type="button">more_vert</button>'
          + '</li>'
          + '<li class="flex-row space-between align-center" draggable="true">'
          + ' <div class="flex-row align-center fill">'
          + '   <input type="checkbox">'
          + '   <span class="fill" contenteditable="true">Task 4</span>'
          + ' </div>'
          + ' <button class="material-icons drag" type="button">more_vert</button>'
          + '</li>').replace(/>\s+</g, '><'),
      };

      crud.addNewTask(e, toDoList, checkboxList, drag);
      const result = {
        liCount: document.querySelector('ul').childElementCount,
        innerHTML: document.querySelector('ul').innerHTML,
      };

      expect(result.liCount).toStrictEqual(expected.liCount);
      expect(result.innerHTML).toStrictEqual(expected.innerHTML);
    });

    test('Add new item via textbox updates local storage', () => {
      Object.defineProperty(window, 'localStorage', { value: new LocalStorageMock() });
      const expected = [
        { description: 'Task 1', completed: false, index: 1 },
        { description: 'Task 2', completed: false, index: 2 },
        { description: 'Task 3', completed: false, index: 3 },
        { description: 'Task 4', completed: false, index: 4 },
      ];

      crud.addNewTask(e, toDoList, checkboxList, drag);
      const result = JSON.parse(localStorage.getItem('tasks'));

      expect(result).toStrictEqual(expected);
    });
  });
});

describe('delete', () => {
  describe('delete from to-do list with more than 1 item', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div class="flex-row">'
        + ' <input type="text" value="Task 1" class="fill" placeholder="Add to your list...">'
        + ' <button type="button" class="material-icons">add</button>'
        + '</div>'
        + '<ul>'
        + ' <li class="flex-row space-between align-center" draggable="true">'
        + '   <div class="flex-row align-center fill">'
        + '     <input type="checkbox">'
        + '     <span class="fill" contenteditable="true">Task 1</span>'
        + '   </div>'
        + '   <button class="material-icons drag" type="button">more_vert</button>'
        + ' </li>'
        + ' <li class="flex-row space-between align-center" draggable="true">'
        + '   <div class="flex-row align-center fill">'
        + '     <input type="checkbox">'
        + '     <span class="fill" contenteditable="true">Task 2</span>'
        + '   </div>'
        + '   <button class="material-icons drag" type="button">more_vert</button>'
        + ' </li>'
        + ' <li class="flex-row space-between align-center" draggable="true">'
        + '   <div class="flex-row align-center fill">'
        + '     <input type="checkbox">'
        + '     <span class="fill" contenteditable="true">Task 3</span>'
        + '   </div>'
        + '   <button class="material-icons drag" type="button">more_vert</button>'
        + ' </li>'
        + ' <li class="flex-row space-between align-center" draggable="true">'
        + '   <div class="flex-row align-center fill">'
        + '     <input type="checkbox">'
        + '     <span class="fill" contenteditable="true">Task 4</span>'
        + '   </div>'
        + '   <button class="material-icons drag" type="button">more_vert</button>'
        + ' </li>'
        + ' <li class="flex-row space-between align-center" draggable="true">'
        + '   <div class="flex-row align-center fill">'
        + '     <input type="checkbox">'
        + '     <span class="fill" contenteditable="true">Task 5</span>'
        + '   </div>'
        + '   <button class="material-icons drag" type="button">more_vert</button>'
        + ' </li>'
        + '</ul>'
        + '<div class="flex-row justify-center align-center">'
        + ' <button type="button" class="btn-clear pointer">Clear all completed</button>'
        + '</div>';

      setupObjects();

      spanArray = new SuperArray(...document.querySelectorAll('span'));
      const span = spanArray[2];
      span.dispatchEvent(e);

      toDoList.tasks = [
        new Task('Task 1', false, 1),
        new Task('Task 2', false, 2),
        new Task('Task 3', false, 3),
        new Task('Task 4', false, 4),
        new Task('Task 5', false, 5),
      ];
    });

    test('Delete item from row removes item from array & updates indices', () => {
      const expected = [
        new Task('Task 1', false, 1),
        new Task('Task 2', false, 2),
        new Task('Task 4', false, 3),
        new Task('Task 5', false, 4),
      ];

      crud.deleteTask(e, spanArray, toDoList, checkboxList, drag);
      const result = toDoList.tasks;

      expect(result).toStrictEqual(expected);
    });

    test('Delete item from row removes item from list in DOM', () => {
      const expected = {
        liCount: 4,
        innerHTML: (
          '<li class="flex-row space-between align-center" draggable="true">'
          + '  <div class="flex-row align-center fill">'
          + '    <input type="checkbox">'
          + '    <span class="fill" contenteditable="true">Task 1</span>'
          + '  </div>'
          + '  <button class="material-icons drag" type="button">more_vert</button>'
          + '</li>'
          + '<li class="flex-row space-between align-center" draggable="true">'
          + '  <div class="flex-row align-center fill">'
          + '    <input type="checkbox">'
          + '    <span class="fill" contenteditable="true">Task 2</span>'
          + '  </div>'
          + '  <button class="material-icons drag" type="button">more_vert</button>'
          + '</li>'
          + '<li class="flex-row space-between align-center" draggable="true">'
          + '  <div class="flex-row align-center fill">'
          + '    <input type="checkbox">'
          + '    <span class="fill" contenteditable="true">Task 4</span>'
          + '  </div>'
          + '  <button class="material-icons drag" type="button">more_vert</button>'
          + '</li>'
          + '<li class="flex-row space-between align-center" draggable="true">'
          + '   <div class="flex-row align-center fill">'
          + '    <input type="checkbox">'
          + '    <span class="fill" contenteditable="true">Task 5</span>'
          + '  </div>'
          + '  <button class="material-icons drag" type="button">more_vert</button>'
          + '</li>'
        ).replace(/>\s+</g, '><'),
      };

      crud.deleteTask(e, spanArray, toDoList, checkboxList, drag);
      const result = {
        liCount: document.querySelector('ul').childElementCount,
        innerHTML: document.querySelector('ul').innerHTML,
      };

      expect(result.liCount).toStrictEqual(expected.liCount);
      expect(result.innerHTML).toStrictEqual(expected.innerHTML);
    });

    test('Delete item from row updates local storage', () => {
      Object.defineProperty(window, 'localStorage', { value: new LocalStorageMock() });
      const expected = [
        { description: 'Task 1', completed: false, index: 1 },
        { description: 'Task 2', completed: false, index: 2 },
        { description: 'Task 4', completed: false, index: 3 },
        { description: 'Task 5', completed: false, index: 4 },
      ];

      crud.deleteTask(e, spanArray, toDoList, checkboxList, drag);
      const result = JSON.parse(localStorage.getItem('tasks'));

      expect(result).toStrictEqual(expected);
    });
  });

  describe('delete from to-do list with only 1 item', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div class="flex-row">'
        + ' <input type="text" value="Task 1" class="fill" placeholder="Add to your list...">'
        + ' <button type="button" class="material-icons">add</button>'
        + '</div>'
        + '<ul>'
        + ' <li class="flex-row space-between align-center" draggable="true">'
        + '   <div class="flex-row align-center fill">'
        + '     <input type="checkbox">'
        + '     <span class="fill" contenteditable="true">Task 1</span>'
        + '   </div>'
        + '   <button class="material-icons drag" type="button">more_vert</button>'
        + ' </li>'
        + '</ul>'
        + '<div class="flex-row justify-center align-center">'
        + ' <button type="button" class="btn-clear pointer">Clear all completed</button>'
        + '</div>';

      setupObjects();

      spanArray = new SuperArray(...document.querySelectorAll('span'));
      const span = spanArray[0];
      span.dispatchEvent(e);

      toDoList.tasks = [new Task('Task 1', false, 1)];
    });

    test('Delete item from row empties array', () => {
      const expected = [];

      crud.deleteTask(e, spanArray, toDoList, checkboxList, drag);
      const result = toDoList.tasks;

      expect(result).toStrictEqual(expected);
    });

    test('Delete item from row empties list in DOM', () => {
      const expected = {
        liCount: 0,
        innerHTML: '',
      };

      crud.deleteTask(e, spanArray, toDoList, checkboxList, drag);
      const result = {
        liCount: document.querySelector('ul').childElementCount,
        innerHTML: document.querySelector('ul').innerHTML,
      };

      expect(result.liCount).toStrictEqual(expected.liCount);
      expect(result.innerHTML).toStrictEqual(expected.innerHTML);
    });

    test('Delete item from row empties local storage', () => {
      Object.defineProperty(window, 'localStorage', { value: new LocalStorageMock() });
      const expected = [];

      crud.deleteTask(e, spanArray, toDoList, checkboxList, drag);
      const result = JSON.parse(localStorage.getItem('tasks'));

      expect(result).toStrictEqual(expected);
    });
  });

});

describe.only('edit', () => {

  beforeEach(() => {

    document.body.innerHTML = ('<div class="flex-row">'
    + ' <input type="text" value="Task 1" class="fill" placeholder="Add to your list...">'
    + ' <button type="button" class="material-icons">add</button>'
    + '</div>'
    + '<ul>'
    + ' <li class="flex-row space-between align-center" draggable="true">'
    + '   <div class="flex-row align-center fill">'
    + '     <input type="checkbox">'
    + '     <span class="fill" contenteditable="true">Task 1</span>'
    + '   </div>'
    + '   <button class="material-icons drag" type="button">more_vert</button>'
    + ' </li>'
    + ' <li class="flex-row space-between align-center" draggable="true">'
    + '   <div class="flex-row align-center fill">'
    + '     <input type="checkbox">'
    + '     <span class="fill" contenteditable="true">Task 2</span>'
    + '   </div>'
    + '   <button class="material-icons drag" type="button">more_vert</button>'
    + ' </li>'
    + ' <li class="flex-row space-between align-center" draggable="true">'
    + '   <div class="flex-row align-center fill">'
    + '     <input type="checkbox">'
    + '     <span class="fill" contenteditable="true">Task three</span>'
    + '   </div>'
    + '   <button class="material-icons drag pointer" type="button">delete</button>'
    + ' </li>'
    + ' <li class="flex-row space-between align-center" draggable="true">'
    + '   <div class="flex-row align-center fill">'
    + '     <input type="checkbox">'
    + '     <span class="fill" contenteditable="true">Task 4</span>'
    + '   </div>'
    + '   <button class="material-icons drag" type="button">more_vert</button>'
    + ' </li>'
    + ' <li class="flex-row space-between align-center" draggable="true">'
    + '   <div class="flex-row align-center fill">'
    + '     <input type="checkbox">'
    + '     <span class="fill" contenteditable="true">Task 5</span>'
    + '   </div>'
    + '   <button class="material-icons drag" type="button">more_vert</button>'
    + ' </li>'
    + '</ul>'
    + '<div class="flex-row justify-center align-center">'
    + ' <button type="button" class="btn-clear pointer">Clear all completed</button>'
    + '</div>').replace(/>\s+</g, '><');

    setupObjects();

    spanArray = new SuperArray(...document.querySelectorAll('span'));
    const span = spanArray[2];
    span.dispatchEvent(e);

    toDoList.tasks = [
      new Task('Task 1', false, 1),
      new Task('Task 2', false, 2),
      new Task('Task 3', false, 3),
      new Task('Task 4', false, 4),
      new Task('Task 5', false, 5),
    ];

  });

  test('Edit item updates array',() => {

    const expected = [
      new Task('Task 1', false, 1),
      new Task('Task 2', false, 2),
      new Task('Task three', false, 3),
      new Task('Task 4', false, 4),
      new Task('Task 5', false, 5),
    ];

    crud.editDescription(e, spanArray, toDoList);
    const result = toDoList.tasks;

    expect(result).toStrictEqual(expected);
    
  })

  test('Edit item updates list in DOM', () => {

    const expected = (
      '<li class="flex-row space-between align-center" draggable="true">'
      + '  <div class="flex-row align-center fill">'
      + '    <input type="checkbox">'
      + '    <span class="fill" contenteditable="true">Task 1</span>'
      + '  </div>'
      + '  <button class="material-icons drag" type="button">more_vert</button>'
      + '</li>'
      + '<li class="flex-row space-between align-center" draggable="true">'
      + '  <div class="flex-row align-center fill">'
      + '    <input type="checkbox">'
      + '    <span class="fill" contenteditable="true">Task 2</span>'
      + '  </div>'
      + '  <button class="material-icons drag" type="button">more_vert</button>'
      + '</li>'
      + '<li class="flex-row space-between align-center" draggable="true">'
      + '  <div class="flex-row align-center fill">'
      + '    <input type="checkbox">'
      + '    <span class="fill" contenteditable="true">Task three</span>'
      + '  </div>'
      + '  <button class="material-icons drag" type="button">more_vert</button>'
      + '</li>'
      + '<li class="flex-row space-between align-center" draggable="true">'
      + '  <div class="flex-row align-center fill">'
      + '    <input type="checkbox">'
      + '    <span class="fill" contenteditable="true">Task 4</span>'
      + '  </div>'
      + '  <button class="material-icons drag" type="button">more_vert</button>'
      + '</li>'
      + '<li class="flex-row space-between align-center" draggable="true">'
      + '   <div class="flex-row align-center fill">'
      + '    <input type="checkbox">'
      + '    <span class="fill" contenteditable="true">Task 5</span>'
      + '  </div>'
      + '  <button class="material-icons drag" type="button">more_vert</button>'
      + '</li>'
    ).replace(/>\s+</g, '><');

    crud.editDescription(e, spanArray, toDoList);
    const result = document.querySelector('ul').innerHTML;

    expect(result).toStrictEqual(expected);

  });

  test('Edit item updates local storage',() => {

    const expected = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
      { description: 'Task three', completed: false, index: 3 },
      { description: 'Task 4', completed: false, index: 4 },
      { description: 'Task 5', completed: false, index: 5 },
    ];

    crud.editDescription(e, spanArray, toDoList);
    const result = JSON.parse(localStorage.getItem('tasks'));

    expect(result).toStrictEqual(expected);

  })
});