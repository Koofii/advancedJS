import React        from 'react';
import { Provider } from 'react-redux'

import store        from './store';

import Counter      from './components/Counter';

export default render => {
    render(
        <Provider store={store}>
            <Counter />
        </Provider>
    );
};