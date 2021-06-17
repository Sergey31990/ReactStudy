import React from "react";
import {updateNewPostMessageCreator, sendMessageCreator} from "../../redux/dialog-reducer";
import Dialog from "./Dialog";


const DialogContainer = (props) => {
    debugger
    console.log(props);

    let newMessageBody = props.dialog.newMessageBody;

    let sendMessage = () => {
        props.dispatch(sendMessageCreator(newMessageBody))
    };
    let updateMessage = (body) => {
        props.dispatch(updateNewPostMessageCreator(body));
    }
    return (<Dialog users={props.dialog.users}
                    messages={props.dialog.messages}
                    sendMessage={sendMessage}
                    updateMessage={updateMessage}
                    newMessageBody={newMessageBody}
                    />);
};

export default DialogContainer;
