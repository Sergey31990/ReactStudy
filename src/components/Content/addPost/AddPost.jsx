import React from "react";
import clases from "./addPost.module.css";

let textarea = React.createRef();

const AddPost = (props) => {

  let addPost = () => {
    props.dispatch({type: 'ADD-POST'});
  };

  let onChange = () => {
    let text = textarea.current.value;
    console.log(text);
    props.dispatch({type: 'CHANGE-NEW-POST-TEXT', postMessage: `${text}`});
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
