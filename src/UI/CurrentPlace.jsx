import React from "react";
import classes from "./CurrentPlace.module.css";
import useGeoData from "../Store/geo-store";

export default function CurrentPlace(props) {
  const locationName = useGeoData();
  //top left corner displays the name of the current place
  return (
    <div className={classes.placediv}>
      <img src={require("../assets/pinpoint.png")} alt="Pinpoint" />
      <h1>
        {" "}
        {locationName.geoData.name
          ? locationName.geoData.name
          : locationName.geoData[0].name}{" "}
      </h1>
    </div>
  );
}
