import React from 'react';
import { connect } from 'react-redux'
import { getUsers } from '../action'
import Loader from 'react-loader-spinner'

import User from './User'

const UsersList = props => {
    return (
        <>
        <button onClick={props.getUsers}>
        {props.isLoading ? (
                <Loader
                    type="TailSpin"
                    color="#00BFFF"
                    height={100}
                    width={100}
            /> ):(
            'See User'
            )}
        </button>
        {props.error && <p className="error">{props.error}</p>}
        {props.users && props.users.map(user => (
            <User key={user.id} user={user} />
        ))}
        
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        users: state.users,
        error: state.error
    }
}

export default connect(mapStateToProps, 
    { getUsers }
    )(UsersList);