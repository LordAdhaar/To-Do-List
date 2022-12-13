export default function allTaskLoader(){

    //creating divs
    let allTasksPage = document.querySelector("#allTasksPage");
    let allTasksHeading = document.createElement("h2");
    let allTasksDesc = document.createElement("p")
    let addTaskButton = document.createElement("button")
    let allTasksDiv = document.createElement("div");

    //adding class
    allTasksHeading.classList.add("allTasksHeading");
    allTasksDesc.classList.add("allTasksDesc");
    addTaskButton.classList.add("addTaskButton");
    allTasksDiv.classList.add("allTasksDiv");

    //adding text content
    allTasksHeading.innerHTML = "ALL TASKS";
    allTasksDesc.innerHTML = "To-Do-List of all your tasks";
    addTaskButton.innerHTML = "+ ADD TASK";

    allTasksPage.appendChild(allTasksHeading);
    allTasksPage.appendChild(allTasksDesc);
    allTasksPage.appendChild(addTaskButton);
    allTasksPage.appendChild(allTasksDiv);
}