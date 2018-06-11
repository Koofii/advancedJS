import React from 'react';

import Card from './Card';

export default ({ items }) => items.map(
    (item, i) => <Card {...item} />
);