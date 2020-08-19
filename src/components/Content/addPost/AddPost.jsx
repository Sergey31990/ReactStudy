import React from "react";
import clases from "./addPost.module.css";

let textarea = React.createRef();

const AddPost = (props) => {
  let addPost = () => {
    props.addPost();
    props.changeNewPostText("");
  };

  let onChange = () => {
    let text = textarea.current.value;
    props.changeNewPostText(text);
  };

  return (
    <div className={clases.addPost}>
      <textarea
        onChange={onChange}
        ref={textarea}
        className={clases.addPost_textarea}
        value={props.newPost}
      ></textarea>
      <button onClick={addPost} className={clases.addPost_btn}>
        Добавить
      </button>
    </div>
  );
};
export default AddPost;
