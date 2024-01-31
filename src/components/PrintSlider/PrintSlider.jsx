import React, { useState } from 'react';
import "./PrintSlider.css"




const PrintSlider = ({images}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className='div-previous-next'>
      <button className='btn-previous' onClick={goToPreviousSlide} >
        Prev
      </button>
      <button className='btn-next' onClick={goToNextSlide}>
        Next
      </button>
      <img
        src={images}
      />
    </div>
  );
};

export default PrintSlider;
