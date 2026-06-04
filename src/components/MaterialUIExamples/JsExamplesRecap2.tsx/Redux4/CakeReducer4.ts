import { BUY_CAKE } from "./CakeType"

const initailState = {
    noOfCake: 10
}

export const CakeReducer4 = (state:any = initailState, action:any) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            noOfCake: state.noOfCake - 2
        }
        default: return state
    }
}