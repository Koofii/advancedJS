import React, { Component } from 'react';

const withError = (WrappedComponent, FallbackComponent) => {
    return class ErrorHandler extends Component {
        constructor(props) {
            super(props);
    
            this.state = {
                error: null
            };
        }
    
        componentDidCatch(error, info) {
            console.log(error, info);
            
            this.setState({
                error
            });
        }
    
        render() {
            const { error } = this.state;
    
            return error    
                ? <FallbackComponent error={error} />
                : <WrappedComponent {...this.props} />
        }
    }
};

export default withError;