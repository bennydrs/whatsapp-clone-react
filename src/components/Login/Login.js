import React from 'react';
import Api from '../../Api';
import './Login.css';

const Login = ({ onReceive }) => {
  const handleFacebookLogin = async () => {
    let result = await Api.fbPopup();
    if (result) {
      onReceive(result.user);
    } else {
      alert('error')
    }
  }

  return (
    <div className="login">
      <button className="login__btn" onClick={handleFacebookLogin}>Login with facebook</button>
    </div>
  )
}

export default Login;
