import React, { useEffect } from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import AcordeonTypeColor from "../components/AcordeonTypeColor/AcordeonTypeColor";
import { arrayTerapiaOcupacional } from "../data/arrayServeis";
import "./Autismo.css";
import { initialScrollTop } from "../utils/controlScroll";

const ServeisTerapiaOcupacional = () => {
    useEffect(() => {
        initialScrollTop();
    }, []);
    return (
        <>
            <section className="section-title-services-page">
                <h1 className="title-page">Terapia Ocupacional</h1>
            </section>
            <section className="section-principal-page-description-acordeon">
                <div className="div-page-main-description">
                    <p>{arrayTerapiaOcupacional[0].mainDescription}</p>
                    <img
                        src={arrayTerapiaOcupacional[0].icon}
                        alt="iconQueEs"
                    />
                </div>
                <div className="div-page-main-acordeon">
                    <AcordeonTypeColor
                        optionType={"green"}
                        arrayData={arrayTerapiaOcupacional[0].content}
                    />
                </div>
            </section>
        </>
    );
};

export default ServeisTerapiaOcupacional;
