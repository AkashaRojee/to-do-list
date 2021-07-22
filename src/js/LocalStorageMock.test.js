import LocalStorageMock from './LocalStorageMock.js';

describe('constructor', () => {
  test('Create new localStorage mock object', () => {
    const expected = new LocalStorageMock();

    Object.defineProperty(window, 'localStorage', { value: new LocalStorageMock() });
    const result = window.localStorage;

    expect(result).toStrictEqual(expected);
  });
});

describe('getItem', () => {
  test('Get key from empty localStorage mock object returns null', () => {
    Object.defineProperty(window, 'localStorage', { value: new LocalStorageMock() });
    const result = window.localStorage.getItem('tasks');

    expect(result).toBeNull();
  });

  test('Get key from non-empty localStorage mock object returns value', () => {
    const expected = new LocalStorageMock();
    expected.store = {
      tasks:
      JSON.stringify(
        [
          { description: 'Task 1', completed: true, index: 1 },
          { description: 'Task 2', completed: false, index: 2 },
          { description: 'Task 3', completed: false, index: 3 },
        ],
      ),
    };

    Object.defineProperty(window, 'localStorage', { value: new LocalStorageMock() });
    window.localStorage.store = {
      tasks:
      JSON.stringify(
        [
          { description: 'Task 1', completed: true, index: 1 },
          { description: 'Task 2', completed: false, index: 2 },
          { description: 'Task 3', completed: false, index: 3 },
        ],
      ),
    };
    const result = window.localStorage.getItem('tasks');

    expect(result).toStrictEqual(expected.store.tasks);
  });
});

describe('setItem', () => {
  test('Set key in empty localStorage mock object adds key to it', () => {
    const expected = new LocalStorageMock();
    expected.store = {
      tasks:
      JSON.stringify(
        [
          { description: 'Task 1', completed: true, index: 1 },
          { description: 'Task 2', completed: false, index: 2 },
          { description: 'Task 3', completed: false, index: 3 },
        ],
      ),
    };

    Object.defineProperty(window, 'localStorage', { value: new LocalStorageMock() });
    window.localStorage.setItem(
      'tasks',
      JSON.stringify(
        [
          { description: 'Task 1', completed: true, index: 1 },
          { description: 'Task 2', completed: false, index: 2 },
          { description: 'Task 3', completed: false, index: 3 },
        ],
      ),
    );
    const result = window.localStorage.store.tasks;

    expect(result).toStrictEqual(expected.store.tasks);
  });

  test('Set key in non-empty localStorage mock object updates value', () => {
    const expected = new LocalStorageMock();
    expected.store = {
      tasks:
      JSON.stringify(
        [
          { description: 'Task 1', completed: true, index: 1 },
          { description: 'Task 2', completed: true, index: 2 },
          { description: 'Task 3', completed: true, index: 3 },
        ],
      ),
    };

    Object.defineProperty(window, 'localStorage', { value: new LocalStorageMock() });
    window.localStorage.store = {
      tasks:
      JSON.stringify(
        [
          { description: 'Task 1', completed: true, index: 1 },
          { description: 'Task 2', completed: false, index: 2 },
          { description: 'Task 3', completed: false, index: 3 },
        ],
      ),
    };
    window.localStorage.setItem(
      'tasks',
      JSON.stringify(
        [
          { description: 'Task 1', completed: true, index: 1 },
          { description: 'Task 2', completed: true, index: 2 },
          { description: 'Task 3', completed: true, index: 3 },
        ],
      ),
    );

    const result = window.localStorage.store.tasks;

    expect(result).toStrictEqual(expected.store.tasks);
  });
});