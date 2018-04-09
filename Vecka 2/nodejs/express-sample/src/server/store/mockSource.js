// FEJKPRODUKTER
const products = [
    {
        id: 1,
        type: "Enkel",
        name: 'js 101'
    },
    {
        id: 2,
        type: ["JavaScript", "Avancerad"],
        name: 'Advanced js'
    },
    {
        id: 3,
        type: ["JavaScript", "For the luls"],
        name: 'LUL'
    },
    {
        id: 4,
        type: ["Pokemon", "Thunder"],
        name: 'Pika'
    },
    {
        id: 5,
        type: ["Pokemon", "Water"],
        name: "Squirtle"
    }
]

// Klass macksource speglar vår store. Men returnerar data(fejkt-data) ifrån products

// I product.js i routes kan jag skriva store.getProduct(productId) hamnar jag i nedan klass på metoden

class mockSource {
    getProducts(){
        return Promise.resolve(products); // Resolvea promise på direkten med products igneom att returnera det.
    }

    getProduct(id){
        return new Promise((resolve, reject) => {
            if (products.find(product => product.id === id)){
                resolve(products.find(product => product.id === id))
            } else{
                reject();
            }
        });
        
        // return products.find(product => product.id === id)
    }

    addProduct({name}){
        let lastIndex = products.length - 1;
        const lastId = products[lastIndex].id;
        
        products.push({
            id: lastId +1,
            name
        })

        return products;
    }
    searchProduct({type, name}){
        return new Promise((resolve, reject) => {
            const searchResult = products.filter(product => {
                return product.type === type &&
                    product.name.indexOf(name) !== -1
            })
            if(searchResult.length >= 1){
                resolve(searchResult)
            } else{
                reject()
            }
        })
        // return products.filter(product => {
        //     return product.type === type && 
        //         product.name.indexOf(name) !== -1
        // })
    }
}

module.exports = mockSource;