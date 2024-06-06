import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingAnimation = () => {
  // Define el estado de carga utilizando el hook useState.
  // Inicialmente, se establece en true para mostrar la pantalla de carga.
  const [loading, setLoading] = useState(true);

  // Utiliza el hook useEffect para ejecutar un efecto después de que el componente se monte.
  useEffect(() => {
    // Utiliza setTimeout para simular una carga de 3 segundos.
    setTimeout(() => {
      // Después de 3 segundos, cambia el estado de carga a false para indicar que la carga ha terminado.
      setLoading(false);
    }, 3000); // Simulación de carga de 3 segundos
  }, []); // El segundo argumento [] indica que este efecto se ejecuta solo una vez después del montaje.

  return (
    // Utiliza el operador ternario para agregar la clase 'active' al contenedor principal
    // de la animación de carga dependiendo del estado de carga.
    <div className={`loading-animation ${loading ? 'active' : ''}`}>
      <div className="logo-container">
        {/* Muestra una imagen de logotipo. */}
        <img src="https://aa24horas.es/wp-content/uploads/2024/04/cropped-75060af3b70ef08d3aab8a0c9780b0fc-removebg-preview.webp" alt="Logo" className="logo" />
        {/* Muestra un título. */}
        <h1 className="nombre">Grupo 24 horas: apoyo y recuperación en A Coruña</h1>
      </div>
    </div>
  );
};

export default LoadingAnimation;
