import { applyMiddleware, combineReducers, createStore } from "redux";
import { CakeReducer4 } from "./CakeReducer4";
import { thunk } from "redux-thunk";
import { userReducer4 } from "./UserReducer4";

const rootReducer = combineReducers({cake: CakeReducer4, user: userReducer4})

export const store4 = createStore(rootReducer, undefined, applyMiddleware(thunk))
//After this, u pass store value to <Provider store={store4}>

