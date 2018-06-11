import React from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

// ...

const UserList = ({ users, match }) => {
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}
                    ><Link to={`${match.url}/${user.id}`}>{user.name}</Link>
                </li>
            ))}
        </ul>
    );
};

// ...

export default connect(
    (state, ownProps) => ({
        users: state
    })
)(UserList);