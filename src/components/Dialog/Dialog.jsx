import React from "react";
import {NavLink} from "react-router-dom";
import clases from './Dialog.module.css';

const Dialog = (props) => {

    //Переключатель диалогов
    const DialogItem = (props) => {
        return (
            <li>
                <NavLink to={"/dialog/" + props.id}>{props.name}</NavLink>
            </li>
        );
    };

    const Message = (props) => {
        return <p>{props.text}</p>;
    };

    let usersArr = props.users.map((el) => (
        <DialogItem name={el.name} id={el.id}/>
    ));

    let messagesArr = props.messages.map((el) => (
        <Message text={el.messageText}/>
    ));

    let onsendMessage = () => {
        props.sendMessage();
    };


    let onupdateMessage = (e) => {
        let body = e.target.value;
        // props.dispatch(updateNewPostMessageCreator(body));
        props.updateMessage(body);
    }

    return (
        <>
            <div className={clases.dialog}>
                <div>
                    <ul className={clases.ulList}>{usersArr}</ul>
                </div>
                <div>{messagesArr}</div>
            </div>
            <textarea value={props.newMessageBody} onChange={onupdateMessage}
                      className={clases.addPost_textarea}></textarea>
            <button onClick={onsendMessage} className={clases.addPost_btn}>Отправить</button>
        </>
    );
};

export default Dialog;
