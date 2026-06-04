import { fetch_users_failure, fetch_users_request, fetch_users_success } from "./UserRequestType"


export const fetchUserRequest = () => {
    return {
        type:fetch_users_request,
    }
}

export const fetchUserSuccess = (data: any) => {
    return {
        type:fetch_users_success,
        reponse: data
    }
}

export const fetchUserFailure = (err: any) => {
    return {
        type:fetch_users_failure,
        reponse: err
    }
}

export const fetchUser = () => {
    return (dispatch: any) => {
        dispatch(fetchUserRequest())
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(data=>data.json())
            .then(data=>{
                    const res= data.reponse
                    dispatch(fetchUserSuccess(res.name))
                })
            .catch(err=>dispatch(fetchUserFailure(err.message)))
    }
}