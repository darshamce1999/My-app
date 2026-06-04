import { fetch_users_failure, fetch_users_request, fetch_users_success } from "./UserRequestType"

const initialState = {
    loading: false,
    data: [],
    err:''
}

export const UserReducer = (state=initialState, action: { type: any, data:any, err:any }) => {
    switch(action.type) {
        case fetch_users_request: 
            return {
                ...state,
                loading: true
            }
        case fetch_users_success: 
            return {
                ...state,
                loading:false,
                data: action.data,
                err:''
            }
        case fetch_users_failure:
            return {
                ...state,
                loading:false,
                data:[],
                err:action.err
            }
        default: return state
    }
}