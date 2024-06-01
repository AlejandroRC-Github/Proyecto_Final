import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoadingAnimation from './Components/AnimaciondeCarga/LoadingAnimation';

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <React.StrictMode>
      {loading ? ( /* Si loading es true, mostrar la pantalla de carga */
        <LoadingAnimation />
      ) : ( /* Si loading es false, mostrar la aplicación principal */
        <App />
      )}
    </React.StrictMode>
  );
};

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

reportWebVitals();
