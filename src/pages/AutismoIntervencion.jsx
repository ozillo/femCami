import React, { useEffect } from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import { intervencionPsicoeducativa } from "../data/arrayAutismo";
import AcordeonTypeColor from "../components/AcordeonTypeColor/AcordeonTypeColor";
import "./Autismo.css";
import { initialScrollTop } from "../utils/controlScroll";

const AutismoIntervencion = () => {
    useEffect(() => {
        initialScrollTop();
    }, []);
    return (
        <>
            <BannerTitulo />
            <section className="section-principal-page-description-acordeon">
                <div className="div-page-main-description">
                    <h2>Intervenció Psicoeducativa</h2>
                    <p>{intervencionPsicoeducativa[0].mainDescription}</p>
                    <img
                        src={intervencionPsicoeducativa[0].icon}
                        alt="iconQueEs"
                    />
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
