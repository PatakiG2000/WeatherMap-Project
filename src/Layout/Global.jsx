import React from "react";
import MapChart from "../UI/MapComponent";
import "./Global.css";

export default function Global(props) {
  return (
    <div>
      <h1 className="text">Global</h1>
      <div className="map-and-cities">
        <MapChart mapdata={props.dataForMap} handleDraggerSearch={props.draggerSearch}/>
      </div>
    </div>
  );
}
