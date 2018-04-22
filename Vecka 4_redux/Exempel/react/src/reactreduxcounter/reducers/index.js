import { INCREMENT, DECREMENT } from '../actions'

// vår reducer
// state inne i ett case är den gamla staten, till exempel objektet eller arrayn.
export default (state, action) => {
    switch (action.type){
        //Om vi får in en INCREMENT
        case INCREMENT:
            return {
                count: state.count + action.by
            }
        // Om vi får in en DECREMENT
        case DECREMENT:
            return {
                count: state.count - action.by
            }
        // Om vi inte får in någonting eller om vi får in någonting vi inte känner igen
        //så exe denna default där vi kan skicka tillbaka samma state.
        default:
            return state;
    }
};



// //state
// {
//     products[],
//     loading: false
// }

// //reducer
// {
//     products: (state, action) => (...),
//     loading: (state, action) => (...)
// }