import React, { useState } from 'react';
import Cabecera from '../../Components/Home/Cabecera/Cabecera';
import Footer from '../../Components/Home/Footer/Footer';
import Navbar from '../../Components/Comun/Navbar/Navbar';
import './Autodiagnostico.css';

const Autodiagnostico = () => {
  const [paginaActual, setPaginaActual] = useState(1);
  const [respuestas, setRespuestas] = useState(Array(21).fill(''));
  const [mensaje, setMensaje] = useState('');

  const preguntas = [
    "¿Alguien de tu familia o cercano a ti te ha llamado la atención porque bebes?",
    "¿Buscas disculpas para tratar de justificar tu forma de beber?",
    "¿Has perdido el control cuando estás bebiendo?",
    "¿Tienes remordimientos persistentes porque bebes?",
    "¿Has tratado de cambiar tu tipo de bebida para ver si así bebes menos?",
    "¿Has tenido lagunas mentales (pérdidas de memoria) al beber?",
    "¿Has intentado dejar de beber durante un cierto período de tiempo, sin conseguirlo?",
    "¿Te molesta que hablen de tu manera de beber?",
    "¿Has sentido alguna vez que deberías dejar de beber?",
    "¿Tu vida familiar se ve afectada porque sigues bebiendo?",
    "¿Has entrado en el círculo vicioso de tener que beber para disipar los problemas de la borrachera anterior?",
    "¿Has intentado beber tan solo una copa para terminar con una borrachera?",
    "¿Has llegado a beber alguna copa por las mañanas?",
    "¿Tienes inquietud constante al beber?",
    "¿Has sido hospitalizado alguna vez a causa de la bebida?",
    "¿Has perdido amigos a causa de la bebida?",
    "¿Sigues afirmando que puedes dejar de beber cuando quieras, a pesar de que no puedes?",
    "¿Sientes temores y angustias despues de beber?",
    "¿Envidias a las persona que pueden beber sin meterse en problemas?",
    "¿Has llegado al grado de emborracharte más pronto con menos bebidas?",
    "¿Alguna vez bebes a escondidas?"
  ];

  const handleRespuestaChange = (index, value) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[index] = value;
    setRespuestas(nuevasRespuestas);
  };

  const mostrarSiguientePregunta = () => {
    const todasRespondidas = respuestas.slice(0, paginaActual).every((respuesta) => respuesta !== '');
    if (todasRespondidas) {
      if (paginaActual < preguntas.length) {
        setPaginaActual(paginaActual + 1);
      } else {
        obtenerRespuestas();
      }
    } else {
      alert('Por favor, responde a la pregunta actual antes de continuar.');
    }
  };

  const mostrarPreguntaAnterior = () => {
    setPaginaActual(paginaActual - 1);
  };

  const obtenerRespuestas = () => {
    const contadorSi = respuestas.filter((respuesta) => respuesta === 'si').length;
    let mensaje = "";

    if (contadorSi === 1) {
      mensaje = "Entre tus respuestas se encuentra tan solo un sí, lo más seguro es que no tengas problemas con tu manera de beber.";
    } else if (contadorSi === 2) {
      mensaje = "Entre tus respuestas se encuentran dos sí, todavía no eres un bebedor problema. Pero puedes llegar a serlo.";
    } else if (contadorSi >= 3) {
      mensaje = "En base a tus respuestas, lo más probable es que seas un bebedor problema y que el tema del alcohol es más grave de lo que pensabas hasta ahora. La decisión de si podemos resultarte útil es tan solo tuya. Pero recuerda: Padecer una enfermedad no es motivo de vergüenza y mucho menos lo es pedir ayuda. Nosotros así tuvimos que hacerlo algún día... ¡y la encontramos! Permítenos que te enseñemos cómo, ¡llámanos ya!";
    } else {
      mensaje = "No tienes problemas graves relacionados con el alcohol.";
    }

    setMensaje(mensaje);
  };

  return (
    <div>
      <Cabecera />
      <div className="hero">
        <div className="hero-text">
          Autodiagnóstico: ¿Tienes problemas con el Alcohol?
        </div>
      </div>
      <div className="content-container">
        <div className="info-section">
          <h3>¿Cómo funciona este Autodiagnostico?</h3>
          <p>
            Este formulario ha sido creado para que una persona que tenga dudas acerca de si puede tener o no algún problema relacionado con el alcoholismo pueda saberlo rápidamente y así pueda acudir a nuestro centro lo antes posible.<br /><br />
            Cabe tener en cuenta que toda la información a la hora de contestar el formulario no será guardada, es decir, es completamente anónimo.<br /><br />
            Todas las preguntas que te encontrarás en el autodiagnóstico son síntomas relacionados con el alcoholismo y debes tomarte en serio la respuesta del mismo ya que puede ser un gran indicativo de que debes pedir ayuda, así que.<br /><br />
            ¿Por qué no intentas responder con sinceridad para ti mismo el siguiente autodiagnóstico?
          </p>
        </div>
        <div className="form-section">
          <div className="autodiagnostico-container">
            <div className="autodiagnostico-form">
              <label htmlFor={`pregunta${paginaActual}`}>{paginaActual}. {preguntas[paginaActual - 1]}</label>
              <select
                id={`pregunta${paginaActual}`}
                value={respuestas[paginaActual - 1]}
                onChange={(e) => handleRespuestaChange(paginaActual - 1, e.target.value)}
              >
                <option value="" disabled>Selecciona una opción</option>
                <option value="si">Sí</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="button-container">
              {paginaActual > 1 && (
                <button 
                  className="prev-button" 
                  onClick={mostrarPreguntaAnterior}
                >
                  Volver
                </button>
              )}
              <button
                className="next-button"
                onClick={mostrarSiguientePregunta}
              >
                {paginaActual < preguntas.length ? 'Siguiente' : 'Enviar'}
              </button>
            </div>
            {mensaje && <div className="mensaje">{mensaje}</div>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Autodiagnostico;
