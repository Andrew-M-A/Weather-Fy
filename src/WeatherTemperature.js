import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celcius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }
  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <h2 className="temperature">{Math.round(props.fahrenheit)}ºF</h2>
        <h4 className="unit">
          ºF |{" "}
          <a href="/" onClick={showCelcius}>
            ºC
          </a>{" "}
        </h4>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <h2 className="temperature">{Math.round(celcius())}ºC</h2>
        <h4 className="unit">
          <a href="/" onClick={showFarenheit}>
            ºF{" "}
          </a>{" "}
          | ºC
        </h4>
      </div>
    );
  }
}
