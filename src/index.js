import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import {BrowserRouter} from 'react-router-dom';

let renderEntireTree = () => {
  ReactDOM.render(
    //BrowserRouter нужен для Маршрутизации, оборачиваем 1 раз приложение App
    <BrowserRouter>
      <App
        state={store._state}
        dispatch={store.dispatch.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

renderEntireTree(store.getState());
//Передаем функцию renderEntireTree в state
store.subscribe(renderEntireTree);

