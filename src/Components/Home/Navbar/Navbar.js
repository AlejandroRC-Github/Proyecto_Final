import React from 'react';
import './Navbar.css'; 

const Navbar = () => (
  <div className="imagen">
    <ul>
      <li><a className="activo" href="">Inicio</a></li>
      <li><a href="">Sobre nosotros</a></li>
      <li><a href="">Servicios</a></li>
      <li><a href="">Encuentranos</a></li>
      <li><a href="">Familias</a></li>
      <li><a href="">¿Soy Alcoholico?</a></li>
    </ul>
    <div className="barraHorizontal">
      <h4>g</h4>
    </div>
    <div className="contactanos">
      <h4>
        SI TU FORMA DE BEBER TE HA LLEVADO A VIVIR SITUACIONES <br />
        COMPLICADAS. QUIZÁ SEA EL MOMENTO EN EL QUE TE PODAMOS <br />
        AYUDAR.
      </h4>
      <a href="#CONTACTANOS">CONTÁCTANOS</a>
    </div>
    <div className="barraHorizontal2">
      <h3>f</h3>
    </div>
  </div>
);

export default Navbar;