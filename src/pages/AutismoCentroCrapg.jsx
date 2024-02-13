import React, { useEffect } from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import AcordeonTypeColor from "../components/AcordeonTypeColor/AcordeonTypeColor";
import "./Autismo.css";
import { centroCrapg } from "../data/arrayAutismo";
import { initialScrollTop } from "../utils/controlScroll";
import Postits from "../components/Postits/Postits";
import { Board } from "../components/Board/Board";



const AutismoCentroCrapg = () => {
    useEffect(() => {
        initialScrollTop();
    }, []);
    return (
        <>
            <section className="section-title-description-page">
            <h1 className="title-page">Centre de recursos d'autisme CRAPG</h1>
            </section>
            <section className="section-principal-page-description-acordeon">
                <div className="div-page-main-description">
                    <h2>Centre de recurses de autisme CRAPG</h2>
                    <p>{centroCrapg[0].mainDescription}</p>
                    <img src={centroCrapg[0].icon} alt="iconQueEs" />
                </div>
                <div className="div-page-main-acordeon">
                    <Postits
                        arrayData={centroCrapg[0].content}
                    />
                </div>
            </section>
            <Board/>
        </>
    );
};

export default AutismoCentroCrapg;
