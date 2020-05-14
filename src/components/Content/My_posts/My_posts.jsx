import React from 'react';
import Post from './Post/Post';
import clases from './My_posts.module.css';

const Posts = () => {
    return (
        <div className={clases.posts}>
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
    )
}

export default Posts;