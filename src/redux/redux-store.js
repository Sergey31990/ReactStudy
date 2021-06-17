import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";


//Функция combineReducers принимает {} с reducers
let reducersPack= combineReducers({
    content : profileReducer,
    dialog : dialogReducer
});

let store = createStore();

export default store;