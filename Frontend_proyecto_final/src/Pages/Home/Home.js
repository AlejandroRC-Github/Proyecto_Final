import React, { useState, useEffect } from 'react';
import Cabecera from '../../Components/Home/Cabecera/Cabecera';
import Footer from '../../Components/Home/Footer/Footer';
import Galeria from '../../Components/Home/Galeria/Galeria';
import Navbar from '../../Components/Comun/Navbar/Navbar';
import './Home.css'; 

const Home = () => {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    fetch('/comentarios')
      .then((response) => response.json())
      .then((data) => setComentarios(data));
  }, []);

  return (
    <div>
      <Cabecera />
      <Navbar />
      <div className="extra-section">
        <div className="barraHorizontal">
          <h4></h4>
        </div>
        <div className="contactanos">
          <h4>
            SI TU FORMA DE BEBER TE HA LLEVADO A VIVIR SITUACIONES <br />
            COMPLICADAS. QUIZÁ SEA EL MOMENTO EN EL QUE TE PODAMOS <br />
            AYUDAR.
          </h4>
          <a href="#CONTACTANOS">CONTÁCTANOS</a>
        </div>
        <div className="barraHorizontal2">
          <h3></h3>
        </div>
      </div>
      <Galeria />
      <div className="reseñas">
        <h2>Reseñas de Google</h2>
        <ul>
          {comentarios.map((comentario) => (
            <li key={comentario.id}>
              <p>{comentario.ruta}</p>
              <p>{comentario.name}</p>
              <p>{comentario.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
