import React from 'react';

import styles from './Box.css';

// this component uses CSS modules for styling. Note how the imported styles object is used below and compare it with
// the styles declared in Box.css.
const Box = ({ size, style, className = '', ...rest }) => (
    <div
        className={`${styles.box} ${styles[size]} ${className}`}
        style={{ margin: '20px', ...style}}
        {...rest}
    >
    </div>
)

// ...

export { Box };