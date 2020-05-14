import React from 'react';
import  clases from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={clases.nav}>
        <ul className={clases.ul}>
          <li>Моя страница</li>
          <li>Сообщения</li>
          <li>Музыка</li>
          <li>Друзья</li>
          <li>Группы</li>
        </ul>
      </nav>
    )
}

export default Nav;