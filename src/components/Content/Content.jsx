import React from "react";
import clases from "./Content.module.css";
import Posts from "./My_posts/My_posts";
import AddPost from "./addPost/AddPost";

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <img
        className={clases.content_img}
        src="https://plast-plus.ru/upload/iblock/c94/25.jpg"
        alt="фото"
      ></img>
      <Posts dataPost={props.dataPost} />
      <AddPost
        addPost={props.addPost}
        newPost={props.newPost}
        changeNewPostText={props.changeNewPostText}
      />
    </div>
  );
};

export default Content;
