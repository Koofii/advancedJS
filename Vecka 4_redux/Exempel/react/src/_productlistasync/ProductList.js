import React, { Component } from 'react';
import { connect }          from 'react-redux';

import Product from './Product';

import {
    fetchProducts,
    removeProduct
} from './actions';

class ProductList extends Component {
    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchProducts();
    }

    remove = productId => {
        this.props.removeProduct(productId);
        this.props.removeProduct(productId);
    }

    render() {
        const { loading, deleting: deletingProduct, products } = this.props;
        
        return (
            <div>
                {!loading
                    ? 
                    <ul>
                        {products.map(({ Id, Name }) => <Product
                            key={Id}
                            id={Id} 
                            name={Name} 
                            remove={this.remove} />)
                        }
                    </ul>
                    : 'Loading products...'}
                {deletingProduct !== -1 && <p>{`Deleting product ${deletingProduct} ...`}</p>}
            </div>
        )
    }
}

// ...

export default connect(
    state => ({
        products: state.products,
        loading: state.loading,
        deleting: state.deleting
    }),
    {
        fetchProducts,
        removeProduct
    }
)(ProductList);