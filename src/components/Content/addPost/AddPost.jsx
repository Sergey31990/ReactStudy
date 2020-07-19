import React from "react";
import clases from "./addPost.module.css";

let textarea = React.createRef();

let addPost = () => {
  let text = textarea.current.value;
  alert(text);
};

const AddPost = (props) => {
  return (
    <div className={clases.addPost}>
      <textarea ref={textarea} className={clases.addPost_textarea}></textarea>
      <button onClick={addPost} className={clases.addPost_btn}>
        Добавить
      </button>
    </div>
  );
};
export default AddPost;
