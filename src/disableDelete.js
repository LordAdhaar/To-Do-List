import removeDiv from "./remove";

export default function disableDelete(){
    
    let Delete = document.querySelector(`button#${this.id}`);
    Delete.remove();
}