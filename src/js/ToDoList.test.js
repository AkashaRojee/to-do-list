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