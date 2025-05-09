"use client";

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface MapProps {
  address: string;
}

// Approximate coordinates for Strada Maria Rosetti 26A, București
const position: [number, number] = [44.4396, 26.1063];

const Map: React.FC<MapProps> = ({ address }) => {
  useEffect(() => {
    // Fix for default marker icons in Leaflet with Next.js
    // This needs to be in useEffect to avoid SSR issues
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/images/leaflet/marker-icon-2x.png',
      iconUrl: '/images/leaflet/marker-icon.png',
      shadowUrl: '/images/leaflet/marker-shadow.png',
    });
  }, []);

  return (
    <MapContainer 
      center={position} 
      zoom={16} 
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          <strong>Dental Care Clinic</strong><br />
          {address}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
