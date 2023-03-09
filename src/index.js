import "./style.css";
import allTaskLoader from "./allTasks.js";
import newProjectForm from "./newProjectForm.js";

allTaskLoader();

let allTasksBtn = document.querySelector("#allTasks");
allTasksBtn.addEventListener("click",allTaskLoader);

let addProjectBtn = document.querySelector("#addProject");
addProjectBtn.addEventListener("click",newProjectForm);