import { BUY_ICE_CREAM } from "./IceCreamType";

const initialState = {
    noOfIceCream: 10
}

export function iceCreamReducer(state:any = initialState, action:any) {
    switch(action.type) {
        case BUY_ICE_CREAM: return {
            ...state,
            noOfIceCream: state.noOfIceCream - 1
        }
        default: return state;
    }
}