import React from 'react';
import Post from './Post/Post';
import clases from './My_posts.module.css';

const Posts = () => {
    return (
        <div className={clases.posts}>
          <Post text='text 1'/>
          <Post text='text 2'/>
          <Post text='text 3'/>
          <Post text='text 4'/>
        </div>
    )
}

export default Posts;