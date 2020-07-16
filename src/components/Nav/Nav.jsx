import React from 'react';
import  clases from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={clases.nav}>
        <ul className={clases.ul}>
          <li><a href="/content">Моя страница</a></li>
          <li><a href="/dialog">Сообщения</a></li>
          <li>Музыка</li>
          <li>Друзья</li>
          <li>Группы</li>
        </ul>
      </nav>
    )
}

export default Nav;