import { buy_ice_cream } from "./IceCreamType"

const initialState = {
    noOfIceCream: 10
}

export const IceCreamReducer = (state=initialState, action: { type: any }) => {
    switch(action.type) {
        case buy_ice_cream: 
            return {
                ...state, 
                noOfIceCream: state.noOfIceCream-1
            }
            
        default: return state;
    }
}