import React from 'react';
import './Cabecera.css';

const Cabecera = () => (
  <header className="bg-gray-900 text-white">
    <div className="container mx-auto flex justify-between items-center py-4">
      <img src="" alt="Logo" />
      <div className="BarraVertical w-px bg-white h-8"></div>
      <div className="Nombre">
        <h1 className="text-xl font-semibold">
          ALCOHOLICOS EN RECUPERACION <br />
          GRUPO NORORESTE
        </h1>
        <p className="text-sm">
          Registro Nacional de Asociaciones sección 1º/622444
          CIF:G 70530688
        </p>
      </div>
      <div className="ImagenesTopRight flex items-center">
        <img src="./Imagenes/Logo.png.jpg" alt="AyuntamientoCoruña" className="mr-2" />
        <img src="" alt="GobiernoEspaña" className="mr-2" />
        <img src="" alt="UnionEuropea" />
      </div>
    </div>
  </header>
);

export default Cabecera;
