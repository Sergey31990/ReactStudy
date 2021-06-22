import {addPostActionCreator, changePostActionCreator} from "../../../redux/profile-reducer";
import AddPost from "./AddPost";
import {connect} from "react-redux/";





//Функция для state
const mapStateToProps = (state) => {
    return {
        newPost: state.content.newPost,
    }
}
//Функция для dispatch
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
