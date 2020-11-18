import React, { useState, useEffect } from 'react';
import './NewChat.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Avatar } from '@material-ui/core';
import Api from '../../Api';

const NewChat = ({ user, chatlists, show, setShow, setActiveChat }) => {
  const [lists, setlists] = useState([]);

  useEffect(() => {
    const getList = async () => {
      if (user !== null) {
        let result = await Api.getContactList(user.id);
        setlists(result);
      }
    }
    getList();
  }, [user]);

  const addNewChat = async (user2) => {
    const found = chatlists.some(el => el.with === user2.id);
    if (!found) await Api.addNewChat(user, user2, setActiveChat);
    handleClose();
  }

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
          <div onClick={() => addNewChat(list)} className="newChat__list" key={key}>
            <Avatar className="newChat__listavatar" src={list.avatar} />
            <div className="newChat__listname">{list.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewChat;
