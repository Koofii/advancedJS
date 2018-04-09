const express = require('express'); 

const route = express.Router();

route.use('/api', require('./product')); //Hade vi haft fler än products hade vi kunnat skriva route.use('/api', require('./product'), require(./orders));
// [ routes ] --> [ '/api' ] --> ['/products'].... Här i detta steget ligger ./api (Första ruttstoppet). 
// Det vi har "synligt" är API. Men vi har ocks en require på products

module.exports = route;