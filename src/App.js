import './App.css';
import React, { useState } from "react";
import Header from './Components/Header.js';
import Form from './Components/InputForm.js';
import Filters from './Components/Filters.js';
import TaskList from './Components/TaskTemplate.js';
import {nanoid} from "nanoid";
import Footer from './Components/Footer.js';

function App(props) {

  const [filter, setFilter] = useState('All');

  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const filterList = FILTER_NAMES.map((name) => (
    <Filters key={name} name={name} isPressed={name===filter} setFilter={setFilter}/>
  ));

  const[tasks,setTask]=useState(props.tasks)

  function toggleTaskCompletion(id){
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTask(updatedTasks);
  }

  const taskList = tasks.filter(FILTER_MAP[filter])
  .map((task) => (
    <TaskList name={task.name} id={task.id} key={task.id}
     deleteTask={deleteTask} 
    completed={task.completed} 
     toggleTaskCompletion={toggleTaskCompletion}/>
  ));


  function addTask(name) {
    const newTask={id:"todo-"+nanoid(), name:name, completed:false};
    setTask([...tasks,newTask]);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTask(remainingTasks);
  }

  return (
    <div className="App">
      <Header className="head"/>
      <Form className="form" addTask={addTask}/>
      {filterList}
      <ul className="todo-list" aria-labelledby="list-heading">
        {taskList}
      </ul>
      <Footer/>
    </div>
  );
}

export default App;
