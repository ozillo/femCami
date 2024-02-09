import React, { useEffect } from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import AcordeonTypeColor from "../components/AcordeonTypeColor/AcordeonTypeColor";
import "./Contacto.css";
import { initialScrollTop } from "../utils/controlScroll";

const Contacto = () => {
    useEffect(() => {
        initialScrollTop();
    }, []);
    return (
        <>
            <section className="section-contacte-general-info"></section>
            <section className="section-contacte-ubication-map"></section>
            <section className="section-contacte-formulario"></section>
        </>
    );
};

export default Contacto;
