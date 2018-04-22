import { bindActionCreators } from 'redux'

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

const actionCreator = {
    increment: by => ({
        type: INCREMENT,
        by
    }),
    decrement: by => ({
        type: DECREMENT,
        by
    })
};

export default store => bindActionCreators(actionCreator, store.dispatch)