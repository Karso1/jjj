const taskInput = document.getElementById('taskInput');
const prioritySelect = document.getElementById('prioritySelect');
const dueDateInput = document.getElementById('dueDate');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();
  const priority = prioritySelect.value;
  const dueDate = dueDateInput.value;

  if (taskText !== '') {
    const li = document.createElement('li');
    li.classList.add(priority); // Add priority class for color coding
    li.innerHTML = `
      <span class="complete-btn" onclick="completeTask(this)">✓</span>
      <span class="task-text">${taskText}</span>
      <span class="delete-btn" onclick="deleteTask(this)">❌</span>
      <span class="due-date">${dueDate}</span>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
    saveTasks();
  }
}

function deleteTask(btn) {
  const li = btn.parentNode;
  taskList.removeChild(li);
  saveTasks();
}

function completeTask(btn) {
  const li = btn.parentNode;
  const taskText = li.querySelector('.task-text');
  taskText.classList.toggle('completed');

  const isCompleted = taskText.classList.contains('completed');
  if (isCompleted) {
    taskText.style.textDecoration = 'line-through';
  } else {
    taskText.style.textDecoration = 'none';
  }

  saveTasks();
}

// Load tasks from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  savedTasks.forEach(task => {
    const li = document.createElement('li');
    li.classList.add(task.priority);
    li.innerHTML = `
      <span class="complete-btn" onclick="completeTask(this)">✓</span>
      <span class="task-text">${task.text}</span>
      <span class="delete-btn" onclick="deleteTask(this)">❌</span>
      <span class="due-date">${task.dueDate}</span>
    `;
    if (task.completed) {
      li.querySelector('.task-text').classList.add('completed');
      li.querySelector('.task-text').style.textDecoration = 'line-through';
    }

    taskList.appendChild(li);
  });
});

// Save tasks to localStorage whenever the task list changes
function saveTasks() {
  const tasks = Array.from(taskList.children).map(li => ({
    text: li.querySelector('.task-text').textContent,
    priority: li.classList[1], // Assumes priority class is the second class
    completed: li.querySelector('.task-text').classList.contains('completed'),
    dueDate: li.querySelector('.due-date').textContent
  }));

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Event listeners for task actions
taskInput.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

taskList.addEventListener('click', function (event) {
  if (event.target.classList.contains('complete-btn') || event.target.classList.contains('delete-btn')) {
    completeTask(event.target);
  }
});
