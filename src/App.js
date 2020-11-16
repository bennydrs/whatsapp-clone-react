import React, { useState, useEffect } from 'react';
import './App.css';
import { Avatar } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ChatList from './components/Chatlist/ChatList';
import ChatIntro from './components/ChatIntro/ChatIntro';
import ChatWindow from './components/ChatWindow/ChatWindow';

const App = () => {
  const [chatlists, setChatlists] = useState([
    {chatId: 1, title: 'Benny', image: '', },
    {chatId: 2, title: 'Ardi', image: '', },
    {chatId: 3, title: 'Santo', image: '', }
  ]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState({
    id: 122,
    avatar: '',
    name: 'Santo'
  });

  return (
    <div className="app">
      <div className="app__sidebar">
        <header>
          <Avatar className="header__avatar" scr={user.avatar}/>
          <div className="header__buttons">
            <div className="header__btn">
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>
            <div className="header__btn">
              <ChatIcon style={{ color: '#919191' }} />
            </div>
            <div className="header__btn">
              <MoreVertIcon style={{ color: '#919191' }} />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search__input">
            <SearchIcon style={{ color: '#919191' }} />
            <input type="search" placeholder="Search"/>
          </div>
        </div>

        <div className="chatLists">
          {chatlists.map((chatlist, key) => (
            <ChatList key={key} data={chatlist} active={activeChat.chatId === chatlists[key].chatId} onClick={() => setActiveChat(chatlists[key])} />
          ))}
        </div>
      </div>
      <div className="app__content">
        {activeChat.chatId !== undefined && <ChatWindow user={user} /> }
        {activeChat.chatId === undefined && <ChatIntro /> }
        
      </div>
    </div>
  )
}

export default App;
