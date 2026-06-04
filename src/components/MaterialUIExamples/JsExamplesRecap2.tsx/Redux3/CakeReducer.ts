import { BUY_CAKE } from "./CakeType"

const initialState = {
    noOfCake: 10
}

export const CakeReducer = function(state = initialState, action:any) {
    switch(action.type) {
        case BUY_CAKE: {
            return {
                ...state,
                noOfCake: state.noOfCake -1
            }
        }
        default: return state
    } 

}