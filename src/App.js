import React from 'react';
import './App.css';
import Login from './components/LoginComponent.js';
import WeatherInfo from './components/WeatherInfoComponent.js';


function App(props) {
  return (
    <div className="Appp">
      <div className="Page">
        <div className="Upper_margin">

        </div>
        <Login />
        <WeatherInfo/>
      </div>
    </div>
  );
}

export default App;
