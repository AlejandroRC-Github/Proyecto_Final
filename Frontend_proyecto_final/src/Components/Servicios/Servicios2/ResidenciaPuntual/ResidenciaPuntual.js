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
        <p>
          Nuestra residencia puntual está diseñada para proporcionar un ambiente estructurado y de apoyo que facilita la recuperación continua. El entorno seguro y libre de alcohol es crucial para aquellos en las etapas iniciales de la recuperación, donde la tentación y el acceso al alcohol pueden ser desafíos significativos.
        </p>
        <p>
          Con capacidad para 25 personas, nuestras instalaciones están equipadas para atender a individuos con diversas necesidades. Ofrecemos habitaciones cómodas, áreas comunes para actividades grupales y espacios privados para el descanso y la reflexión. Todo está pensado para crear un ambiente propicio para la recuperación.
        </p>
        <p>
          El apoyo 24 horas es un componente clave de nuestra oferta. Nuestro equipo de profesionales, que incluye consejeros y personal de apoyo, está disponible en todo momento para proporcionar asistencia emocional y práctica. Esto asegura que los residentes siempre tengan alguien a quien recurrir, sin importar la hora del día.
        </p>
        <p>
          Además, nuestra residencia facilita el acceso a diversas actividades y programas diseñados para apoyar la recuperación. Estos incluyen sesiones de terapia individual y grupal, talleres educativos y actividades recreativas que fomentan un estilo de vida saludable y equilibrado.
        </p>
        <p>
          Todos nuestros servicios son gratuitos, reafirmando nuestro compromiso de que el nivel adquisitivo no sea una barrera para recibir ayuda. Creemos firmemente que cada persona merece la oportunidad de vivir una vida libre de alcohol y estamos dedicados a proporcionar los recursos y el apoyo necesarios para lograrlo.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ResidenciaPuntual;
