import React, { useState } from "react";
import PrintSlider from "../PrintSlider/PrintSlider";


const SliderBanner = () => {
    const images = [
      'https://res.cloudinary.com/dtfugozix/image/upload/v1706571775/Fem%20Cami/BANNER/SOMCENTRE2_neispz.png',
      'https://res.cloudinary.com/dtfugozix/image/upload/v1706568601/Fem%20Cami/BANNER/SOMCENTREESPECIFIC1_dgrn2g.png',
      'https://res.cloudinary.com/dtfugozix/image/upload/v1706571775/Fem%20Cami/BANNER/SOMCENTRE2_neispz.png'

      
    ];
  
    return (
      <div>
        <h1>Slider de Imágenes</h1>
        <PrintSlider images= {images}/>
      </div>
    );
  };
  
  export default SliderBanner;