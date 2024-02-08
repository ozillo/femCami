import React, { useEffect } from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import AcordeonTypeColor from "../components/AcordeonTypeColor/AcordeonTypeColor";
import "./Autismo.css";
import { centroCrapg } from "../data/arrayAutismo";
import { initialScrollTop } from "../utils/controlScroll";

const AutismoCentroCrapg = () => {
    useEffect(() => {
        initialScrollTop();
    }, []);
    return (
        <>
            <BannerTitulo />
            <section className="section-principal-page-description-acordeon">
                <div className="div-page-main-description">
                    <h2>Centre de recurses de autisme CRAPG</h2>
                    <p>{centroCrapg[0].mainDescription}</p>
                    <img src={centroCrapg[0].icon} alt="iconQueEs" />
                </div>
                <div className="div-page-main-acordeon">
                    <AcordeonTypeColor
                        optionType={"blue"}
                        arrayData={centroCrapg[0].content}
                    />
                </div>
            </section>
        </>
    );
};

export default AutismoCentroCrapg;
