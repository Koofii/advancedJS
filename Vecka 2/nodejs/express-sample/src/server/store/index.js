const mockSource = require('./mockSource')
const EdumentSource = require('./edumentSource')

class Store {
    constructor(source){
        this.source = source;
    }
    getProducts(){
        return this.source.getProducts();
    }

    getProduct(id){
        return this.source.getProduct(id)
    }

    addProduct(product){
        return this.source.addProduct(product)
    }
    searchProduct(searchParams){
        return this.source.searchProduct(searchParams);
    }
}

// Nedan kod låter oss att kolla om vi är i development mode eller productionmode och beroende på vilken mode vi är i
// så byter den source... alltså fejkdata eller koppla upp oss mot firebase. 

let source;
if(process.env.NODE_ENV === 'development'){
    source = new mockSource()
} else {
    // Process.env.NODE_ENV === 'production'
    // Use firestore as a source for real data
    // source = new FirebaseSource();
    source = new EdumentSource();
}

console.log(process.env.NODE_ENV);

module.exports = new Store(source); // Här skapar vi och exporterar ett objekt som heter Store. 
// Vill vi använda Store behöver vi require index.js i store i den andra filen som vi vill använda den i.

// mockSource i newStore är source i Construtorn i class Store. 