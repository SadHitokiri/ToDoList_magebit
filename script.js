const taskInput = document.getElementById("task");
const addBtn = document.getElementById("add-task-btn");
const todosWrapper = document.querySelector("todos-wrapper");

let tasks;
!localStorage.tasks
  ? (tasks = [])
  : (tasks = JSON.parse(localStorage.getItem(tasks)));

function Task(description) {
  this.description = description;
  this.completed = false;
}

const updateStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

addBtn.addEventListener("click", () => {
  tasks.push(new Task(taskInput.value));
  updateStorage();
});

const createTemplate = (task, index) => {
  return `
    

    `;
};

const fillList = () => {
  todosWrapper.innerHTML = "";
  if (tasks.length > 0) {
    tasks.forEach((item, index) => {
      todosWrapper.innerHTML += createTemplate(item, index);
    });
  }
};
