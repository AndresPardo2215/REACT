import React, { useState, useEffect } from 'react';
import {Task} from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/taskForm';

// importamos la hoja de estilos
import '../../styles/task.scss'


const TaskListComponent = (task) => {

    useEffect(() => {
        console.log('tarea creada')
        return () => {
            console.log( `Task ${task.name} is going to unmount`);
        };
    }, [task]);
    
    const defaultTask1 = new Task('Example1', " Description1", true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', "Default Description2", false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', "Default Description3", false, LEVELS.BLOCKING);
    
    //estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //control del ciclo de vida del componente
    useEffect(() => {
        console.log('task state has been mmodified')
        setLoading(false);
        return () => {
            console.log('task list component is goung to unmount')
        };
    }, [tasks]);

    function completeTask(task){
        console.log('complete this task: ', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        //we update teh state of the componente with the new list of tasks and it will update the iteration
        // of the tasks in order to show the task updated
        setTasks(tempTasks)
    }

    function deleteTask(task){
        console.log('complete this task: ', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }

    function addTask(task){
        console.log('complete this task: ', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    return (
        <div className='col-12'>
            <div className='card'>
            {/* card header */}
                <div className='card-header p-3'>
                    <h5>
                        Your tasks: 
                    </h5>
                </div>
                {/* card body */}
                <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'} }>
                    <table>
                        <thead>
                           <tr>
                                <th scope='col'>Title</th>
                                <th scope='col'>Description</th>
                                <th scope='col'>Priority</th>
                                <th scope='col'>Actions</th>
                            </tr> 
                        </thead>
                        <tbody>
                            {/* TODO iterar sobre una lista de tareas */}
                            { tasks.map((task, index) => {
                                return (
                                    <TaskComponent key={index} task={ task } complete={completeTask} remove={deleteTask}></TaskComponent>
                                )
                            })}
                        </tbody>   
                    </table>
                </div>
            </div>
            <h1>Your tasks: </h1>
            {/* TODO: aplicar un for/map para renderizar una lista */}
            {/* <TaskComponent task={ defaultTask }></TaskComponent> */}
            <TaskForm add={addTask}></TaskForm>
        </div>
    );
};




export default TaskListComponent;
