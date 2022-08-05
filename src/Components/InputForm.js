import React, { useState } from "react";

function Form(props){
    const[name,setName]=useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
      }
    function handleChange(e){
        setName(e.target.value)
    }
    return(
        <form>
        <input type="text" id="todo-input" class="input" autoComplete="off" placeholder="Enter task" value={name} onChange={handleChange}></input>
        <button type="submit" className="btn btn-submit" onClick={handleSubmit} onChange>Add</button>
        </form>
    );
}

export default Form;