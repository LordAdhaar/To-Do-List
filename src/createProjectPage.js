import {flagToggler} from "./allTasks.js";
import newProjectTaskForm from "./newProjectTaskForm.js";
import {projectTaskFormFlagToggle} from "./newProjectTaskForm.js"
import {removeProjectTaskDiv} from "./newProjectTask.js";

let content = document.querySelector("#content");
let oldProjectPage;

let flag = false;

export default function projectPageLoader(newProject){

    let allTasksPage = document.querySelector("#allTasksPage");
    allTasksPageRemover(allTasksPage);

    projectTaskFormFlagToggle();


    //prevent the same page from loading twice;
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
    addProjectTaskBtn.addEventListener("click",()=>{newProjectTaskForm(projectPage,newProject)});

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

    console.log(newProject);
    console.log(newProject.projectTasksList);
    
    if(newProject.projectTasksList.length===0){
        console.log(0);
        return;
    }

    for(let newProjectTask of newProject.projectTasksList){
        
        let projectAllTasksDiv = document.querySelector(`#${newProject.projectId}Page .projectAllTasksDiv`);
        console.log(projectAllTasksDiv);

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

    }
}