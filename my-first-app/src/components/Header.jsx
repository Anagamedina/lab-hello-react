/* Resetear estilos por defecto del navegador */
import React from "react";
import "./Header.css";
import imgxs from "../images/ironhack-logo-xs.png";
import imgxs2 from "../images/menu-top-xs.png";

const Header = () => {
  return (
    <div className="header">
      <div className="iconsBar">
        <img src={imgxs} />
        <div>
          <img src={imgxs2} />
        </div>
      </div>

      <div className="headerContent">
        <h1 className="title">Say hello to reactjs</h1>
        <p>You will learn......</p> 

        <button>Awesome!</button>
      </div>
    </div>
  );
};

export default Header;
