import React, { useState } from 'react';
import './NewChat.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Avatar } from '@material-ui/core';

const NewChat = ({ user, chatlist, show, setShow }) => {
  const [lists, setlists] = useState([
    {id: 123, name: 'Samsul', avatar: ''},
    {id: 123, name: 'Samsul', avatar: ''},
    {id: 123, name: 'Samsul', avatar: ''},
    {id: 123, name: 'Samsul', avatar: ''},
    {id: 123, name: 'Samsul', avatar: ''},
    {id: 123, name: 'Samsul', avatar: ''}
  ]);

  const handleClose = () => {
    setShow(false)
  }

  return (
    <div className="newChat" style={{ left: show ? 0 : '-40%' }}>
      <div className="newChat__head">
        <div onClick={handleClose} className="newChat__backButton">
          <ArrowBackIcon style={{ color: '#fff' }} />
        </div>
        <div className="newChat__headtitle">Benny</div>
      </div>
      <div className="newChat__lists">
        {lists.map((list, key) => (
          <div className="newChat__list" key={key}>
            <Avatar className="newChat__listavatar" src={list.avatar} />
            <div className="newChat__listname">{list.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewChat;
