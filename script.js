const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.innerHTML = ${taskText} <button onclick="removeTask(this)">Delete</button>;
  taskList.appendChild(li);

  taskInput.value = '';
});

function removeTask(btn) {
  btn.parentElement.remove();
}