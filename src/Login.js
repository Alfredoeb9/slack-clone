import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';

function Login() {

  const [state, dispatch] = useStateValue();

  const signIn = () => {

    // Access the data
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        // push user into data from result
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })

      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login_container">
        <img src='https://i.pcmag.com/imagery/reviews/01RiFnood1oFGiIBEog0PFu-11.fit_scale.size_1028x578.v_1569472221.jpg' alt=''>

        </img>

        <h2>Sign in to Chime HQ</h2>
        <Button onClick={signIn}>Sign in with google</Button>
      </div>
    </div>
  )
}

export default Login;