import { FETCH_USER, FETCH_USER_FAILURE, FETCH_USER_SUCCESS } from "./UsersType"

export const fetchUser = () => {
    return {
        type: FETCH_USER
    }
}

export const fetchUserSucess = (data:any) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: data
    }
}

export const fetchUserFailure = (err:any) => {
    return {
        type: FETCH_USER_FAILURE,
        error: err
    }
}


export function fetchUserInfo() {
    return (dispatch:any) => {
        dispatch(fetchUser())
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(data => data.json())
            .then(data => dispatch(fetchUserSucess(data)))
            .catch(err => dispatch(fetchUserFailure(err.message)))
    }
}