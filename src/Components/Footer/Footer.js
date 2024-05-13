import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <header>
        <nav className="Footer">
        <ul>
          <li><Link to="/"></Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Sobre_nosotros">Sobre_nosotros</Link></li>
          <li><Link to="/Hilos">Servicios</Link></li>
          <li><Link to="/Equipo">Autodiagnostico</Link></li>
          <li><Link to="/Contacto">Contacto</Link></li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Footer;