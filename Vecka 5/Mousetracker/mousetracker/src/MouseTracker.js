import { Component } from 'react';
import styles from './Tracker.modules.css'

class MouseTracker extends Component {
    state = {
        onMoveX: 0,
        onMoveY: 0,
        lastClicked: {

        }
    }
    
    onMoveTracker = event => {
        this.setState({
            onMoveX: event.clientX,
            onMoveY: event.clientY
        })
    }

    onClickTracker = event => {
        this.setState({
            lastClicked:{
                x: event.clientX,
                y: event.clientY
            }
        })
    }
    render(){
        const {onMoveX, onMoveY, lastClicked} = this.state;
        
        return (
            <div onMouseMove={this.onMoveTracker} onClick={this.onClickTracker}>
                {this.props.render(onMoveX, onMoveY, lastClicked)}
            </div>
        )
    }
}

export default MouseTracker;


// class ErrorHandler extends Component {
//     state = { error: null };

//     componentDidCatch(error, info) {
//         console.log(error, info);
        
//         this.setState({
//             error
//         });
//     }

//     render() {
//         const { error } = this.state;

//         return this.props.render(error);
//     }
// }