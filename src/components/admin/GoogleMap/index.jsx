import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.7749, // Latitude of the map center
  lng: -122.4194, // Longitude of the map center
};

const zoom = 10; // Initial zoom level

function GoogleMaps() {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
  // }
}

export default GoogleMaps;
