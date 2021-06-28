import {addPostActionCreator, changePostActionCreator} from "../../../redux/profile-reducer";
import AddPost from "./AddPost";
import {connect} from "react-redux/";

const mapStateToProps = (state) => {
    return {
        newPost: state.profilePage.newPost,

    }
}
const mapDispathToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(changePostActionCreator(text));
        }
    }
}
//Функция connect соединяет Dialog с store и локалибно перерерисовывает компонент)
const AddPostContainer = connect(mapStateToProps, mapDispathToProps)(AddPost);

export default AddPostContainer;
