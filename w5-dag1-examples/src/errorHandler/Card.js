import React from 'react';

import styles from './Card.css';

export default ({ title, image }) => (
    <div className={styles.card}>
        <p className={styles.title}>{title.toUpperCase()}</p>
        <div><img className={styles.image} src={image} /></div>
    </div>
);