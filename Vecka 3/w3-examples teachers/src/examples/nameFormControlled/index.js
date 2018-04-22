import React, { Component } from 'react';

// this is an example of a controlled component, where form state is handle fully by the component.
class NameForm extends Component {
	state = { 
        name: null,
        submittedName: null,
        submit: false
    }

	submit = () => {
		this.setState(prevState => ({
            submittedName: prevState.name,
            submit: true
        }))
	}

	onChange = event => {
		this.setState({
            name: event.target.value,
            submit: false
		})
	}

	render() {
		const { name, submittedName, submit } = this.state;

        // if we're submitting a name or if name is empty, set the input's value to an empty string.
        // Otherwise set the input's value to the name.
        let inputValue = (submit || !name) ? '' : name;

		return (
			<div>
				<input type="text" placeholder="Enter name" value={inputValue} onChange={this.onChange} />
				<p>Your name is: {submittedName}</p>
				<button onClick={this.submit}>Submit</button>
			</div>
		)
	}
}

// ...

export default render => render(<NameForm />)