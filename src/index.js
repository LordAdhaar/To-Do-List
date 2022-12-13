import "./style.css";
import allTaskLoader from "./allTasks.js";
import newTaskForm from "./newTaskForm.js";
import newTaskCreator from  "./newTask.js";
import newTaskAdder from "./newTaskAdder.js";

allTaskLoader();
newTaskForm();

let addButton = document.querySelector(".taskAddButton");
console.log(addButton);
addButton.addEventListener("click",newTaskAdder);

console.log("hello world");