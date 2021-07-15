export default class LocalStorage {
  constructor() {
    this.length = (LocalStorage.fetch() === null ? 0 : 1);
  }

  static fetch() {
    return JSON.parse(localStorage.getItem('tasks'));
  }

  static update(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}