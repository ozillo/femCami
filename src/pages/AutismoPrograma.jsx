import React from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import { habilidadesSociales } from "../data/arrayAutismo";
import AcordeonTypeColor from "../components/AcordeonTypeColor/AcordeonTypeColor";
import "./Autismo.css";
import DividerEslogan from "../components/DividerEslogan/DividerEslogan";
import DividerMain from "../components/DividerMain/DividerMain";
const AutismoPrograma = () => {
    return (
        <>
            <section className="section-title-description-page">
                <h1>Programa d'habilitats socials</h1>
            </section>
            <DividerMain />
            <section className="section-principal-page-description-acordeon">
                <div className="div-page-main-description">
                    <p className="p-page-main-description">
                        {habilidadesSociales[0].mainDescription}
                    </p>
                    <AcordeonTypeColor
                        optionType={"blue"}
                        arrayData={habilidadesSociales[0].content}
                    />
                </div>
            </section>
            <section className="section-page-main-divider-images">
                <DividerMain />
                <div className="div-divider-images">
                    <img
                        src={habilidadesSociales[0].icon[0]}
                        alt="iconIntervencio"
                        className="img-page-main-description"
                    />
                    <img
                        src={habilidadesSociales[0].icon[1]}
                        alt="iconIntervencio"
                        className="img-page-main-description"
                    />
                    <img
                        src={habilidadesSociales[0].icon[2]}
                        alt="iconIntervencio"
                        className="img-page-main-description"
                    />
                </div>
            </section>
            <section className="section-principal-page-more-info">
                {habilidadesSociales[0].content.map((elem, index) => {
                    return (
                        <div
                            className="div-principal-page-more-info"
                            key={index}
                        >
                            <div>
                                <h2>{elem.titulo}</h2>
                                {elem.contenido.length >= 1 ? (
                                    elem.contenido.map((element, index) => (
                                        <p key={index}>{element}</p>
                                    ))
                                ) : (
                                    <p>{elem.contenido}</p>
                                )}
                            </div>
                            <img src="" alt="" />
                        </div>
                    );
                })}
            </section>
        </>
    );
};

export default AutismoPrograma;
