import React from 'react';
import './Galeria.css'; 

const Galeria = () => (
  <div className="Galeria">
    <div className="imagen1">
      <img className="image" src="../Imagenes/Aniversario.png" alt="Imagen 1" />
    </div>
    <div className="imagen2-container">
      <img className="imagen2" src="../Imagenes/juntas.png" alt="Imagen 2" />
    </div>
    <div className="imagen3-container">
      <img className="imagen3" src="../Imagenes/ubicacioninicio.png" alt="Imagen 3" />
    </div>
  </div>
);

export default Galeria;
