import React from 'react';
import  clases from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={clases.nav}>
        <ul className={clases.ul}>
<<<<<<< HEAD
          <li className={clases.li}>Моя страница</li>
          <li className={clases.li}>Сообщения</li>
          <li className={clases.li}>Музыка</li>
          <li className={clases.li}>Друзья</li>
          <li className={clases.li}>Группы</li>
=======
          <li><a href="/content">Моя страница</a></li>
          <li><a href="/dialog">Сообщения</a></li>
          <li>Музыка</li>
          <li>Друзья</li>
          <li>Группы</li>
>>>>>>> 46c9282582fab862f120afe9cdb670d1f204842b
        </ul>
      </nav>
    )
}

export default Nav;