import { showLoading, hideLoading } from 'react-redux-loading-bar'

import { getUsers } from "../utils/api"

export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function handleGetUsers() {
    return (dispatch) => {
        dispatch(showLoading())

        getUsers()
            .then((users) => {
                dispatch(receiveUsers(users))
            })
            .catch((e) => {
                console.warn('Error in handleToggleQuestion: ', e)
                alert('There was an error fetching the users. Try again.')
            })
            .finally(() => {
                dispatch(hideLoading())
            })
    }
}
