let flag = false;

export default function newProjectTaskForm(projectPage){

    if(flag === true){
        return;
    }

    console.log(flag,projectPage);

    let form = document.createElement("form");
    let projectTaskTitle = document.createElement("input");
    let projectTaskDate = document.createElement("input");
    let projectTaskAddButton = document.createElement("button");
    let projectTaskCancelButton = document.createElement("button");

    form.classList.add("projectTaskForm");
    projectTaskTitle.classList.add("projectTaskTitle");
    projectTaskDate.classList.add("projectTaskDate");
    projectTaskAddButton.classList.add("projectTaskAddButton");
    projectTaskCancelButton.classList.add("projectTaskCancelButton");
    
    projectTaskTitle.type="text";
    projectTaskTitle.placeholder="Enter Task";
    projectTaskTitle.required=true;

    projectTaskDate.type="date";
    projectTaskDate.required=true;

    projectTaskAddButton.type="button";
    projectTaskCancelButton.type="button";

    projectTaskAddButton.innerHTML="ADD";
    projectTaskCancelButton.innerHTML="CANCEL";

    form.appendChild(projectTaskTitle);
    form.appendChild(projectTaskDate);
    form.appendChild(projectTaskAddButton);
    form.appendChild(projectTaskCancelButton);

    projectPage.appendChild(form);

    flag=true;

}

export function projectTaskFormFlagToggle(){
    flag = false;
}