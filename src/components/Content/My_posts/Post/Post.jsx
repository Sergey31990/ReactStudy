import React from "react";
import clases from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={clases.post}>
      <div className={clases.ava}>
        <img src={props.ava} alt="avatar" />
      </div>

      <div className={clases.text}>{props.text}</div>
    </div>
  );
};

export default Post;
