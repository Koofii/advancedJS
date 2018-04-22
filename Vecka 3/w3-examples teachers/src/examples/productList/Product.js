import React from 'react';

export default ({ id, name, remove }) => (
    <div onClick={() => remove(id)}>
        <p>Id: {id}, Name: {name}</p>
    </div>
)