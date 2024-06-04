import React from 'react';
import Cabecera from '../../Components/Home/Cabecera/Cabecera';
import Footer from '../../Components/Home/Footer/Footer';
import { Link } from 'react-router-dom';
import './Servicios.css';

const Servicios = () => {
  return (
    <div className="servicios-page">
      <Cabecera />

      <div className="header-background-servicios">
        <h2 className="header-title">Servicios: apoyo para la recuperación</h2>
      </div>

      <div className="content-container">
        <h3>Nuestros Servicios</h3>
        <p className="intro-text">
          Grupo 24 Horas Alcohólicos Anónimos Noroeste es una asociación sin ánimo de lucro fundada en junio de 2017, con CIF: G-70530688, e inscrita en el Registro Nacional de Asociaciones. Como entidad de referencia en el consejo asesor de Galicia y del Sergas, operamos en las áreas de A Coruña – Cee y Santiago de Compostela – Barbanza. Desde 2022, somos reconocidos de interés público, reflejando nuestro compromiso y dedicación en el ámbito internacional.

          Nuestros servicios son completamente gratuitos, firmemente creyendo que el nivel adquisitivo no debe ser una barrera para tratar un problema de salud tan serio como el alcoholismo. Aunque nuestra actuación es principalmente municipal y autonómica, nuestra denominación internacional subraya nuestro alcance y compromiso global.

          En A Coruña, ofrecemos asistencia las 24 horas para aquellos que enfrentan problemas de alcoholismo, ya sea que deseen dejar de beber o necesiten apoyo para evitar recaídas en momentos difíciles. Nuestro único propósito es proporcionar ayuda efectiva durante el proceso de desintoxicación y ofrecer un apoyo continuo para prevenir recaídas, guiados por valores de servicio al cliente, rigor profesional y una constante apuesta por la innovación y el talento.

          Grupo 24 Horas Alcohólicos Anónimos Noroeste es más que una asociación; es un refugio seguro para aquellos que buscan un camino hacia la recuperación y una vida libre del alcohol.
        </p>

        <div className="card-container">
          <Link to="/servicios/ev-inicial" className="zoom-container">
            <div className="zoom-background" style={{ backgroundImage: "url('https://aa24horas.es/wp-content/uploads/2024/05/young-girl-talking-therapist-side-view.webp')" }}></div>
            <div className="zoom-text">
              <h3>Evaluacion Inicial</h3>
              <p>Cada ingreso implica una evaluación colaborativa para determinar el nivel de dependencia del alcohol y crear un plan personalizado. Se priorizan prescripciones médicas existentes. Los residentes en riesgo de exclusión social reciben prioridad y un plan de desintoxicación seguro.</p>
            </div>
          </Link>
          <Link to="/servicios/concienciacion-problema" className="zoom-container">
            <div className="zoom-background" style={{ backgroundImage: "url('https://aa24horas.es/wp-content/uploads/2024/05/people-meeting-seminar-office-concept-scaled-1.webp')" }}></div>
            <div className="zoom-text">
              <h3>Concienciacion del Problema</h3>
              <p>Después de la desintoxicación, iniciamos una fase de concienciación con sesiones individuales y grupales, charlas y talleres. Nuestro objetivo es abordar las causas de la adicción y desarrollar estrategias para la recuperación y la prevención de recaídas.</p>
            </div>
          </Link>
          <Link to="/servicios/desintoxicacion-segura" className="zoom-container">
            <div className="zoom-background" style={{ backgroundImage: "url('https://aa24horas.es/wp-content/uploads/2024/05/first-step-recovery-is-talking-about-problem-scaled-1.webp')" }}></div>
            <div className="zoom-text">
              <h3>Desintoxicación Segura</h3>
              <p>Aquellos que necesiten desintoxicación seguirán un proceso supervisado por servicios de salud, médicos de familia y unidades especializadas. Grupo Noroeste proporciona supervisión las 24 horas durante este proceso para garantizar la seguridad y el bienestar de los usuarios.</p>
            </div>
          </Link>
          <Link to="/servicios/residencia-puntual" className="zoom-container">
            <div className="zoom-background" style={{ backgroundImage: "url('https://aa24horas.es/wp-content/uploads/2024/04/concrete-structure-city-scaled.jpg')" }}></div>
            <div className="zoom-text">
              <h3>
                Residencia Puntual
              </h3>
              <p>Disponemos de una residencia para quienes no pueden desplazarse diariamente. Ofrecemos un entorno seguro y libre de alcohol, con apoyo las 24 horas y capacidad para 25 personas. Todos nuestros servicios son gratuitos y accesibles a quienes deseen dejar de beber.</p>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Servicios;
