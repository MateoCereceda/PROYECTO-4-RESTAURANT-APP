import React, { useState } from "react";
import "./styles/ContactForm.css";
import db from "./firebase";
import { collection, addDoc } from "firebase/firestore";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "contactMessages"), {
        name,
        email,
        phone,
        message,
      });
      console.log("Document written with ID: ", docRef.id);
      // Aquí puedes agregar la animación de confirmación de envío
      
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    // Restablece los valores de los campos del formulario
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="contact-form">
      <h2>Formulario de contacto</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="phone">Teléfono:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
