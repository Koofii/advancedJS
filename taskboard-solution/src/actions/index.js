import shortid from 'shortid';

import { TASK_NOT_STARTED } from '../constants';

export const UPDATE_TASK = 'UPDATE_TASK';
export const CREATE_TASK = 'CREATE_TASK';

export const updateTask = (id, status) => ({
    type: UPDATE_TASK,

    id,
    status
});

// ...

export const nextTaskId = () => shortid.generate();

export const createTask = (title, description) => ({
    type: CREATE_TASK,

    id: nextTaskId(),
    title,
    description,
    status: TASK_NOT_STARTED
})