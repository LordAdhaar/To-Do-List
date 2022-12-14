let count = 0;
export default function newTaskCreator(){

    let newTaskTitle = document.querySelector(".title").value;
    let newTaskDate = document.querySelector(".taskDateInput").value;
    count+=1;

    console.log({taskTitle:newTaskTitle, taskDate:newTaskDate, taskNum:count});
    return {taskTitle:newTaskTitle, taskDate:newTaskDate, taskNum:count};
}