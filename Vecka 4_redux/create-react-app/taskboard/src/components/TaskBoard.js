import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './TaskBoard.module.css';
import TaskList from './TaskList.js';

import {
    toggleTask
}   from '../actions'


class TaskBoard extends Component {
    
    toggleNew() {
        
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleNew}>New Task</button>
                <div className={styles.mainDiv}>
                    <ul><TaskList status="Not Complete"/></ul>
                    <ul><TaskList status="In-Progress"/></ul>
                    <ul><TaskList status="Complete"/></ul>
                </div>
            </div>
        )
    }
}

export { TaskBoard };

export default connect(
    state => ({
        
     }), //STATE T.ex. state.count
    {
        //ACTIONCREATORS
        toggleTask
    }
)(TaskBoard)