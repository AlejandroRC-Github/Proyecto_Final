import React from 'react';
import Cabecera from '../../Components/Home/Cabecera/Cabecera';
import Footer from '../../Components/Home/Footer/Footer';
import Navbar from '../../Components/Comun/Navbar/Navbar';

const Contacto = () => {
  return (
    <div>
      <Cabecera />
      <Navbar />

      <div className="container mx-auto mt-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-blue-900">UBICACIÓN DE NUESTRA ASOCIACIÓN</h1>
        </div>

        <hr className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="text-left md:text-center md:mr-8">
            <h3 className="text-xl font-bold">CALLE PAN DE SORALUCE 2 BAJO</h3>
            <h3 className="text-xl font-bold">15007 A Coruña</h3>
          </div>
          <div>
            <img className="w-full md:w-auto h-auto md:h-64" src="../Imagenes/ImagenCalle.png" alt="Ubicación" />
          </div>
        </div>

        <hr className="my-8" />

        <div className="flex items-center justify-center">
          <img className="w-1/2 md:w-auto h-auto" src="../Imagenes/chicossentados.png" alt="Servicios Gratuitos" />
          <div className="ml-4">
            <h4 className="text-lg font-bold">
              Se realizan juntas, cada 2 horas, hasta un total de 12 juntas por día en una sala de reuniones de 250 m2 y un aforo de 120 personas
            </h4>
          </div>
        </div>

        <hr className="my-8" />

        <div className="flex items-center justify-center">
          <div className="text-center">
            <h4 className="text-lg font-bold">
              LA UBICACIÓN DE NUESTRAS INSTALACIONES ESTÁN SITUADAS MUY CERCA DE LOS JUZGADOS DE A CORUÑA Y EN LA ESQUINA DEL BAR CHAFLÁN
            </h4>
          </div>
        </div>

        <hr className="my-8" />

        <div className="flex justify-center">
          <iframe
            className="w-full md:w-3/4 h-64 md:h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.9538767830095!2d-8.410160723276762!3d43.35707537111768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e7c90005af621%3A0x5b61a8514e1c3a17!2sC.%20Pan%20de%20Soraluce%2C%202%2C%2015007%20A%20Coru%C3%B1a%2C%20La%20Coru%C3%B1a!5e0!3m2!1ses!2ses!4v1708276801176!5m2!1ses!2ses"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación en el mapa"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contacto;
