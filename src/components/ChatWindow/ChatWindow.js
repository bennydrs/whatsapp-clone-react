import React, {useState, useEffect, useRef} from 'react';
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
import MessageItem from './../MessageItem/MessageItem';
import Api from '../../Api';

const ChatWindow = ({user, data}) => {

  const body = useRef();

  // recognition speech
  let recognition = null;
  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition();
  }

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);
  const [lists, setLists] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // auto scroll down to last message
    if (body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [lists]);

  useEffect(() => {
    setLists([]);
    let unsub = Api.onChatContent(data.chatId, setLists, setUsers);
    return unsub;
  }, [data.chatId])

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji)
  }

  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  }

  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  }

  const handleMicClick = () => {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true);
      }
      recognition.onend = () => {
        setListening(false);
      }
      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript);
      }

      recognition.start();
    }
  }

  const handleInputKeyUp = (e) => {
    if(e.keyCode === 13) {
      handleSendClick();
    }
  } 

  const handleSendClick = () => {
    if (text !== '') {
      Api.sendMessage(data, user.id, 'text', text, users);
      setText('');
      setEmojiOpen(false);
    }
  }

  return (
    <div className="chatWindow">
      <div className="chatWindow__header">
        <div className="chatWindow__headerInfo">
          <Avatar className="chatWindow__avatar" src={data.image} />
          <div className="chatWindow__name">{data.title}</div>
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

      <div ref={body} className="chatWindow__body">
        {lists.map((list, key) => (
          <MessageItem key={key} data={list} user={user} />
        ))}
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
          <input type="text" className="chatWindow__input" placeholder="Type a message" value={text} onChange={e => setText(e.target.value)} onKeyUp={handleInputKeyUp} />
        </div>
        <div className="chatWindow__pos">
          {text === '' &&
            <div onClick={handleMicClick} className="chatWindow__btn">
              <MicIcon style={{ color: listening ? '#126ece' : '#919191' }} />
            </div>
          }
          {text !== '' &&
            <div onClick={handleSendClick} className="chatWindow__btn">
              <SendIcon style={{ color: '#919191' }} />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default ChatWindow;
