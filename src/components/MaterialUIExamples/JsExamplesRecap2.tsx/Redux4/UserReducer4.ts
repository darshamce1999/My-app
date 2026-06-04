
import { FETCH_USER, FETCH_USER_FAILURE, FETCH_USER_SUCCESS } from "./UserType4"


const initalState = {
    data: [],
    error: '',
    isLoading: false
}

export const userReducer4 = (state= initalState, action:any) => {
    switch(action.type) {
        case FETCH_USER: return {
            data: [],
            error: '',
            isLoading: true
        }
        case FETCH_USER_SUCCESS: return {
            data: action.payload,
            error: '',
            isLoading: false
        }
        case FETCH_USER_FAILURE: return {
            data: [],
            error: action.error,
            isLoading: false
        }
        default: return state
    }
}