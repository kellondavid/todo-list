import { addTask } from "./task";
import { uiFunctions, displayInputs } from "./ui";

function navigateTabs() {
  const homeBtn = document.querySelector(".home");
  homeBtn.addEventListener("click", uiFunctions);

  const addTaskBtn = document.querySelector(".addTaskBtn");
  addTaskBtn.addEventListener("click", displayInputs)
}


navigateTabs();
displayInputs();