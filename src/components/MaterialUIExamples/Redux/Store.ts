import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./RootReducer";
import thunk from 'redux-thunk'

// const Store = createStore(rootReducer, applyMiddleware(thunk));
const Store = createStore(rootReducer);

export default Store;