import React from "react";
import "./WeatherForecast.css";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }
  return (
    <div>
      <div className="forecastDay">{day()}</div>
      <div className="icon">
        <img src={props.data.condition.icon_url} alt={props.data.icon} />
      </div>

      <div className="forecastTemperatures">
        <div className="forecastTemp">
          {Math.round(props.data.temperature.day)}ºF
        </div>
        <span className="forecastMax">
          {Math.round(props.data.temperature.maximum)}º |{" "}
        </span>
        <span className="forecastMin">
          {Math.round(props.data.temperature.minimum)}º
        </span>
      </div>
      <div className="iconDescription text-capitalize">
        {" "}
        {props.data.description}
      </div>
    </div>
  );
}
