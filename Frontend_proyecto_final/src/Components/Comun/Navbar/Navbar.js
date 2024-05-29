import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="flex justify-center">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/" className="nav-link">Inicio</Link>
        </li>
        <li className={location.pathname === '/Sobre_nosotros' ? 'active' : ''}>
          <Link to="/Sobre_nosotros" className="nav-link">Sobre nosotros</Link>
        </li>
        <li className={location.pathname === '/Servicios' ? 'active' : ''}>
          <Link to="/Servicios" className="nav-link">Servicios</Link>
        </li>
        <li className={location.pathname === '/Contacto' ? 'active' : ''}>
          <Link to="/Contacto" className="nav-link">Contacto</Link>
        </li>
        <li className={location.pathname === '/Autodiagnostico' ? 'active' : ''}>
          <Link to="/Autodiagnostico" className="nav-link">¿Soy Alcoholico?</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
