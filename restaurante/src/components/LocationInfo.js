import React from 'react';
import mapImage from './assets/mapa.png';
import './styles/LocationInfo.css';

const LocationInfo = () => {
return (
    <div className="location-info">
    <h2>Ubicación y contacto</h2>
    <p>
        Dirección: 123 Calle Ficticia, Santiago de Chile, RM, Código Postal 00000
    </p>
    <p>Correo electrónico: info@fastapizza.com</p>
    <p>Teléfono: +56912345678</p>
    <div className="map-container">
        <img
        src={mapImage}
        alt="Mapa del Restaurante"
        className="map-image"
        />
    </div>
    </div>
);
};

export default LocationInfo;
