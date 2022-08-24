import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { data } from "../../data/data";

const Map = () => {
  const [activeMarker, setActiveMarker] = useState(null);

  const markers = data.map((marker) => {
    return {
      id: marker.listingId,
      name: marker.addressCity,
      position: { lat: marker.lat, lng: marker.lng },
    };
  });

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  const mContainerStyle = { width: "100%", height: "90vh" };

  return (
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={mContainerStyle}
    >
      {markers.map(({ id, name, position }) => (
        <Marker
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id && (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          )}
        </Marker>
      ))}
    </GoogleMap>
  );
};

export default Map;
