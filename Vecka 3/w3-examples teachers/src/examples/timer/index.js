import React, { Component } from 'react';

// this example demonstrates mount/unmount lifecycle methods.
class Timer extends Component {
	componentDidMount() {
        // note: The timer ("handle") is not part of component state.
		this.timer = setInterval(
			() => console.log('Annoying timer message'),
			1000
        )
    }
    
    render() {
        return 'Timer';
    }

	componentWillUnmount() {
		clearInterval(this.timer)
	}
}

// ...

export default render => {
    render(<Timer />)
    
    setTimeout(
        () => render(null),
        5000
    )
}