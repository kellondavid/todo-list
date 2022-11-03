export function uiFunctions() {
  //display tasks
  const tasksDiv = document.querySelector(".tasks");
  const testing1 = document.createElement("h1");
  testing1.textContent = "test";
  tasksDiv.appendChild(testing1);
}

export function displayInputs() {
  //make add task button display form inputs
  const addTaskInputs = document.querySelector(".addTaskInputs");

  const taskName = document.createElement("form");
  taskName.setAttribute("type", "text");
  taskName.setAttribute("placeholder", "task");
  addTaskInputs.appendChild(taskName);

}
