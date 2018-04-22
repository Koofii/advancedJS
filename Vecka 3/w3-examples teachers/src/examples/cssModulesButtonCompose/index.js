// for more about CSS modules and compose, see: https://glenmaddern.com/articles/css-modules

import React from 'react';

import styles from './styles';

const Button = ({ error }) => (
    <button className={error ? styles.error : styles.primary}>Click Me!</button>
)

// ...

// remove the error attribute to render a non-error button.
export default render => render(<Button error />)