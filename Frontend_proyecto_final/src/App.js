import React from 'react';
import Home from './Pages/Home/Home';
import Cabecera from './Components/Home/Cabecera/Cabecera';
import Footer from './Components/Home/Footer/Footer';
import Sobre_nosotros from './Pages/Sobre_nosotros/Sobre_nosotros';
import Contacto from './Pages/Contacto/Contacto';
import Servicios from './Components/Servicios/Servicios';
import LoadingAnimation from './Components/AnimaciondeCarga/LoadingAnimation';
import Autodiagnostico from './Components/Autodiagnostico/Autodiagnostico';
import ConcienciacionProblema from './Components/Servicios/Servicios2/ConcienciacionProblema/ConcienciacionProblema';
import DesintoxicacionSegura from './Components/Servicios/Servicios2/DesintoxicacionSegura/DesintoxicaciónSegura';
import EvaluacionInicial from './Components/Servicios/Servicios2/EvInicial/EvInicial';
import ResidenciaPuntual from './Components/Servicios/Servicios2/ResidenciaPuntual/ResidenciaPuntual';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Sobre_nosotros" element={<Sobre_nosotros/>} />
      <Route path="/Servicios" element={<Servicios/>} />
      <Route path="/Servicios/concienciacion-problema" element={<ConcienciacionProblema/>} />
      <Route path="/Servicios/desintoxicacion-segura" element={<DesintoxicacionSegura/>} />
      <Route path="/Servicios/ev-inicial" element={<EvaluacionInicial/>} />
      <Route path="/Servicios/residencia-puntual" element={<ResidenciaPuntual/>} />
      <Route path="/Autodiagnostico" element={<Autodiagnostico/>} />
      <Route path="/Contacto" element={<Contacto/>} />
    </Routes>
  </Router>
);

export default App;
