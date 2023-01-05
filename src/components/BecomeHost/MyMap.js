import classes from "./MyMap.module.css";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

let center;
const getPosition = () => {
  navigator.geolocation.getCurrentPosition((pos) => {
    const { latitude } = pos.coords;
    const { longitude } = pos.coords;
    center = [latitude, longitude];
  });
};
getPosition();
const MyMap = () => {
  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      className={classes.main}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
