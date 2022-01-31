import React from 'react';
import s from './Profile.module.css';
import Posts from './Posts/Posts';

const Profile = (props) => {
  return(
    <div className={s.profile}>
      <Posts postsData={props.state.postsData} />
    </div>
  );
}

export default Profile;
