import newTaskForm from "./newTaskForm";
import newTaskAdder, {allTasksList, removeDiv} from "./newTask.js";

let content = document.querySelector("#content");
let heading = document.querySelector("#heading");
let flag = false;

export default function allTaskLoader(){

    if(flag===true){
        return;
    }

    let projectPageToRemove = document.querySelector(".projectPage");
    if(projectPageToRemove!==null){
        projectPageToRemove.remove();
    }

    //creating divs
    let allTasksPage = document.createElement("div");
    let allTasksHeading = document.createElement("h2");
    let addTaskButton = document.createElement("button")
    let allTasksDiv = document.createElement("div");

    //adding class
    allTasksPage.setAttribute("id","allTasksPage");
    allTasksHeading.classList.add("allTasksHeading");
    addTaskButton.classList.add("addTaskButton");
    allTasksDiv.classList.add("allTasksDiv");

    //adding text content
    allTasksHeading.innerHTML = "ALL TASKS";
    addTaskButton.innerHTML = "+ ADD TASK";

    allTasksPage.appendChild(allTasksHeading);
    allTasksPage.appendChild(allTasksDiv);    
    allTasksPage.appendChild(addTaskButton);

    content.appendChild(allTasksPage);

    // event listender for addTaskButton
    console.log(addTaskButton);
    addTaskButton.addEventListener("click",newTaskForm);

    taskLoader(allTasksList);

    flag=true;
}

function taskLoader(allTasksList){

    if(allTasksList.length===0){
        console.log(0);
        return;
    }

    console.log(allTasksList);

    for(let newTask of allTasksList){

        let allTasksDiv = document.querySelector(".allTasksDiv");

        let newTaskDiv = document.createElement("div");
        let newTaskCheckbox = document.createElement("input");
        let newTaskTitle = document.createElement("p");
        let newTaskDate = document.createElement("p"); 
        let delTaskBtn = document.createElement("button");

        // adding classes to the components
        newTaskCheckbox.classList.add("newTaskCheckbox");
        newTaskDiv.classList.add("newTaskDiv");
        newTaskDiv.classList.add(`${newTask.UniqueId}`);

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
        delTaskBtn.innerHTML="X";

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

    }

}

export function flagToggler(){
    flag = false;
}