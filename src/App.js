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
import NewChat from './components/NewChat/NewChat';
import Login from './components/Login/Login';
import Api from './Api';

const App = () => {
  const [chatlists, setChatlists] = useState([]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState(null);
  const [showNewChat, setShowNewChat] = useState(false);

  useEffect(() => {
    if (user !== null) {
      let unsub = Api.onChatList(user.id, setChatlists);
      return unsub;
    }
  }, [user]);

  const handleNewChat = () => {
    setShowNewChat(true);
  }

  const handleLoginData = async (user) => {
    let newUser = {
      id: user.uid,
      name: user.displayName,
      avatar: user.photoURL
    };
    await Api.addUser(newUser);
    setUser(newUser);
  }

  if (user === null) {
    return (<Login onReceive={handleLoginData} />);
  }

  return (
    <div className="app">
      <div className="app__sidebar">
        <NewChat chatlists={chatlists} user={user} show={showNewChat} setShow={setShowNewChat} setActiveChat={setActiveChat} />
        <header>
          <Avatar className="header__avatar" src={user.avatar}/>
          <div className="header__buttons">
            <div className="header__btn">
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>
            <div onClick={handleNewChat} className="header__btn">
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
        {activeChat.chatId !== undefined && <ChatWindow user={user} data={activeChat} /> }
        {activeChat.chatId === undefined && <ChatIntro /> }
        
      </div>
    </div>
  )
}

export default App;
