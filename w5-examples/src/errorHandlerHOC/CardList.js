import React, { Component } from 'react';
import Card from './Card'
import ErrorHandler from './ErrorHandler'


export default ({items}) => (
    <div>
        {items.map((item, i) => <Card {...item} />)}
    </div>
);