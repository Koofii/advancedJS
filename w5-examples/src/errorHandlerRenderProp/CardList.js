import React, { Component } from 'react';
import Card from './Card'
import ErrorHandler from './ErrorHandler'


export default ({items}) => items.map(
    (item, i) => (
        <ErrorHandler 
            key={i} 
            render={(error) => {
                return error
                    ? <Card
                        title="oooooppps"
                        image="https://static4.fjcdn.com/comments/Com+_878eb4d26a3e7d7b1029744ebee22410.jpeg" 
                        />
                    : <Card {...item}/>
            }}
        />
    )
)