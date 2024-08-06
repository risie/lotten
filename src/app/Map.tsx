"use client";
import { GoogleMap } from "@react-google-maps/api";

const defaultMapContainerStyle = {
  width: "80vw",
  height: "50vh",
  borderRadius: "15px",
  margin: "1rem",
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
    <div className="w-full flex justify-center">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      ></GoogleMap>
    </div>
  );
}
