import React from 'react';
import './Cabecera.css';

const Cabecera = () => (
  <header>
    <div className="cabecera">
      <img src="" alt="Logo" />
      <div className="BarraVertical"></div>
      <div className="Nombre">
        <h1>
          ALCOHOLICOS EN
          RECUPERACION <br />
          GRUPO NORORESTE
        </h1>
        <p>
          Registro Nacional de Asociaciones seccion 1º/622444
          CIF:G 70530688
        </p>
      </div>
      <div className="ImagenesTopRight">
        <img src="" alt="AyuntamientoCoruña" />
        <img src="" alt="GobiernoEspaña" />
        <img src="" alt="UnionEuropea" />
      </div>
    </div>
  </header>
);

export default Cabecera;

