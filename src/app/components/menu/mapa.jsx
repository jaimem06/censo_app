import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

const customIcon = new Icon({
    iconUrl: 'https://cdn.icon-icons.com/icons2/1102/PNG/512/1485969928-17-location_78896.png',
    iconSize: [70, 70],
});

const ChangeView = ({ center }) => {
    const map = useMap();
    map.setView(center);
    return null;
}

const MapComponent = ({ popupContent }) => {
    const [position, setPosition] = useState([0, 0]);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setPosition([position.coords.latitude, position.coords.longitude]);
            }, (error) => {
                console.error("Error Code = " + error.code + " - " + error.message);
            });
        }
    }, []);

    return (
        <MapContainer center={position} zoom={18} style={{ margin: "10px", height: "68vh", width: "80%", borderRadius: "5px" }}>
            <ChangeView center={position} />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={customIcon}>
                <Popup>
                    {popupContent}
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;