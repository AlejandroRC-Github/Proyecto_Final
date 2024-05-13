import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import home from '../Páginas/home';
import sobre_nosotros from '../Páginas/SobreNosotros';
import contacto from '../Páginas/contacto';
import servicios from '../Páginas/contacto';
import autodiagnostico from '..Páginas/autodiagnostico';
import NotFoundPage from './Páginas/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Sobre_Nosotros" component={SobreNosotros} />
          <Route path="/contacto" component={Contacto} />
          <Route component={NotFoundPage} /> 
          <Route component={NotFoundPage} /> /*Ruta para página no encontrada*/

        </Switch>
      </div>
    </Router>
  );
}

export default App;