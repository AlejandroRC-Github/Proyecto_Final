import React from 'react';
import './Cabecera.css';
import { Link } from 'react-router-dom';

function Cabecera() {
  return (
    <header>
        <nav className="Cabecera">
        <ul>
        <li><Link to="/"></Link></li>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Sobre_nosotros">Sobre_nosotros</Link></li>
          <li><Link to="/Servicios">Servicios</Link></li>
          <li><Link to="/Autodiagnostico">Autodiagnostico</Link></li>
          <li><Link to="/Contacto">Contacto</Link></li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Cabecera;

