import newTaskCreator from "./newTask.js";

let newTaskDelete = document.createElement("button");
newTaskDelete.classList.add("newTaskDelete");
newTaskDelete.innerHTML = "X";
newTaskDelete.addEventListener("click",removeTask);


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
    newTaskDiv.addEventListener("mouseenter",enableNewTaskDelete);
    newTaskDiv.addEventListener("mouseleave",disableNewTaskDelete);
    
    //delete when checkbox clicked
    newTaskCheckbox.addEventListener("click",removeTask)

    //adding to all tasks page
    allTasksDiv.appendChild(newTaskDiv);
}

function enableNewTaskDelete(){  

    newTaskDelete.setAttribute("id",`${this.id}`);
    this.appendChild(newTaskDelete);
}

function disableNewTaskDelete(){

    let remButton = document.querySelector(".newTaskDelete");
    remButton.remove();
}

function removeTask(){

    let taskToRemove = document.querySelector(`div.newTaskDiv#${this.id}`);
    console.log(taskToRemove);
    taskToRemove.remove();

}