import reducer from '../reducers'

import { createStore, compose } from 'redux';

let initialState = {
    count: 0
}

const composeEnhancer
    = (
        typeof window !== 'undefined' && 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ) || compose;

export default createStore(
    reducer, 
    initialState,
    composeEnhancer()
)