import React from 'react';
import Cabecera from '../../../Home/Cabecera/Cabecera';
import Footer from '../../../Home/Footer/Footer';
import './ConcienciacionProblema.css';

const ConcienciacionProblema = () => {
  return (
    <div className="servicio-page">
      <Cabecera />
      <div className="header-background" style={{ backgroundImage: "url('https://aa24horas.es/wp-content/uploads/2024/05/people-meeting-seminar-office-concept-scaled-1.webp')" }}>
        <h2 className="header-title">Concienciacion del Problema</h2>
      </div>
      <div className="content-container">
        <p>
          Nuestro programa de seguimiento ofrece apoyo constante para ayudar a nuestros miembros a mantener la sobriedad y a prevenir recaídas a largo plazo.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ConcienciacionProblema;
