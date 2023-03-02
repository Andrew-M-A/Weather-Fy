import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import WeatherInfo from "./weatherInfo";
import WeatherForecast from "./weatherForecast";

export default function Weather(props) {
  const [weather, setWeather] = useState({ loading: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeather({
      loading: true,
      city: response.data.city,
      longitude: response.data.coordinates.longitude,
      latitude: response.data.coordinates.latitude,
      date: new Date(response.data.time * 1000),
      temp: response.data.temperature.current,
      description: response.data.condition.description,
      feels: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }
  // search for a city
  function search() {
    const apiKey = "5fbe11411b50f4b837t7a4072802b35o";
    const apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weather.loading) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type in a city.."
            className="search-form"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <input type="submit" value="🔎" className="search-button" />
        </form>
        <WeatherInfo data={weather} />
        <WeatherForecast data={weather} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
