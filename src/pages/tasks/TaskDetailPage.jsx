import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetailPage = ({taskList}) => {

    const {id} = useParams();

    // Busca la tarea correspondiente en la lista de tareas
    const task = taskList ? taskList[id - 1] : null;

    // Si no existe la tarea, muestra un mensaje de error
    if (!task) {
        return <p>Task not found or does not exist.</p>;
    }

    return (
        <div>
            <h1>Task Detail - {id}</h1>
            <h2>{task.name}</h2>
            <h2>{task.description}</h2>
        </div>
    );
}

export default TaskDetailPage;
