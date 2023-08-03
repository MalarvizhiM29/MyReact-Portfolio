import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const avinashiCoordinates = [11.1931, 77.2674];

  const hideAttribution = `
    .leaflet-control-attribution {
      display: none !important;
    }
  `;

  return (
    <div
      style={{
        float: "right",
        width: "42%",
        height: "480px",
        border: "3px solid #A3A5A5",
        padding: "1rem",
        marginTop: "6rem",
        marginRight: "5rem",
        boxShadow: "5px #A3A5A5",
        borderRadius: "1rem",
        position: "relative",
        zIndex: "-1",
      }}
    >
      <style>{hideAttribution}</style>
      <MapContainer
        center={avinashiCoordinates}
        zoom={13}
        style={{ width: "100%", height: "100%" }}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          fadeAnimation={false}
        />
        <Marker position={avinashiCoordinates}>
          <Popup>Avinashi, Tamil Nadu, India</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
