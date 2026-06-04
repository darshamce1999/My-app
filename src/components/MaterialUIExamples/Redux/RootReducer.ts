import { combineReducers } from "redux";
import { cakeReducer } from "./Cake/CakeReducer";
import { IceCreamReducer } from "./IceCream/IceCreamReducer";
import { UserReducer } from "./Users/UserReducer";


export const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: IceCreamReducer,
    user: UserReducer
})