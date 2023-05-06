import React from "react";
import "./styles/Home.css";
import pizzaImage from "./assets/pizza.jpg"; 

const Home = () => {
return (
    <div className="home-container">
    <main className="body">
        <img className="image-pizza" src={pizzaImage} alt="Pizza" />
        <p>
        Nuestras pizzas son deliciosas, preparadas con ingredientes frescos y de alta calidad. ¡Ven y disfruta de una experiencia culinaria inolvidable!
        </p>
    </main>
    <footer className="footer">
        Página web hecha con fines académicos
    </footer>
    </div>
);
};

export default Home;
