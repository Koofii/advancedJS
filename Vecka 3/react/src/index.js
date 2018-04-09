import React, { Fragment as F } from "react";

import { render } from "react-dom";

import PropTypes from 'prop-types';

const User = ({name, ceo}) => <li>{name}, CEO: {ceo}</li>

const Org = ({name, ceo, loading}) => {
    if (loading){
        return 'Loading...'
    }
    (
        <F>
            <h2>Organisationname: {name}, CEO: {ceo}</h2>
            <Group name='Student' ceo={ceo}>
                <User name='Susse' ceo={ceo}/>
                <User name='Julle' ceo={ceo}/>
                <User name='Tobbe' ceo={ceo}/>
            </Group>
            <Group name='Admin'>
                <User name='Admin' ceo={ceo}/>
            </Group>
        </F>
    )
}

const Group = ({name, ceo, children}) => (
    <F>
        <h3>Group Name: {name}, CEO: {ceo}</h3>
        {children}
    </F>
)
renderApp(true)
// setTimeout(() => renderApp(true), 3000)

setTimeout(
    () => renderApp(false),
    3000
)

const renderApp = loading => {
        render(
        <Org name='Fortnox AB' ceo='Big Boss' loading={loading}/>,
        document.getElementById('root')
    )
}
// const Org = ({name}) => (
//     <div>{name}
//         <Group name='Group 1'>
            
//         </Group>
            
//         <Group name='Group 2'/>
//     </div>
// )

// const Group = ({name}) => <div>{name}</div>

// const User = ({name}) => <ul><li>{name}</li></ul>

// render(
//     <Org name='Fortnox AB'/>,
//     document.getElementById('root')
// )


// render(
//     <Hello name="david"/>,
//     document.getElementById("root")
// );

// const tick = () =>{
//     const time = new Date().toLocaleString();
//     render(
//         <div>
//             <input value={time} />
//             <input value= {time} />
//         </div>,
//         document.getElementById("root")
//     );
// };
// tick();
// setInterval(tick, 1000);