import Task from './Task.js';

test('Create Task object', () => {
  const expected = new Task('Task name', true, 3);

  const result = new Task('Task name', true, 3);

  // use toEqual to check for properties of object (deep equality)
  // instead of toBe which checks if objects are the same
  expect(result).toEqual(expected);
});