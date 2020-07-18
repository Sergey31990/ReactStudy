import React from "react";
import Post from "./Post/Post";
import clases from "./My_posts.module.css";

const Posts = (props) => {
  let postArr = props.dataPost.map((el) => (
    <Post ava={el.ava} text={el.text} />
  ));

  return <div className={clases.posts}>{postArr}</div>;
};

export default Posts;
