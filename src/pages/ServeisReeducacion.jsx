import React, { useEffect } from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import AcordeonTypeColor from "../components/AcordeonTypeColor/AcordeonTypeColor";
import { reeducacionPedagogica } from "../data/arrayServeis";
import "./Autismo.css";
import { initialScrollTop } from "../utils/controlScroll";

const ServeisReeducacion = () => {
    useEffect(() => {
        initialScrollTop();
    }, []);
    return (
        <>
            <section className="section-title-services-page">
                <h1 className="title-page">Reeducació pedagógica</h1>
            </section>
            <section className="section-principal-page-description-acordeon">
                <div className="div-page-main-description">
                    <p>{reeducacionPedagogica[0].mainDescription}</p>
                    <img src={reeducacionPedagogica[0].icon} alt="iconQueEs" />
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
