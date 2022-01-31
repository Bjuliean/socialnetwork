import React from 'react';
import s from './PostObject.module.css';

const PostObject = (props) => {
  return(
    <div className={s.PostObject}>
      {props.message}
      <div></div>
      {' likes ' + props.likes}
    </div>
  );
}

export default PostObject;
