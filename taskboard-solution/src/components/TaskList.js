import React        from 'react';
import { connect }  from 'react-redux';

import { 
    updateTask
}                   from '../actions';

import Task         from './Task';

import styles       from './TaskList.module.css';

export default connect(
    null,
    {
        updateTask
    }
)(
    ({ status, tasks = [], updateTask }) => {
        return (
            <div>
                <div className={styles.header}>{status}</div>
                {tasks.map(task => <Task key={task.id} {...task} update={updateTask} />)}
            </div>
        );
    }
);