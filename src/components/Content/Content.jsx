import React from "react";
import clases from "./Content.module.css";
import Posts from "./My_posts/My_posts";
import AddPostContainer from "./addPost/AddPostContainer";

const Content = (props) => {
    return (
        <div>
            <img
                className={clases.content_img}
                src="https://plast-plus.ru/upload/iblock/c94/25.jpg"
                alt="фото"
            ></img>
            <Posts state={props.state}/>
            <AddPostContainer state={props.state}
                              dispatch={props.dispatch}/>
        </div>
    );
};

export default Content;
