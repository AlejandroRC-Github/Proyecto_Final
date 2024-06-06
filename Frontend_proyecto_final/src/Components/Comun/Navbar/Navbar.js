import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

// Define un componente funcional llamado Navbar.
const Navbar = () => {
  // Obtiene la ubicación actual usando el hook useLocation de react-router-dom.
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="flex justify-center">
        {/* Crea un elemento de lista para el enlace "Inicio". */}
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/" className="nav-link">Inicio</Link>
        </li>
        {/* Crea un elemento de lista para el enlace "Sobre nosotros". */}
        <li className={location.pathname === '/Sobre_nosotros' ? 'active' : ''}>
          <Link to="/Sobre_nosotros" className="nav-link">Sobre nosotros</Link>
        </li>
        {/* Crea un elemento de lista para el enlace "Servicios". */}
        <li className={location.pathname === '/Servicios' ? 'active' : ''}>
          <Link to="/Servicios" className="nav-link">Servicios</Link>
        </li>
        {/* Crea un elemento de lista para el enlace "Contacto". */}
        <li className={location.pathname === '/Contacto' ? 'active' : ''}>
          <Link to="/Contacto" className="nav-link">Contacto</Link>
        </li>
        {/* Crea un elemento de lista para el enlace "¿Soy Alcoholico?". */}
        <li className={location.pathname === '/Autodiagnostico' ? 'active' : ''}>
          <Link to="/Autodiagnostico" className="nav-link">¿Soy Alcoholico?</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
