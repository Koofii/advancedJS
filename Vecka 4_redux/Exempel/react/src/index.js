import { render } from 'react-dom'


import app from './productlist'
// import app from './reactreduxcounter'
// import app from './reduxcounter'
// import app from './formvalidation'

//this file "exports" app function for rendering

app(component => render(component, document.getElementById('root')));