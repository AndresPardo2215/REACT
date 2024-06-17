import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

//importamos lla joja de estillos
import '../../styles/task.scss'


const TaskComponent = ( {task} ) => {
    useEffect(() => {
        console.log('created task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        };
    }, [task]);

    /**
     * function that returns a badge
     * dependin of the level of the badge
     */
    function taskLevelBadge(){
        switch(task.level){
            case LEVELS.NORMAL:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>
                )
            case LEVELS.URGENT:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>
                )
            case LEVELS.BLOCKING:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>
                )
            default:
                break;
        }
    }
    /**
     * 
     * @returns icon depending on copletion of the task
     */
    function taskCompletedIcon(){
        if (task.completed){
            return (
            <i className='bi-toggle-on' style={{color: 'green'}}></i>
        );
        } else {
            return (
            <i className='bi-toggle-off' style={{color: 'grey'}}></i>
        );
        }
    }


    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
            {/* Execution of function to return badge element */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
            {/* execution of function to return icon depending on its compltion */}
                {taskCompletedIcon()}
                <i className='bi-trash' style={{color: 'tomato'}}></i>

            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
