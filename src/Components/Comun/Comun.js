import Cabecera from '../Cabecera/Cabecera';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import React from 'react';

function Comun() {

  return (
    <div className="Comun">
     
   
      <Cabecera/>
   
        <Outlet />
   
      <Footer/>
      
    </div>
  );
}

export default Comun;