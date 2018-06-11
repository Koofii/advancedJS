import React, { Component } from 'react';

import withError from './ErrorHandler';

// export const Card = ({title, image}) => (
//     <div>
//         <p>{title}</p>
//         <img src={image}/>
//     </div>
// )

const Card = ({title, image}) => (
    <div>
        <p>{title.toUpperCase()}</p>
        <img src={image} alt="blyat" />
    </div>
);

export default withError (
    Card,
    () => <Card 
        title="Oops, an error occurred!" 
        image="http://www.gameinformer.com/cfs-filesystemfile.ashx/__key/CommunityServer-Components-ImageFileViewer/CommunityServer-Components-UserFiles-00-00-75-88-81-Attached+Files/4431.b1.jpg_2D00_610x0.jpg"
    />
);