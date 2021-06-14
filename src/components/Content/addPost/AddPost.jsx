import React from "react";
import clases from "./addPost.module.css";
import {addPostActionCreator, changePostActionCreator} from "../../../redux/state.js";

let textarea = React.createRef();

const AddPost = (props) => {
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onChange = () => {
    let text = textarea.current.value;
    props.dispatch(changePostActionCreator(text));
  };

  return (
    <div className={clases.addPost}>
      <textarea
        onChange={onChange}
        ref={textarea}
        className={clases.addPost_textarea}
        value={props.state.content.newPost}
      ></textarea>
      <button onClick={addPost} className={clases.addPost_btn}>
        Добавить
      </button>
    </div>
  );
};
export default AddPost;
