let taskInput = document.getElementById('taskInput');
let addButton = document.getElementById('addButton');
let taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);

function addTask() {
  let taskText = taskInput.value;
  if (taskText.trim() !== '') {
    let taskItem = document.createElement('li');
    taskItem.innerHTML = `<span onclick="removeTask(this)">X</span>${taskText}`;
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}

function removeTask(element) {
  let taskItem = element.parentNode;
  taskList.removeChild(taskItem);
}
