import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import TemplesIcon from "@/components/icons/TemplesIcon";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const zoom = 10; // Initial zoom level

function GoogleMaps({ center }) {
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
