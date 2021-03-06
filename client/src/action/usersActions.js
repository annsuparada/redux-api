import axios from 'axios'

export const FETCH_USERS_START = 'FETCH_USERS_START';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const getUsers = () => {
    return dispatch => {
        dispatch({ type: FETCH_USERS_START});
        axios.get(`https://annposts.herokuapp.com/users`)
        .then(res => {
            console.log('res users', res)
            dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FETCH_USERS_FAILURE, payload: err.response})
        })
    }
}