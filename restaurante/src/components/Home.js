import React from 'react';
import logo from './assets/pizza.png'; 
import './styles/Home.css';

const Home = () => {
return (
    <div className="home">
    <h1>Pizza al paso</h1>
    <p>
        Bienvenido a nuestro restaurante de pizza al paso, en donde podrás encontrar las mejores pizzas al más accesible precio.
    </p>
    <img src={logo} alt="Imagen del restaurante" />
    </div>
);
};

export default Home;

