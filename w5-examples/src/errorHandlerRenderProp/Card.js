import React, { Component } from 'react';

// export const Card = ({title, image}) => (
//     <div>
//         <p>{title}</p>
//         <img src={image}/>
//     </div>
// )

export default ({title, image}) => (
    <div>
        <p>{title.toUpperCase()}</p>
        <img src={image} alt="blyat" />
    </div>
);

