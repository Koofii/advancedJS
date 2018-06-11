import React, { Component } from 'react';

import Card from './Card';

class ErrorHandler extends Component {
    state = { error: null };

    componentDidCatch(error, info) {
        console.log(error, info);
        
        this.setState({
            error
        });
    }

    render() {
        const { error } = this.state;

        return !error 
            ? this.props.children
            : <Card title="Oops, an error occurred!" image="https://cdn.dribbble.com/users/1078347/screenshots/2799566/oops.png" />;
    }
}

export default ErrorHandler;