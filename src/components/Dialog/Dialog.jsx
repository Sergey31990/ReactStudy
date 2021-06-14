import React from "react";
import clases from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <li>
      <NavLink to={"/dialog/1" + props.id}>{props.name}</NavLink>
    </li>
  );
};

const Message = (props) => {
  return <p>{props.text}</p>;
};

const Dialog = (props) => {
  debugger;
  console.log(props);
  let usersArr = props.dialog.users.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));

  let messagesArr = props.dialog.messages.map((el) => (
    <Message text={el.messageText} />
  ));
  return (
    <div className={clases.dialog}>
      <div className={clases.dialog_list}>
        <ul>{usersArr}</ul>
      </div>

      <div className={clases.dialog_message}>{messagesArr}</div>
    </div>
  );
};

export default Dialog;
