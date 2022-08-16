const taskInput = document.getElementById("task");
const addBtn = document.getElementById("add-task-btn");
const todosWrapper = document.querySelector(".todos-wrapper");


let tasks;
!localStorage.tasks
  ? (tasks = [])
  : (tasks = JSON.parse(localStorage.getItem("tasks")));

  let todoItemEl = [];

function Task(description) {
  this.description = description;
  this.completed = false;
}

const createTemplate = (task, index) => {
  return `
  <br><div class="todo-item ${task.completed ? "checked" : ""}">
      <div class="description">${task.description}</div>
      <div class="buttons">
          <input onclick="completeTask(${index})" class="btn-complete" type="checkbox" ${
            task.completed ? "checked" : ""
          }>
          <div onclick="deleteTask(${index})" class="btn-remove">Delete</div>
      </div>
  </div>
    `;

};

const fillList = () => {
  todosWrapper.innerHTML = "";
  if (tasks.length > 0) {
    tasks.forEach((item, index) => {
      todosWrapper.innerHTML += createTemplate(item, index);
    });
    todoItemEl = document.querySelectorAll('.todo-item');
  }
};

fillList();

const updateStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const completeTask = (index) => {
  tasks[index].completed = !tasks[index].completed;
  if(tasks[index].completed) {
      todoItemEl[index].classList.add('checked');
  } else {
    todoItemEl[index].classList.remove('checked');
  }
  updateStorage();
  fillList();
};

addBtn.addEventListener("click", () => {
  tasks.push(new Task(taskInput.value));
  updateStorage();
  fillList();
  taskInput.value = "";
});

const deleteTask = index => {
    tasks.splice(index, 1);
    updateStorage();
    fillList();
}