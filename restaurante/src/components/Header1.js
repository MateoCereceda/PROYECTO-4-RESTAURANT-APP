
import React from 'react';
import './styles/Header1.css';
import logo from "./assets/logo-pizza.png"; 

const Layout = ({ children }) => {
return (
    <div className="layout-container">
    <header className="header">
        <img className="logo" src={logo} alt="Logo" />
        <nav className="navbar">
        <a href="/">Inicio</a>
        <a href="/contact">Contacto</a>
        <a href="/location">Ubicación</a>
        </nav>
    </header>
    <main>{children}</main>
    </div>
);
};

export default Layout;
