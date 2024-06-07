import React from 'react';
import './Contacto.css';
import Cabecera from '../../Components/Home/Cabecera/Cabecera';
import Footer from '../../Components/Home/Footer/Footer';

const Contacto = () => (
  <div className="contacto-page">
    <Cabecera />
    
    <div className="contact-header">
      <h2>Contáctanos: estamos aquí para ayudarte</h2>
    </div>
    
    <div className="contacto-container">
      {/* Texto introductorio que explica cómo contactar. */}
      <p className="intro-text">
        Contactar con nosotros nunca fue tan sencillo, tan solo debes rellenar el siguiente formulario si tienes alguna duda acerca de nuestros servicios o asociación, o bien contactar a través de nuestros contactos como el correo electrónico o teléfono. Contáctanos ya.
      </p>
      
      {/* Contenedor de dos columnas: formulario de contacto e información de contacto. */}
      <div className="contacto-columns">
        {/* Columna del formulario de contacto. */}
        <div className="contact-form">
          <h2>Formulario de Dudas</h2>
          {/* Formulario para enviar consultas. */}
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
        
        {/* Columna de información de contacto. */}
        <div className="contact-info">
          {/* Información de contacto por email. */}
          <div className="info-item">
            <h3>Email:</h3>
            <a href="mailto:ejemplo@gmail.com">alcoholicosenrecuperacion@gmail.com</a>
          </div>
          
          {/* Información de contacto por teléfono. */}
          <div className="info-item">
            <h3>Teléfono:</h3>
            <a href="tel:+34 123456789">123456789</a>
          </div>
          
          {/* Dirección de la asociación. */}
          <div className="info-item">
            <h3>Dirección:</h3>
            <p>C/ Pan de Soraluce, 2</p>
          </div>
        </div>
      </div>
    </div>
 
    <Footer />
  </div>
);

export default Contacto;
