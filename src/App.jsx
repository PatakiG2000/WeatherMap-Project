import React from "react";
import Header from "./Layout/Headerr";
import MainInfo from "./Layout/MainInfo";
import Global from "./Layout/Global";
import DataGetter from "./utils/DataGetter";

/* import pexelkey from "./utils/keys";
import { createClient } from "pexels"; */

import "./App.css";

/* import { useQuery } from "./utils/useQuery"; */

// TODO use EsLint!! - and eslint-plugin-react

function App() {

  const [view, setView] = React.useState("oneday")
  /*  const weatherData = useWeatherDataZustand((state) => state.fetch(0, 0), [searchterm]); */
  /* console.log(weatherData); */

  /* const client = createClient(pexelkey); */

  //searching for the provided city to get positions for the weather api
  /*   useQuery(
    `https://api.openweathermap.org/geo/1.0/direct?q=${searchterm}&limit=5&appid=${weatherkey}`,
    {
      onCompleted: (data) => {
        if (!data[0]) {
          setErrorState(true);
          setSearchterm("London");
          return;
        }
        setGeoData(data[0]);
      },
      onError: (err) => {
        console.log("🚀 ~ file: App.jsx:95 ~ App ~ err", err);
        setErrorState(true);
      },
    }
  ); */

  //searching for weather data with the geoData provided by the geoLocation api
  /*  useSetWeatherWhenGeoDataChanges(geoData, setSearchterm, setWeather); */

  //setting background with search
  /*   useSetBackgroundWhenSearchChanges(
    weather,
    searchterm,
    client,
    setBackgroundImage,
    setAttribution
  ); */

  //forecast with coords from the geolocation api
  /*   React.useEffect(
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
  ); */

  //changing the state of the view
   function changeView(data) {
    setView(data);
  }

  //handling the basic search
 /*  function submitHandler(e, searchValue) {
    e.preventDefault();
    setSearchterm(searchValue);
  } */ 

  //handling the search by marker
  /*  function handleDraggerSearch(draggerPosition) {
    setGeoData({
      lat: draggerPosition.lat,
      lon: draggerPosition.lng,
    });
  } */

  //passing down the data

  return (
    <React.Fragment>
      <DataGetter />
      <div className="App">
        <Header
          data={"weather"}
          submitHandler={"submitHandler"}
          error={"errorState"}
        />
        <MainInfo
          view={view}
          viewHandler={changeView}
          information={"weather"}
          forecast={"forecast"}
          background={"backgroundImage"}
          attribution={"attribution"}
        />
      </div>
      <Global dataForMap={"weather"} draggerSearch={"handleDraggerSearch"} />
    </React.Fragment>
  );
}

export default App;

/* function useSetWeatherWhenGeoDataChanges(geoData, setSearchterm, setWeather) {
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
} */
/* 
function useSetBackgroundWhenSearchChanges(
  weather,
  searchterm,
  client,
  setBackgroundImage,
  setAttribution
) {
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
} */



/* /** fetch and set initially-required data */
