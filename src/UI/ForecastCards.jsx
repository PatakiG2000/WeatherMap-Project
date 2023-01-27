import React from "react";
import "./ForecastCards.css";
import handleWeatherCode from "../utils/weatherCode";
import handleWeatherIcons from "../utils/weatherIcons";
import handleForecastImage from "../utils/forecastImage";
import useForecastData from "../Store/forecast-store";
import useGeoData from "../Store/geo-store";
import useWeatherData from "../Store/oneday-weather-store";

export default function ForecastCards(props) {
  const geoStore = useGeoData();
  const forecast = useForecastData();
  const weatherStore = useWeatherData()
  //handling the different weathers by it's position in the array provided
  const weatherType = handleWeatherCode(
    forecast.forecastData.daily.weathercode[props.index]
  );
  const weatherIcon = handleWeatherIcons(
    forecast.forecastData.daily.weathercode[props.index]
  );

  const bgImage = handleForecastImage(
    forecast.forecastData.daily.weathercode[props.index]
  );

  return (
    <div className="container">
      <div className="weather-card">
        <div
          className="image-section"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <img
            src={weatherIcon}
            alt="Icon of weather"
            className="forecast-card-icon"
          />
          <div className="layer"></div>
          <div className="weather"></div>
          <small className="type">{weatherType} </small>
        </div>
        <div className="info-section">
          <div className="contents">
            <h1>
              {forecast.forecastData.daily.temperature_2m_max[props.index]}
              <span className="deg">&deg;</span>
            </h1>
            <h3>
              {weatherStore.geoData.name
                ? weatherStore.geoData.name
                : geoStore.geoData[0].name}{" "}
            </h3>
            <small>{forecast.forecastData.daily.time[props.index]}</small>
           
          </div>
        </div>
      </div>
    </div>
  );
}
