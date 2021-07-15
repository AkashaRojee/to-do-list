// import ToDoList from './ToDoList.js';

let checkBoxes;

function changeStatus(e, toDoList) {
  const checkBoxIndex = Array.prototype.indexOf.call(checkBoxes, e.target);
  toDoList.updateTask(checkBoxIndex, 'completed', e.target.checked);
  console.log(e.target.checked);
}

export default function initCheckBoxes(toDoList) {
  checkBoxes = document.querySelectorAll('li input');

  checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => changeStatus(e, toDoList));
  });
}