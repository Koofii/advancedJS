export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


// this is an actioncreator. Just a regular javascript-object
export const increment = by => ({
    //this is an action
    type: INCREMENT,
    by
})
export const decrement = by => ({
    type: DECREMENT,
    by
})