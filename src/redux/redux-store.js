import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import storeInit from "./storeInit"
import usersReducer from "./users-reducer";


//Функция combineReducers принимает {} с reducers
let reducers = combineReducers({
    content : profileReducer,
    dialog : dialogReducer,
    users: usersReducer
});

let store = createStore(reducers, storeInit);
window.store = store;
export default store;