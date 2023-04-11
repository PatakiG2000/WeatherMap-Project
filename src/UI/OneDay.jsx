import React from "react";

import handleWeatherCode from "../utils/weatherCode";
import handleWeatherIcons from "../utils/weatherIcons";
import useWeatherData from "../Store/oneday-weather-store";
import useGeoData from "../Store/geo-store";
import handleForecastImage from "../utils/forecastImage";

import useBackgroundImage from "../Store/pexels-store";
import useForecastData from "../Store/forecast-store";

export default function OneDay(props) {
  const weatherStore = useWeatherData();
  const geoStore = useGeoData();
  const backgroundImagePexels = useBackgroundImage();
  const forecast = useForecastData();

  const [weatherCode, setWeatherCode] = React.useState(10);

  if (forecast.forecastData.daily.weathercode && weatherCode === 0) {
    setWeatherCode(
      forecast.forecastData.daily.weathercode[0]
        ? forecast.forecastData.daily.weathercode[0]
        : 10
    );
  }

  if (!forecast) {
    forecast.fetchForecastData([51.5073219, -0.1276474]);
    weatherStore.fetchGeoData([51.5073219, -0.1276474]);
    return;
  }

  ///calculating time to display the proper data
  const temperature =
    Math.floor(weatherStore.geoData.main.temp - 273.15) + "°C";
  const feelsLike = Math.floor(weatherStore.geoData.main.temp - 273.15) + "°C";

  //átirni ezeket
  const minTemp =
    Math.floor(weatherStore.geoData.main.temp_min - 273.15) + "°C";
  const maxTemp =
    Math.floor(weatherStore.geoData.main.temp_max - 273.15) + "°C";

  const sunrise = new Date(weatherStore.geoData.sys.sunrise * 1000)
    .toISOString()
    .substring(11, 16);
  const sunset = new Date(weatherStore.geoData.sys.sunset * 1000)
    .toISOString()
    .substring(11, 16);

  const timezone = weatherStore.geoData.timezone;

  //ezt még megcsinálni
  /*   const weatherType = handleWeatherCode(weatherCode); */
  /* const weatherIcon = handleWeatherIcons(weatherCode); */

  function getTimestampInSeconds() {
    let timestamp = Math.floor(Date.now() / 1000);
    if (timezone !== 0) timestamp += timezone;
    return new Date(timestamp * 1000).toISOString().substring(11, 16);
  }

  return (
    <div
      className="weather-container"
      style={{
        backgroundImage: `url(${
          backgroundImagePexels.imageUrl
            ? backgroundImagePexels.imageUrl
            : handleForecastImage(
                forecast.forecastData
                  ? forecast?.forecastData.daily?.weathercode[0]
                  : 10
              )
        })`,
      }}
    >
      <div className="main-data">
        <div className="main-text">
          <h1 className="city-name">
            {weatherStore.geoData.name
              ? weatherStore.geoData.name
              : geoStore.geoData[0].name}
          </h1>
          <h2 className="weather-type">
            {handleWeatherCode(
              forecast.forecastData
                ? forecast?.forecastData.daily?.weathercode[0]
                : 10
            )}
          </h2>
          <h1 className="temperature">{temperature}</h1>
          <h4 className="feels-like">Feels like: {feelsLike}</h4>
          <h3>Wind: {weatherStore.geoData.wind.speed} km/h</h3>
        </div>
        <div className="main-icon">
          <img
            src={handleWeatherIcons(
              forecast.forecastData
                ? forecast?.forecastData?.daily.weathercode[0]
                : 10
            )}
            alt="Icon of weather"
            className="weather-icon"
          />
          <h2 className="time">Local time: {getTimestampInSeconds()}</h2>
        </div>
      </div>
      <div className="detailed-data">
        <div className="first-detailed-data">
          <h2 className="daily-data">Daily min: {minTemp}</h2>
          <h2 className="daily-data">
            Daily max: {maxTemp}
            <span className="attribute">
              Background image by: {"Pexels"}, Icons by: FlatIcon
            </span>
          </h2>
        </div>
        <div className="second-detailed-data">
          <h2 className="daily-data">Sunrise: {sunrise}</h2>
          <h2 className="daily-data">Sunset: {sunset}</h2>
        </div>
      </div>
    </div>
  );
}
