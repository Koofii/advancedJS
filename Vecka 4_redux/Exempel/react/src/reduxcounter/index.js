import React from 'react';
import store from './store';
import actions from './actions';
import {
    Counter
}           from './components/Counter'

export default render => {
    const { increment } = actions(store);
    const { decrement } = actions(store)

    const renderApp = () => {
        const { count } = store.getState();

        render(<Counter count={count} increment={increment} decrement={decrement}/>)
    };

    store.subscribe(renderApp) // Så fort det sker en förändring så gör detta. Prenumeration! :D

    renderApp();
    
    increment(25);
};