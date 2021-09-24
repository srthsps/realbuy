import { useState, useContext, createContext } from "react";
import { useHistory } from "react-router-dom";
import { useToken } from "../auth/useToken"
import { auth } from '../auth/Firebase'
import axios from 'axios'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext);
}

export const SignUpPage = () => {

  const [token,setToken] = useToken()
  const [errMessage, setErrMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const history = useHistory();

  const onSignUpClicked = async () => {
    try{
      const response = await auth.createUserWithEmailAndPassword(emailValue,passwordValue)
      console.log(response)
      // const { token } = response.uid
      setToken(response.user.uid)
      history.push('/')
    }
    catch(err){
      setErrMessage(err.message)
    }
  };

  return (
    <div className="content-container">
      <h1>Sign Up</h1>
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
      <input
        value={confirmPasswordValue}
        onChange={(e) => setConfirmPasswordValue(e.target.value)}
        type="password"
        placeholder="password"
      />

      <hr/>

      <button
        disabled={!emailValue || !passwordValue || passwordValue!==confirmPasswordValue}
        onClick={() => onSignUpClicked()}
      >
        Sign Up
      </button>
      <button onClick={() => history.push("/login")}>Login</button>
    </div>
  );
};
