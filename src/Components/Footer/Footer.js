import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <header>
        <nav className="footer_enlaces">
        <ul>
          <li><Link to="/"></Link></li>
          <li><Link to="/">Home</Link></li>
          <li><a href="#">Usuarios</a></li>
          <li><Link to="/Hilos">Hilos</Link></li>
          <li><Link to="/Equipo">Equipo</Link></li>
          <li><Link to="/Blog">Blog</Link></li>
          <li><Link to="/Contacto">Contacto</Link></li>
          <li><div className='inicio'><Link to="/Login"></Link></div></li>
        </ul>
      </nav>
      
    </header>
  );
}
export default Footer;
