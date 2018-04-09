console.log('Hello from the other side')


fetch('/api/products')
    .then(response => response.json())
    .then(products => console.log(products))