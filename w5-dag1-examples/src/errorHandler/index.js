import React from 'react';

import CardList from './CardList';

const items = [
    {
        title: 'first item',
        image: 'http://via.placeholder.com/350x150'
    },
    {
        title: 'second item',
        image: 'http://via.placeholder.com/350x150'
    },
    {
        image: 'http://via.placeholder.com/350x150'
    }
];

// without an error boundary, React unmounts the entire component tree. 

export default render => render(<CardList items={items} />);