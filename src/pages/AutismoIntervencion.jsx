import React, { useEffect } from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import { intervencionPsicoeducativa } from "../data/arrayAutismo";
import AcordeonTypeColor from "../components/AcordeonTypeColor/AcordeonTypeColor";
import "./Autismo.css";
import { initialScrollTop } from "../utils/controlScroll";
import Postits from "../components/Postits/Postits";

const AutismoIntervencion = () => {
    useEffect(() => {
        initialScrollTop();
    }, []);
    return (
        <>
            <section className="section-title-description-page">
                <h1 className="title-page">Intervenció Psicoeducativa</h1>
            </section>
            <section className="section-principal-page-container">
                <div className="div-page-main-quees">
                    <div className="div-align-img-p">
                        <img
                            src={intervencionPsicoeducativa[0].background}
                            alt="Background"
                            className="img-back-p"
                        />
                        <p>{intervencionPsicoeducativa[0].mainDescription}</p>
                    </div>

                    <img
                        src={intervencionPsicoeducativa[0].icon}
                        alt="iconQueEs"
                    />
                </div>
                <div className="div-page-main-postit">
                    <Postits
                        arrayData={intervencionPsicoeducativa[0].content}
                    />
                </div>
            </section>
            <section className="section-principal-page-more-info">
                {intervencionPsicoeducativa[0].content.map((elem, index) => {
                    return (
                        <div
                            className="div-principal-page-more-info"
                            key={index}
                        >
                            <div className="div-all-groups">
                                <h2 className="title-autisme">{elem.titulo}</h2>
                                <img
                                    src={
                                        intervencionPsicoeducativa[0].background
                                    }
                                    alt="Background"
                                    className="img-sections"
                                />
                                {elem.contenido.length >= 1 ? (
                                    elem.contenido.map((element, index) => (
                                        <p key={index}>{element}</p>
                                    ))
                                ) : (
                                    <p>{elem.contenido}</p>
                                )}
                            </div>
                            <img
                                src="https://res.cloudinary.com/dtfugozix/image/upload/v1702255755/Fem%20Cami/Vectores/logopedia_xhkedr.png"
                                alt=""
                                className="img-autisme"
                            />
                        </div>
                    );
                })}
            </section>
        </>
    );
};

export default AutismoIntervencion;
