import React from "react";
import classes from "./CurrentPlace.module.css";
import useGeoData from "../Store/geo-store";
import useWeatherData from "../Store/oneday-weather-store";

export default function CurrentPlace(props) {
  const weatherStore = useWeatherData();
  const geoStore = useGeoData();
  //top left corner displays the name of the current place
  return (
    <div className={classes.placediv}>
      <img src={require("../assets/pinpoint.png")} alt="Pinpoint" />
      <h1>
        {weatherStore.geoData.name
          ? weatherStore.geoData.name
          : geoStore.geoData[0].name
          ? geoStore.geoData[0].name
          : "No data"}
      </h1>
    </div>
  );
}
