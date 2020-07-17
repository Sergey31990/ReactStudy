import React from 'react';
import  clases from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={clases.nav}>
        <ul className={clases.ul}>
          <li className={clases.li}>Моя страница</li>
          <li className={clases.li}>Сообщения</li>
          <li className={clases.li}>Музыка</li>
          <li className={clases.li}>Друзья</li>
          <li className={clases.li}>Группы</li>
        </ul>
      </nav>
    )
}

export default Nav;