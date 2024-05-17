import React from 'react';
import './Cabecera.css';
import { Link } from 'react-router-dom';

function Cabecera() {
  return (
    <header>
<<<<<<< HEAD
        <nav className="enlaces">
        <ul>
          <li><Link to="/"></Link></li>
          <li><Link to="/">Home</Link></li>
          <li><a href="#">Usuarios</a></li>
          <li><Link to="/Hilos">Hilos</Link></li>
          <li><Link to="/Equipo">Equipo</Link></li>
          <li><Link to="/Blog">Blog</Link></li>
          <li><Link to="/Contacto">Contacto</Link></li>
          <li><div className='inicio'><Link to="/Login"></Link></div></li>
=======
        <nav className="Cabecera">
        <ul>
        <li><Link to="/"></Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Sobre_nosotros">Sobre_nosotros</Link></li>
          <li><Link to="/Hilos">Servicios</Link></li>
          <li><Link to="/Equipo">Autodiagnostico</Link></li>
          <li><Link to="/Contacto">Contacto</Link></li>
>>>>>>> fedf209da025c26d4edaa168a427e384017a595e
        </ul>
      </nav>
      
    </header>
  );
}
<<<<<<< HEAD
export default Cabecera;
=======
export default Cabecera;
>>>>>>> fedf209da025c26d4edaa168a427e384017a595e
