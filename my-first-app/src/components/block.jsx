import React from 'react';

const ImageSection = () => {
  return (
    <div className="image-section">
      <div className="image-container">
      <h1>Declarative</h1>
        <img src="/images/icon1.png" alt="Imagen 1" />
        <p></p>
      </div>
      
      <div className="image-container">
      <h1>Single-way</h1>
        <img src="/images/icon2.png" alt="Imagen 2" />
        <p></p>
      </div>
     
      <div className="image-container">
      <h1>JSX</h1>
        <img src="/images/icon3.png" alt="Imagen 3" />
        <p></p>
      </div>
    </div>
  );
};
 
export default ImageSection;
