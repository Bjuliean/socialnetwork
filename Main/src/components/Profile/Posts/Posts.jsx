import React from 'react';
import s from './Posts.module.css';
import PostObject from './PostObject/PostObject';

const Posts = (props) => {

let postsElements = props.postsData.map(posts => <PostObject id={posts.id}  message={posts.message} likes={posts.likes} />);

  return(
    <div className={s.posts}>
      <div>New post</div>
      <input></input>
      <button>Post</button>
      {postsElements}
    </div>
  );
}

export default Posts;
