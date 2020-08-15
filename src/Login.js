import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';

function Login() {

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        alert(error.message)
      });
  };

  return (
    <div className="login">
      <div className="login_container">
        <img src='https://assets.brandfolder.com/pl546j-7le8zk-afym5u/original/Slack_Mark_Web.png' alt=''>

        </img>

        <h2>Sign in to Slack HQ</h2>
        <Button onClick={signIn}>Sign in with google</Button>
      </div>
    </div>
  )
}

export default Login;