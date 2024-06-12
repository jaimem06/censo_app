import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ position, popupContent }) => {
    return (
        <MapContainer center={[-4.042135,-79.78723]} zoom={8} style={{ height: "92vh", width: "50%", borderRadius: "5px"}}>    <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>
                    {popupContent}
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;