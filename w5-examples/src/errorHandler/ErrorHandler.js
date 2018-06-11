import React, {Component} from 'react';
import Card from './Card'

class ErrorHandler extends Component {
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
        
        return error
            ? <div>
                    <Card 
                    title="Oops, an error occured"
                    image="http://i0.kym-cdn.com/photos/images/newsfeed/001/331/503/7b8.jpg"
                    />
                    <img src="https://media3.giphy.com/media/51Uiuy5QBZNkoF3b2Z/giphy.gif"/>
                </div>
            : this.props.children;
    }
}

export default ErrorHandler;