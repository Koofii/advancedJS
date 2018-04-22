import React, { Component } from 'react';
import { connect }          from 'react-redux';

import Product from './Product';

import {
    fetchProductsSuccess,
    removeProduct
} from './actions';

class ProductList extends Component {
    componentDidMount() {
        fetch('http://demo.edument.se/api/products')
            .then(res => res.json())
            .then(products => this.props.fetchProductsSuccess(products));
    }

    remove = productId => {
        this.props.removeProduct(productId);
    }

    render() {
        const { products } = this.props;

        return (
            products
                ? 
                <ul>
                    {products.map(({ Id, Name }) => <Product
                        key={Id}
                        id={Id} 
                        name={Name} 
                        remove={this.remove} />)
                    }
                </ul>
                : 'Loading products...'
        );
    }
}

// ...

export default connect(
    state => ({
        products: state
    }),
    {
        fetchProductsSuccess,
        removeProduct
    }
)(ProductList);