import React, { useEffect } from "react";
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
                <h1 className="title-page">Què és l'autisme?</h1>
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
            <section className="section-principal-page-more-info">
                {autismoQueEs[0].content.map((elem, index) => {
                    return (
                        <div
                            className="div-principal-page-more-info"
                            key={index}
                        >
                            <div>
                                <h2 className="title-autisme">{elem.titulo}</h2>
                                {elem.contenido.length >= 1 ? (
                                    elem.contenido.map((element, index) => (
                                        <p key={index}>{element}</p>
                                    ))
                                ) : (
                                    <p>{elem.contenido}</p>
                                )}
                            </div>
                            <img src="https://res.cloudinary.com/dtfugozix/image/upload/v1702255755/Fem%20Cami/Vectores/logopedia_xhkedr.png"
                             alt="" 
                             className="img-autisme"/>
                        </div>
                    );
                })}
            </section>
      
            
        </>
    );
};

export default AutismoQueEs;
