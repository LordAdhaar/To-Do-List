import newTaskCreator from "./newTask.js";
import enableDelete from "./enableDelete.js";
import disableDelete from "./disableDelete.js";
import removeDiv from "./remove.js";
import createDelete from "./createDelete.js";


export default function newTaskAdder(){

    let allTasksDiv = document.querySelector(".allTasksDiv");

    //storing newTask
    let newTask = newTaskCreator();
    
    //creating the newTaskDIVISON
    let newTaskDiv = document.createElement("div");
    let newTaskCheckbox = document.createElement("input");
    let newTaskTitle = document.createElement("p");
    let newTaskDate = document.createElement("p");

    // adding classes to the components
    newTaskCheckbox.classList.add("newTaskCheckbox");
    newTaskDiv.classList.add("newTaskDiv");
    newTaskDiv.setAttribute("id",`task${newTask.taskNum}`);
    newTaskCheckbox.setAttribute("id",`task${newTask.taskNum}`);
    newTaskTitle.classList.add("newTaskTitle");
    newTaskDate.classList.add("newTaskDate");

    //seting chekcbox tpe
    newTaskCheckbox.type="checkbox";

    //filling in the description of the task
    newTaskTitle.innerHTML = `${newTask.taskTitle}`;
    newTaskDate.innerHTML = `${newTask.taskDate}`;

    //adding content to task
    newTaskDiv.appendChild(newTaskCheckbox);
    newTaskDiv.appendChild(newTaskTitle);
    newTaskDiv.appendChild(newTaskDate);
    
    //toggling delete button
    newTaskDiv.addEventListener("mouseenter",createDelete);
    
    //delete when checkbox clicked
    newTaskCheckbox.addEventListener("click",removeDiv)

    //adding to all tasks page
    allTasksDiv.appendChild(newTaskDiv);
}
