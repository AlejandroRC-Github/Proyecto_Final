import React from 'react';
import './Contacto.css';
import Cabecera from '../Home/Cabecera/Cabecera';
import Footer from '../Home/Footer/Footer';

const Contacto = () => (
  <div className="contacto-page">
    <Cabecera />
    <div className="contacto-container">
      <div className="contact-header">
        <h2>Contáctanos: estamos aquí para ayudarte</h2>
      </div>
      <p className="intro-text">
        Contactar con nosotros nunca fue tan sencillo, tan solo debes rellenar el siguiente formulario si tienes alguna duda acerca de nuestros servicios o asociación, o bien contactar a través de nuestros contactos como el correo electrónico o teléfono. Contáctanos ya.
      </p>
      <div className="contacto-columns">
        <div className="contact-form">
          <h2>Formulario de Contacto</h2>
          <form>
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="subject">Asunto:</label>
            <input type="text" id="subject" name="subject" required />
            
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="contact-info">
          <div className="info-item">
            <h3>Email:</h3>
            <a href="mailto:info@tuempresa.com">info@tuempresa.com</a>
          </div>
          <div className="info-item">
            <h3>Teléfono:</h3>
            <a href="tel:+123456789">+123456789</a>
          </div>
          <div className="info-item">
            <h3>Dirección:</h3>
            <p>1234 Calle Falsa, Ciudad, País</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
);

export default Contacto;