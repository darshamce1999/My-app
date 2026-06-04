import { buy_cake } from "./Caketype"

const initialState = {
    noOfCakes: 10
}

export const cakeReducer = (state=initialState, action: { type: any }) => {
    switch(action.type) {
        case buy_cake: {
            return {
                ...state,
                noOfCakes: state.noOfCakes-1
            }
        }
        default : return state
    }
}