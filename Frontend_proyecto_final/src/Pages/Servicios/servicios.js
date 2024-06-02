import React from 'react';
import Cabecera from '../../Components/Home/Cabecera/Cabecera';
import Footer from '../../Components/Home/Footer/Footer';
import './servicios.css';

const Servicios = () => {
  return (
    <div className="servicios-page">
      <Cabecera />

      <div className="servicios-container">
        <div className="header-background-servicios">
          <h2 className="header-title">Servicios: apoyo para la recuperación</h2>
        </div>

        <p className="intro-text">
          Grupo 24 Horas Alcohólicos Anónimos Noroeste es una asociación sin ánimo de lucro fundada en junio de 2017, con CIF: G-70530688, e inscrita en el Registro Nacional de Asociaciones. Como entidad de referencia en el consejo asesor de Galicia y del Sergas, operamos en las áreas de A Coruña – Cee y Santiago de Compostela – Barbanza. Desde 2022, somos reconocidos de interés público, reflejando nuestro compromiso y dedicación en el ámbito internacional.<br/><br/>
          Nuestros servicios son completamente gratuitos, firmemente creyendo que el nivel adquisitivo no debe ser una barrera para tratar un problema de salud tan serio como el alcoholismo. Aunque nuestra actuación es principalmente municipal y autonómica, nuestra denominación internacional subraya nuestro alcance y compromiso global.<br/><br/>
          En A Coruña, ofrecemos asistencia las 24 horas para aquellos que enfrentan problemas de alcoholismo, ya sea que deseen dejar de beber o necesiten apoyo para evitar recaídas en momentos difíciles. Nuestro único propósito es proporcionar ayuda efectiva durante el proceso de desintoxicación y ofrecer un apoyo continuo para prevenir recaídas, guiados por valores de servicio al cliente, rigor profesional y una constante apuesta por la innovación y el talento.<br/><br/>
          Grupo 24 Horas Alcohólicos Anónimos Noroeste es más que una asociación; es un refugio seguro para aquellos que buscan un camino hacia la recuperación y una vida libre del alcohol.
        </p>

        <div className="columns">
          <div className="zoom-container">
            <div className="zoom-background" style={{ backgroundImage: "url('../Imagenes/servicio1.jpg')" }}></div>
            <div className="zoom-text">
              <h3>Servicio 1</h3>
              <p>Descripción del servicio 1</p>
            </div>
          </div>
          <div className="zoom-container">
            <div className="zoom-background" style={{ backgroundImage: "url('../Imagenes/servicio2.jpg')" }}></div>
            <div className="zoom-text">
              <h3>Servicio 2</h3>
              <p>Descripción del servicio 2</p>
            </div>
          </div>
          <div className="zoom-container">
            <div className="zoom-background" style={{ backgroundImage: "url('../Imagenes/servicio3.jpg')" }}></div>
            <div className="zoom-text">
              <h3>Servicio 3</h3>
              <p>Descripción del servicio 3</p>
            </div>
          </div>
          <div className="zoom-container">
            <div className="zoom-background" style={{ backgroundImage: "url('../Imagenes/servicio4.jpg')" }}></div>
            <div className="zoom-text">
              <h3>Servicio 4</h3>
              <p>Descripción del servicio 4</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Servicios;
