import React from 'react';
import './Footer.css';
import Navbar from '../../Comun/Navbar/Navbar';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src="https://aa24horas.es/wp-content/uploads/2024/04/cropped-75060af3b70ef08d3aab8a0c9780b0fc-removebg-preview.webp" alt="Logo" className="footer-logo" />
          <p className="footer-text">GRUPO 24 HORAS ALCOHOLICOS ANÓNIMOS NOROESTE</p>
        </div>
        <div className="footer-section">
          <Navbar/>
        </div>
        <div className="footer-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.9538767830095!2d-8.410160723276762!3d43.35707537111768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e7c90005af621%3A0x5b61a8514e1c3a17!2sC.%20Pan%20de%20Soraluce%2C%202%2C%2015007%20A%20Coru%C3%B1a%2C%20La%20Coru%C3%B1a!5e0!3m2!1ses!2ses!4v1708276801176!5m2!1ses!2ses"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación en el mapa"
            width="100%"
            height="150"
          ></iframe>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <p>Aviso Legal</p>
        </div>
        <div className="footer-section">
          <p>Política de Privacidad</p>
        </div>
        <div className="footer-section footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="../Imagenes/facebook-icon.png" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="../Imagenes/twitter-icon.png" alt="Twitter" className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="../Imagenes/instagram-icon.png" alt="Instagram" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
