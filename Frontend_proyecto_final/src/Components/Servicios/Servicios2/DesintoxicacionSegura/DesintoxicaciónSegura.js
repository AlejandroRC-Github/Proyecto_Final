import React from 'react';
import Cabecera from '../../../Home/Cabecera/Cabecera';
import Footer from '../../../Home/Footer/Footer';
import './DesintoxicacionSegura.css';

const DesintoxicacionSegura = () => {
  return (
    <div className="servicio-page">
      <Cabecera />
      <div className="header-background" style={{ backgroundImage: "url('https://aa24horas.es/wp-content/uploads/2024/05/first-step-recovery-is-talking-about-problem-scaled-1.webp')" }}>
        <h2 className="header-title">Desintoxicacion Segura</h2>
      </div>
      <div className="content-container">
        <p>
        Aquellos que necesiten desintoxicación seguirán un proceso supervisado por servicios de salud, médicos de familia y unidades especializadas. Grupo Noroeste proporciona supervisión las 24 horas durante este proceso para garantizar la seguridad y el bienestar de los usuarios.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default DesintoxicacionSegura;
