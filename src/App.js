import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import Sobre_nosotros from './Components/Sobre_nosotros';
import Contacto from './Components/contacto/Contacto';
import NotFound from './Components/NotFound/NotFound';
import Servicios from './Components/servicios/Servicios';
import Autodiagnostico from './Components/Autodiagnostico/Autodiagnostico';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">

        </header>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Sobre_Nosotros" component={Sobre_nosotros} />
          <Route path="/Contacto" component={Contacto} />
          <Route path="/Servicios" component={Servicios}/>
          <Route path="/Autodiagnostico" component={Autodiagnostico}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;