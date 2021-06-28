import React from "react";
import clases from "./Profile.module.css";
import AddPostContainer from "./addPost/AddPostContainer";
import MyPostsContainer from "./My_posts/MypostsContainer";


const Profile = (props) => {
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

export default Profile;



