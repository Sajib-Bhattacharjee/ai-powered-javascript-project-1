class Storage {
  static getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  }

  static saveTask(task) {
    const tasks = Storage.getTasks();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  static saveAllTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}
