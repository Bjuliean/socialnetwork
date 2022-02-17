import React from 'react';
import s from './Messages.module.css';
import Dialogs from './Dialogs/Dialogs';
import DialogsNav from './DialogsNav/DialogsNav';
import {NavLink} from "react-router-dom";
import { addMessageActionCreator } from '../../Redux/messages-reducer';


const Messages = (props) => {

let messageElements = props.state.messageData.map(message => <DialogsNav id={message.id} name={message.name} />);
let dialogsElemets = props.state.dialogsData.map(dialog => <Dialogs id={dialog.id} name={dialog.name} message={dialog.message} />);
let newMessageElement = React.createRef();

let addMessage = () => {
  let text = newMessageElement.current.value;
  props.dispatch(addMessageActionCreator(text));
  newMessageElement.current.value = '';
}

  return(
    <div className={s.messages}>
      <div className={s.dialogsnav}>
        {messageElements}
      </div>
      <div className={s.dialogs}>
        <div>
          {dialogsElemets}
          <div><textarea ref={newMessageElement} ></textarea></div>
          <div><button onClick={addMessage} >Add message</button></div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
