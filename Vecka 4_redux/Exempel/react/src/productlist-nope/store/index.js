import {
    createStore,
    compose
} from 'redux'

import rootReducer from './reducers';

const composeEnhancer = (typeof windows !== 'undefined')