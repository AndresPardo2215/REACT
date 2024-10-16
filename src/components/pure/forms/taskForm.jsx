import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import { Button } from 'bootstrap';

const TaskForm = ({add, length}) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e){
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    const normalStyle = {
        color: 'blue',
        fontWeiht: 'bold',
    }
    const urgentStyle = {
        color: 'yellow',
        fontWeiht: 'bold',
    }
    const blockingStyle = {
        color: 'tomato',
        fontWeiht: 'bold',
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='task name'/>
                <input ref={descriptionRef} id='descriptionName' type='text' className='form-control form-control-lg' required placeholder='task description'/>
                <select className='form-control form-control-lg' ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                    <option style={normalStyle} value={LEVELS.NORMAL}>
                        Normal
                    </option>
                    <option style={urgentStyle} value={LEVELS.URGENT}>
                        Urgent
                    </option>
                    <option style={blockingStyle} value={LEVELS.BLOCKING}>
                        Blocking
                    </option>
                </select>
                <button type='submit'className='btn btn-success btn-lg ms-2'>
                    {length > 0 ? 'Add new task' : 'Create your first task'}
                </button>
            </div>
        </form>
    );
}

TaskForm.protoTypes = {
    add: PropTypes.func.isRequiered,
    length: PropTypes.number.isRequired
}

export default TaskForm;
