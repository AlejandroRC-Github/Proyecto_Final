import Cabecera from '../Cabecera/Cabecera';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar/Navbar';

function Comun() {

  return (
    <div className="Comun">
     
   
      <Cabecera/>

      <Navbar/>
        <Outlet />
   
      <Footer/>
      
    </div>
  );
}

export default Comun;