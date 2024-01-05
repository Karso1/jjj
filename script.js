const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskText}</span>
      <span class="delete-btn" onclick="deleteTask(this)">❌</span>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

function deleteTask(btn) {
  const li = btn.parentNode;
  taskList.removeChild(li);
}

taskInput.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
