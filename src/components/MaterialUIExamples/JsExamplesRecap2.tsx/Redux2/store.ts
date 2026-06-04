import { applyMiddleware, createStore } from "redux";
import { cakeReducer } from "./Cake/CakeReducer";
import { rootReducer } from "./RootReducer";
import { thunk } from "redux-thunk";

const Store2 = createStore(rootReducer, applyMiddleware(thunk))
//After this, u pass store value to <Provider store={store4}>

export default Store2