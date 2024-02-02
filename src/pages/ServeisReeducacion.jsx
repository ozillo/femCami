import React from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import AcordeonTypeColor from "../components/AcordeonTypeColor/AcordeonTypeColor";
import { reeducacionPedagogica } from "../data/arrayServeis";
import "./Autismo.css";
const ServeisReeducacion = () => {
    return (
        <>
            <BannerTitulo />
            <section className="section-principal-page-description-acordeon">
                <div className="div-page-main-description">
                    <h2>Reeducació pedagógica</h2>
                    <p>{reeducacionPedagogica[0].mainDescription}</p>
                </div>
                <div className="div-page-main-acordeon">
                    <AcordeonTypeColor
                        optionType={"green"}
                        arrayData={reeducacionPedagogica[0].content}
                    />
                </div>
            </section>
        </>
    );
};

export default ServeisReeducacion;
