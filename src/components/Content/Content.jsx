import React from "react";
import clases from "./Content.module.css";
import AddPostContainer from "./addPost/AddPostContainer";
import MyPostsContainer from "./My_posts/MypostsContainer";

const Content = () => {
    return (
        <div>
            <img
                className={clases.content_img}
                src="https://plast-plus.ru/upload/iblock/c94/25.jpg"
                alt="фото"
            ></img>

            <MyPostsContainer />
            <AddPostContainer />
        </div>
    );
};

export default Content;



