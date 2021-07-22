import ToDoList from './ToDoList.js';
import Task from './Task.js';

test('add() adds new task to empty tasks array', () => {
  let expected = new ToDoList();
  expected.tasks = [new Task('Task 1', false, 0)];
  expected.list = new DOMParser().parseFromString(
    '<ul>' +
    '</ul>',
    'text/html'
  ).querySelector('ul');
  expected.listItems = new DOMParser().parseFromString(
    '',
    'text/html'
  ).querySelector('li');
  // expected.ls = new LocalStorageMock();

  let result = new ToDoList();
  result.add('Task 1', false, 0);

  expect(result.tasks).toStrictEqual(expected.tasks);
});

// test('add() adds new task to non-empty tasks array', () => {
  
// });