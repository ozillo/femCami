import React, { useEffect } from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import { habilidadesSociales } from "../data/arrayAutismo";
import AcordeonTypeColor from "../components/AcordeonTypeColor/AcordeonTypeColor";
import "./Autismo.css";
import DividerEslogan from "../components/DividerEslogan/DividerEslogan";
import DividerMain from "../components/DividerMain/DividerMain";
import { initialScrollTop } from "../utils/controlScroll";
import Postits from "../components/Postits/Postits";
import BackgroundTitle  from "../components/BackgroundTitle/BackgroundTitle";



const AutismoPrograma = () => {
    const title= habilidadesSociales[0].title;
    useEffect(() => {
        initialScrollTop();
    }, []);
    return (
        <>
        {/* <section className="section-title-description-page">
            <h1 className="title-page">programa d'habilitats socials</h1>
        </section> */}
        <BackgroundTitle title={title} background={`background-linear-green`} color={`green`}/>
       <DividerMain/>
        <section className="section-principal-page-container">
            <div className="div-page-main-quees">
            <div className="div-align-img-p"> 
            <p>{habilidadesSociales[0].mainDescription}</p>
            </div>
          
            <img src={habilidadesSociales[0].icon} alt="iconQueEs" />
            </div>
            <div className="div-page-main-postit">
                <Postits
                    arrayData={habilidadesSociales[0].content}
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
                        <div className="div-all-groups">
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

export default AutismoPrograma;
