import React from 'react';
import './ChatList.css';
import { Avatar } from '@material-ui/core';

const ChatList = ({ onClick, active, data }) => {
  return (
    <div className={`chatList ${active ? 'active' : ''}`} onClick={onClick}>
      <Avatar className="chatList__avatar" />
      <div className="chatList__lines">
        <div className="chatList__line">
          <div className="chatList__name">{data.title}</div>
          <div className="chatList__date">19:00</div>
        </div>
        <div className="chatList__line">
          <div className="chatList__lastMsg">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eligendi esse amet iusto maiores soluta placeat omnis.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatList;
