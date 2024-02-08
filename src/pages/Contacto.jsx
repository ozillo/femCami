import React, { useEffect } from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import AcordeonTypeColor from "../components/AcordeonTypeColor/AcordeonTypeColor";
<<<<<<< HEAD
import "./Autismo.css"
=======
import "./Contacto.css";
import { initialScrollTop } from "../utils/controlScroll";
>>>>>>> 8347caf9764bdb1fea257fcec27fdd3ff3b99987

const Contacto = () => {
    useEffect(() => {
        initialScrollTop();
    }, []);
    return (
        <>
<<<<<<< HEAD
        <section className="section-title-description-page">
            <h1 className="title-page">Contacte</h1>
            </section>
       
            <AcordeonTypeColor optionType={"blue"} />
            <AcordeonTypeColor optionType={"orange"} />
            <AcordeonTypeColor optionType={"green"} />
=======
            <section className="section-contacte-general-info"></section>
            <section className="section-contacte-ubication-map"></section>
            <section className="section-contacte-formulario"></section>
>>>>>>> 8347caf9764bdb1fea257fcec27fdd3ff3b99987
        </>
    );
};

export default Contacto;
