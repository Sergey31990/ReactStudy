import React from 'react';
import  clases from './Content.module.css';

const Content = () => {
    return (
        <div className={clases.content}>
          <img src="https://plast-plus.ru/upload/iblock/c94/25.jpg" alt='фото'></img>
          <p>Пост 1</p>
          <p>Пост 2</p>
          <p>Пост 3</p>
          <p>Пост 4</p>
        </div>
    )
}

export default Content;