import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import useGeoData from "../Store/geo-store";
import useWeatherData from "../Store/oneday-weather-store";
import useForecastData from "../Store/forecast-store";

import L from "leaflet";

const marker = "https://cdn-icons-png.flaticon.com/512/6153/6153497.png";

const myIcon = new L.Icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  popupAnchor: [0, -20],
  iconSize: [30, 30],
});

function DraggableMarker(props) {
  const weatherStore = useWeatherData();
  const geoStore = useGeoData();
  const forecast = useForecastData();

  ///leaflet map
  const [draggable, setDraggable] = React.useState(false);

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
              console.log(marker.getLatLng());
              if (data.cod === "400" || data.error) {
                geoStore.fetchGeoData("London");
                weatherStore.fetchDatabyMap({
                  lat: 51.5073219,
                  lon: -0.1276474,
                });
                forecast.fetchDatabyMap({
                  lat: 51.5073219,
                  lon: -0.1276474,
                });
                alert("something went wrong");
              } else {
                weatherStore.fetchDatabyMap(marker.getLatLng());
                forecast.fetchDatabyMap(marker.getLatLng());
              }
            });
        }
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
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

export default function MapChart() {
  const forecast = useForecastData();
  console.log(forecast);

  return (
    <div className="map" id="map">
      <MapContainer
        center={[
          forecast.forecastData.latitude ? forecast.forecastData.latitude : 51,
          forecast.forecastData.longitude
            ? forecast.forecastData.longitude
            : 0,
        ]}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          noWrap={false}
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
        />

        <DraggableMarker
          position={[
            forecast.forecastData.latitude
              ? forecast.forecastData.latitude
              : 30,
            forecast.forecastData.longitude
              ? forecast.forecastData.longitude
              : 100,
          ]}
        ></DraggableMarker>
      </MapContainer>
    </div>
  );
}
