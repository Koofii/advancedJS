import { createStore }  from 'redux';
import throttle         from 'lodash/throttle';

import { 
    nextTaskId
}                       from '../actions';
import tasks            from '../reducers';

// ...
// Methods for loading and saving store state.

const loadState = () => {
    try {
        const state = localStorage.getItem('taskboard_state');
        return state !== null ? JSON.parse(state) : undefined;
    } catch (err) {
        return undefined;
    }
};

const saveState = state => {
    try {
        localStorage.setItem('taskboard_state', JSON.stringify(state));
    } catch (err) {
        // ...
    }
};

// ...
// Create the store's initial state. Use the saved state if it exists, otherwise initialize with sample state.
let initialState = loadState();
if (!initialState) {
    initialState = [
        {
            id: nextTaskId(),
            title: 'Add tasks reducer',
            description: 'Add reducer that manages the state of tasks on the taskboard',
            status: 'Not Started'
        },
        {
            id: nextTaskId(),
            title: 'fix bug #11',
            description: 'Add onChange to props',
            status: 'Not Started'
        }
    ];    
}

// ...

const store = createStore(tasks, initialState);

// ...
// Subscribe to store updates in order to persist the state.
// store.subscribe(() => throttle(() => saveState(store.getState()), 1000));
store.subscribe(
    throttle(
        () => saveState(store.getState()),
        1000
    )
);

export default store;