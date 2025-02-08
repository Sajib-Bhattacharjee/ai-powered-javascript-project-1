const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Load tasks from local storage
document.addEventListener("DOMContentLoaded", () => {
  const tasks = Storage.getTasks();
  tasks.forEach((task) => addTaskToDOM(task));
});

// Add task
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const task = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };

  addTaskToDOM(task);
  Storage.saveTask(task);
  taskInput.value = "";
});

// Add task to DOM
function addTaskToDOM(task) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="${task.completed ? "completed" : ""}">${task.text}</span>
    <button onclick="deleteTask(${task.id})">Delete</button>
  `;
  li.addEventListener("click", () => toggleTaskCompletion(task.id));
  taskList.appendChild(li);
}

// Toggle task completion
function toggleTaskCompletion(id) {
  const tasks = Storage.getTasks();
  const updatedTasks = tasks.map((task) => {
    if (task.id === id) {
      task.completed = !task.completed;
    }
    return task;
  });
  Storage.saveAllTasks(updatedTasks);
  renderTasks();
}

// Delete task
function deleteTask(id) {
  const tasks = Storage.getTasks().filter((task) => task.id !== id);
  Storage.saveAllTasks(tasks);
  renderTasks();
}

// Render tasks
function renderTasks() {
  taskList.innerHTML = "";
  const tasks = Storage.getTasks();
  tasks.forEach((task) => addTaskToDOM(task));
}

function deleteTask(id) {
  const tasks = Storage.getTasks().filter((task) => task.id !== id);
  Storage.saveAllTasks(tasks);

  // Add animation for deletion
  const taskElement = document.querySelector(`li[data-id="${id}"]`);
  taskElement.classList.add("fade-out");
  setTimeout(() => {
    taskElement.remove();
  }, 300); // Match the duration of the animation
}

function deleteTask(id) {
  const tasks = Storage.getTasks().filter((task) => task.id !== id);
  Storage.saveAllTasks(tasks);

  // Add animation for deletion
  const taskElement = document.querySelector(`li[data-id="${id}"]`);
  taskElement.classList.add("fade-out");
  setTimeout(() => {
    taskElement.remove();
  }, 300); // Match the duration of the animation
}
