import React, { useState } from 'react'
import TodoList from '../../TodoList/TodoList';

const TodoApp = () => {
    let initialTasks = ['cricket', 'volley ball', 'Basketball'];
    const [tasks, setTasks] = useState(initialTasks);

    function decreasePriority(taskName) {
        let newTask = [...tasks];

        let index = newTask.indexOf(taskName);
        if(index < newTask.length - 1) {
            let temp = newTask[index];
            newTask[index] = newTask[index + 1];
            newTask[index + 1] = temp;
            setTasks(newTask);
        }
           console.log("you are reducing the priority of", taskName);
    }
    
    function increasePriority(taskName) {
        let newTask = [...tasks];

        let index = newTask.indexOf(taskName);
        if(index > 0) {
            let temp = newTask[index];
            newTask[index] = newTask[index - 1];
            newTask[index - 1] = temp;
            setTasks(newTask);
        }
        console.log("you are increase the priority of", taskName);
 }

 function deleteTask(taskName) {
    let newTask = tasks.filter(t=>t!==taskName);
    setTasks(newTask);
    console.log("you are deleting", taskName);
}

  return (
    <div>
        <h2>TodoApp</h2>

        {/* <input type='text' placeholder='Enter task Name' />
        <button onClick={taskHandler}>Add Task</button> */}
        {/* TodoList(tasks); */}
        <TodoList tasks = 
        {tasks} 
        decreasePriority = {decreasePriority}
        increasePriority = {increasePriority}
        deleteTask = {deleteTask}         
        />

       
    </div>
  )
}

export default TodoApp