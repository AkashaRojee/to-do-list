import ToDoList from './ToDoList.js';
import Task from './Task.js';

test('add() adds new task to empty tasks array', () => {
  
  let tdl = new ToDoList();

  const expectedTaskArray = [{'Task 1'}]
  
  const result = tdl.add('Task 1', false, 0);

  console.log(tdl);
});

// test('add() adds new task to non-empty tasks array', () => {
  
// });