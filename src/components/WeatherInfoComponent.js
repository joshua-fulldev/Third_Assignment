import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import LoginInfo from './LoginComponent.js';

function WeatherInfoComponent(props) {
  const [city, setCity] = useState('Accra');
  const [weatherData, setWeatherData] = useState('');
  const [historicalData, setHistoricalData] = useState(null);

  function handleCitySearch(event) {
    setCity(event.target.value);
  }

  useEffect(() => {
    axios.get('http://api.weatherstack.com/current?access_key=4bc5620e4e12caa29d407a2cdea4709d&query=' + city)
    .then(res => {
      setWeatherData(res.data);
    })
    .catch(err => console.log(err));
  }, [city])

  useEffect(() => {
    //Historical Data is not included in Standard plan...
    axios.get('http://api.weatherstack.com/historical?access_key=4bc5620e4e12caa29d407a2cdea4709d&query=New York&historical_date=2020-10-01;2020-10-02;2020-10-03&hourly=0')
    .then(res => {
      setHistoricalData(res.data);
      console.log(historicalData);
    })
    .catch(err => console.log(err));
  }, [city])


  return (
    <div className="WeatherInfo">
      <h1>My Weather App</h1>
      <div className="Search">
        <input type="search" placeholder="Search for cities..."
        className="SearchBar" value={city} onChange={handleCitySearch}/>
      </div>
      <div className="RealInfo">
        <p>{weatherData?.request?.query}</p>
        <p>{weatherData?.location?.localtime}</p>
        <p>
          <img src={weatherData?.current?.weather_icons} alt=""/>
        </p>
        <p>
          {weatherData?.current?.weather_descriptions}
        </p>
        <p>{weatherData?.current?.temperature}&deg;C</p>
      </div>

      <div className="HistoricalData">
      </div>
    </div>
  )
}

export default WeatherInfoComponent;
