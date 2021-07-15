export default class LocalStorage {
  constructor() {
    this.length = localStorage.length;
  }

  static fetch() {
    return JSON.parse(localStorage.getItem('tasks'));
  }

  static update(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}