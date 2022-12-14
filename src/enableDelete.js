import disableDelete from "./disableDelete";
import removeDiv from "./remove";

export default function enableDelete(Delete){

    let toAppendTo = document.querySelector(`div.newTaskDiv#${Delete.id}`);    
    toAppendTo.appendChild(Delete);
    toAppendTo.addEventListener("mouseleave",disableDelete);
    Delete.addEventListener("click",removeDiv);

}