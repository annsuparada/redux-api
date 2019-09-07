import {
    FETCH_USERS_START,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from '../action/usersActions'

// import {
//     FETCH_POSTS_START,
//     FETCH_POSTS_SUCCESS,
//     FETCH_POSTS_FAILURE
// } from '../action/postsAction'

const innitialState = {
    users: [],
    posts: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = innitialState, action) => {
    switch (action.type) {
        case FETCH_USERS_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                isLoadind: false,
                error: 'The API is down. Please try again later'
            }
        default:
            return state
    }
}