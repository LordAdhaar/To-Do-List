import newProjectAdder from "./newProject.js";

let flag = false;

export default function newProjectForm(){

    if(flag===true){
        return;
    }

    let sidebar = document.querySelector("#sidebar"); 
    
    let form = document.createElement("form");
    let projectTitle = document.createElement("input");
    let projectAddButton = document.createElement("button");
    let projectCancelButton = document.createElement("button");
    
    form.classList.add("projectForm");
    projectTitle.classList.add("projectTitle");
    projectAddButton.classList.add("projectAddButton");
    projectCancelButton.classList.add("projectCancelButton");

    projectTitle.type="text";
    projectTitle.placeholder="Enter Project Name";
    projectTitle.required=true;

    projectAddButton.type="button";
    projectCancelButton.type="button";

    projectAddButton.innerHTML="ADD";
    projectCancelButton.innerHTML="CANCEL";

    form.appendChild(projectTitle);
    form.appendChild(projectAddButton);
    form.appendChild(projectCancelButton);
    sidebar.appendChild(form);

    projectAddButton.addEventListener("click",newProjectAdder);
    flag = true;
    projectCancelButton.addEventListener("click",cancelProjectForm);


}

function cancelProjectForm(){
    let formToBeRemoved = document.querySelector(".projectForm");
    formToBeRemoved.remove();
    flag=false;
}

export function projFlagSetter(){
    flag = false;
}
