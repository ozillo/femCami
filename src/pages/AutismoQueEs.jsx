import React, { useEffect } from "react";
import { autismoQueEs } from "../data/arrayAutismo";
import AcordeonTypeColor from "../components/AcordeonTypeColor/AcordeonTypeColor";
import "./Autismo.css";
import { initialScrollTop } from "../utils/controlScroll";
import Postits from "../components/Postits/Postits";

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
            <section className="section-principal-page-container">
                <div className="div-page-main-quees">
                    <div className="div-align-svg-p">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#B8DAFF" d="M39.4,23.6C25.3,47.1,-29.5,47.9,-42.9,24.8C-56.2,1.8,-28.1,-45.1,-0.7,-45.5C26.7,-45.9,53.4,0.2,39.4,23.6Z" transform="translate(100 100)" />
                </svg>
                <p>{autismoQueEs[0].mainDescription}</p>
                    </div>
              
                <img src={autismoQueEs[0].icon} alt="iconQueEs" />
                </div>
                <div className="div-page-main-acordeon">
                    <Postits
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
                            <div className="div-all-groups">
                                <h2 className="title-autisme">{elem.titulo}</h2>
                                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#B8DAFF" d="M33.1,-32.9C46.1,-20,62.3,-10,64.8,2.5C67.4,15.1,56.3,30.1,43.2,38.2C30.1,46.3,15.1,47.4,0.8,46.6C-13.5,45.8,-26.9,43.1,-37.6,35C-48.3,26.9,-56.3,13.5,-60.8,-4.5C-65.4,-22.5,-66.5,-45.1,-55.8,-58C-45.1,-70.9,-22.5,-74.3,-6.3,-68C10,-61.7,20,-45.9,33.1,-32.9Z" transform="translate(100 100)" />
                                </svg>
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
