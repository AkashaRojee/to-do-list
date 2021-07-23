import ToDoList from './ToDoList.js';
import Task from './Task.js';

test('add() adds new task to empty tasks array', () => {
  const expected = [new Task('Task 1', false, 0)];

  const result = new ToDoList();
  result.add('Task 1', false, 0);

  expect(result.tasks).toStrictEqual(expected);
});

test('add() adds new task to non-empty tasks array', () => {
  const expected = [new Task('Task 1', false, 0), new Task('Task 2', false, 1)];

  const result = new ToDoList();
  result.tasks.push(new Task('Task 1', false, 0));
  result.add('Task 2', false, 1);

  expect(result.tasks).toStrictEqual(expected);
});

//DND updates DOM, then calls reOrder, which updates indices
test('reOrder updates indices in array', () => {

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
    + '     <span class="fill" contenteditable="true">Task 4</span>'
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
    + '     <span class="fill" contenteditable="true">Task 5</span>'
    + '   </div>'
    + '   <button class="material-icons drag" type="button">more_vert</button>'
    + ' </li>'
    + '</ul>'
    + '<div class="flex-row justify-center align-center">'
    + ' <button type="button" class="btn-clear pointer">Clear all completed</button>'
    + '</div>').replace(/>\s+</g, '><');
  let toDoList = new ToDoList();
  toDoList.listItems = document.querySelectorAll('li');
  const expected = [
    new Task('Task 1', false, 1),
    new Task('Task 4', false, 2),
    new Task('Task 2', false, 3),
    new Task('Task 3', false, 4),
    new Task('Task 5', false, 5),
  ];

  toDoList.reOrder();
  const result = toDoList.tasks;

  expect(result).toStrictEqual(expected);

});