import {allTasksList} from "./newTask.js";
import {projectTaskFormFlagToggle} from "./newProjectTaskForm.js";

function projectTaskCreator(newProject){
    
    console.log(newProject,newProject.title);

    let projectTaskTitle = document.querySelector(".projectTaskTitle").value;
    let projectTaskDate = document.querySelector(".projectTaskDate").value;

    if(projectTaskTitle==="" || projectTaskDate===""){
        return;
    }

    let count = newProject.projectTasksList.length;
    let projectTaskId = count;

    let taskId = allTasksList.length;

    let addProjectTask = {title:projectTaskTitle,date:projectTaskDate,projectTaskNo:projectTaskId,projectTaskId:"projectTask"+projectTaskId,UniqueId:Math.random()};
    let addTaskToAllTasksList = {title:projectTaskTitle,date:projectTaskDate,taskNo:taskId,taskId:"task"+taskId,UniqueId:addProjectTask.UniqueId};

    newProject.projectTasksList.push(addProjectTask);
    allTasksList.push(addTaskToAllTasksList);

    console.log(allTasksList);
    console.log(newProject.projectTasksList);;


    return addProjectTask;

}



export default function newProjectTaskAdder(newProject){
    
    let projectAllTasksDiv = document.querySelector(`#${newProject.projectId}Page .projectAllTasksDiv`);
    console.log(projectAllTasksDiv);

    console.log("newProjectTaskAdder");
    let newProjectTask = projectTaskCreator(newProject);
    
    if(newProjectTask===undefined){
        return;
    }

    let newProjectTaskDiv = document.createElement("div");
    let newProjectTaskCheckbox = document.createElement("input");
    let newProjectTaskTitle = document.createElement("p");
    let newProjectTaskDate = document.createElement("p");
    let delNewProjectTaskBtn = document.createElement("button");

    //adding classes
    newProjectTaskCheckbox.classList.add("newProjectTaskCheckbox");
    newProjectTaskDiv.classList.add("newProjectTaskDiv");
    newProjectTaskDiv.classList.add(`${newProjectTask.UniqueId}`);


    newProjectTaskDiv.setAttribute("id",newProjectTask.projectTaskId);
    newProjectTaskCheckbox.setAttribute("id",newProjectTask.projectTaskId);
    delNewProjectTaskBtn.setAttribute("id",newProjectTask.projectTaskId);

    newProjectTaskTitle.classList.add("newProjectTaskTitle");
    newProjectTaskDate.classList.add("newProjectTaskDate");

    //setting checkbox type;
    newProjectTaskCheckbox.type="checkbox";
    delNewProjectTaskBtn.type="button";

    //adding text;
    newProjectTaskTitle.innerHTML = newProjectTask.title;
    newProjectTaskDate.innerHTML=newProjectTask.date;
    delNewProjectTaskBtn.innerHTML="DEL";

    //adding content to tasks
    newProjectTaskDiv.appendChild(newProjectTaskCheckbox);
    newProjectTaskDiv.appendChild(newProjectTaskTitle);
    newProjectTaskDiv.appendChild(newProjectTaskDate);
    newProjectTaskDiv.appendChild(delNewProjectTaskBtn);

    //adding newProjectTaskDiv to projectAllTasksDiv
    projectAllTasksDiv.appendChild(newProjectTaskDiv);

    //delete when checkbox clicked or delete clicked;   
    console.log(newProject.projectTasksList);
    newProjectTaskCheckbox.addEventListener("click",()=>{removeProjectTaskDiv(newProjectTaskDiv,newProject)});
    delNewProjectTaskBtn.addEventListener("click",()=>{removeProjectTaskDiv(newProjectTaskDiv,newProject)})

    //remove form
    remProjectTaskForm();

}

function remProjectTaskForm(){

    let projectTaskFormToRemove = document.querySelector(".projectTaskForm");
    projectTaskFormToRemove.remove();
    projectTaskFormFlagToggle();
}

export function removeProjectTaskDiv(newProjectTaskDiv,newProject){

    newProjectTaskDiv.remove();
    //remove from list tooooooooooo alltask and projectalltasks
    for(let projectTask of newProject.projectTasksList){
        if(projectTask.projectTaskId === newProjectTaskDiv.id){
            newProject.projectTasksList.splice(newProject.projectTasksList.indexOf(projectTask),1);
        }
    }

    for(let projectTask of allTasksList){

        console.log(typeof projectTask.UniqueId);
        console.log(typeof +newProjectTaskDiv.classList[1]);

        if( projectTask.UniqueId === +newProjectTaskDiv.classList[1]){
            console.log(projectTask.UniqueId,newProjectTaskDiv.classList[1]);
            console.log(true);
            allTasksList.splice(allTasksList.indexOf(projectTask),1);
        }


    console.log(newProject.projectTasksList);
    console.log(allTasksList);
    }
}
