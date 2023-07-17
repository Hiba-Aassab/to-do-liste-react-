import React, { useState } from 'react';
import './App.css';

function App() {

    const [task, setTask] = useState('');
    const ChangeInput = (ev) => {
        setTask(ev.target.value);
    };

    const [tasks, setTasks]= useState([]);
    const AddInputTask = () => {
        if(task !== ''){
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const DeletTask = (index) => {
        const NewTasks = tasks.filter((_,i) => i !== index);
        setTasks (NewTasks);
    };

    const UpdateTask = (index) =>{
        const updatedTask = prompt('Update task: ', tasks[index]);
        if (UpdateTask !== null) {
            const NewTasks =[...tasks];
            NewTasks[index] = updatedTask;
            setTasks(NewTasks);
        }
    }

    const DoneTask = (index) =>{
        const doneTasks = [...tasks];
        doneTasks[index]=<s>{doneTasks[index]}</s>
        setTasks(doneTasks);
    };

    return(
        <div className="App">
            <h1>Get Things Done !</h1>
            <div className='TodoWrapper'>
                <div className='TodoForm'>
                    <input type='text' placeholder='What is the task to day?' value={task} onChange={ChangeInput} />
                    <button onClick={AddInputTask}>Add Task</button>
                </div>
                {tasks.length === 0 ? (
                    <p>No tasks for this day</p>
                ):(
                    <ul>
                        {tasks.map((task, index) => (
                            <li key={index}>
                                {task}
                                <button onClick={() => DeletTask(index)}>Delete</button>
                                <button onClick={() => UpdateTask(index)}>Update</button>
                                <button onClick={() => DoneTask(index)}>Done</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

        </div>
    );
}
export default App;