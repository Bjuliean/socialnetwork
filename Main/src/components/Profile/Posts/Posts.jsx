import React from 'react';
import s from './Posts.module.css';
import PostObject from './PostObject/PostObject';

const Posts = (props) => {

let newPostElement = React.createRef();

let postsElements = props.postsData.map(posts => <PostObject id={posts.id}  message={posts.message} likes={posts.likes} />);

let addPost = () => {
  let text = newPostElement.current.value;
  props.addPost(text);
  newPostElement.current.value = '';
}

  return(
    <div className={s.posts}>
      <div>New post</div>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
        <button onClick={addPost}>Add post</button>
      {postsElements}
    </div>
  );
}

export default Posts;
