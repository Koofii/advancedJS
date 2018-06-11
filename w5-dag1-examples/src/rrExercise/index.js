import React, { Fragment as F } from 'react';

import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Switch
} from 'react-router-dom';

import styles from './styles.css';

const Home = () => <div>Welcome!</div>;
const Products = () => <div>Available products:</div>;
const routes = [
    {
        slash: "/",
        path: "",
        name: "home",
        exact: true
    },
    {
        slash: "/",
        path: "koof",
        name: "koof",
        exact: false
    },
    {
        slash: "/",
        path: "about",
        name: "about",
        exact: false
    },
    {
        slash: "/",
        path: "contact",
        name: "about",
        exact: false
    },
    {
        slash: "/",
        path: "products",
        name: "products",
        exact: false
    }
]

const Navigation = () => (
    <nav className={styles.navigation}>
        {routes.map(route => {
            return <NavLink key={route.path} exact={(route.exact ? route.exact : false)} activeClassName={styles.active} to={route.slash+route.path} >{route.name} {' '}</NavLink>
        })}
    </nav>
);

export default render => render(
    <Router>
        <F>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route 
                    path="/products/:id" 
                    render={({ match }) => {
                        return `Product ID: ${match.params.id}`
                    }} 
                />
                <Route path="/products" render={() => <Products />} />
                <Route render={() => "Not Found"} />
            </Switch>
        </F>
    </Router>
);