import React from "react";
import clases from "./addPost.module.css";

let textarea = React.createRef();

const AddPost = (props) => {
    let onAddPost = () => {
        props.addPost();
    };

    let onChange = () => {
        let text = textarea.current.value;
        props.updateNewPostText(text);

    };

    return (
        <div className={clases.addPost}>
      <textarea
          onChange={onChange}
          ref={textarea}
          className={clases.addPost_textarea}
          value={props.newPost}/>
            <button onClick={onAddPost} className={clases.addPost_btn}>
                Добавить
            </button>
        </div>
    );
};
export default AddPost;
