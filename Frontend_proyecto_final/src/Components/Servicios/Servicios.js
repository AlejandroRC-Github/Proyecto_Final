import React from 'react';
import Cabecera from '../../Components/Home/Cabecera/Cabecera';
import Footer from '../../Components/Home/Footer/Footer';
import { Link } from 'react-router-dom'; // Importamos Link de react-router-dom
import './Servicios.css';

const Servicios = () => {
  return (
    <div className="servicios-page">
      <Cabecera />

      <div className="servicios-container">
        <div className="header-background-servicios">
          <h2 className="header-title">Servicios: apoyo para la recuperación</h2>
        </div>

        <p className="intro-text">
          {/* Tu texto introductorio */}
        </p>

        <div className="columns">
          <Link to="/evaluacion-inicial" className="zoom-container">
            <div className="zoom-background" style={{ backgroundImage: "url('https://aa24horas.es/wp-content/uploads/2024/05/young-girl-talking-therapist-side-view.webp')" }}></div>
            <div className="zoom-text">
              <h3>Evaluacion Inicial</h3>
              <p>Cada ingreso implica una evaluacion colaborativa para determinar el nivel de dependencia del alcohol y crear un plan personalizado. Se priorizan preescripcion médicas existentes. Los residentes en riesgo de exclusion social reciben prioridad y un plan de desintoxicacion seguro.</p>
            </div>
          </Link>
          {/* Repite esto para las otras tarjetas */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Servicios;
