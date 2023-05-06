import React, { useState } from 'react';
import './styles/ContactForm.css';

const ContactForm = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [message, setMessage] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
};

return (
    <div className="contact-form">
    <h2>Contacto</h2>
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
