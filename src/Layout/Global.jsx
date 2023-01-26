import React from "react";
import MapChart from "../UI/MapComponent";
import "./Global.css";
import useGeoData from "../Store/geo-store";

export default function Global(props) {

  const geoData = useGeoData()

  return (
    <div>
      <h1 className="text">Global</h1>
      <div className="map-and-cities">
        <MapChart mapdata={geoData} handleDraggerSearch={props.draggerSearch}/>
      </div>
    </div>
  );
}
