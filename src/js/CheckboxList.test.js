import CheckboxList from './CheckboxList.js';
import ToDoList from './ToDoList.js';
import Task from './Task.js';
import SuperArray from './SuperArray.js';
import LocalStorageMock from './LocalStorageMock.js';

let toDoList, checkboxList, e;

beforeEach(() => {

  document.body.innerHTML = (
    '<div class="flex-row">'
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
    + '</ul>'
    + '<div class="flex-row justify-center align-center">'
    + ' <button type="button" class="btn-clear pointer">Clear all completed</button>'
    + '</div>').replace(/>\s+</g, '><');

  toDoList = new ToDoList();
  checkboxList = new CheckboxList;
  e = new Event('click');

  toDoList.tasks = [
    new Task('Task 1', false, 1),
    new Task('Task 2', false, 2),
    new Task('Task 3', false, 3)
  ];

  const checkboxArray = new SuperArray(...checkboxList.checkboxes);
  const checkbox = checkboxArray[1];
  checkbox.checked = true;
  checkbox.dispatchEvent(e);

});

test('Click on checkbox changes completed status in array', () => {

  const expected = [
    new Task('Task 1', false, 1),
    new Task('Task 2', true, 2),
    new Task('Task 3', false, 3)
  ];

  checkboxList.changeStatus(e, toDoList);
  const result = toDoList.tasks;

  expect(result).toStrictEqual(expected);

});

test('Click on checkbox updates list in DOM', () => {

  const expected = true;

  checkboxList.changeStatus(e, toDoList);
  const result = new SuperArray(...document.querySelectorAll('li input'))[1].checked;

  expect(result).toStrictEqual(expected);

});

test('Click on checkbox updates local storage', () => {

  Object.defineProperty(window, 'localStorage', { value: new LocalStorageMock() });
  const expected = [
    { description: 'Task 1', completed: false, index: 1 },
    { description: 'Task 2', completed: true, index: 2 },
    { description: 'Task 3', completed: false, index: 3 }
  ];

  checkboxList.changeStatus(e, toDoList);
  const result = JSON.parse(localStorage.getItem('tasks'));

  expect(result).toStrictEqual(expected);

});

test('setCheckboxes updates checkboxes property of class', () => {

  const expected = document.querySelectorAll('li input');
  
  checkboxList.setCheckboxes();
  const result = checkboxList.checkboxes;

  expect(result).toStrictEqual(expected);

});