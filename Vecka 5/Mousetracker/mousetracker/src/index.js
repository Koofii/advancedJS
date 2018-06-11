import React from 'react';
import { render } from 'react-dom';
import MouseTracker from './MouseTracker';
import styles from './Tracker.modules.css';



render(
    <MouseTracker 
        render={(x, y, lastClicked) => {
            return (
                <div style={{
                    height: '100vh',
                }}>
                    <div>The X-axis: {x}</div>
                    <div>The Y-axis: {y}</div>
                </div>
            )
        }} />,
    document.getElementById('root'));