import React, {useState} from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

const ChatWindow = () => {

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState('');

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji)
  }

  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  }

  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  }

  return (
    <div className="chatWindow">
      <div className="chatWindow__header">
        <div className="chatWindow__headerInfo">
          <Avatar className="chatWindow__avatar" />
          <div className="chatWindow__name">Benny</div>
        </div>

        <div className="chatWindow__headerButtons">

          <div className="chatWindow__btn">
            <SearchIcon style={{ color: '#919191' }} />
          </div>

          <div className="chatWindow__btn">
            <AttachFileIcon style={{ color: '#919191' }} />
          </div>

          <div className="chatWindow__btn">
            <MoreVertIcon style={{ color: '#919191' }} />
          </div>

        </div>
      </div>

      <div className="chatWindow__body">
        <div className="chatWindow__bg"></div>
      </div>

      <div className="chatWindow__emoji" style={{ height: emojiOpen ? '200px' : '0px' }}>
        <EmojiPicker onEmojiClick={handleEmojiClick} disableSearchBar disableSkinTonePicker />
      </div>

      <div className="chatWindow__footer">
        <div className="chatWindow__pre">
          <div className="chatWindow__btn" onClick={handleCloseEmoji} style={{ width: emojiOpen ? 40 : 0 }}>
            <CloseIcon style={{ color: '#919191' }} />
          </div>
          <div className="chatWindow__btn" onClick={handleOpenEmoji}>
            <InsertEmoticonIcon style={{ color: emojiOpen ? '#009688' : '#919191' }} />
          </div>
        </div>
        <div className="chatWindow__inputarea">
          <input type="text" className="chatWindow__input" placeholder="Type a message" value={text} onChange={e => setText(e.target.value)} />
        </div>
        <div className="chatWindow__pos">
          <div className="chatWindow__btn">
            <SendIcon style={{ color: '#919191' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatWindow;
