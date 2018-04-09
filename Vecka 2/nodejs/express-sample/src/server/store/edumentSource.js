require('isomorphic-fetch')

class EdumentSource {
    getProducts(){
        return fetch('http://demo.edument.se/api/products/')
            .then(response => response.json())
            .then(products => products);
    }

    getProduct(id){
        return fetch(`http://demo.edument.se/api/products/${id}`)
            .then(response => {
                if (!response.ok){
                    throw `Product with ID ${id} not found`
                } 
                return response.json()
            })
            .then(response => ({id: response.Id, name: response.Name})) // Destructing object, plockar bara fram Id och Namn på objectet.

    }
    addProduct(productData){
        throw Error('EdumentSource.addProduct not supported')
    }
}

module.exports = EdumentSource;