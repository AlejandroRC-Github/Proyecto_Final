import React from 'react';
import Cabecera from '../../Components/Home/Cabecera/Cabecera'; 
import Footer from '../../Components/Home/Footer/Footer';
import Navbar from '../../Components/Comun/Navbar/Navbar';
import { Link } from 'react-router-dom';

const SobreNosotros = () => {
  return (
    <div>
      <Cabecera />
      <Navbar />
      
      <div className="bg-blue-900 text-white">
        <img src="../Imagenes/FondoImagenPrincipal.jpeg" alt="ImagenFondo" className="foto" />
        <ul className="flex justify-center">
          <li><a className="px-4 py-2 hover:bg-blue-800" href="">Inicio</a></li>
          <li><Link to ={"/Sobre_nosotros"} className="px-4 py-2 hover:bg-blue-800">Sobre nosotros</Link></li>
          <li><Link to ={"/Servicios"} className="px-4 py-2 hover:bg-blue-800">Servicios</Link></li>
          <li><Link to ={"/Contacto"} className="px-4 py-2 hover:bg-blue-800">Contacto</Link></li>
          <li><Link to ={"/Autodiagnostico"} className="px-4 py-2 hover:bg-blue-800">¿Soy Alcoholico?</Link></li>
        </ul>
      </div>

      <div className="bg-white py-8">
        <h1 className="text-4xl font-bold text-blue-900 text-center mb-8">SOBRE NOSOTROS</h1>
        
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center">
            <img className="w-64 h-64 object-cover mx-4 my-2" src="../Imagenes/quienessomos.png" alt="QuienesSomos" />
            <img className="w-64 h-64 object-cover mx-4 my-2" src="../Imagenes/Porque.png" alt="Porque" />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex flex-wrap justify-center">
            <img className="w-64 h-64 object-cover mx-4 my-2" src="../Imagenes/HORARIOS.png" alt="Horarios" />
            <img className="w-64 h-64 object-cover mx-4 my-2" src="../Imagenes/QUE NECESITAS.png" alt="QueNecesitas" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SobreNosotros;
