import {updateNewPostMessageCreator, sendMessageCreator} from "../../redux/dialog-reducer";
import Dialog from "./Dialog";
import {connect} from "react-redux/";


//Функция для state
const mapStateToProps = (state) => {
    return {
        dialog: state.dialog
    }
}
//Функция для dispatch
const mapDispathToProps = (dispatch) => {
    return {
        updateMessage: (body) => {
            dispatch(updateNewPostMessageCreator(body));
        },
        sendMessage: () => {

            dispatch(sendMessageCreator());
        }
    }
}

//Функция connect соединяет Dialog с store
const DialogContainer = connect(mapStateToProps, mapDispathToProps)(Dialog);

export default DialogContainer;
