import React from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import { habilidadesSociales } from "../data/arrayAutismo";
import AcordeonTypeColor from "../components/AcordeonTypeColor/AcordeonTypeColor";
import "./Autismo.css";
const AutismoPrograma = () => {
    return (
        <>
            <BannerTitulo />
            <section className="section-principal-page-description-acordeon">
                <div className="div-page-main-description">
                    <h2>Programa d'habilitats socials</h2>
                    <p>{habilidadesSociales[0].mainDescription}</p>
                    <img src={habilidadesSociales[0].icon} alt="iconIntervencio" />
                </div>
                <div className="div-page-main-acordeon">
                    <AcordeonTypeColor
                        optionType={"blue"}
                        arrayData={habilidadesSociales[0].content}
                    />
                </div>
            </section>
        </>
    );
};

export default AutismoPrograma;
