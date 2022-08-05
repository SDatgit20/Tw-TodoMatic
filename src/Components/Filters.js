import React from "react";

function Filters(props){
        return(
        <button type="button" className="btn toggle-btn" aria-pressed={props.isPressed} key={props.key}
        onClick={()=>props.setFilter(props.name)}>
            {props.name}
        </button>
        );
}

export default Filters;