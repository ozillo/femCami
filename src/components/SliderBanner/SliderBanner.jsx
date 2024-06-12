import React, { useState } from "react";
import PrintSlider from "../PrintSlider/PrintSlider";
import "./SliderBanner.css";
const SliderBanner = () => {
    const images = [
        "https://res.cloudinary.com/dtfugozix/image/upload/v1706881063/Fem%20Cami/BANNER/BANNERTALLERS2_wu2x6i.png",
        "https://res.cloudinary.com/dtfugozix/image/upload/v1706881063/Fem%20Cami/BANNER/BANNERTALLERS3_dnkcne.png",
        "https://res.cloudinary.com/dtfugozix/image/upload/v1706881063/Fem%20Cami/BANNER/BANNERTALLERS1_hudfsp.png",
    ];

    return (
        <div className="div-slider-banner-home-page">
            <PrintSlider images={images} />
        </div>
    );
};

export default SliderBanner;
