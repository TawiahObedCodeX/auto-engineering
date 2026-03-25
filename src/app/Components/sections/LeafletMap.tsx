'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MAP_CENTER, MAP_ZOOM, BUSINESS_FULL_NAME, CONTACT_INFO } from '@/lib/constants'

export default function LeafletMap() {
  useEffect(() => {
    // Standard Leaflet icon fix for Next.js
    const DefaultIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });
    L.Marker.prototype.options.icon = DefaultIcon;
  }, [])

  return (
    <div style={{ height: '100%', width: '100%', minHeight: '350px' }} className="relative">
      <MapContainer
        center={MAP_CENTER}
        zoom={MAP_ZOOM}
        style={{ height: '100%', width: '100%' }}
        className="rounded-sm z-0"
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={MAP_CENTER}>
          <Popup>
            <div className="font-sans text-xs">
              <strong className="block text-sm mb-1">{BUSINESS_FULL_NAME}</strong>
              <span className="text-gray-600">{CONTACT_INFO.address}</span>
              <br />
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="text-blue-600 hover:underline mt-1 block"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}