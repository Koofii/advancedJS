import React from 'react';

import Card from './Card';
import ErrorHandler from './ErrorHandler';

export default ({ items }) => items.map(
    (item, i) => (
        <ErrorHandler key={i}>
            <Card {...item} />
        </ErrorHandler>
    )
);