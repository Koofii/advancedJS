import React, { Component } from 'react';

// this is an example of an "uncontrolled component", which refers to state being handled (partly or wholly) by the 
// DOM instead of the component. In this case, state that tracks the name being entered is managed by the <input>
// element, requiring the component to get the state via a ref. 
// 
// See also https://reactjs.org/docs/uncontrolled-components.html.
class NameForm extends Component {
    state = { name: null }

    submit = () => {
        this.setState({ name: this.input.value });
        this.input.value = '';
    }

    render() {
        const { name } = this.state;

        return (
            <div>
                <input type="text" placeholder="Enter name" ref={el => this.input = el} />
                <p>Your name is: {name}</p>
                <button onClick={this.submit}>Submit</button>
            </div>
        )
    }
}

// ...

export default render => render(<NameForm />);