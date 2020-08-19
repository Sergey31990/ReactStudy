import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { addPost } from "./redux/state";
import { changeNewPostText } from "./redux/state";

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        changeNewPostText={changeNewPostText}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

// serviceWorker.unregister();
