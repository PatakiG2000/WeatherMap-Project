import React, { useState } from "react";
import Header from "./Layout/Headerr";
import MainInfo from "./Layout/MainInfo";
import Global from "./Layout/Global";

import weatherkey from "./Helper/key";
import pexelkey from "./Helper/keys";
import { createClient } from "pexels";

import "./App.css";

function App() {
  ////for pexel api
  const client = createClient(pexelkey);

  //view: oneday, tomorrow, and sevenday
  const [view, setView] = React.useState("today");

  /////////////////////////////
  //default values
  /////////////////////////////
  const [searchterm, setSearchterm] = React.useState("London");
  const [weather, setWeather] = React.useState({
    name: "London",
    main: {
      temp: 144,
      feels_like: 15,
    },
    wind: {
      speed: 5,
    },
    sys: {
      sunrise: 452425,
      sunset: 4248545,
    },
    coord: {
      lon: -0.1257,
      lat: 51.5085,
    },
    utc_offset_seconds: 3600,
  });

  const [geoData, setGeoData] = React.useState({
    lat: -0.0919983,
    lon: 51.5156177,
  });

  const [forecast, setForecast] = React.useState({
    daily: {
      temperature_2m_max: [0, 1],
      temperature_2m_min: [0, 1],
      weathercode: [0, 1, 2, 1],
    },
  });

  ///default background image and attribution to pexels
  const [backgroundImage, setBackgroundImage] = React.useState(
    "https://s.24.hu/app/uploads/2019/04/istock-920289306-e1555260590375.jpg"
  );
  const [attribution, setAttribution] = React.useState("Pexels");

  ///an error state for later
  const [errorState, setErrorState] = React.useState(false);

  //searching for the provided city to get positions for the weather api
  React.useEffect(
    function () {
      fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchterm}&limit=5&appid=${weatherkey}
  `)
        .then((res) => res.json())
        .then((data) => {
          if (!data[0]) {
            setErrorState(true);
            setSearchterm("London");

            return;
          }
          setGeoData(data[0]);
        });
    },
    [searchterm]
  );

  //searching for weather data with the geoData provided by the geoLocation api
  React.useEffect(
    function () {
      try {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geoData.lat}&lon=${geoData.lon}&appid=${weatherkey}
        `)
          .then((res) => res.json())
          .then((data) => {
            if (data.cod == 400) {
              setSearchterm("London");
              alert("No information about the location you provided");
              return;
            }
            setWeather(data);
          });
      } catch {
        alert("Couldn not find a city on the location provided by you");
      }
    },
    [geoData]
  );

  //setting background with search
  React.useEffect(
    function pictureFromPexels() {
      let query = weather.name ? weather.name : searchterm;
      client.photos.search({ query, per_page: 1 }).then((photos) => {
        if (!photos.photos[0].src?.landscape) {
          let newQuery = weather.country;
          client.photos.search({ newQuery, per_page: 1 }).then((photos) => {
            setBackgroundImage(photos.photos[0].src.landscape);
            setAttribution(photos.photographer_url);
          });
          return;
        }
        setBackgroundImage(photos.photos[0].src.landscape);
      });
    },

    [weather]
  );

  //forecast with coords from the geolocation api
  React.useEffect(
    function () {
      if (weather.cod == "400") {
        alert("Something went wrong");
        setSearchterm("London");
        return;
      }
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${weather.coord.lat}&longitude=${weather.coord.lon}&&daily=weathercode,temperature_2m_max,temperature_2m_min,rain_sum,showers_sum,snowfall_sum,windspeed_10m_max&timezone=auto
      `)
        .then((res) => res.json())
        .then((forecastdata) => setForecast(forecastdata));
    },
    [weather]
  );

  //changing the state of the view
  function changeView(data) {
    setView(data);
  }

  //handling the basic search
  function submitHandler(e, searchValue) {
    e.preventDefault();
    setSearchterm(searchValue);
  }

  //handling the search by marker
  function handleDraggerSearch(draggerPosition) {
    setGeoData({
      lat: draggerPosition.lat,
      lon: draggerPosition.lng,
    });
  }

  //passing down the data
  return (
    <React.Fragment>
      <div className="App">
        <Header
          data={weather}
          submitHandler={submitHandler}
          error={errorState}
        />
        <MainInfo
          view={view}
          viewHandler={changeView}
          information={weather}
          forecast={forecast}
          background={backgroundImage}
          attribution={attribution}
        />
      </div>
      <Global dataForMap={weather} draggerSearch={handleDraggerSearch} />
    </React.Fragment>
  );
}

export default App;
