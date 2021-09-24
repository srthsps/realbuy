import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useToken } from "../auth/useToken"
import axios from 'axios'
import { auth } from "../auth/Firebase";

export const LogInPage = () => {

  const [token,setToken] = useToken()
  const [errMessage, setErrMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const history = useHistory();

  const onLogInClicked = async () => {
    try{
      const response = await auth.signInWithEmailAndPassword(emailValue,passwordValue)
      console.log(response)
      // const { token } = response.uid
      setToken(response.user.uid)
      console.log(token)
      history.push('/')
    }
    catch(err){
      console.log(err.message)
      setErrMessage(err.message)
    }
  };

  return (
    <div className="content-container">
      <h1>Login</h1>
      {errMessage && <div className="fail">{errMessage}</div>}
      <input
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        placeholder="someone@gmail.com"
        type="text"
      />
      <input
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
        type="password"
        placeholder="password"
      />
      <hr />
      <button
        disabled={!emailValue || !passwordValue}
        onClick={() => onLogInClicked()}
      >
        Log In
      </button>
      <button onClick={() => history.push("/forgot-password")}>
        Fogot Password
      </button>
      <button onClick={() => history.push("/signup")}>Sign Up</button>
    </div>
  );
};
