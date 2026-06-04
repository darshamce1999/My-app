import { BUY_CAKE } from "./CakeType"

const initaiState = {
    noOfCakes : 10
}

export function cakeReducer(state:any = initaiState, action:any) {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            noOfCakes: state.noOfCakes - 1
        }
        default: return state
    }
}
 