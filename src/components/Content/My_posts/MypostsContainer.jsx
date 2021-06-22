import {connect} from "react-redux";
import My_posts from "./My_posts";


//Функция для state
const mapStateToProps = (state) => {
    return {
        post: state.content.post
    }
}
//Функция для dispatch
const mapDispathToProps = (dispatch) => {
    return {}
}
//Функция connect соединяет Dialog с store
const MyPostsContainer = connect(mapStateToProps, mapDispathToProps)(My_posts);

export default MyPostsContainer;
