import {flagSetter} from "./newTaskForm.js";

export let allTasksList = [{title: '0', date: '2022-12-15', taskNo: 0, taskId: 'task0'},{title: '1', date: '2022-12-15', taskNo: 1, taskId: 'task1'}];

let count=allTasksList.length-1;

function TaskCreator(){
    
    let taskTitle = document.querySelector(".taskTitle").value;
    let taskDate = document.querySelector(".taskDateInput").value

    if(taskTitle==="" || taskDate===""){
        return;
    }

    count+=1;
    let taskId=count;
    
    let addTask = {title:taskTitle,date:taskDate,taskNo:taskId,taskId:"task"+taskId};
    
    allTasksList.push(addTask);
    
    for(let task of allTasksList){
        console.log(task);
    }

    return addTask;
    


}

export default function newTaskAdder(){

    console.log(this);
    let allTasksDiv = document.querySelector(".allTasksDiv");

    //storing newTask
    let newTask = TaskCreator();

    if(newTask===undefined){
        return;
    }


    let newTaskDiv = document.createElement("div");
    let newTaskCheckbox = document.createElement("input");
    let newTaskTitle = document.createElement("p");
    let newTaskDate = document.createElement("p"); 
    let delTaskBtn = document.createElement("button");

    // adding classes to the components
    newTaskCheckbox.classList.add("newTaskCheckbox");
    newTaskDiv.classList.add("newTaskDiv");

    newTaskDiv.setAttribute("id",newTask.taskId);
    newTaskCheckbox.setAttribute("id",newTask.taskId);
    delTaskBtn.setAttribute("id",newTask.taskId);
    
    newTaskTitle.classList.add("newTaskTitle");
    newTaskDate.classList.add("newTaskDate");

    //seting chekcbox tpe
    newTaskCheckbox.type="checkbox";
    delTaskBtn.type="button";

    //filling in the description of the task
    newTaskTitle.innerHTML = newTask.title;
    newTaskDate.innerHTML = newTask.date;
    delTaskBtn.innerHTML="DEL";

    //adding content to task
    newTaskDiv.appendChild(newTaskCheckbox);
    newTaskDiv.appendChild(newTaskTitle);
    newTaskDiv.appendChild(newTaskDate);
    newTaskDiv.appendChild(delTaskBtn);
    
    //delete when checkbox clicked
    newTaskCheckbox.addEventListener("click",removeDiv);
    delTaskBtn.addEventListener("click",removeDiv);

    //adding to all tasks page
    allTasksDiv.appendChild(newTaskDiv);

    //
    remForm();

}

export function removeDiv(){

    let toRemove = document.querySelector(`div#${this.id}`);
    toRemove.remove();

    for(let task of allTasksList){
        if(task.taskId===this.id){
            allTasksList.splice(allTasksList.indexOf(task),1);
        }
    }

    console.log(allTasksList);

}

function remForm(){
    let formToBeRemoved = document.querySelector(".taskForm");
    formToBeRemoved.remove();
    flagSetter()
}