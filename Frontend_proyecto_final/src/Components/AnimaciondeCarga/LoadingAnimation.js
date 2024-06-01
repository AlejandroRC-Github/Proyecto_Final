import React, { useState, useEffect } from 'react';
import './LoadingAnimation.css';

const LoadingAnimation = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulación de carga de 3 segundos
  }, []);

  return (
    <div className={`loading-animation ${loading ? 'active' : ''}`}>
      <div className="logo-container">
        <img src="https://aa24horas.es/wp-content/uploads/2024/04/cropped-75060af3b70ef08d3aab8a0c9780b0fc-removebg-preview.webp" alt="Logo" className="logo" />
        <h1 className="nombre">Grupo 24 horas: apoyo y recuperación en A Coruña</h1>
      </div>
    </div>
  );
};

export default LoadingAnimation;
