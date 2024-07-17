import React, { useEffect } from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import AcordeonTypeColor from "../components/AcordeonTypeColor/AcordeonTypeColor";
import { arrayLogopedia } from "../data/arrayServeis";
import { initialScrollTop } from "../utils/controlScroll";
import Postits from "../components/Postits/Postits";
import BackgroundTitle from "../components/BackgroundTitle/BackgroundTitle";
import DividerMain from "../components/DividerMain/DividerMain";

const ServeisLogopedia = () => {
    useEffect(() => {
        initialScrollTop();
    }, []);
    return (
        <>
            {/* <section className="section-title-description-page">
                <h1 className="title-page">Logopedia</h1>
            </section> */}
            <BackgroundTitle
                title={"Logopèdia"}
                background={`background-linear`}
                color={`blue`}
            />
            <DividerMain />
            <section className="section-principal-page-container">
                <div className="div-page-main-quees">
                    <div className="div-align-img-p">
                        <p>{arrayLogopedia[0].mainDescription}</p>
                    </div>
                    <img src={arrayLogopedia[0].icon} alt="iconQueEs" />
                </div>
                <div className="div-page-main-postit">
                    <Postits arrayData={arrayLogopedia[0].content} />
                </div>
            </section>
            <section className="section-principal-page-more-info">
                {arrayLogopedia[0].content.map((elem, index) => {
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
            </section>
        </>
    );
};

export default ServeisLogopedia;
