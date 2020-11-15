import React, { useState, useEffect } from 'react';
import './App.css';
import { Avatar } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ChatList from './components/Chatlist/ChatList';

const App = () => {
  const [chatlists, setChatlists] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]);

  return (
    <div className="app">
      <div className="app__sidebar">
        <header>
          <Avatar className="header__avatar"/>
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
            <ChatList key={key} />
          ))}
        </div>
      </div>
      <div className="app__content">
        <h2>content</h2>
      </div>
    </div>
  )
}

export default App;
