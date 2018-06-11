import React from 'react';

import Card from './Card';
import ErrorHandler from './ErrorHandler';

export default ({ items }) => items.map(
    (item, i) => (
        <ErrorHandler 
            key={i}
            render={error => {
                return error 
                    ? <Card 
                        title="Oops, an error occurred!" 
                        image="https://cdn.dribbble.com/users/1078347/screenshots/2799566/oops.png" />
                    : <Card {...item} />;
            }}>
        </ErrorHandler>
    )
);