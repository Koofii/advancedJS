import { INCREMENT, DECREMENT } from '../actions'


export default (state, action) => {
    switch (action.type){
        case INCREMENT:
            return {
                count: state.count + action.by
            }
        case DECREMENT:
            return {
                count: state.count - action.by
            }
        default:
            return state;
    }
};