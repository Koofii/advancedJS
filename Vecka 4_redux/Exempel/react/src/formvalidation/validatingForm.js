import React, { Component } from "react";

class ValidatingForm extends Component {
    state = { user: '' }

    handleChange = event => {
        this.setState({
            user: event.target.value
        })
    }
    
    handleSubmit = event => {
        let a = 'a';
        event.preventDefault();
        alert(`this user is ${this.state.user}`);
    }

    render() {
        //Nedan tar vi in validation, vilken valdiation som helst och i andra index-filen skapar vi valideringen
        //Det vill säga att denna render vet aldrig vilken validering som kommer skickas in.
        const { user } = this.state;

        const error = this.props.getError(user);

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    User:
                    <input
                        type="text"
                        onChange={this.handleChange}
                    />
                </label>
                
                {error ? <p style={{ color: 'red' }}>{error}</p> : null}
                <div>
                    <button
                        disabled={Boolean(user.length === 0 || error)}
                        type="submit">
                        Submit
                    </button>
                </div>
            </form>
        );
    }
}
export { ValidatingForm };