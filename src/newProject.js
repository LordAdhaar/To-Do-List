import {projFlagSetter} from "./newProjectForm.js"; 
import projectPageLoader from "./createProjectPage.js";

export let allProjectList = [];
let count = allProjectList.length-1;

function projectCreator(){

    let projectTitle = document.querySelector(".projectTitle").value;
    
    if(projectTitle===""){
        return;
    }

    count+=1
    let projectId = count;

    let addProject = {title:projectTitle,projectNo:projectId,projectId:"project"+projectId,projectTasksList:[]};

    allProjectList.push(addProject);

    for(let project of allProjectList){
        console.log(project);
    }

    return addProject

}

export default function newProjectAdder(){

    let allProjects = document.querySelector("#allProjects");

    let newProject = projectCreator();

    if(newProject===undefined){
        return;
    }

    let newProjectDiv = document.createElement("div");
    let newProjectTitle = document.createElement("p");
    let delProjectBtn = document.createElement("button");

    newProjectDiv.classList.add("newProjectDiv");

    newProjectDiv.setAttribute("id",newProject.projectId);
    delProjectBtn.setAttribute("id",newProject.projectId);

    newProjectTitle.classList.add("newProjectTitle");

    //setting type
    delProjectBtn.type="button";

    //adding text;
    newProjectTitle.innerHTML=newProject.title;
    delProjectBtn.innerHTML="X";

    //appending children;
    newProjectDiv.appendChild(newProjectTitle);
    newProjectDiv.appendChild(delProjectBtn);

    delProjectBtn.addEventListener("click",remProject);

    //event listener on newProjectDiv to fire createProjectPage add here
    newProjectDiv.addEventListener("click",()=>{projectPageLoader(newProject)});

    allProjects.appendChild(newProjectDiv);

    remProjectForm();
}



function remProject(){
    let projectToRemove = document.querySelector(`div#${this.id}`);
    projectToRemove.remove();
    for(let project of allProjectList){
        if(project.projectId===this.id){
            allProjectList.splice(allProjectList.indexOf(project),1);
        }
    }

    console.log(allProjectList);

}

function remProjectForm(){
    let projectFormToRemove = document.querySelector(".projectForm");
    projectFormToRemove.remove()
    projFlagSetter();

}