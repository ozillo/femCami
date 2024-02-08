import React from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import AcordeonTypeColor from "../components/AcordeonTypeColor/AcordeonTypeColor";
import "./Autismo.css"

const Contacto = () => {
    return (
        <>
        <section className="section-title-description-page">
            <h1 className="title-page">Contacte</h1>
            </section>
       
            <AcordeonTypeColor optionType={"blue"} />
            <AcordeonTypeColor optionType={"orange"} />
            <AcordeonTypeColor optionType={"green"} />
        </>
    );
};

export default Contacto;
