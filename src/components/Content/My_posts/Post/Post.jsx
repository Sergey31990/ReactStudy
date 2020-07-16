import React from 'react';
import clases from './Post.module.css';

const Post = (props) => {
    return (
        <div className={clases.post}>

          <div className={clases.ava}>
            <img src="https://avatars.mds.yandex.net/get-pdb/1751508/5ce53352-7bf5-4b8b-801c-a4f1a7e06a0d/s1200?webp=false" alt="avatar"/>
          </div>

          <div className={clases.text}>
            {props.text}
          </div>
          
        </div>
    )
}

export default Post;