import React from 'react';

const Contacto = () => {
  return (
    <div>
      {/* Cabecera */}
      <header>
        <div className="cabecera">
          <img src="../imagenes/Logo.png.jpeg" alt="Logo" />
          <div className="BarraVertical"></div>
          <div className="Nombre">
            <h1>
              ALCOHOLICOS EN RECUPERACION <br />
              GRUPO NORORESTE
            </h1>
            <p>
              Registro Nacional de Asociaciones seccion 1º/622444 CIF:G 70530688
            </p>
          </div>
          <div className="ImagenesTopRight">
            <img src="../Imagenes/concellocoruna.png" alt="AyuntamientoCoruña" />
            <img src="../Imagenes/MinisterioDelInterior.png" alt="GobiernoEspaña" />
            <img src="../Imagenes/UnionEuropea.png" alt="UnionEuropea" />
          </div>
        </div>
      </header>

      <div className="imagen">
        <ul>
          <li><a href="../HTMLS/HTML_De_PaginaPrincipal.html">Inicio</a></li>
          <li><a href="../HTMLS/HTML_SobreNosotros.html">Sobre nosotros</a></li>
          <li><a href="../HTMLS/HTML_Servicios.html">Servicios</a></li>
          <li><a className="activo" href="../HTMLS/HTML_Encuentranos.html">Encuentranos</a></li>
          <li><a href="../HTMLS/HTML_Familias.html">Familias</a></li>
          <li><a href="../HTMLS/HTML_SoyAlcoholico.html">¿Soy Alcoholico?</a></li>
        </ul>
      </div>

      <div className="Ubicacion">
        <h1>UBICACION DE NUESTRA ASOCIACION</h1>
      </div>

      <hr />

      <div className="caja">
        <div className="textoizquierda">
          <h3>
            <pre>CALLE PAN DE SORALUCE 2</pre>
            <pre>BAJO</pre>
            <pre>15007</pre>
            <pre>A Coruña</pre>
          </h3><br /><br /><br />
        </div>
        <div className="imagenderecha">
          <img className="imagendelacalle" src="../Imagenes/ImagenCalle.png" alt="imagendelacalle" />
        </div>
      </div>

      <hr />

      <div className="dos">
        <img src="../Imagenes/chicossentados.png" alt="ServiciosGratuitos" />
        <h4>
          <pre>Se realizan juntas, cada 2 horas, hasta un total de</pre>
          <pre>12 juntas por dia en una sala de reuniones de 250 m2 y un aforo de 120</pre>
          <pre>personas</pre>
        </h4>
      </div>

      <hr />

      <div className="tres">
        <h4>
          <pre>LA UBICACIÓN DE NUESTRAS INSTALACIONES ESTAN SITUADAS MUY CERCA DE LOS</pre>
          <pre>JUZGADOS DE A CORUÑA Y EN LA ESQUINA DEL BAR CHAFLÁN</pre>
        </h4>
      </div>

      <hr />

      <div className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.9538767830095!2d-8.410160723276762!3d43.35707537111768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e7c90005af621%3A0x5b61a8514e1c3a17!2sC.%20Pan%20de%20Soraluce%2C%202%2C%2015007%20A%20Coru%C3%B1a%2C%20La%20Coru%C3%B1a!5e0!3m2!1ses!2ses!4v1708276801176!5m2!1ses!2ses"
          width="600"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <footer className="footer">
        <div className="footer-top">
          <p>Politica de privacidad</p>
          <div className="llamada">
            <p>881309391 663868972</p>
          </div>
          <div className="gmail">
            <p>noroeste@aa24horas.es</p>
          </div>
        </div>
        <br />
        <div className="footer-bottom">
          <p>Términos y Cookies</p>
          <div className="mapa">
            <p>Calle Pan de Soraluce 2, Bajo 15007 A Coruña</p>
        </div>
            <div className="soporte">
                <p>Servicio 24 horas</p>
            </div>
        </div>
        </footer>
    </div>
    );
}
export default Contacto;