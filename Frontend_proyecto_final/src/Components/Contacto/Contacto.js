import React from 'react';
import Cabecera from '../../Components/Home/Cabecera/Cabecera';
import Footer from '../../Components/Home/Footer/Footer';
import Navbar from '../../Components/Comun/Navbar/Navbar';
import './Contacto.css';  // Asegúrate de importar el archivo CSS

const Contacto = () => {
  return (
    <div>
      <Cabecera />
      <Navbar />

      <div className="contact-container">
        <div className="location-info">
          <h1>UBICACIÓN DE NUESTRA ASOCIACIÓN</h1>
        </div>

        <hr />

        <div className="location-address">
          <div>
            <h3>CALLE PAN DE SORALUCE 2 BAJO</h3>
            <h3>15007 A Coruña</h3>
          </div>
          <div className="location-image">
            <img src="../Imagenes/ImagenCalle.png" alt="Ubicación" className="w-full h-auto" />
          </div>
        </div>

        <hr />

        <div className="meeting-info">
          <div className="services-image">
            <img src="../Imagenes/chicossentados.png" alt="Servicios Gratuitos" className="w-full h-auto" />
          </div>
          <div className="services-description">
            <h4>
              Se realizan juntas, cada 2 horas, hasta un total de 12 juntas por día en una sala de reuniones de 250 m2 y un aforo de 120 personas
            </h4>
          </div>
        </div>

        <hr />

        <div className="location-description">
          <div className="location-detail">
            <h4>
              LA UBICACIÓN DE NUESTRAS INSTALACIONES ESTÁN SITUADAS MUY CERCA DE LOS JUZGADOS DE A CORUÑA Y EN LA ESQUINA DEL BAR CHAFLÁN
            </h4>
          </div>
        </div>

        <hr />

        <div className="contact-map">
          <iframe
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
