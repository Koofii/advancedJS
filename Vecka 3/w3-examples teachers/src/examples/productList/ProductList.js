import React, { Component } from 'react';

import Product from './Product';

class ProductList extends Component {
    state = { products: null };

    remove = productId => {
        this.setState(prevState => ({
            products: prevState.products.filter(product => product.Id !== productId)
        }))

        // using Array.splice:
        //
        // this.setState(prevState => {
        //     const products      = prevState.products;
        //     const productIndex  = products.findIndex(product => product.Id === productId);
            
        //     products.splice(productIndex, 1);
            
        //     return {
        //         products
        //     }
        // })
    }

    componentDidMount() {
        setTimeout(
            () => fetch('http://demo.edument.se/api/products')
                .then(res => res.json())
                .then(products => this.setState({
                    products
                })),
            2000
        )
    }

    render() {
        const { products } = this.state;

        return (
            products
                ? 
                <ul>
                    {products.map(({ Id, Name }) => <Product 
                        key={Id}
                        id={Id} 
                        name={Name} 
                        remove={this.remove} />)
                    }
                </ul>
                : 'Loading products...'
        )
    }
}

// ...

export default ProductList;