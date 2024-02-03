import React from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import "./Autismo.css";
import { intervencionEducativa } from "../data/arrayServeis";

const ServeisIntervencion = () => {
    return (
        <>
            <BannerTitulo />
            <section className="section-principal-page-description-acordeon">
                <div className="div-page-main-description">
                    <h2>Intervenció Psicoeducativa</h2>
                    <p>{intervencionEducativa[0].mainDescription}</p>
                </div>
                <div className="div-page-main-acordeon">
                    <AcordeonTypeColor
                        optionType={"blue"}
                        arrayData={intervencionEducativa[0].content}
                    />
                </div>
            </section>
        </>
    );
};

export default ServeisIntervencion;
