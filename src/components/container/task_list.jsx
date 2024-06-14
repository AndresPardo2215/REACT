import React, { useState, useEffect } from 'react';
import {Task} from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

// importamos la hoja de estilos
import '../../styles/task.scss'


const TaskListComponent = (task) => {

    useEffect(() => {
        console.log('tarea creada')
        return () => {
            console.log( `Task ${task.name} is going to unmount`);
        };
    }, [task]);
    
    const defaultTask = new Task('Example', 'Default Description', false, LEVELS.NORMAL);
    
    //estado del componente
    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);

    //control del ciclo de vida del componente
    useEffect(() => {
        console.log('task state has been mmodified')
        setLoading(false);
        return () => {
            console.log('task list component is goung to unmount')
        };
    }, [tasks]);

    const changeCompleted = (id) => {
        console.log('TODO: cambiar estado de una tarea')
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
                                <th scope='col'>title</th>
                                <th scope='col'>description</th>
                                <th scope='col'>Priority</th>
                                <th scope='col'>Actions</th>
                            </tr> 
                        </thead>
                        <tbody>
                            {/* TODO iterar sobre una lista de tareas */}
                            <TaskComponent task={ defaultTask }></TaskComponent>
                        </tbody>
                        
                    </table>
                </div>
            </div>
            <h1>Your tasks: </h1>
            {/* TODO: aplicar un for/map para renderizar una lista */}
            {/* <TaskComponent task={ defaultTask }></TaskComponent> */}
        </div>
    );
};




export default TaskListComponent;
