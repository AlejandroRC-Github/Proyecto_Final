import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'; // Importamos el componente Slider para mostrar los comentarios en un carrusel.
import Cabecera from '../../Components/Home/Cabecera/Cabecera'; // Importamos el componente de cabecera.
import Footer from '../../Components/Home/Footer/Footer'; // Importamos el componente de pie de página.
import './Home.css'; // Importamos los estilos específicos de esta página.
import 'slick-carousel/slick/slick.css'; // Importamos los estilos del carrusel.
import 'slick-carousel/slick/slick-theme.css'; // Importamos los estilos del tema del carrusel.

// Componente funcional para mostrar una valoración en forma de estrellas.
const StarRating = ({ rating }) => {
  // Definimos el número total de estrellas.
  const starsTotal = 5;
  // Redondeamos la valoración al número entero más cercano.
  const filledStars = Math.round(rating);

  // Retornamos una estructura de estrellas con algunas estrellas rellenas según la valoración.
  return (
    <div className="star-rating">
      {[...Array(starsTotal)].map((star, index) => {
        return (
          <span
            key={index}
            className={index < filledStars ? 'filled' : ''} // Agregamos la clase 'filled' para las estrellas rellenas.
          ></span>
        );
      })}
    </div>
  );
};

// Componente principal de la página de inicio.
const Home = () => {
  // Definimos dos estados: uno para almacenar los comentarios y otro para almacenar un nuevo comentario.
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState({
    name: 'Anónimo', // Establecemos el nombre predeterminado como "Anónimo".
    description: '',
    rating: 0 // Valoración inicial de 0 estrellas.
  });

  // useEffect se utiliza para realizar efectos secundarios en componentes funcionales, como cargar datos desde una API.
  useEffect(() => {
    // Hacemos una solicitud para obtener los comentarios desde la API REST cuando se carga la página.
    fetch('http://localhost:4001/comentarios')
      .then((response) => response.json()) // Convertimos la respuesta en formato JSON.
      .then((data) => {
        // Ajustamos los comentarios recibidos de la API.
        const filteredComentarios = data.map((comentario) => ({
          name: comentario.name || 'Anónimo', // Establecemos el nombre como "Anónimo" si está vacío.
          description: comentario.description || comentario.ruta || '', // Usamos la descripción o la ruta como descripción del comentario.
          rating: comentario.rating || 0 // Utilizamos la valoración del comentario o 0 si no está definida.
        }));
        // Establecemos los comentarios filtrados en el estado.
        setComentarios(filteredComentarios);
      })
      .catch((error) => console.error('Error fetching comments:', error)); // Manejamos errores en la solicitud.
  }, []); // El segundo argumento es un array vacío, lo que significa que este efecto solo se ejecuta una vez al montar el componente.

  // Función que maneja los cambios en los campos del formulario para un nuevo comentario.
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Obtenemos el nombre y el valor del campo del formulario.
    // Actualizamos el estado del nuevo comentario con el valor introducido en el campo del formulario.
    setNuevoComentario({ ...nuevoComentario, [name]: value });
  };

  // Función que maneja el envío del formulario para agregar un nuevo comentario.
  const handleSubmit = (e) => {
    e.preventDefault(); // Evitamos que el formulario se envíe de forma predeterminada.
    // Realizamos una solicitud POST a la API REST para agregar un nuevo comentario.
    fetch('http://localhost:4001/comentarios', {
      method: 'POST', // Especificamos el método HTTP como POST.
      headers: {
        'Content-Type': 'application/json', // Especificamos el tipo de contenido como JSON.
      },
      body: JSON.stringify(nuevoComentario), // Convertimos el objeto de comentario a JSON.
    })
      .then((response) => response.json()) // Convertimos la respuesta en formato JSON.
      .then((data) => {
        // Agregamos el nuevo comentario a la lista de comentarios existentes.
        setComentarios([...comentarios, data]);
        // Reiniciamos el formulario a su estado inicial.
        setNuevoComentario({
          name: 'Anónimo', // Establecemos el nombre predeterminado nuevamente.
          description: '',
          rating: 0 // Restablecemos la valoración a 0 estrellas.
        });
      })
      .catch((error) => console.error('Error adding comment:', error)); // Manejamos errores en la solicitud.
  };

  // Configuraciones para el componente Slider (carrusel de comentarios).
  const sliderSettings = {
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

      {/* Sección principal con una imagen de fondo y un texto. */}
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

      {/* Sección de objetivos de la asociación. */}
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

      {/* Sección de servicios gratuitos que ofrece la asociación. */}
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

      {/* Sección de retroalimentación de usuarios con opiniones y calificaciones. */}
      <div className="feedback-section">
        <div className="feedback-content">
          <div className="feedback-left">
            <h2>75% opiniones positivas de nuestros usuarios</h2>
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

      {/* Sección de reseñas de Google con un carrusel de comentarios. */}
      <div className="reseñas">
        <h2>Reseñas de Google</h2>
        {/* Slider para mostrar los comentarios en un carrusel. */}
        <Slider {...sliderSettings}>
          {/* Mapeamos cada comentario y lo mostramos dentro de un div con la clase "reseña". */}
          {comentarios.map((comentario) => (
                        <div key={comentario.id} className="reseña">
                        <p><strong>Nombre:</strong> {comentario.name}</p>
                        <p><strong>Descripción:</strong> {comentario.description}</p>
                        {/* Mostramos la valoración del comentario utilizando el componente StarRating. */}
                        <StarRating rating={comentario.rating} />
                      </div>
                    ))}
                  </Slider>
          
                  {/* Formulario para agregar una nueva reseña. */}
                  <h3>Añadir Reseña</h3>
                  <form onSubmit={handleSubmit} className="review-form">
                    {/* Campo para ingresar la valoración del nuevo comentario. */}
                    <div className="form-group">
                      <label>Valoración:</label>
                      {/* Utilizamos un input de tipo number para la valoración, con un rango de 0 a 5. */}
                      <input
                        type="number"
                        name="rating"
                        value={nuevoComentario.rating}
                        min="0"
                        max="5"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    {/* Campo para ingresar la descripción del nuevo comentario. */}
                    <div className="form-group">
                      <label>Descripción:</label>
                      {/* Utilizamos un textarea para la descripción del comentario. */}
                      <textarea
                        name="description"
                        value={nuevoComentario.description}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    {/* Botón para enviar el formulario y agregar el nuevo comentario. */}
                    <button type="submit">Enviar</button>
                  </form>
                </div>
          
                {/* Componente de pie de página. */}
                <Footer />
              </div>
            );
          };
          
          export default Home;
          
