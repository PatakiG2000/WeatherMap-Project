import React from "react";
import "./OneDay.css";
import handleWeatherCode from "../utils/weatherCode";
import handleWeatherIcons from "../utils/weatherIcons";
import useBackgroundImage from "../Store/pexels-store";
import useForecastData from "../Store/forecast-store";
import useGeoData from "../Store/geo-store";
import useWeatherData from "../Store/oneday-weather-store";

export default function Tomorrow(props) {
  const backgroundImagePexels = useBackgroundImage();
  const forecast = useForecastData();
  const geoStore = useGeoData();
  const weatherStore = useWeatherData();
  //handling icons with the weathercode provided
  const weatherType = handleWeatherCode(
    forecast.forecastData.daily.weathercode[1]
  );
  const weatherIcon = handleWeatherIcons(
    forecast.forecastData.daily.weathercode[1]
  );

  return (
    <div
      className="weather-container"
      style={{
        backgroundImage: `url(${backgroundImagePexels.imageUrl} )`,
      }}
    >
      <div className="main-data">
        <div className="main-text">
          <h1 className="city-name">
            {weatherStore.geoData.name
              ? weatherStore.geoData.name
              : geoStore.geoData[0].name}
          </h1>
          <h2 className="weather-type">{weatherType}</h2>
          <h1 className="temperature">
            {forecast.forecastData.daily.temperature_2m_max[1] + "°C"}
          </h1>
          <h3>Wind: {forecast.forecastData.daily.windspeed_10m_max[1]} km/h</h3>
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
            Daily min:{" "}
            {forecast.forecastData.daily.temperature_2m_min[1] + "°C"}
          </h2>
          <h2 className="daily-data">
            Daily max: {forecast.forecastData.daily.temperature_2m_max[1]}°C
          </h2>
        </div>
        <div className="second-detailed-data">
          <h2 className="daily-data"> </h2>
          <h2 className="daily-data"> </h2>
        </div>
      </div>
    </div>
  );
}
