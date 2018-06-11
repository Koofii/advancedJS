import React from 'react';

import withError from './ErrorHandler';

import styles from './Card.css';

const Card = ({ title, image }) => {
    return (
        <div className={styles.card}>
            <p className={styles.title}>{title.toUpperCase()}</p>
            <div><img className={styles.image} src={image} /></div>
        </div>
    );
};

export { Card };

export default withError(
    Card,
    ({ error }) => (
        <Card 
            title="Oops, an error occurred" 
            image="https://cdn.dribbble.com/users/1078347/screenshots/2799566/oops.png"
        />
    )
);