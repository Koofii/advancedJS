import React, { Fragment as F } from 'react';

// this example illustrates nested components and how to pass a prop down the component tree.
const Organisation = ({ name, ceo }) => (
    <F>
        <h1>CEO for organisation: {ceo}</h1>
        <p>Organisation: {name}</p>
        <Group ceo={ceo} name="Developers" />
    </F>
)

// note: We skip displaying the ceo prop in this component, but we still have to pass it down to <User>.
const Group = ({ ceo, name }) => (
    <F>
        <p>Group: {name}</p>
        <User ceo={ceo} name="Marc Klefter" />
    </F>
)

const User = ({ ceo, name }) => (
    <F>
        <h3>CEO for user: {ceo}</h3>
        <p>User: {name}</p>
    </F>
)

// ...

export default render => render(<Organisation name="ACME AB" ceo="Big Boss" />)