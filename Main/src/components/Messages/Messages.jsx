import React from 'react';
import s from './Messages.module.css';
import Dialogs from './Dialogs/Dialogs';
import DialogsNav from './DialogsNav/DialogsNav';
import {NavLink} from "react-router-dom";


const Messages = (props) => {

let messageElements = props.state.messageData.map(message => <DialogsNav id={message.id} name={message.name} />);

let dialogsElemets = props.state.dialogsData.map(dialog => <Dialogs id={dialog.id} name={dialog.name} message={dialog.message} />);

  return(
    <div className={s.messages}>
      <div className={s.dialogsnav}>
        {messageElements}
      </div>
      <div className={s.dialogs}>
        {dialogsElemets}
      </div>
    </div>
  );
}

export default Messages;
