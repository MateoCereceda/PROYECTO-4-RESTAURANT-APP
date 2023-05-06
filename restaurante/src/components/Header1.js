import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
    return (
    <header>
        <nav>
        <ul>
            <li>
            <Link to="/">Inicio</Link>
            </li>
            <li>
            <Link to="/contact">Contacto</Link>
            </li>
            <li>
            <Link to="/location">Ubicación</Link>
            </li>
        </ul>
        </nav>
    </header>
    );
};

export default Header;
