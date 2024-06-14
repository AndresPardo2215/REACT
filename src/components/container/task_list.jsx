import React, { useState, useEffect } from 'react';
import {Task} from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

const TaskListComponent = ({task}) => {

    useEffect(() => {
        console.log('tarea crreada')
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
        <div>
            <h1>
                Your tasks:
            </h1>
            {/* TODO: aplicar un for/map para renderizar una lista */}
            <TaskComponent task={ defaultTask }></TaskComponent>
        </div>
    );
};




export default TaskListComponent;
