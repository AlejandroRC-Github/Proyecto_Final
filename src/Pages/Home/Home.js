import React from 'react';
import Cabecera from '../../Components/Home/Cabecera/Cabecera';
import Footer from '../../Components/Home/Footer/Footer';
import Galeria from '../../Components/Home/Galeria/Galeria';
import Navbar from '../../Components/Home/Navbar/Navbar';
import './Home.css';

const Home = () => (
  <div>
    <Cabecera />
    <Navbar />
    <Galeria />
    <Footer />
  </div>
);

export default Home;