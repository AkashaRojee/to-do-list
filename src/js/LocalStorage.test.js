import LocalStorage from './LocalStorage.js';
import LocalStorageMock from './LocalStorageMock.js';

test('LS object created when local storage is empty has length 0', () => {
  Object.defineProperty(window, 'localStorage', { value: new LocalStorageMock() });
  const expected = 0;

  const ls = new LocalStorage();
  const result = ls.length;

  expect(result).toBe(expected);
});

test('Fetching when local storage is empty returns null', () => {
  Object.defineProperty(window, 'localStorage', { value: new LocalStorageMock() });

  const result = LocalStorage.fetch();

  expect(result).toBeNull();
});

test('Updating when local storage is empty adds key to it', () => {
  Object.defineProperty(window, 'localStorage', { value: new LocalStorageMock() });
  const tasks = [
    { description: 'Task 1', completed: true, index: 1 },
    { description: 'Task 2', completed: false, index: 2 },
    { description: 'Task 3', completed: false, index: 3 },
  ];

  LocalStorage.update(tasks);
  const result = JSON.parse(localStorage.getItem('tasks'));

  expect(result).toStrictEqual(tasks);
});

test('LS object created when local storage is not empty has correct length', () => {
  Object.defineProperty(window, 'localStorage', { value: new LocalStorageMock() });
  const tasks = [
    { description: 'Task 1', completed: true, index: 1 },
    { description: 'Task 2', completed: false, index: 2 },
    { description: 'Task 3', completed: false, index: 3 },
  ];
  localStorage.setItem('tasks', JSON.stringify(tasks));
  const expected = Object.keys(localStorage).length;

  const ls = new LocalStorage();
  const result = ls.length;

  expect(result).toBe(expected);
});

test('Fetching when local storage is not empty returns value', () => {
  Object.defineProperty(window, 'localStorage', { value: new LocalStorageMock() });
  const tasks = [
    { description: 'Task 1', completed: true, index: 1 },
    { description: 'Task 2', completed: false, index: 2 },
    { description: 'Task 3', completed: false, index: 3 },
  ];
  localStorage.setItem('tasks', JSON.stringify(tasks));

  const result = LocalStorage.fetch();

  expect(result).toStrictEqual(tasks);
});

test('Updating when local storage is not empty updates value of key', () => {
  Object.defineProperty(window, 'localStorage', { value: new LocalStorageMock() });
  const tasks = [
    { description: 'Task 1', completed: true, index: 1 },
    { description: 'Task 2', completed: false, index: 2 },
    { description: 'Task 3', completed: false, index: 3 },
  ];
  localStorage.setItem('tasks', JSON.stringify(tasks));
  const updatedTasks = [
    { description: 'Task 1', completed: true, index: 1 },
    { description: 'Task 2', completed: true, index: 2 },
    { description: 'Task 3', completed: true, index: 3 },
  ];

  LocalStorage.update(updatedTasks);
  const result = JSON.parse(localStorage.getItem('tasks'));

  expect(result).toStrictEqual(updatedTasks);
});

// export default class LocalStorage {
//   constructor() {
//     this.length = (LocalStorage.fetch() === null ? 0 : 1);
//   }

//   static fetch() {
//     return JSON.parse(localStorage.getItem('tasks'));
//   }

//   static update(tasks) {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }
// }