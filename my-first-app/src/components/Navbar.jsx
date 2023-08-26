/* Resetear estilos por defecto del navegador */
import React from 'react';
import './Navbar.css';

const Navbar = ({ logo }) => { // Asegúrate de recibir 'logo' como prop
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-list">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
