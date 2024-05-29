import React from 'react';
import './Galeria.css';

const Galeria = () => (
  <div className="galeria-container">
    <div className="galeria-grid">
      <div className="galeria-item">
        <img src="https://via.placeholder.com/300" alt="Imagen 1" />
      </div>
      <div className="galeria-item">
        <img src="https://via.placeholder.com/300" alt="Imagen 2" />
      </div>
      <div className="galeria-item">
        <img src="https://via.placeholder.com/300" alt="Imagen 3" />
      </div>
    </div>
  </div>
);

export default Galeria;
