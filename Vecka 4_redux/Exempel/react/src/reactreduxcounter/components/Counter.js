import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    increment,
    decrement
}   from '../actions';

class Counter extends Component {
    state = { by: 1 }

    handleIncrement = () => {
        this.props.increment(this.state.by)
    }
    handleDecrement = () => {
        this.props.decrement(this.state.by)
    }

    onChange = event => {
        this.setState({
            by: Number(event.target.value)
        })
    }
    
    
    render() {
        console.log(this.props)
        const { count } = this.props;

        return (
            <div>
                <p>Count is: {count} </p>
                <button onClick={this.handleIncrement}>
                    Increment
                </button>
                <button onClick={this.handleDecrement}>
                    Decrement
                </button>
                <span> by </span>
                <input
                    type="number"
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

export { Counter };

export default connect(
    // ALLA ACTIONCREATORS
    state => ({count: state.count}) ,
    {
        increment,
        decrement 
    }
    // state => state        kan skriva såhär också om det är hela state
)(Counter)

// increment och decrement i connect kan jag använda inne i klassen med this.props. T.ex. this.props.increment()