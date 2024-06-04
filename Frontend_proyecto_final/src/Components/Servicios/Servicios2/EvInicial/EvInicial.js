import React from 'react';
import Cabecera from '../../../Home/Cabecera/Cabecera';
import Footer from '../../../Home/Footer/Footer';
import './EvInicial.css';

const EvaluacionInicial = () => {
  return (
    <div className="servicio-page">
      <Cabecera />
      <div className="header-background" style={{ backgroundImage: "url('https://aa24horas.es/wp-content/uploads/2024/05/young-girl-talking-therapist-side-view.webp')" }}>
        <h2 className="header-title">Evaluación Inicial</h2>
      </div>
      <div className="content-container">
        <p>
        Cada ingreso implica una evaluación colaborativa para determinar el nivel de dependencia del alcohol y crear un plan personalizado. Se priorizan prescripciones médicas existentes. Los residentes en riesgo de exclusión social reciben prioridad y un plan de desintoxicación seguro.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default EvaluacionInicial;
