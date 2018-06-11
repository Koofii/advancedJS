import React from 'react';

import { TASK_STATUS } from '../constants';

import styles from './Task.module.css';

export default ({ id, title, description, status, update }) => {
    return (
        <div className={styles.task}>
            <div className={styles.header}>
                <div>{title}</div>
                <select defaultValue={status} onChange={e => update(id, e.target.value)}>
                    {TASK_STATUS.map(status => (
                    <option key={status} value={status}>{status}</option>
                ))}
                </select>
            </div>
            <hr />
            <div className={styles.body}>
                {description}
            </div>
        </div>
    );
}