import enableDelete from './enableDelete.js';

export default function createDelete(){
    
    let Delete = document.createElement("button");
    Delete.classList.add("newTaskDelete");
    Delete.setAttribute("id",`${this.id}`);
    Delete.innerHTML = "X";

    enableDelete(Delete);

}