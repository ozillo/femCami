import React from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import AcordeonTypeColor from "../components/AcordeonTypeColor/AcordeonTypeColor";
import { arrayTerapiaOcupacional } from "../data/arrayServeis";
import "./Autismo.css";
const ServeisTerapiaOcupacional = () => {
    return (
        <>
            <BannerTitulo />
            <section className="section-principal-page-description-acordeon">
                <div className="div-page-main-description">
                    <h2>Terapia ocupacional</h2>
                    <p>{arrayTerapiaOcupacional[0].mainDescription}</p>
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
