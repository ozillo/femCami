import React, { useEffect } from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import "./Autismo.css";
import { intervencionEducativa } from "../data/arrayServeis";
import { initialScrollTop } from "../utils/controlScroll";
import Postits from "../components/Postits/Postits";
import BackgroundTitle from "../components/BackgroundTitle/BackgroundTitle";
import DividerMain from "../components/DividerMain/DividerMain";

const ServeisIntervencion = () => {
    useEffect(() => {
        initialScrollTop();
    }, []);

    return (
        <>
            {/* <section className="section-title-description-page">
                <h1 className="title-page">Intervenció educativa</h1>
            </section> */}
            <BackgroundTitle
                title={"Intervenció educativa"}
                background={`background-linear`}
                color={`blue`}
            />
            <DividerMain />
            <section className="section-principal-page-container">
                <div className="div-page-main-quees">
                    <div className="div-align-img-p">
                        <p>{intervencionEducativa[0].mainDescription}</p>
                    </div>

                    <img src={intervencionEducativa[0].icon} alt="iconQueEs" />
                </div>
                {/* <div className="div-page-main-postit">
                    <Postits arrayData={intervencionEducativa[0].content} />
                </div> */}
            </section>
            {/* <section className="section-principal-page-more-info">
                {intervencionEducativa[0].content.map((elem, index) => {
                    return (
                        <div
                            className="div-principal-page-more-info"
                            key={index}
                        >
                            <div className="div-all-groups">
                                <h2 className="title-serveis">{elem.titulo}</h2>

                                {elem.contenido.length >= 1 ? (
                                    elem.contenido.map((element, index) => (
                                        <p key={index}>{element}</p>
                                    ))
                                ) : (
                                    <p>{elem.contenido}</p>
                                )}
                            </div>
                            <img
                                src={elem.image}
                                alt={`intervenciò psicoeducativa image ${elem.titulo}`}
                                className="img-autisme"
                            />
                        </div>
                    );
                })}
            </section> */}
        </>
    );
};

export default ServeisIntervencion;
