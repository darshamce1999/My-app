import { FETCH_USER, FETCH_USER_FAILURE, FETCH_USER_SUCCESS } from "./UsersType";

const initialState = {
    loading: false,
    data: [],
    error: ''
}

export function usersReducer(state:any = initialState, action:any) {
    switch(action.type) {
        case FETCH_USER: return {
            loading: true, 
            data: [],
            error: ''
        }
        case FETCH_USER_SUCCESS: return {
            loading: false, 
            data: action.payload,
            error: ''
        }
        case FETCH_USER_FAILURE: return {
            loading: false, 
            data: [],
            error: action.error
        }
        default: return state
    }
}