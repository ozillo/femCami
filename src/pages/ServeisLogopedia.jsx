import React, { useEffect } from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import AcordeonTypeColor from "../components/AcordeonTypeColor/AcordeonTypeColor";
import { arrayLogopedia } from "../data/arrayServeis";
import { initialScrollTop } from "../utils/controlScroll";


const ServeisLogopedia = () => {
    useEffect(() => {
        initialScrollTop();
    }, []);
    return (
        <>
             <section className="section-title-services-page">
                <h1 className="title-page">Logopedia</h1>
            </section>
            <section className="section-principal-page-description-acordeon">
                <div className="div-page-main-description">
                   
                    <p>{arrayLogopedia[0].mainDescription}</p>
                    <img src={arrayLogopedia[0].icon} alt="iconQueEs" />
                </div>
                <div className="div-page-main-acordeon">
                    <AcordeonTypeColor
                        optionType={"green"}
                        arrayData={arrayLogopedia[0].content}
                    />
                </div>
            </section>
        </>
    );
};

export default ServeisLogopedia;
