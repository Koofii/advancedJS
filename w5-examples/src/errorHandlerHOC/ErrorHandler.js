import React, {Component} from 'react';


const withError = (WrappedComponent, FallbackComponent) => {
    return class ErrorHandler extends Component {
        state = {
            error: null
        }
        componentDidCatch(error, info) {
            this.setState({
                error
            });
        }
    
        render() {
            const { error } = this.state;

            return (error
                ? <FallbackComponent {...this.props}/>
                : <WrappedComponent {...this.props}/>
            )
        }
    }
};

export default withError;


// class ErrorHandler extends Component {
    // state = {
    //     error: null
    // }
    // componentDidCatch(error, info) {
    //     this.setState({
    //         error
    //     });
    // }

    // render() {
    //     const { error } = this.state;
        
    //     return error
    //         ? 
    //             <Card 
    //             title="Oops, an error occured"
    //             image="https://media3.giphy.com/media/51Uiuy5QBZNkoF3b2Z/giphy.gif"
    //             />
    //         : this.props.children;
    // }
// }

// export default ErrorHandler;