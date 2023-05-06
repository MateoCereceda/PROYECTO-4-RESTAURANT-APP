import React, { useState, useEffect } from "react";
import "./styles/Home.css";
import pizza1 from "./assets/pizza1.jpg";
import pizza2 from "./assets/pizza2.jpg";
import pizza3 from "./assets/pizza3.jpg";
import Footer from "./Footer";

const images = [pizza1, pizza2, pizza3];

const Home = () => {
const [currentImageIndex, setCurrentImageIndex] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
}, []);

return (
    <div className="home">
    <div className="home-content">
        <img
        src={images[currentImageIndex]}
        alt="Imagen de pizza"
        className="home-image"
        />
        <div className="home-textbox-wrapper">
        <div className="home-textbox">
            <h1 className="home-textbox-title">Fasta Pizza</h1>
            <h2 className="home-textbox-subtitle">¡Pizza al paso o delivery!</h2>
            <p className="home-textbox-description">
            Bienvenido a nuestro restaurante de pizza al paso, en donde podrás
            encontrar las mejores pizzas al más accesible precio, con delivery en tiempo record.</p>

            <p className="home-textbox-description"> 
            Nuestros productos estan hechos con ingredientes de alta calidad y un sabor
            inigualable. ¡Ven y disfruta de la mejor pizza de la ciudad! </p>
            
        </div>
        </div>
    </div>
    <Footer />
    </div>
);
};

export default Home;



