import React from 'react';
import Autodiagnostico from '../../Components/Autodiagnostico/Autodiagnostico';
import Cabecera from '../../Components/Home/Cabecera/Cabecera';
import Footer from '../../Components/Home/Footer/Footer';
import './Autodiagnostico.css'; // Archivo CSS para estilos específicos de esta página

const AutodiagnosticoPage = () => {
  return (
    <div className="autodiagnostico-page">
      <Cabecera />
      <main>
        <Autodiagnostico />
      </main>
      <Footer />
    </div>
  );
};

export default AutodiagnosticoPage;
