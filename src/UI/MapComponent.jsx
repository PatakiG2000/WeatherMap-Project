import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import useMapData from "../Store/map-data-store";
import useGeoData from "../Store/geo-store";

import L from "leaflet";

const marker = "https://cdn-icons-png.flaticon.com/512/443/443025.png";

const myIcon = new L.Icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  popupAnchor: [-10, -0],
  iconSize: [32, 45],
});

function DraggableMarker(props) {
  const geoStore = useGeoData();

  const mapDataStore = useMapData();

  ///leaflet map
  const [draggable, setDraggable] = React.useState(false);
  const [position, setPosition] = React.useState([12, 43]);

  const markerRef = React.useRef(null);
  const eventHandlers = React.useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          const position = marker.getLatLng();
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.lng}&appid=2653eef7dd1d751b628c8dc1bdbe14a3`
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.cod === "400") {
                console.log(data.cod);
                geoStore.fetchGeoData("London");
                alert("something went wrong");
              } else {
                setPosition(marker.getLatLng());
                mapDataStore.changeLatLng(marker.getLatLng());
              }
            });
        }
      },
    }),
    [props]
  );
  const toggleDraggable = React.useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  return (
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={props.position}
      ref={markerRef}
      icon={myIcon}
    >
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? "Marker is draggable"
            : "Click here to make marker draggable"}
        </span>
      </Popup>
    </Marker>
  );
}

export default function MapChart(props) {
  const mapDataStore = useMapData();
  const position = [
    mapDataStore.latLng.lat
      ? mapDataStore.latLng.lat
      : props.mapdata.geoData[0]?.lat
      ? props.mapdata.geoData[0]?.lat
      : 0,
    mapDataStore.latLng.lng
      ? mapDataStore.latLng.lng
      : props.mapdata.geoData[0]?.lng
      ? props.mapdata.geoData[0]?.lng
      : 0,
  ];

  return (
    <div className="map" id="map">
      <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          noWrap={false}
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
        />

        <DraggableMarker position={position}></DraggableMarker>
      </MapContainer>
    </div>
  );
}
