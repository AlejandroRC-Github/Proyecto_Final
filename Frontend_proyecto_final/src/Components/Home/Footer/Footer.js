import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">Política de privacidad</h4>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod ultrices odio, non feugiat urna facilisis ut.</p>
        </div>
        <div className="llamada">
          <h4 className="text-lg font-semibold mb-4">Contáctanos</h4>
          <p className="text-sm">Teléfono: 881309391</p>
          <p className="text-sm">Correo electrónico: noroeste@aa24horas.es</p>
        </div>
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Términos y Cookies</h4>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod ultrices odio, non feugiat urna facilisis ut.</p>
          </div>
          <div className="mapa">
            <h4 className="text-lg font-semibold mb-4">Ubicación</h4>
            <p className="text-sm">Calle Pan de Soraluce 2, Bajo</p>
            <p className="text-sm">15007 A Coruña</p>
          </div>
          <div className="soporte">
            <h4 className="text-lg font-semibold mb-4">Servicio 24 horas</h4>
            <p className="text-sm">Teléfono: 663868972</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
