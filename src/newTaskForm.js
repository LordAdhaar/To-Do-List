let content = document.querySelector("#content");

//put input tags and button in FORM tag to make required work later

export default function newTaskForm(){

    let form = document.createElement("div");
    let taskInput = document.createElement("input");
    let taskDateInput = document.createElement("input");
    let taskAddButton = document.createElement("button");
    let taskCancelButton = document.createElement("button");

    form.classList.add("form");
    taskInput.classList.add("title");
    taskDateInput.classList.add("taskDateInput");
    taskAddButton.classList.add("taskAddButton");
    taskCancelButton.classList.add("taskCancelButton");
    
    taskInput.type="text";
    taskInput.placeholder="Enter task";
    taskInput.required=true;

    taskDateInput.type="date";
    taskDateInput.required=true;

    taskAddButton.type="submit";
    taskCancelButton.type="button";

    taskAddButton.innerHTML="ADD";
    taskCancelButton.innerHTML="CANCEL"

    form.appendChild(taskInput);
    form.appendChild(taskDateInput);
    form.appendChild(taskAddButton);
    form.appendChild(taskCancelButton);
    content.appendChild(form);
}