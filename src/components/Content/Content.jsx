import React from 'react';
import clases from './Content.module.css';
import Posts from './My_posts/My_posts';


const Content = () => {
    return (
        <div className={clases.content}>
          <img className={clases.content_img} src="https://plast-plus.ru/upload/iblock/c94/25.jpg" alt='фото'></img>
          <Posts />
        </div>
    )
}

export default Content;