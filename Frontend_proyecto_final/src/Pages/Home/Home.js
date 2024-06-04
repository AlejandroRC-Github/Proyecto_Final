import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Cabecera from '../../Components/Home/Cabecera/Cabecera';
import Footer from '../../Components/Home/Footer/Footer';
import './Home.css'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState({
    name: '',
    description: ''
  });

  // Obtener comentarios desde la API REST
  
  useEffect(() => {
    fetch('http://localhost:4001/comentarios')
      .then((response) => response.json())
      .then((data) => {
        // Filtrar y ajustar comentarios
        const filteredComentarios = data.map((comentario) => ({
          name: comentario.name,
          description: comentario.description || comentario.ruta || ""
        }));
        setComentarios(filteredComentarios);
      })
      .catch((error) => console.error('Error fetching comments:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoComentario({ ...nuevoComentario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:4001/comentarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevoComentario),
    })
      .then((response) => response.json())
      .then((data) => {
        setComentarios([...comentarios, data]);
        setNuevoComentario({
          name: '',
          description: ''
        });
      })
      .catch((error) => console.error('Error adding comment:', error));
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <div>
      <Cabecera />
      <div className="hero-section">
        <img
          src="https://aa24horas.es/wp-content/uploads/2024/04/dreamstime_l_143113874-1706x960-1.jpg"
          alt="Hero"
          className="hero-image"
        />
        <div className="hero-text">
          <h4>SI TU FORMA DE BEBER TE HA LLEVADO A VIVIR SITUACIONES <br /> COMPLICADAS. QUIZÁ SEA EL MOMENTO EN EL QUE TE PODAMOS <br /> AYUDAR.</h4>
          <a href="#CONTACTANOS" className="hero-button">CONTÁCTANOS</a>
        </div>
      </div>
      <div className="objectives-section">
        <div className="objectives-content">
          <div className="left">
            <h2>Nuestro objetivo</h2>
          </div>
          <div className="right">
            <p>
              Grupo 24 horas: apoyo y recuperación en A Coruña
              La asociación de alcohólicos anónimos en A Coruña ofrece servicios de ayuda las 24 horas para personas con problemas de alcoholismo que deseen dejar de beber o necesiten apoyo durante tiempos difíciles para evitar recaídas. Nuestro único objetivo es ayudar al enfermo alcohólico durante su desintoxicación y brindar apoyo continuo para prevenir recaídas.
            </p>
          </div>
        </div>
      </div>
      <div className="services-section">
        <h2>Servicios Gratuitos</h2>
        <div className="services-columns">
          <div className="service">
            <h3>Evaluación inicial</h3>
            <p>Se evaluarán a las personas con la colaboración de los servicios públicos de la salud, los cuales diseñarán un plan personalizado para el día a día.</p>
          </div>
          <div className="service">
            <h3>Desintoxicación segura</h3>
            <p>Se eliminará el alcohol del cuerpo en un proceso regulado por servicios públicos de la salud como médicos de familia entre otros. El grupo supervisa al individuo las 24H.</p>
          </div>
          <div className="service">
            <h3>Residencia puntual</h3>
            <p>Residencia para personas que no residen en A Coruña, personas sin hogar o que no se puedan desplazar a diario a nuestra asociación.</p>
          </div>
          <div className="service">
            <h3>Concienciación del problema</h3>
            <p>Tras el proceso inicial, se inicia una fase de concienciación sobre el problema, que incluye sesiones individuales, grupales, charlas de concientización y prevención.</p>
          </div>
        </div>
      </div>
      <div className="feedback-section">
        <div className="feedback-content">
          <div className="feedback-left">
            <h2>75%% opiniones positivas de nuestros usuarios</h2>
            <div className="stars">
              ★★★★☆
            </div>
          </div>
          <div className="feedback-right">
            <div className="progress">
              <span>Excelente</span>
              <div className="progress-bar excellent"></div>
            </div>
            <div className="progress">
              <span>Bueno</span>
              <div className="progress-bar good"></div>
            </div>
            <div className="progress">
            <span>Malo</span>
              <div className="progress-bar bad"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="reseñas">
        <h2>Reseñas de Google</h2>
        <Slider {...sliderSettings}>
          {comentarios.map((comentario) => (
            <div key={comentario.id} className="reseña">
              <p><strong>Nombre:</strong> {comentario.name}</p>
              <p><strong>Descripción:</strong> {comentario.description}</p>
            </div>
          ))}
        </Slider>
        <h3>Añadir Reseña</h3>
        <form onSubmit={handleSubmit} className="review-form">
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              value={nuevoComentario.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Descripción:</label>
            <textarea
              name="description"
              value={nuevoComentario.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
