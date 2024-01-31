import React, { useState } from "react";


const PrintSlider = () => {
    const images = [
      'url-de-la-imagen-1.jpg',
      'url-de-la-imagen-2.jpg',
      'url-de-la-imagen-3.jpg',
      // Agrega más URLs de imágenes según sea necesario
    ];
  
    return (
      <div>
        <h1>Slider de Imágenes</h1>
        <ImageSlider images={images} />
      </div>
    );
  };
  
  export default PrintSlider;