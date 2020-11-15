import React from 'react';
import './ChatList.css';
import { Avatar } from '@material-ui/core';

const ChatList = () => {
  return (
    <div className="chatList">
      <Avatar className="chatList__avatar" />
      <div className="chatList__lines">
        <div className="chatList__line">
          <div className="chatList__name">Benny</div>
          <div className="chatList__date">19:00</div>
        </div>
        <div className="chatList__line">
          <div className="chatList__lastMsg">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eligendi esse amet iusto maiores soluta placeat omnis, nihil hic earum qui officiis voluptatibus totam labore magni repellat aperiam nam nisi.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatList;
