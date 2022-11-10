import { Task } from "./task";
import { uiFunctions } from "./ui";

//globals
let taskList = [
  {
    title: "testing",
    date: "07/20/2022",
  },
];

//static property
Task.id = 0;

function navigateTabs() {
  const homeBtn = document.querySelector(".home");
  homeBtn.addEventListener("click", uiFunctions);
}

navigateTabs();

function addTaskToList() {
  let a = document.getElementById("taskTitle").value;
  let b = document.getElementById("taskDate").value;

  if (a !== "" && b !== "") {
    taskList.push(new Task(a, b));
  }
  const submitBtn = document.getElementById("addTaskInputs");
  submitBtn.addEventListener("submit", () => {
    addTaskToList();
    event.preventDefault();
    submitBtn.reset();
    displayTasks();
  });
}

//displays each task into cards
function displayTasks() {
  const currentDisplay = document.querySelector(".taskDisplay");
  currentDisplay.textContent = "";

  taskList.forEach((taskList) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add(`${taskList.taskId}`);
    currentDisplay.appendChild(card);

    for (let key in taskList) {
      const text = document.createElement("p");
      text.textContent = `${key}: ${taskList[key]}`;
      card.appendChild(text);
    }

    const remBtn = document.createElement("button");
    card.appendChild(remBtn);
    remBtn.textContent = "Complete";
    remBtn.onclick = remTask;
  });
}
//deletes task
function remTask() {
  const taskId = this.parentElement.classList[1];

  const findTask = taskList.findIndex((element) => element.taskId === taskId);
  const delTask = taskList.splice(findTask, 1);
  this.parentElement.remove();
}

displayTasks();