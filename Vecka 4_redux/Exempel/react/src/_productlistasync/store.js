import {
    createStore,
    compose,
    applyMiddleware
} from 'redux';

import thunk from 'redux-thunk';

import rootReducer from './reducers';

const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// ...

const logger = store => next => action => { 
    console.group(action.type);
    console.log('dispatching: ', action);
    const result = next(action);
    console.log('next state: ', store.getState());
    console.groupEnd(action.type);
    return result;
};

// ...

export default createStore(rootReducer, composeEnhancer(applyMiddleware(thunk, logger)));