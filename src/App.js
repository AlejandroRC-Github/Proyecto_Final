import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import HomePage from './components/Home';
import AboutPage from './components/Sobre_nosotros';
import ContactPage from './components/Contacto';
import NotFoundPage from './components/NotFoundPage';

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
          <Route component={NotFoundPage} /> /*Ruta para página no encontrada*/
        </Switch>
      </div>
    </Router>
  );
}

export default App;
