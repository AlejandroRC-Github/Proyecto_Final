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
        <p>
          La evaluación inicial es una etapa fundamental en el tratamiento del alcoholismo, ya que nos permite entender completamente las necesidades y circunstancias de cada individuo. Este proceso implica entrevistas detalladas y cuestionarios que ayudan a nuestros profesionales a evaluar el nivel de dependencia del alcohol y cualquier otra condición médica o psicológica que pueda estar presente.
        </p>
        <p>
          Durante la evaluación, también revisamos las prescripciones médicas existentes para asegurarnos de que cualquier tratamiento o medicación actual se integre de manera segura en el plan de desintoxicación. Esto es especialmente importante para aquellos con condiciones de salud concurrentes que requieren una atención médica continua y especializada.
        </p>
        <p>
          Nuestro enfoque se centra en proporcionar un entorno seguro y de apoyo, especialmente para los residentes en riesgo de exclusión social. Trabajamos para garantizar que estos individuos reciban la atención y el soporte necesarios para iniciar su camino hacia la recuperación. Priorizamos su ingreso para ofrecerles un plan de desintoxicación que sea seguro y efectivo, minimizando riesgos y mejorando sus oportunidades de éxito.
        </p>
        <p>
          Además, creemos en la importancia de la participación activa del paciente en su propio plan de tratamiento. Por ello, fomentamos una colaboración estrecha entre los pacientes y nuestros profesionales durante la evaluación inicial para asegurar que todas las preocupaciones y necesidades sean abordadas de manera adecuada.
        </p>
        <p>
          La evaluación inicial no solo sienta las bases para un plan de desintoxicación personalizado, sino que también establece una relación de confianza y apoyo entre el paciente y el equipo de tratamiento. Este vínculo es crucial para motivar y mantener el compromiso del paciente con el proceso de recuperación.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default EvaluacionInicial;
