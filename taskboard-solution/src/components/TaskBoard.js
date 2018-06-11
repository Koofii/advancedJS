import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { createTask }       from '../actions';
import { TASK_STATUS }      from '../constants';
import TaskList             from './TaskList';

import styles from './TaskBoard.module.css';

class TaskBoard extends Component {
    state = { 
        tasks: [],
        showForm: false,

        title: '',
        description: ''
    };
    
    toggleForm = () => {
        this.setState(prevState => ({
            showForm: !prevState.showForm
        }))
    }

    submitForm = e => {
        e.preventDefault();

        this.props.createTask(this.state.title, this.state.description);

        this.setState({
            showForm: false,

            title: '',
            description: ''
        })
    }

    onTitleChange = e => {
        this.setState({
            title: e.target.value
        });
    }

    onDescriptionChange = e => {
        this.setState({
            description: e.target.value
        });
    }

    render() {
        const { tasks }     = this.props;
        const { showForm }  = this.state;

        return (
            <div className={styles.board}>
                <button style={{ margin: '20px 0' }} onClick={this.toggleForm}>New Task</button>

                {showForm && 
                    <form style={{ marginBottom: '10px' }} onSubmit={this.submitForm}>
                        <input
                            className={styles.input}
                            onChange={this.onTitleChange}
                            value={this.state.title}
                            type="text"
                            placeholder="title"
                        />
                        <input
                            className={styles.input}
                            onChange={this.onDescriptionChange}
                            value={this.state.description}
                            type="text"
                            placeholder="description"
                        />
                        <button type="submit">
                            Save
                        </button>
                    </form>
                }

                <div className={styles.lists}>
                    {TASK_STATUS.map((status, i) => <TaskList key={i} status={status} tasks={tasks[status]} />)}
                </div>
            </div>
        )
    }
}

// ...

export default connect(
    state => ({
        tasks: state.reduce((lists, task) => {
            !lists[task.status] && (lists[task.status] = []);
            
            lists[task.status].push(task);

            return lists;
        }, {})
    }),
    {
        createTask
    }
)(TaskBoard);