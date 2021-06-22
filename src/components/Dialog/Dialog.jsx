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

    let usersArr = props.dialog.users.map((el) => (<DialogItem name={el.name} key={el.id} id={el.id}/>));
    let messagesArr = props.dialog.messages.map((el) => (<Message key={el.id} text={el.messageText}/>));

    let onSendMessage = () => {
        props.sendMessage();
    };

    let onUpdateMessage = (e) => {
        let body = e.target.value;
        debugger;
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
            <textarea value={props.dialog.newMessageBody} onChange={onUpdateMessage}
                      className={clases.addPost_textarea}></textarea>
            <button onClick={onSendMessage} className={clases.addPost_btn}>Отправить</button>
        </>
    );
};

export default Dialog;
