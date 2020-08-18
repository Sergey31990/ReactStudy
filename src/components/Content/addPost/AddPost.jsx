import React from "react";
import clases from "./addPost.module.css";

let textarea = React.createRef();

const AddPost = (props) => {
  let addPost = () => {
    let text = textarea.current.value;
    props.addPost(text);
    textarea.current.value = "";
  };

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
