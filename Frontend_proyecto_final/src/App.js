import React from 'react';
import Home from './Pages/Home/Home';
import Sobre_nosotros from './Pages/Sobre_nosotros/Sobre_nosotros';
import Contacto from './Components/Contacto/Contacto';
import Servicios from './Components/Servicios/Servicios';
import LoadingAnimation from './Components/AnimaciondeCarga/LoadingAnimation';
import Autodiagnostico from './Components/Autodiagnostico/Autodiagnostico';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => (

  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Sobre_nosotros" element={<Sobre_nosotros/>} />
      <Route path="/Servicios" element={<Servicios/>} />
      <Route path="/Autodiagnostico" element={<Autodiagnostico/>} />
      <Route path="/Contacto" element={<Contacto/>} />
    </Routes>
  <div className="App">
    
  </div>
  </Router>
);

export default App;