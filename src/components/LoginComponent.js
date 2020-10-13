import React, { useState} from 'react';
import bases from './database.json';
import '../App.css';
import WeatherInfo from './WeatherInfoComponent.js';


function LoginComponent(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState(null);
  const [gotten, setGotten] = useState(false);

  function updateUserName(event) {
    setUserName(event.target.value);
  }

  function handlePasswordInput(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setData(bases);
    console.log(data);
      if (userName === data?.username){
        setIsLoggedIn(true);
        console.log(bases);
    }
  }

  return (
    <div className="EitherPage">
    {!isLoggedIn === true?
      <div className="Right_page">
        <h1 className="LoginHeader">Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            UserName:
            <br/>
            <input type="text"
             value={userName} onChange={updateUserName}
             maxLength = "10"/>
          </label>
          <br/>
          <label>
            Password:
            <br/>
            <input type="password"
            value={password} onChange={handlePasswordInput}
            />
          </label>
          <br/>
          <label className="CenterCheck">
            <input type="checkbox" defaultChecked className="CheckBox"/>Keep Me Signed In
          </label>
          <br/>
          <input type="submit" onClick={handleSubmit} className="SubmitButton" />
        </form>

        <p>Don't have an Account ?
          <a href="https://www.github/sign-up"> Sign Up</a>
        </p>
        <p>
          <a href="https://www.google.com">Forgot Your Password?</a>
        </p>

      </div>
      :
      <div className="Person_page">
        <div>
        <svg width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
          className="User_pic">
          <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
          <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
        </svg>
        </div>
        <div className="Hidden_tooltip">
          <p>Hello, {userName}</p>
          <p>{bases.userName}</p>
          <p><a href="https://www.google.com"> Give Us A Feedback </a> </p>
          <p>{WeatherInfo.city}</p>
        </div>

      </div>
    }
    </div>
  )
}

export default LoginComponent;
