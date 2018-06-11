import React from 'react';
import { Provider } from 'react-redux';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import store from './store';

import UserList from './UserList';
import UserDetails from './UserDetails'

export default render => render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/users" component={UserList} />
                <Route path="/users/:id" component={UserDetails} />
            </div>
        </Router>
    </Provider>
);