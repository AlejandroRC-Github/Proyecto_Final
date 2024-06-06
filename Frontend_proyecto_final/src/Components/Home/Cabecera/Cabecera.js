import React from 'react';
import './Cabecera.css'; 
import Navbar from '../../Comun/Navbar/Navbar'; 

const Cabecera = () => (
  // Devuelve el JSX que representa la cabecera.
  <header>
    <div className="container">
      <div className="logo-nombre-container">
        <div className="logo-container">
          <img src="https://aa24horas.es/wp-content/uploads/2024/04/cropped-75060af3b70ef08d3aab8a0c9780b0fc-removebg-preview.webp" alt="Logo" className="logo" />
        </div>
        <div className="Nombre">
          <h1>
            ALCOHOLICOS EN RECUPERACION <br />
            GRUPO NORORESTE
          </h1>
        </div>
      </div>
      <div className="barra-vertical"></div>
      <div className="ImagenesTopRight">
        <Navbar /> {/* Inserta el componente de la barra de navegación. */}
      </div>
    </div>
  </header>
);

export default Cabecera;
