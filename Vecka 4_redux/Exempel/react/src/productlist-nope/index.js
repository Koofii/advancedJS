import React        from 'react';

import { Provider } from 'react-redux';

import store        from './store';

import ProductList      from './components/ProductList';

export default render => {
    render(
        <Provider store={store}>
            <ProductList />
        </Provider>
    );
};