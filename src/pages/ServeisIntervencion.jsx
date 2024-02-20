import React, { useEffect } from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import "./Autismo.css";
import { intervencionEducativa } from "../data/arrayServeis";
import { initialScrollTop } from "../utils/controlScroll";
import Postits from "../components/Postits/Postits";

const ServeisIntervencion = () => {
    useEffect(() => {
        initialScrollTop();
    }, []);

    return (
        <>
            <section className="section-title-description-page">
                <h1 className="title-page">Intervenció educativa</h1>
            </section>
            <section className="section-principal-page-container">
                <div className="div-page-main-quees">
                    <div className="div-align-img-p">
                        <img
                            src={intervencionEducativa[0].background}
                            alt="Background"
                            className="img-back-p"
                        />
                        <p>{intervencionEducativa[0].mainDescription}</p>
                    </div>

                    <img src={intervencionEducativa[0].icon} alt="iconQueEs" />
                </div>
                <div className="div-page-main-postit">
                    <Postits arrayData={intervencionEducativa[0].content} />
                </div>
            </section>
            <section className="section-principal-page-more-info">
                {intervencionEducativa[0].content.map((elem, index) => {
                    return (
                        <div
                            className="div-principal-page-more-info"
                            key={index}
                        >
                            <div className="div-all-groups">
                                <h2 className="title-autisme">{elem.titulo}</h2>
                                <img
                                    src={intervencionEducativa[0].background}
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

export default ServeisIntervencion;
