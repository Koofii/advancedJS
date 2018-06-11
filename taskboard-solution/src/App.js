import React, { Component } from 'react';
import { Provider }         from 'react-redux';

import store                from './store';
import TaskBoard            from './components/TaskBoard';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TaskBoard />
      </Provider>
    );
  }
}

export default App;
