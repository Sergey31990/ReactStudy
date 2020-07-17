import React from "react";
import clases from "./Dialog.module.css";

const Dialog = () => {
  return (
    <div className={clases.dialog}>
      <div className={clases.dialog_list}>
        {/* <ul>
          <li>
            <NavLink>Andrey</NavLink>
          </li>
          <li>
            <NavLink>Kate</NavLink>
          </li>
          <li>
            <NavLink>Helen</NavLink>
          </li>
          <li>
            <NavLink>Jack</NavLink>
          </li>
          <li>
            <NavLink>Bob</NavLink>
          </li>
        </ul> */}
        <div className="dialog_people">Andrey</div>
        <div className="dialog_people">Kate</div>
        <div className="dialog_people">Helen</div>
        <div className="dialog_people">Jack</div>
        <div className="dialog_people">Bob</div>
      </div>

      <div className={clases.dialog_message}>
        <div className="dialog_messages">HI</div>
        <div className="dialog_messages">HOW ARE YOU?</div>
        <div className="dialog_messages">AM FINE AND YOU?</div>
        <div className="dialog_messages">AM GREAT</div>
      </div>
    </div>
  );
};

export default Dialog;
