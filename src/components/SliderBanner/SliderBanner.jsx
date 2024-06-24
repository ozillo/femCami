import React, { useState } from "react";
import PrintSlider from "../PrintSlider/PrintSlider";
import "./SliderBanner.css";
const SliderBanner = () => {
    const images = [
        "https://res.cloudinary.com/dtfugozix/image/upload/v1719235302/Fem%20Cami/Publicaciones%20Eventos/grup_de_suport_adultses_autistes_ordi_vy1hlf.png",
        "https://res.cloudinary.com/dtfugozix/image/upload/v1719234165/Fem%20Cami/Publicaciones%20Eventos/1_kpt2te.png",
        "https://res.cloudinary.com/dtfugozix/image/upload/v1719234122/Fem%20Cami/Publicaciones%20Eventos/2_dvmlkm.png",
        "https://res.cloudinary.com/dtfugozix/image/upload/v1719234093/Fem%20Cami/Publicaciones%20Eventos/3_viig7n.png",
        "https://res.cloudinary.com/dtfugozix/image/upload/v1719234026/Fem%20Cami/Publicaciones%20Eventos/4_j0ewea.png",
    ];

    return (
        <div className="div-slider-banner-home-page">
            <PrintSlider images={images} />
        </div>
    );
};

export default SliderBanner;
