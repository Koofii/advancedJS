import {
    UPDATE_TASK,
    CREATE_TASK
} from '../actions';

const tasks = (state = [], action) => {
    switch (action.type) {
        case UPDATE_TASK:
            return state.map(task => {
                if (task.id === action.id) {
                    return { ...task, status: action.status };
                }

                return task;
            });

        case CREATE_TASK:
            const { type, ...task } = action;

            return [
                ...state, 
                task
            ];

        default:
            return state;
    }
}

export default tasks;