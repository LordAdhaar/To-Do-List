import {flagToggler} from "./allTasks.js";
import newProjectTaskForm from "./newProjectTaskForm.js";
import {projectTaskFormFlagToggle} from "./newProjectTaskForm.js"

let content = document.querySelector("#content");
let oldProjectPage;

let flag = false;

export default function projectPageLoader(newProject){

    let allTasksPage = document.querySelector("#allTasksPage");
    allTasksPageRemover(allTasksPage);

    projectTaskFormFlagToggle();

    if(flag === true){
        if(oldProjectPage===newProject.projectId+"Page"){
            
            let pageToBeDeleted = document.querySelector(`#${oldProjectPage}`);
            if(pageToBeDeleted!==null){
                return;
            }

            console.log(oldProjectPage,newProject.projectId+"Page")
        
        }else{

            console.log(oldProjectPage,newProject.projectId+"Page")

            let pageToBeDeleted = document.querySelector(`#${oldProjectPage}`);

            if(pageToBeDeleted!==null){
                pageToBeDeleted.remove();
            }
        }
    }



    let projectPage = document.createElement("div");
    let projectPageHeading = document.createElement("h2");
    let addProjectTaskBtn = document.createElement("button");
    let projectAllTasksDiv = document.createElement("div");

    projectPage.classList.add("projectPage");
    projectPage.setAttribute("id",newProject.projectId+"Page");
    projectPageHeading.classList.add("projectPageHeading");
    addProjectTaskBtn.classList.add("addProjectTaskBtn");
    projectAllTasksDiv.classList.add("projectAllTasksDiv");

    oldProjectPage = newProject.projectId+"Page";

    projectPageHeading.innerHTML = newProject.title;
    addProjectTaskBtn.innerHTML = "+ ADD TASK";

    projectPage.appendChild(projectPageHeading);
    projectPage.appendChild(projectAllTasksDiv);
    projectPage.appendChild(addProjectTaskBtn);

    content.appendChild(projectPage);

    //event listener for addTaskButton for the page
    addProjectTaskBtn.addEventListener("click",()=>{newProjectTaskForm(projectPage)});

    //load project ke tasks
    projectTaskLoader(newProject);

    flag = true;


}

function allTasksPageRemover(allTasksPage){
    
    if(allTasksPage===null){
        return;
    }
    else{
        allTasksPage.remove();
        flagToggler();
    }
}

function projectTaskLoader(newProject){
    
    if(newProject.projectTasksList.length===0){
        console.log("zero project tasks");
        return;
    }
}