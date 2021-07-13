import './style.css';

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

class ToDoList {

  constructor() {
    this.tasks = [];
  }

  add(description, completed, index) {
    this.tasks.push(new Task(description, completed, index));
  }
}

let toDoList = new ToDoList();

toDoList.add('Task1', false, 0);
toDoList.add('Task2', false, 1);
toDoList.add('Task3', false, 2);
toDoList.add('Task4', false, 3);
toDoList.add('Task5', false, 4);

console.log(toDoList);