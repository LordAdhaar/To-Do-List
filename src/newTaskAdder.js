import newTaskCreator from "./newTask.js";


export default function newTaskAdder(){

    let allTasksDiv = document.querySelector(".allTasksDiv");

    //storing newTask
    let newTask = newTaskCreator();
    
    let newTaskDiv = document.createElement("div");
    let newTaskTitle = document.createElement("p");
    let newTaskDate = document.createElement("p");


    newTaskDiv.classList.add("newTaskDiv");
    newTaskDiv.setAttribute("id",`${newTask.taskNum}`);
    newTaskTitle.classList.add("newTaskTitle");
    newTaskDate.classList.add("newTaskDate");

    newTaskTitle.innerHTML = `${newTask.taskTitle}`;
    newTaskDate.innerHTML = `${newTask.taskDate}`;

    newTaskDiv.appendChild(newTaskTitle);
    newTaskDiv.appendChild(newTaskDate);

    allTasksDiv.appendChild(newTaskDiv);
}