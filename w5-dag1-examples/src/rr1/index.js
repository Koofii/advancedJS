import React, { Fragment as F } from 'react';

import {
    BrowserRouter as Router,
    Route
}   from 'react-router-dom';

const Home = () => <div>Welcome</div>

const ProductList = () => <div>Available products: </div>

export default render => render(
    <Router>
        <F>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={ProductList} />
        </F>
    </Router>
);