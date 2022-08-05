import React from "react";

function TaskList(props){
    return(
    <ul className="taskList">
        <li className={`todo-item ${props.completed ? "completed":""}`}>

            <label className="todo-label" htmlFor={props.id} key={props.id} id={props.id}>
            {props.name}
            </label>

           <button type="button" className="btn btn__done" defaultChecked={props.completed} onClick={()=>props.toggleTaskCompletion(props.id)}>

            {/* {props.completed ? "Undo":"Mark Done"} */}
            <i class={`fa ${props.completed ? "fa-undo":"fa-check"}`} aria-hidden="true"></i>
           </button>

           <button type="button" className="btn btn__del" onClick={()=>props.deleteTask(props.id)}>
           <i class="fa fa-trash" aria-hidden="true"></i>
           </button>

        </li>
    </ul>
    );
}

export default TaskList;