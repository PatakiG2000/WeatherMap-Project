import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

function DraggableMarker(props) {
  ///leaflet map
  const [draggable, setDraggable] = React.useState(false);
  const [position, setPosition] = React.useState();

  const markerRef = React.useRef(null);
  const eventHandlers = React.useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
          props.dragSearch(marker.getLatLng());
        }
      },
    }),
    []
  );
  const toggleDraggable = React.useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  console.log(position);

  return (
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={props.position}
      ref={markerRef}
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
  const position = [props.mapdata.coord.lat, props.mapdata.coord.lon];

  return (
    <div className="map" id="map">
      <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          noWrap={true}
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
        />

        <DraggableMarker
          dragSearch={props.handleDraggerSearch}
          position={position}
        ></DraggableMarker>
      </MapContainer>
    </div>
  );
}
