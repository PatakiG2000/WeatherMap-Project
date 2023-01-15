import React from "react";
import classes from "./CurrentPlace.module.css";

export default function CurrentPlace(props) {
  //top left corner displays the name of the current place
  return (
    <div className={classes.placediv}>
      <img
        src="../src\assets\247-2471498_map-marker-icon-linking-to-google-map-directions.png"
        alt="Pinpoint"
      />
      <h1> {props.place.name} </h1>
    </div>
  );
}
