import React, { useState } from "react";
import PrintSlider from "../PrintSlider/PrintSlider";


const SliderBanner = () => {
    const images = [
      'https://res.cloudinary.com/dtfugozix/image/upload/v1706571775/Fem%20Cami/BANNER/SOMCENTRE2_neispz.png',
      'https://res.cloudinary.com/dtfugozix/image/upload/v1706875650/Fem%20Cami/BANNER/BANNER2TALLERS_ey5sqj.png',
      'https://res.cloudinary.com/dtfugozix/image/upload/v1706875614/Fem%20Cami/BANNER/BANNER1TALLERS_jgrujg.png'

      
    ];
  
    return (
      <div>
        <PrintSlider images= {images}/>
      </div>
    );
  };
  
  export default SliderBanner;