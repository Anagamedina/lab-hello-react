/* Resetear estilos por defecto del navegador */
import React from "react";
import "./ImageSection.css";
import img1 from "../images/icon1.png";
import img2 from "../images/icon2.png";
import img3 from "../images/icon3.png";
import img4 from "../images/icon4.png";

const ImageSection = ({ logo }) => {
  // Asegúrate de recibir 'logo' como prop
  return (
    <div className="imageBoxes">
      <div>
        <img src={img1} />
        <h2>Deaclarative</h2>
        <p>Test hello there</p>
      </div>
      <div>
        <img src={img2} />
        <h2>Deaclarative</h2>
        <p>Test hello there</p>
      </div> <div>
        <img src={img3} />
        <h2>Deaclarative</h2>
        <p>Test hello there</p>
      </div> <div>
        <img src={img4} />
        <h2>Deaclarative</h2>
        <p>Test hello there</p>
      </div>
      {/* <img src={img2} />
      <img src={img3} />
      <img src={img4} /> */}
    </div>
  );
};

export default ImageSection;
