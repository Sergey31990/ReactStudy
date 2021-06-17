import React from "react";
import {addPostActionCreator, changePostActionCreator} from "../../../redux/profile-reducer";
import AddPost from "./AddPost";

const AddPostContainer = (props) => {
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };
    let onChange = (text) => {
        props.dispatch(changePostActionCreator(text));
    };
    return (<AddPost updateNewPostText={onChange}
                     addPost={addPost}
                     newPostText={props.state.content.newPost} />);
};
export default AddPostContainer;
