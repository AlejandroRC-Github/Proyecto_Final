import React from 'react';
import Cabecera from '../../Components/Home/Cabecera/Cabecera';
import Footer from '../../Components/Home/Footer/Footer';
import Galeria from '../../Components/Home/Galeria/Galeria';
import Navbar from '../../Components/Comun/Navbar/Navbar';


const Home = () => (
  <div>
    <Cabecera/>
    <Navbar/>
    <Galeria/>
    <Footer/>
  </div>
);

export default Home;