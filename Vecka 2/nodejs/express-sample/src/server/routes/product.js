const express = require('express');
const store = require('../store') //Require ifrån index.js i store-mappen
const route = express.Router();


// [ routes ] --> [ '/api' ] --> ['/products'] - Vår request är just nu i ./products. 
// Där vi svarar med att vi hämtar produkterna.
// GET /API/PRODUCTS
route.get('/products', (req, res) => { //Req och res är allting vi får in och allting vi kan skicka tillbaka till clienten.
    // Raden säger VÄNTA till vi fått alla produkter. Kan vi inte hämta, väntar den i 10 sekunder och blockar alla andra
    // const products = store.getProducts(); 
    // res.json({ products });

    store.getProducts()
        .then(products => res.json({products})) //får tillbaka promise som tar promise och sätter data som json.

})
// Exempel på sökväg http://localhost:8888/api/search?type=Enkel&name=js
route.get('/search', (req, res) => {
    const {type, name} = req.query;
    // let results = store.searchProduct({type, name});

    store.searchProduct({type, name})
        .then(results => res.json(results))
        .catch(results => res.status(404).json({errorMessage: 'Cannot find anything with that searchquery'}))


    // res.json({results});
});

route.get('/products/:id', (req, res) => {
    const productId = Number(req.params.id); //.params är för att plocka ut parametern om vilket id som har skrivits in.
    // const product = store.getProduct(productId);

    store.getProduct(productId)
        .then(product => res.json(product))
    

        .catch(errorMessage => res.status(404).json(errorMessage))

    // product // om vi hade satt ett utropstecken framför hade det betytt "om inte"
    //     ? res.json(product) //If products is not undefined eller null utför detta
    //     : res.status(404).json( //Else, utför detta
    //         {errorMessage: `Product with ID ${productId} not found` }
    //     )
});
// Denna funktionen utför att posta en ny produkt.
route.post('/products', (req, res) => {
    const productData = req.body; //req.body kommer ifrån fetchen. I min fetch har jag "body" där jag skickar in mitt objekt. Finns också till exempel, headers
    const newProducts = store.addProduct(productData);
    console.log(newProducts)
    res.json({products: newProducts})
});

module.exports = route;