import React from 'react';
import Cabecera from '../../../Home/Cabecera/Cabecera';
import Footer from '../../../Home/Footer/Footer';
import './ResidenciaPuntual.css';

const ResidenciaPuntual = () => {
  return (
    <div className="servicio-page">
      <Cabecera />
      <div className="header-background" style={{ backgroundImage: "url('https://aa24horas.es/wp-content/uploads/2024/04/concrete-structure-city-scaled.jpg')" }}>
        <h2 className="header-title">Residencia Puntual</h2>
      </div>
      <div className="content-container">
        <p>
        Disponemos de una residencia para quienes no pueden desplazarse diariamente. Ofrecemos un entorno seguro y libre de alcohol, con apoyo las 24 horas y capacidad para 25 personas. Todos nuestros servicios son gratuitos y accesibles a quienes deseen dejar de beber.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ResidenciaPuntual;
