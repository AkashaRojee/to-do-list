import ToDoList from './ToDoList.js';
import Task from './Task.js';

test('add() adds new task to empty tasks array', () => {
  document.body.innerHTML =
    '<ul>' +
    '</ul>';
  let expected = [new Task('Task 1', false, 0)];

  let result = new ToDoList();
  result.add('Task 1', false, 0);

  expect(result.tasks).toStrictEqual(expected);
});

// test('add() adds new task to non-empty tasks array', () => {
  
// });