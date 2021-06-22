import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/redux-store";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";

ReactDOM.render(
    //BrowserRouter нужен для Маршрутизации, оборачиваем 1 раз приложение App
    //Provider передает store дереву компонентов
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);










