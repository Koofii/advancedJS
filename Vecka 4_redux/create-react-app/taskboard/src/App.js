import React, { Component } from 'react';
import styles from './App.module.css';
import { Provider } from 'react-redux'
import TaskBoard from './components/TaskBoard';
import store from './store'

// Varje task kommer ha == 
//  task = {
//    id,
//    title,
//    description
//    status
//  }

// Varje kort ska ha en onChange eller onClick när status ändras.

// ACTIONS: 
//   CREATE_TASK
//   UPDATE_TASK_STATUS


// Kika på components innan vi kikar på state.


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TaskBoard />
      </Provider>
    )
  }
}

export default App;