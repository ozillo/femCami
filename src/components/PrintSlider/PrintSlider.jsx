import React, { useState } from "react";
import { FcPrevious, FcNext } from "react-icons/fc";
import "./PrintSlider.css";

const PrintSlider = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const goToPreviousSlide = () => {
        // const newPosition = (currentImage -1)?(currentImage===0):(images.length);
        currentImage == 0
            ? setCurrentImage(0)
            : setCurrentImage(currentImage - 1);
        //     if (currentImage==0){
        // setCurrentImage(0)
        //     }else{
        // setCurrentImage(currentImage -1)
        //     }
    };

    const goToNextSlide = () => {
        // const newPosition = (currentImage+1);
        // if (currentImage==images.length-1){
        //   setCurrentImage(images.length-1)
        //       }else{
        //   setCurrentImage(currentImage +1)
        currentImage == images.length - 1
            ? setCurrentImage(images.length - 1)
            : setCurrentImage(currentImage + 1);
    };

    return (
        <>
            <img src={images[currentImage]} className="img-banner-tallers" />
            <div className="div-previous-next">
                <button className="btn-previous" onClick={goToPreviousSlide}>
                    <FcPrevious className="btn-previous-slider" />
                </button>
                <p>
                    {currentImage + 1} de {images.length}
                </p>
                <button className="btn-next" onClick={goToNextSlide}>
                    <FcNext className="btn-next-slider" />
                </button>
            </div>
        </>
    );
};

export default PrintSlider;
