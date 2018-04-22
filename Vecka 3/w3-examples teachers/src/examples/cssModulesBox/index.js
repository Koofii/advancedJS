import React from 'react';

import { Box } from './Box';

// ...
// REMEMBER: To view this example, make sure that you have done the following first:
//
// npm install style-loader css-loader --save-dev
//
// In webpack.config.js, changed the "module" section to this:
// 
// module: {
// 	rules: [
// 		{
// 			test: /\.js$/,
// 			exclude: /node_modules/,
// 			use: 'babel-loader'
// 		},
// 		{
// 			test: /\.css$/,
// 			loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
// 		}
// 	]
// }

// ...

export default render => render(
    <div>
        <Box size="small"     style={{ backgroundColor: 'blue' }} />
        <Box size="medium"    style={{ backgroundColor: 'green' }} />
        <Box size="large"     style={{ backgroundColor: 'red' }} />
    </div>
)