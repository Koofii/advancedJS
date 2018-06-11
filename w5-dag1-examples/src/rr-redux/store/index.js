import { createStore } from 'redux';

const initialState = [
    {
        id: 1,
        name: 'Sven Svensson',
        userName: 'svenne'
    },
    {
        id: 2,
        name: 'Marc Klefter',
        userName: 'theknopfler'
    }
];

export default createStore(state => state, initialState);