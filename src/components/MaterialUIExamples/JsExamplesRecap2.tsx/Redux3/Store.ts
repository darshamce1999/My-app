import { createStore } from "redux";
import { CakeReducer } from "./CakeReducer";


export const store = createStore(CakeReducer)
//After this, u pass store value to <Provider store={store4}>



