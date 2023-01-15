import React from "react";
import "./OneDay.css";
import handleWeatherCode from "../Helper/weatherCode";
import handleWeatherIcons from "../Helper/weatherIcons";

export default function Tomorrow(props) {
  //handling icons with the weathercode provided
  const weatherType = handleWeatherCode(props.forecast.daily.weathercode[1]);
  const weatherIcon = handleWeatherIcons(props.forecast.daily.weathercode[1]);

  return (
    <div
      className="weather-container"
      style={{
        backgroundImage: `url(${props.background} )`,
      }}
    >
      <div className="main-data">
        <div className="main-text">
          <h1 className="city-name">{props.infos.name} </h1>
          <h2 className="weather-type">{weatherType}</h2>
          <h1 className="temperature">
            {props.forecast.daily.temperature_2m_max[1]}
            {"°C "}
          </h1>
          <h3>Wind: {props.forecast.daily.windspeed_10m_max[1]} km/h</h3>
        </div>
        <div className="main-icon">
          <img
            src={weatherIcon}
            alt="Icon of weather"
            className="weather-icon"
          />
          <h2 className="time">Date: 2023.01.14</h2>
        </div>
      </div>
      <div className="detailed-data">
        <div className="first-detailed-data">
          <h2 className="daily-data">
            Daily min: {props.forecast.daily.temperature_2m_min[1]}°C{" "}
          </h2>
          <h2 className="daily-data">
            Daily max: {props.forecast.daily.temperature_2m_max[1]}°C
          </h2>
        </div>
        <div className="second-detailed-data">
          <h2 className="daily-data"></h2>
          <h2 className="daily-data"> </h2>
        </div>
      </div>
    </div>
  );
}
