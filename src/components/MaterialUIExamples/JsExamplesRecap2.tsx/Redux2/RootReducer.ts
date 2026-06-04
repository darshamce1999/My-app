import { combineReducers } from "redux";
import { cakeReducer } from "./Cake/CakeReducer";
import { iceCreamReducer } from "./IceCream/IceCreamReducer";
import { usersReducer } from "./Users/UsersReducer";

export const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    users: usersReducer
})