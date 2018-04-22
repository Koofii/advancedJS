import React, { Component } from 'react';

class Counter extends Component {
	state = { count: 0 }

	increment = () => {
        // we're incrementing the count based on the previous count, therefore use the prevState callback.
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }
    
    decrement = () => {
        // we're decrementing the count based on the previous count, therefore use the prevState callback.
        this.state.count !== 0 && this.setState(prevState => ({
            count: prevState.count - 1
        }))
	}

	render() {
        const { count } = this.state;

		return (
			<div>
				<button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
				<div>{count}</div>
			</div>
		)
	}
}

// ...

export default render => render(<Counter />)