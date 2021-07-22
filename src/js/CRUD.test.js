import CheckboxList from './CheckboxList.js';
import CRUD from './CRUD.js';
import Drag from './Drag.js';
import ToDoList from './ToDoList.js';

test('Add new task when there is no task yet', () => {
  
  document.body.innerHTML = 
    '<main>' +
    ' <div class="container flex-col">' +
    '   <div class="flex-row space-between align-center">' +
    '     <p>Today\'s To Do</p>' +
    '   </div>' +
    '   <div class="flex-row">' +
    '     <input type="text" class="fill" placeholder="Add to your list...">' +
    '     <button type="button" class="material-icons">add</button>' +
    '   </div>' +
    '   <ul>' +
    '   </ul>' +
    '   <div class="flex-row justify-center align-center">' +
    '     <button type="button" class="btn-clear pointer">Clear all completed</button>' +
    '   </div>' +
    ' </div>' +
    '</main>'

  let e = new Event('click');
  let toDoList = new ToDoList();
  let checkboxList = new CheckboxList();
  let drag = new Drag();
  let crud = new CRUD();

  crud.addNewTask(e, toDoList, checkboxList, drag);
});