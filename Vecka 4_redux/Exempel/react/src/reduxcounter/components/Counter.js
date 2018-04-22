import React, { Component } from 'react';

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