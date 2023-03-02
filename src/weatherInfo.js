import React from "react";
import "./FormattedDate";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1> Hello, {props.data.city}</h1>
      <div className="row">
        <div className="col-6">
          <WeatherTemperature fahrenheit={Math.round(props.data.temp)} />
        </div>
      </div>
      <img src={props.data.icon} alt={props.data.description} />
      <div className="row">
        <div className="col-6">
          <h3 className="text-capitalize">{props.data.description}</h3>
          <ul>
            <li>Feels like: {Math.round(props.data.feels)}ºF</li>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind: {Math.round(props.data.wind)} m/ph</li>
          </ul>
        </div>
      </div>
      <div>
        <p>
          {" "}
          Last updated: <FormattedDate date={props.data.date} />
        </p>
      </div>
    </div>
  );
}
