import React from 'react';
import CardList from './CardList';
import RenderList from './CardList';

export const items = [
    {
        title: 'first item',
        image: 'https://vignette.wikia.nocookie.net/iwbtb/images/8/84/Kappa.jpg/revision/latest?cb=20140606005500'
    },
    {
        title: 'second item',
        image: 'https://vignette.wikia.nocookie.net/iwbtb/images/8/84/Kappa.jpg/revision/latest?cb=20140606005500'
    },
    {
        image: 'https://vignette.wikia.nocookie.net/iwbtb/images/8/84/Kappa.jpg/revision/latest?cb=20140606005500'
    }
];
export default render => {
    render(
        <RenderList items={items}/>
    );
};
