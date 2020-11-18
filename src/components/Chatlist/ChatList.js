import React, { useEffect, useState } from 'react';
import './ChatList.css';
import { Avatar } from '@material-ui/core';

const ChatList = ({ onClick, active, data }) => {

  const [time, setTime] = useState('');

  useEffect(() => {
    if (data.lastMessageDate >  0) {
      let d = new Date(data.lastMessageDate.seconds * 1000);
      let hours = d.getHours();
      let minutes = d.getMinutes();
      hours = hours < 10 ? '0'+hours : hours;
      minutes = minutes < 10 ? '0'+minutes : minutes;
      setTime(`${hours} ${minutes}`);
    }
  })

  return (
    <div className={`chatList ${active ? 'active' : ''}`} onClick={onClick}>
      <Avatar className="chatList__avatar" src={data.image} />
      <div className="chatList__lines">
        <div className="chatList__line">
          <div className="chatList__name">{data.title}</div>
          <div className="chatList__date">{time}</div>
        </div>
        <div className="chatList__line">
          <div className="chatList__lastMsg">
            <p>{data.lastMessage}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatList;
