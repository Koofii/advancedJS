import React, { Fragment as F } from 'react';

// this example illustrates nested components and using React Context to allows components to access data from 
// anywhere in the component tree.

const Context = React.createContext();

const MyProvider = props => (
    <Context.Provider value={props.state}>
        <Organisation name="ACME AB" />
    </Context.Provider>
)

const Organisation = ({ name }) => (
    <Context.Consumer>
    {context => (
        <F>
            <h1>CEO: {context.ceo}</h1>
            <p>Organisation: {name}</p>
            <Group name="Developers" />
        </F>
    )}
    </Context.Consumer>
)

// note: We skip accessing context.ceo in this component.
const Group = ({ name }) => (
    <F>
        <p>Group: {name}</p>
        <User name="Marc Klefter" />
    </F>
)

const User = ({ name }) => (
    <Context.Consumer>
        {context => (
        <F>
            <h3>CEO for user: {context.ceo}</h3>
            <p>User: {name}</p>
        </F>
        )}
    </Context.Consumer>
)

// ...

export default render => render(<MyProvider state={{ ceo: 'Big Boss' }} />)