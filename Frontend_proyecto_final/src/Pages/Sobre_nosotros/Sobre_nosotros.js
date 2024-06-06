import React, { useState } from 'react';
import Cabecera from '../../Components/Home/Cabecera/Cabecera';
import Footer from '../../Components/Home/Footer/Footer';
import './Sobre_nosotros.css';

// Definimos el componente principal de la página "Sobre Nosotros".
const SobreNosotros = () => {
  // Usamos el "useState" de React para crear una variable que controle qué sección del acordeón está activa (abierta).
  const [activeIndex, setActiveIndex] = useState(0);

  // Función que cambia el índice de la sección activa del acordeón.
  const handleToggle = (index) => {
    // Si la sección ya está activa, la cierra; si no, la abre.
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    // Contenedor principal de la página.
    <div>
      {/* Incluimos el componente de la cabecera en la parte superior de la página. */}
      <Cabecera />

      {/* Contenedor principal para el contenido de la sección "Sobre Nosotros". */}
      <div className="sobre-nosotros-container">
        {/* Contenedor para el fondo del encabezado con el título de la página. */}
        <div className="header-background">
          <h1 className="titulo">Sobre Nosotros</h1>
        </div>
        
        {/* Contenedor para el contenido principal. */}
        <div className="contenido-container">
          {/* Sección de texto descriptivo sobre la asociación. */}
          <div className="texto-container">
            <p>
              Grupo 24 Horas Alcoholicos Anónimos Noroeste es una asociación sin ánimo de lucro constituida en junio de 2017, con CIF: G-70530688, e inscrita en el Registro Nacional de Asociaciones. Asociación de referencia en el consejo asesor de Galicia y del Sergas. Área A Coruña – Cee y área Santiago de Compostela – Barbanza. Somos una entidad de ámbito internacional y considerada de interés público desde el año 2022.
            </p>
          </div>

          {/* Contenedor para el acordeón (secciones expandibles). */}
          <div className="accordion-container">
            <div className="accordion">
              {[
                // Lista de objetos que representan cada sección del acordeón con su título y contenido.
                { title: 'Nuestra Sede:', content: 'Calle Pan de Soraluce nº 2, Bajo. 15007, A Coruña.' },
                { title: 'Nuestra Misión:', content: 'Somos una asociación sin ánimo de lucro formada por personas con problemas de alcoholismo que llevan más de 15 años sin recurrir al alcohol. Trabajamos desinteresada y voluntariamente las 24 horas para mantener abiertas nuestras instalaciones.' },
                { title: 'Nuestros Servicios:', content: 'Ofrecemos servicios gratuitos, pues entendemos que el nivel adquisitivo de una persona no puede influir en un problema de salud tan grave como el alcoholismo.' },
                { title: 'Ámbito de actuación:', content: 'Aunque nuestra área de actuación es mayoritariamente municipal y autonómica, nuestra denominación es de ámbito internacional.' },
                { title: 'Servicio 24 Horas:', content: 'Nuestro servicio está disponible las 24 horas del día, pues sabemos que es crucial atender a las personas que deciden dejar la bebida en el momento en que toman esa decisión.' },
                { title: 'Concienciación y Apoyo:', content: 'Nos dedicamos a ayudar y concienciar a la sociedad sobre la existencia de una discriminación silenciosa hacia las personas con problemas de alcoholismo. Creemos firmemente que esta discriminación es un obstáculo para su recuperación.' },
                { title: 'Perspectiva sobre el Alcoholismo:', content: 'Consideramos el alcoholismo como un problema de salud pública y de salud mental, en línea con organizaciones importantes como la OMS o la OPS.' },
                { title: 'Colaboraciones:', content: 'Buscamos sinergias con los profesionales de los servicios públicos de salud para brindar apoyo en el proceso de desintoxicación y evitar recaídas durante todo el tratamiento.' },
                { title: 'Participación en Consejos Asesores del Sergas:', content: 'Somos una asociación pertenecientes al Consejo Asesor de Galicia y consejo asesor de las áreas de A Coruña – Cee y Santiago – Barbanza. Participamos para establecer protocolos de actuación y asegurar el seguimiento del tratamiento prescrito por el personal facultativo.' },
                { title: 'Perfíl Histórico:', content: 'Historial y evolución de la asociación a lo largo del tiempo.' },
              ].map((item, index) => (
                // Cada sección del acordeón.
                <div className="accordion-item" key={index}>
                  {/* Título de la sección del acordeón, se puede hacer clic para expandir o contraer. */}
                  <div className="accordion-title" onClick={() => handleToggle(index)}>
                    <h2>{item.title}</h2>
                    {/* Muestra un signo "+" si la sección está cerrada, o "-" si está abierta. */}
                    <span>{activeIndex === index ? '-' : '+'}</span>
                  </div>
                  {/* Contenido de la sección del acordeón, se muestra solo si la sección está activa (abierta). */}
                  {activeIndex === index && (
                    <div className="accordion-content">
                      <p>{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SobreNosotros;
