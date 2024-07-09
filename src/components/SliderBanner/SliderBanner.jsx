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
    const imgTablet = [
        "https://res.cloudinary.com/dtfugozix/image/upload/v1720539336/Fem%20Cami/Publicaciones%20Eventos/TABLET/grups_de_suport_adultses_autistes_tablet_chgcml.png",
        "https://res.cloudinary.com/dtfugozix/image/upload/v1720039993/Fem%20Cami/Publicaciones%20Eventos/TABLET/3_eum668.png",
        "https://res.cloudinary.com/dtfugozix/image/upload/v1720039992/Fem%20Cami/Publicaciones%20Eventos/TABLET/4_ac5hch.png",
        "https://res.cloudinary.com/dtfugozix/image/upload/v1720039993/Fem%20Cami/Publicaciones%20Eventos/TABLET/2_jrqqsy.png",
        "https://res.cloudinary.com/dtfugozix/image/upload/v1720039991/Fem%20Cami/Publicaciones%20Eventos/TABLET/1_keh95c.png",
    ];
    const imgTlf = [
        "https://res.cloudinary.com/dtfugozix/image/upload/v1720540396/Fem%20Cami/Publicaciones%20Eventos/TELEFONO/grup_de_suport_adultses_autistes_mobil_xmtalz.png",
        "https://res.cloudinary.com/dtfugozix/image/upload/v1720534769/Fem%20Cami/Publicaciones%20Eventos/TELEFONO/3_khp0gc.png",
        "https://res.cloudinary.com/dtfugozix/image/upload/v1720534769/Fem%20Cami/Publicaciones%20Eventos/TELEFONO/4_xtv5ih.png",
        "https://res.cloudinary.com/dtfugozix/image/upload/v1720534769/Fem%20Cami/Publicaciones%20Eventos/TELEFONO/2_u6u4s4.png",
        "https://res.cloudinary.com/dtfugozix/image/upload/v1720534770/Fem%20Cami/Publicaciones%20Eventos/TELEFONO/1_z0ucua.png",
    ];
    
    return (
        <div className="div-slider-banner-home-page">
            <PrintSlider images={images} />
            <PrintSlider images={imgTablet}/>
            <PrintSlider images={imgTlf}/>
        </div>
    );
};

export default SliderBanner;
