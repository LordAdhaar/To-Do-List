import {projFlagSetter} from "./newProjectForm.js";

let allProjectList = [];
let count = -1;

function projectCreator(){

    let projectTitle = document.querySelector(".projectTitle").value;
    
    if(projectTitle===""){
        return;
    }

    count+=1
    let projectId = count;

    let addProject = {title:projectTitle,projectNo:projectId,projectId:"project"+projectId};
    addToallProjectsList(addProject);
    console.log(addProject,allProjectList);
    return addProject

}

function addToallProjectsList(addProject){

    let pushProject = [];

    pushProject.push(addProject.title);
    pushProject.push(addProject.projectNo);
    pushProject.push(addProject.projectId);

    allProjectList.push(pushProject);
    console.log(allProjectList);
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
    delProjectBtn.innerHTML="DEL";

    //appending children;
    newProjectDiv.appendChild(newProjectTitle);
    newProjectDiv.appendChild(delProjectBtn);

    delProjectBtn.addEventListener("click",remProject);

    allProjects.appendChild(newProjectDiv);

    remProjectForm();
}



function remProject(){
    let projectToRemove = document.querySelector(`div#${this.id}`);
    projectToRemove.remove();
    for(let project of allProjectList){
        if(project[2]===this.id){
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