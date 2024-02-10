import React, { useEffect } from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import { autismoQueEs } from "../data/arrayAutismo";
import AcordeonTypeColor from "../components/AcordeonTypeColor/AcordeonTypeColor";
import "./Autismo.css";
import { initialScrollTop } from "../utils/controlScroll";


const AutismoQueEs = () => {
    useEffect(() => {
        initialScrollTop();
    }, []);
    console.log(autismoQueEs[0].content);
    return (
        <>
            <section className="section-title-description-page">
                <h1 className="title-page">Qué es l'autisme?</h1>
            </section>
            <section className="section-principal-page-description-acordeon">
                <div className="div-page-main-description">
                    <p>{autismoQueEs[0].mainDescription}</p>
                    <img src={autismoQueEs[0].icon} alt="iconQueEs" />
                </div>
                <div className="div-page-main-acordeon">
                    <AcordeonTypeColor 
                        optionType={"blue"}
                        arrayData={autismoQueEs[0].content}
                    />
                </div>
            </section>
      
            
        </>
    );
};

export default AutismoQueEs;
