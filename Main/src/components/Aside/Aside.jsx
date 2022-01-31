import React from 'react';
import s from './Aside.module.css';
import {NavLink} from "react-router-dom";

const Aside = () => {
  return(
    <div className={s.aside}>
      <nav>
        <div className={s.item}><NavLink to="/profile">Profile</NavLink></div>
        <div className={s.item}><NavLink to="/messages">Messages</NavLink></div>
        <div className={s.item}><NavLink to="/news">News</NavLink></div>
      </nav>
    </div>
  );
}

export default Aside;
