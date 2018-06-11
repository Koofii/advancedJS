import React from 'react';

import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';


// ...

const UserDetails = ({ users, match }) => {
    const found = users.find(test => test.id === Number(match.params.id))
    //return (found ? <div>{found.id} {found.name}</div> : `Did not find any user by ID: ${match.params.id}`)

    if (found){
        return (
            <p>ID: {found.id}, Name: {found.name}, Username: {found.userName} </p>
        )
    }

    return <Redirect to="/users"/>
};

// ...

export default connect(
    (state, ownProps) => ({
        users: state
    })
)(UserDetails);