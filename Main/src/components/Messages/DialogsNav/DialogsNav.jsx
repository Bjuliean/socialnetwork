import React from 'react';
import {NavLink} from "react-router-dom";
import s from './DialogsNav.module.css';

const DialogsNav = (props) => {

let path = '/messages/' + props.id;

  return(
    <div className={s.dialogsnav}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}

export default DialogsNav;
