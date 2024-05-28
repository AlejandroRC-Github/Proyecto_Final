import React from 'react';
import Cabecera from '../../Components/Home/Cabecera/Cabecera';
import Footer from '../../Components/Home/Footer/Footer';
import Navbar from '../../Components/Comun/Navbar/Navbar';

const Servicios = () => {
  return (
    <div>
      <Cabecera />
      <Navbar />

      <div className="bg-blue-900 text-white">
        <div className="NuestrosServicios">
          <h1>Nuestros Servicios</h1>
        </div>
      </div>

      <div className="bg-white py-8">
        <hr />

        <div className="mx-auto max-w-4xl px-4">
          <div className="uno mb-8">
            <h2 className="text-xl font-semibold text-blue-900">El único fin de esta asociación es ayudar a personas con problemas de alcoholismo.</h2>
            <div className="flex justify-between mt-4">
              <div className="boton1">
                <a href="Telefono" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Teléfono</a>
              </div>
              <div className="boton2">
                <a href="Correo Electronico" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Correo Electrónico</a>
              </div>
            </div>
          </div>

          <hr />

          <div className="dos flex flex-col md:flex-row justify-between items-center mb-8">
            <h3 className="md:w-1/2 text-lg font-semibold text-blue-900">
              La situación económica para dejar de
              <br />
              beber no puede ser un problema, por eso
              <br />
              nuestros servicios son gratuitos.
            </h3>
            <img src="../Imagenes/servicios.png" alt="Servicios Gratuitos" className="md:w-1/2 mt-4 md:mt-0" />
          </div>

          <hr />

          <div className="tres flex flex-col md:flex-row justify-between items-center mb-8">
            <img src="../Imagenes/acogida.png" alt="Acogida gratuita" className="md:w-1/2 mb-4 md:mb-0" />
            <h3 className="md:w-1/2 text-lg font-semibold text-blue-900">
              Posibilidad de residir en nuestras
              <br />
              instalaciones, para personas no
              <br />
              residentes de la ciudad de A Coruña
              <br />
              o para personas sin recursos.
            </h3>
          </div>

          <hr />

          <div className="cuatro flex flex-col md:flex-row justify-between items-center mb-8">
            <h3 className="md:w-1/2 text-lg font-semibold text-blue-900">
              Atención las 24h todos los días del año
            </h3>
            <img src="../Imagenes/horas.png" alt="24h" className="md:w-1/2" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Servicios;
