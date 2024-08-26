"use client";
import { GoogleMap } from "@react-google-maps/api";
import { MapProvider } from "./MapProvider";

const defaultMapContainerStyle = {
  minWidth: "300px",
  minHeight: "200px",
  borderRadius: "0.5rem",
};

const defaultMapCenter = {
  lat: 58.3756295713827,
  lng: 12.34144554502585,
};

const defaultMapZoom = 18;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "satellite",
};

export default function Map() {
  return (
    <figure className="w-full flex justify-center">
      <MapProvider>
        <GoogleMap
          mapContainerStyle={defaultMapContainerStyle}
          center={defaultMapCenter}
          zoom={defaultMapZoom}
          options={defaultMapOptions}
        ></GoogleMap>
      </MapProvider>
    </figure>
  );
}
