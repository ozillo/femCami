import React from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import { intervencionPsicoeducativa } from "../data/arrayAutismo";
import AcordeonTypeColor from "../components/AcordeonTypeColor/AcordeonTypeColor";
import "./Autismo.css";
const AutismoIntervencion = () => {
    return (
        <>
            <BannerTitulo />
            <section className="section-principal-page-description-acordeon">
                <div className="div-page-main-description">
                    <h2>Intervenció Psicoeducativa</h2>
                    <p>{intervencionPsicoeducativa[0].mainDescription}</p>
                </div>
                <div className="div-page-main-acordeon">
                    <AcordeonTypeColor
                        optionType={"blue"}
                        arrayData={intervencionPsicoeducativa[0].content}
                    />
                </div>
            </section>
        </>
    );
};

export default AutismoIntervencion;
