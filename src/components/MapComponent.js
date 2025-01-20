import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '12px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
};

function MapComponent({ address }) {
  const center = { lat: 20.5937, lng: 78.9629 }; // Default center (India)

  return (
    <LoadScript googleMapsApiKey="AIzaSyAeirrkfO92G0Xz37zXwAqC_xLco636W9E">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
        {/* Replace this marker with geocoded coordinates if needed */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
