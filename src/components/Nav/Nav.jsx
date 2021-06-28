import React from "react";
import clases from "./Nav.module.css";
import { NavLink } from "react-router-dom";
//NavLink меняют URL
const Nav = () => {
  return (
    <nav className={clases.nav}>
      <ul className={clases.ul}>
        <li>
          <NavLink to="/profile" activeClassName={clases.active}>
            Моя страница
          </NavLink>
        </li>
        <li>
          <NavLink to="/dialog" activeClassName={clases.active}>
            Сообщения
          </NavLink>
        </li>
        <li>
          <NavLink to="/music" activeClassName={clases.active}>
            Музыка
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" activeClassName={clases.active}>
            Пользователи
          </NavLink>
        </li>
        <li>
          <NavLink to="/groups" activeClassName={clases.active}>
            Группы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
